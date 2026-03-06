# UI Patterns

## Mutation-with-Callback Pattern

Used by all domain sub-components that perform GraphQL mutations on the detail
view (e.g. `PersonRelationships`, `PersonLabels`).

### Problem

Apollo Client's `refetchQueries` option on `useMutation` requires a
`DocumentNode`. When the same document is used in multiple places with
different variables (e.g. `GetPersonDetail` keyed by `$id`), passing the bare
document without variables causes the refetch to run without the correct
variables, returning wrong or empty data.

Additionally, `dataMasking: true` in Apollo Client means fragment fields are
only accessible to the component that owns the fragment — parent components
cannot read fragment-masked fields from a child's fragment spread.

### Solution

The sub-component owns the mutation and its loading/error state. The **route**
(page component) owns the data-refresh logic. The two are connected via plain
callback props: `onDelete` and `onAdd`.

```
Route (owns query + refetch)
  └── SubComponent (owns mutation)
        ├── onDelete(id) → called after successful delete mutation
        └── onAdd(...args) → called after successful create/attach mutation
```

The route passes `() => refetch()` for both callbacks, which re-executes the
query with the correct variables already bound in the `useQuery` call.

### Structure of a Sub-Component

Each sub-component follows this layout:

```
component/
  fragment   — GraphQL fragment on the parent type (e.g. Person)
  mutations  — CREATE / DELETE mutations (no refetchQueries)
  props type — { entity, allOptions, onDelete, onAdd, showAddButton? }
  ItemRow    — renders one item + calls mutation then onDelete(id)
  AddForm/Picker — calls mutation then onAdd(...args) + onClose()
  MainExport — composes rows and add-form, threads callbacks down
```

### Props Contract

```ts
interface SubComponentProps {
  // The parent entity (typed from the GraphQL fragment)
  entity: Entity_SubFragment;
  // Available options for the add form/picker
  allOptions: Array<Option>;
  // Called by the component after a delete mutation succeeds
  onDelete: (id: string) => void;
  // Called by the component after a create/attach mutation succeeds
  onAdd: (...args) => void;
  // Whether to render the inline add trigger
  showAddButton?: boolean;
}
```

### Route-Side Wiring

```tsx
// In the route component:
const { refetch } = useQuery(GET_ENTITY_DETAIL, { variables: { id } });

const handleDeleteFoo = () => refetch();
const handleAddFoo    = () => refetch();

// In JSX:
<FooSubComponent
  entity={entity}
  allOptions={allOptions}
  onDelete={handleDeleteFoo}
  onAdd={handleAddFoo}
  showAddButton
/>
```

### Key Rules

- Sub-components **never** call `refetchQueries` on their mutations.
- Sub-components **never** receive a `DocumentNode` or query variables.
- The route is the single source of truth for when data is re-fetched.
- Fragment fields used by sub-components must be **inlined** in the route's
  query (not only in a fragment spread) when `dataMasking: true` is active,
  because masked fields are not accessible via the raw query result.

### Examples

| Component | File |
| --- | --- |
| Relationships | `app/src/components/domain/person/relationships.tsx` |
| Labels | `app/src/components/domain/person/labels.tsx` |
| Call site | `app/src/routes/persons/$id.tsx` |
