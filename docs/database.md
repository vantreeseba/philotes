# Database Schema Patterns

This document describes the conventions and patterns used in the Philotes
database layer so that new tables can be created consistently.

## Technology

- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) with the `drizzle-orm/pg-core` column helpers
- **Database**: PGlite (embedded Postgres via WASM) -- no external server required
- **Schema file**: `db/src/schema.ts`

## Table Definition Pattern

Every table is defined with `pgTable` and exported as a named `const`. Follow
this template when adding a new table:

```ts
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const things = pgTable("things", {
  // 1. Primary key -- always a random UUID
  id: uuid("id").primaryKey().defaultRandom(),

  // 2. Domain columns
  name: text("name").notNull(),

  // 3. Timestamps (include on any entity that tracks creation/modification)
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),

  // 4. Foreign keys (if applicable)
  ownerId: uuid("owner_id").references(() => owners.id),
});
```

### Column ordering convention

1. `id` (primary key) -- always first
2. Domain/business columns
3. `createdAt` / `updatedAt` timestamps
4. Foreign key columns

## Column Type Cheat-Sheet

| Use case            | Drizzle helper                                   | SQL column              |
| ------------------- | ------------------------------------------------ | ----------------------- |
| Primary key (UUID)  | `uuid("id").primaryKey().defaultRandom()`         | `uuid PRIMARY KEY DEFAULT gen_random_uuid()` |
| Short/medium text   | `text("col_name")`                                | `text`                  |
| Integer             | `integer("col_name")`                             | `integer`               |
| Timestamp           | `timestamp("col_name", { withTimezone: true })`   | `timestamptz`           |
| Foreign key (UUID)  | `uuid("col_name").references(() => other.id)`     | `uuid REFERENCES other(id)` |
| Foreign key (int)   | `integer("col_name").references(() => other.id)`  | `integer REFERENCES other(id)` |

## Naming Conventions

| Item              | Convention        | Example                      |
| ----------------- | ----------------- | ---------------------------- |
| Table variable    | `camelCase` plural | `contacts`, `meetingNotes`   |
| SQL table name    | `snake_case` plural | `"contacts"`, `"meeting_notes"` |
| Column variable   | `camelCase`        | `firstName`, `createdAt`     |
| SQL column name   | `snake_case`       | `"first_name"`, `"created_at"` |

Drizzle maps between the two automatically when you pass the SQL name as the
first argument: `firstName: text("first_name")`.

## Constraints

- **Primary key**: every table uses `uuid("id").primaryKey().defaultRandom()`.
  Do **not** use `serial()` / auto-increment for new tables.
- **Not-null**: mark required columns with `.notNull()`. Nullable columns
  should be the exception and left without `.notNull()`.
- **Unique**: use `.unique()` on columns that must be unique
  (e.g. `email: text("email").notNull().unique()`).
- **Foreign keys**: use `.references(() => otherTable.id)`. Always reference
  the target table's `id` column. The foreign key column type must match the
  referenced column type (uuid -> uuid, integer -> integer).

## Timestamps

Include `createdAt` and `updatedAt` on any entity table that benefits from
audit information. Both should:

- Use `timestamp` with `{ withTimezone: true }`
- Be `.notNull()`
- Default to `.defaultNow()`

Lookup tables or simple join tables may omit timestamps.

## Type Exports

For every table, export two inferred types immediately below the table
definition:

```ts
export type Thing = typeof things.$inferSelect;
export type NewThing = typeof things.$inferInsert;
```

- `$inferSelect` -- the shape returned when reading rows (all columns present).
- `$inferInsert` -- the shape for inserting rows (columns with defaults are
  optional).

These types are re-exported from `db/src/index.ts` via `export * from "./schema.ts"`
so consumers (e.g. the server package) can import them as:

```ts
import type { Thing, NewThing } from "@philotes/db";
```

## Foreign Keys and Relationships

Foreign key columns follow the pattern `<related_entity>Id` in camelCase and
`<related_entity>_id` in SQL:

```ts
noteId: integer("note_id").references(() => notes.id),
ownerId: uuid("owner_id").references(() => owners.id),
```

The foreign key column type must match the referenced primary key type. Since
new tables use `uuid` for their primary key, new foreign keys referencing them
should also be `uuid`.

## Complete Example: Adding a New Table

Below is a full example of adding an `organizations` table that references
`contacts`:

```ts
// In db/src/schema.ts

export const organizations = pgTable("organizations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  website: text("website"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Organization = typeof organizations.$inferSelect;
export type NewOrganization = typeof organizations.$inferInsert;
```

After adding the table:

1. Run `npm run db:generate` to create a migration file.
2. Run `npm run db:migrate` to apply it (or `npm run db:push` during dev).
3. The types are automatically available to the server via
   `import type { Organization } from "@philotes/db";`.

## DB Connection

The database connection is initialized in `db/src/index.ts`. It:

- Creates a `PGlite` client pointing at `DATABASE_URL` env var (falls back to
  `../pgdata`)
- Wraps it with `drizzle(client, { schema })` so the full schema is available
  for relational queries
- Exports `db` (the Drizzle instance), `DB` (its type), and all schema
  exports

Consumers in the server package import from `@philotes/db`:

```ts
import { db, schema } from "@philotes/db";
import type { DB } from "@philotes/db";
```
