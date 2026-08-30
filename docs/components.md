# Components

## Overview

The component tree is split into four layers:

| Layer | Location | Purpose |
| --- | --- | --- |
| **UI primitives** | `app/src/components/ui/` | shadcn/ui components — no app logic |
| **Domain components** | `app/src/components/domain/` | Feature-specific forms and lists |
| **Layouts** | `app/src/components/layouts/` | Structural page wrappers |
| **Settings** | `app/src/components/settings/` | Account settings panels |

Routes live in `app/app/` and are **not** components in this sense — a file
placed there becomes a URL. See [`frontend.md`](./frontend.md#routing).

---

## UI Primitives (`components/ui/`)

Sourced from [shadcn/ui](https://ui.shadcn.com/). Do **not** add application
logic here. Extend or compose them in `components/domain/` instead.

| Component | File | Notes |
| --- | --- | --- |
| `AlertDialog` + parts | `alert-dialog.tsx` | Destructive-action confirmation |
| `Avatar` | `avatar.tsx` | Person avatar with initials fallback |
| `Button` | `button.tsx` | Variants: `default`, `outline`, `ghost`, `icon` |
| `Card`, `CardHeader`, `CardContent`, … | `card.tsx` | Composable card container |
| `Dialog` + parts | `dialog.tsx` | Modal — every form goes in one |
| `FieldGroup` | `field.tsx` | Wraps a group of form fields |
| `TextField`, `FormError`, `fieldContext`, `formContext` | `form-field.tsx` | TanStack Form integration |
| `Input` | `input.tsx` | Base text input |
| `Label` | `label.tsx` | Form label (wraps `<label>`) |
| `LabelChip` | `label-chip.tsx` | Colored pill for a label/tag |
| `Spinner` | `spinner.tsx` | Inline loading indicator |
| `TagMultiSelect` | `tag-multi-select.tsx` | Multi-select over the caller's labels |
| `Tooltip` + parts | `tooltip.tsx` | Hover explanation, incl. for disabled buttons |

All primitives use `cn()` from `@/lib/utils` for conditional class merging and
follow the shadcn `forwardRef` pattern.

---

## Domain Components (`components/domain/`)

One directory per entity — currently `address/`, `contact-info/`, `dashboard/`,
`label/`, `person/`, `task/`. The directory listing is the inventory; what
follows documents the conventions, using two representative components.

"Label" and "tag" are the same thing in this app. `labels` is the table, and
`label/` is the only place its components live — do not reintroduce a parallel
`tag/` directory.

### `PersonForm` (`domain/person/form.tsx`)

Creates and edits a person. TanStack Form + Zod.

```ts
interface PersonFormProps {
  availableLabels: Label_ListFragment[];
  initialValues?: PersonFormInitialValues;
  submitLabel?: string;
  onSubmit: (value: PersonFormValue) => Promise<void>;
  onCancel: () => void;
}

interface PersonFormValue {
  person: PersonFormPerson;   // firstName, lastName, email, contactFrequency, howWeMet, firstMetDate
  labelIds: string[];
}
```

Passing `initialValues` turns it into an edit form; the same component serves
both. The last three person fields are per-user context stored on
`user_persons`, not columns of the shared `persons` row — see
[`graphql.md`](./graphql.md).

### `PersonList` + `PersonRow` (`domain/person/list.tsx`)

`PersonList` renders search, sort, an "Add Person" button and a list of
`PersonRow` cards inside a `ListLayout`.

It takes **plain typed props** — `PersonRowData`, `PersonContactInfo` — rather
than a fragment. This is the default for new components: the route owns the
query, the component states the shape it needs.

The alternative is a cache fragment, used by `domain/label/list.tsx`:

```ts
const LABEL_LIST = graphql(`
  fragment Label_List on Label {
    id
    color
    label
  }
`);

const { data: label, complete } = useFragment({ fragment: LABEL_LIST, from });
```

Both are valid. Reach for `useFragment` only when a row genuinely needs to
re-render from cache writes it did not trigger.

---

## Layout Preference

**Prefer using a layout component whenever it makes sense.** If a component
renders a header/body structure (e.g. a title with an action button above a
list of items), reach for `ListLayout` instead of hand-rolling
`<div className="space-y-2">` / `<div className="flex items-center
justify-between">` inline. Consistent use of layout components ensures visual
and structural uniformity across all list pages and detail-view sections, and
makes future changes (spacing, alignment) a single-point edit.

---

## Layouts (`components/layouts/`)

### `ListLayout` (`list.tsx`)

```ts
interface ListLayoutProps {
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  className?: string;
  spacing?: boolean;   // default true
}
```

The standard header/body/footer stack for every list page and every list
section on a detail page.

### `Header` and `BottomNav` (`header.tsx`)

The app chrome, rendered once by `app/app/(app)/_layout.tsx` — not by
individual routes.

---

## Settings (`components/settings/`)

`ApiKeyManager` lists the caller's API keys and revokes them;
`CreateApiKeyDialog` mints one and shows the plaintext key exactly once. See
[`server.md`](./server.md) for the API-key model.

---

## Add Button Placement in List Sections

Every list section on a detail page (Tags, Important Dates, Notes, Relationships,
etc.) must follow this layout pattern:

```tsx
<Card>
  <CardContent className="p-4 space-y-3">
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-base">Section Title</h2>
      <Button size="sm" variant="outline" onClick={() => setDialogOpen(true)}>
        <SomeIcon className="mr-1.5 h-4 w-4" />
        Add Item
      </Button>
    </div>
    <SectionList ... createOpen={dialogOpen} onCreateOpenChange={setDialogOpen} />
  </CardContent>
</Card>
```

**Rules:**

- The "Add" button lives in the **card header row**, right-aligned, never
  inside the list component itself.
- Dialog open state (`dialogOpen`, `setDialogOpen`) is owned by the **page**
  (route component), not the list component.
- The list component receives `createOpen: boolean` and
  `onCreateOpenChange: (open: boolean) => void` as props and renders the
  `<Dialog>` internally — keeping the Dialog markup co-located with the form
  it opens.
- If all items are already added (e.g. all tags attached), wrap the `Button`
  in a `<Tooltip>` and disable it, explaining why.

This ensures consistent UX: the add button is always in the same position
relative to the section title across all list sections.

---

## Adding a New Domain Component

1. Create a directory under `app/src/components/domain/<entity>/`, named in
   kebab-case, as is every file in it.
2. Add `form.tsx` — `createFormHook`, a Zod schema, `useAppForm`. Render it
   inside a `Dialog`; see [`frontend.md`](./frontend.md#form-presentation-rule).
3. Add `list.tsx` — a `ListLayout` and a row component taking typed props.
4. Define the GraphQL operations in the route that uses it, under
   `app/app/(app)/<entity>/index.tsx`.
5. Run `npm run codegen:app` to generate types.
