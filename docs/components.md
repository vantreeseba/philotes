# Components

## Overview

The component tree is split into three layers:

| Layer | Location | Purpose |
| --- | --- | --- |
| **UI primitives** | `app/src/components/ui/` | shadcn/ui components — no app logic |
| **Domain components** | `app/src/components/domain/` | Feature-specific forms and lists |
| **Layouts** | `app/src/components/layouts/` | Structural page wrappers |

---

## UI Primitives (`components/ui/`)

Sourced from [shadcn/ui](https://ui.shadcn.com/). Do **not** add application
logic here. Extend or compose them in `components/domain/` instead.

| Component | File | Notes |
| --- | --- | --- |
| `Button` | `button.tsx` | Variants: `default`, `outline`, `ghost`, `icon` |
| `Card`, `CardHeader`, `CardContent`, etc. | `card.tsx` | Composable card container |
| `Input` | `input.tsx` | Base text input |
| `Label` | `label.tsx` | Form label (wraps `<label>`) |
| `FieldGroup` | `field.tsx` | Wraps a group of form fields |
| `TextField`, `FormError`, `fieldContext`, `formContext` | `form-field.tsx` | TanStack Form integration |
| `Skeleton` | `skeleton.tsx` | Loading placeholder |
| `Spinner` | `spinner.tsx` | Inline loading indicator |

All primitives use `cn()` from `@/lib/utils` for conditional class merging and
follow the shadcn `forwardRef` pattern.

---

## Domain Components (`components/domain/`)

### Person

Located at `app/src/components/domain/person/`.

#### `PersonForm` (`form.tsx`)

Creates a new person. Uses TanStack Form + Zod validation.

**Props:**

```ts
interface PersonFormProps {
  availableLabels: Label_ListFragment[];
  onSubmit: (value: PersonFormValue) => void;
  onCancel: () => void;
}

interface PersonFormValue {
  person: CreatePersonInput;
  labelIds: string[];
}
```

**Fields:** First Name, Last Name, Email, Birthdate (optional), Labels
(multi-select pill buttons).

**Validation schema:**

```ts
z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  birthdate: z.string(),
})
```

#### `PersonList` + `PersonRow` (`list.tsx`)

`PersonList` renders the page heading, an "Add Person" button, and a grid of
`PersonRow` cards.

`PersonRow` uses `useFragment` with the `Person_List` fragment to read from
the Apollo cache. Displays name, email, birthdate, label badges, and a delete
button.

**Fragment (`Person_List`):**

```graphql
fragment Person_List on Person {
  id
  firstName
  lastName
  email
  birthdate
  createdAt
  updatedAt
  labels { id label color }
  importantDates { id name description date }
}
```

---

### Label

Located at `app/src/components/domain/label/`.

#### `LabelForm` (`form.tsx`)

Creates a new label. Fields: Label (text), Color (color picker).

**Validation:** label required; color must match `/^#[0-9a-fA-F]{6}$/`.

#### `LabelList` + `LabelRow` (`list.tsx`)

Renders a colored swatch, label name, hex value, and delete button per row.
Uses the `Label_List` fragment via `useFragment`.

**Fragment (`Label_List`):**

```graphql
fragment Label_List on Label {
  id
  color
  label
}
```

---

## Layouts (`components/layouts/`)

### `FormListLayout`

```ts
interface FormListLayoutProps {
  form: ReactNode;
  list: ReactNode;
  showForm: boolean;
}
```

Renders `form` above `list` when `showForm` is `true`. All CRUD pages use
this pattern: clicking "Add" sets `showForm = true`; submitting or cancelling
sets it back to `false`.

---

## Adding a New Domain Component

1. Create a directory under `app/src/components/domain/<entity>/`.
2. Add `form.tsx` (uses `createFormHook`, Zod schema, `useAppForm`).
3. Add `list.tsx` (defines a fragment, uses `useFragment` in a row component).
4. Define GraphQL operations co-located in the route file (`routes/<entity>/index.tsx`).
5. Run `npm run codegen:app` to generate types.
