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

1. Create a directory under `app/src/components/domain/<entity>/`.
2. Add `form.tsx` (uses `createFormHook`, Zod schema, `useAppForm`).
3. Add `list.tsx` (defines a fragment, uses `useFragment` in a row component).
4. Define GraphQL operations co-located in the route file (`routes/<entity>/index.tsx`).
5. Run `npm run codegen:app` to generate types.
