# Frontend

## Overview

The frontend is a React 19 app built with **Expo Router**, targeting the web.
Metro bundles it, NativeWind compiles Tailwind, and Apollo Client handles
GraphQL.

Expo is the toolchain, not the target: this app renders DOM elements
(`<div>`, `<main>`, `<button>`) with Tailwind classes. `react-native` is
imported only for `Platform`. **Do not reach for `<View>` / `<Text>`** —
nothing else in the codebase does.

- **Entry point**: `expo-router/entry` (see `app/package.json` `main`)
- **Root layout**: `app/app/_layout.tsx`
- **Dev server**: `http://localhost:3000`
- **GraphQL endpoint**: `${EXPO_PUBLIC_API_URL}/graphql` — unset in dev, so the
  request is same-origin and the API is expected at the app's own host

## Directory Structure

Routes live in `app/app/`. Everything that is not a route lives in `app/src/`.
This split matters: putting a component under `app/app/` turns it into a route.

```
app/
├── app/                        # Expo Router — file-based routes
│   ├── _layout.tsx             # ApolloClient + <Stack>; global CSS imports
│   ├── login.tsx               # /login
│   ├── auth/verify.tsx         # /auth/verify (magic-link landing)
│   └── (app)/                  # Authenticated group — no URL segment
│       ├── _layout.tsx         # Redirects to /login; renders Header + BottomNav
│       ├── index.tsx           # /
│       ├── network.tsx         # /network
│       ├── labels/index.tsx    # /labels
│       ├── settings/index.tsx  # /settings
│       └── persons/
│           ├── index.tsx       # /persons
│           └── [id]/           # /persons/:id
│               ├── _layout.tsx
│               ├── index.tsx
│               ├── timeline.tsx
│               └── dates/[dateId].tsx
└── src/
    ├── __generated__/          # Generated GraphQL types (do not edit)
    │   ├── gql.ts              # graphql() tagged template helper
    │   ├── graphql.ts          # Types for every query/mutation/fragment
    │   └── type-policies.ts    # Scalar type policies for the Apollo cache
    ├── components/
    │   ├── domain/             # Feature components, one directory per entity
    │   ├── layouts/            # header.tsx, list.tsx, section.tsx
    │   ├── settings/           # API key management
    │   └── ui/                 # shadcn/ui primitives (no app logic here)
    ├── hooks/                  # use-dark-mode, use-query-string-state, use-avatar-upload
    ├── lib/                    # auth, utils (cn), date-type-policy, …
    └── index.css               # Tailwind base styles
```

## Routing

File-based via Expo Router:

- A file under `app/app/` becomes a route at its path. Default-export the
  component; there is no route-object export to write.
- `[id].tsx` / `[id]/` is a dynamic segment, read with `useLocalSearchParams()`.
- `_layout.tsx` wraps every route in its directory, rendering `<Slot />` (or
  `<Stack />`) where children go.
- A directory in parentheses — `(app)` — groups routes under a shared layout
  **without** adding a URL segment.
- Navigate with `<Link href="...">` or `useRouter()` from `expo-router`.

There is no generated route tree to keep in sync.

## Auth

`app/app/(app)/_layout.tsx` gates the authenticated area: no token means
`<Redirect href="/login" />`. The token itself is read and written through
`@/lib/auth`.

The root layout's Apollo link chain attaches `Authorization: Bearer <token>`
to every request, and an error link clears the token and sends the browser to
`/login` on an `UNAUTHENTICATED` response.

## Data Fetching

GraphQL operations are co-located in the route or component that uses them.
Define them with `graphql()` so the types are generated:

```ts
import { graphql } from '@/__generated__/gql';

const GET_PERSONS = graphql(`
  query GetPersons($where: PersonFilters, $orderBy: PersonOrderBy) {
    persons(where: $where, orderBy: $orderBy) {
      id
      firstName
      lastName
    }
  }
`);
```

Then use the Apollo hooks:

```ts
const { data, loading, error, refetch } = useQuery(GET_PERSONS, { variables });
const [createPerson] = useMutation(CREATE_PERSON, {
  refetchQueries: [{ query: GET_PERSONS }],
});
```

Always pass `refetchQueries` on mutations that modify lists — except on detail
pages, where the route owns refetching; see
[`patterns.md`](./patterns.md).

Filtering, sorting and pagination are the API's, not the client's: pass `where`
and `orderBy` through to the query rather than filtering an array in the
component. See [`graphql.md`](./graphql.md#filtering).

## Fragments

Fragment masking is **off** (`fragmentMasking: false` in `app/codegen.ts`, and
the client sets no `dataMasking`), so a parent can read every field its query
selected, including through a fragment spread.

`domain/label/list.tsx` uses `useFragment` to read a row from the cache. It is
a valid pattern, not a required one — most components take plain typed props
from the route instead, which is the simpler default for new work:

```ts
export interface PersonRowData {
  id: string;
  firstName: string;
  // …
}
```

## Form Presentation Rule

**All forms must be presented inside a `Dialog`.** Never render a form inline
on a page or expand it in-place. Always open a `Dialog` with a clear title and
a cancel button. This keeps the UI consistent and avoids layout shift.

```tsx
// Correct — form in a Dialog
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="max-w-md">
    <DialogHeader>
      <DialogTitle>Add Note</DialogTitle>
    </DialogHeader>
    <NoteForm onSubmit={handleSubmit} onCancel={() => setOpen(false)} />
  </DialogContent>
</Dialog>

// Wrong — inline form
{showForm && <NoteForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />}
```

## Form Pattern

Forms use TanStack Form with Zod validation:

```ts
const schema = z.object({ name: z.string().min(1, 'Required') });

const form = useAppForm({
  defaultValues: { name: '' },
  validators: { onSubmit: schema },
  onSubmit: async ({ value }) => { /* call mutation */ },
});
```

`useAppForm` is created per feature file via `createFormHook`, wiring in the
field components from `@/components/ui/form-field`.

## Styling

Tailwind CSS v3 through NativeWind, with the shadcn/ui token set. Config is at
`app/tailwind.config.js`; base styles are split between `app/global.css` and
`app/src/index.css`, both imported by the root layout. Use utility classes
directly in JSX, and `cn()` from `@/lib/utils` when merging conditional
classes.

Dark mode is driven by `@/hooks/use-dark-mode`.

## Running & Building

```bash
npm run dev:app        # Expo dev server (port 3000)
npm run build:app      # Static web export → app/dist/
```

## Codegen

After changing any GraphQL query, mutation, or fragment:

```bash
npm run codegen:app    # Regenerates app/src/__generated__/
```

Codegen reads the SDL snapshot at `server/__generated__/schema.graphql`, so if
the server schema changed, run `npm run codegen` (or `codegen:server` first) —
otherwise the client is generated against a stale schema. Never edit
`__generated__/` by hand.
