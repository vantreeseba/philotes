# AGENTS.md — Philotes Personal CRM

## Project Overview

Philotes is an open-source personal CRM built with TypeScript. It uses a monorepo
structure (npm workspaces) with three packages: `app/` (frontend), `server/`
(GraphQL API), and `db/` (database schema and connection).

## Tech Stack

| Layer    | Technology                                        |
| -------- | ------------------------------------------------- |
| Frontend | React 19, Vite, TanStack Router, Apollo Client    |
| UI       | Tailwind CSS, shadcn/ui components, Radix UI      |
| API      | Apollo Server, GraphQL                             |
| Database | Drizzle ORM, PGlite (embedded Postgres)            |
| Testing  | Vitest                                             |
| Linting  | Biome (formatter + linter)                         |
| Runtime  | Node.js 22+, ESM (`"type": "module"` throughout)  |

## Project Structure

```
philotes/
├── app/                     # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/ui/   # shadcn/ui components (Button, Input, Card, etc.)
│   │   ├── lib/             # Utilities (cn(), GraphQL queries/mutations)
│   │   └── routes/          # TanStack Router file-based routes
│   ├── index.html
│   ├── vite.config.ts
│   └── tailwind.config.ts
├── server/                  # GraphQL API (Apollo Server)
│   └── src/
│       ├── index.ts         # Server entry point (port 4000)
│       ├── schema.ts        # GraphQL type definitions
│       ├── resolvers.ts     # Query/Mutation resolvers
│       └── __tests__/       # Server tests
├── db/                      # Database layer (Drizzle ORM)
│   └── src/
│       ├── schema.ts        # Drizzle table definitions
│       └── index.ts         # DB connection factory + exports
├── docs/                    # Documentation for AI agents
│   └── database.md          # DB schema patterns and conventions
├── vitest.config.ts
├── biome.json               # Biome config (linter + formatter)
└── package.json             # Root workspace config
```

## Build / Dev / Lint / Test Commands

All commands run from the **project root**.

### Development
```bash
npm run dev              # Start both server and app concurrently
npm run dev:app          # Start only the Vite dev server (port 5173)
npm run dev:server       # Start only the Apollo Server (port 4000, with watch)
```

### Building
```bash
npm run build            # Build all workspaces (db → server → app)
npm run build:app        # Build only the frontend
npm run build:server     # Build only the server
```

### GraphQL Codegen
```bash
npm run codegen          # Generate types for both app and server
npm run codegen:app      # Generate client-side types (app/src/__generated__/)
npm run codegen:server   # Generate server resolver types (server/src/__generated__/)
```

> **Important:** Run `npm run codegen` after any change to `server/src/schema.ts`
> or to GraphQL documents in `app/src/` (queries, mutations, fragments). The
> generated files in `app/src/__generated__/` and `server/src/__generated__/`
> must be up to date before running type checks, tests, or builds.

### Testing
```bash
npm test                 # Run all tests once
npm run test:watch       # Run tests in watch mode
npm run test:ui          # Run tests with Vitest UI

# Run a single test file:
npx vitest run server/src/__tests__/resolvers.test.ts

# Run tests matching a name pattern:
npx vitest run -t "should create a contact"
```

### Linting & Formatting (Biome)
```bash
npm run check            # Run codegen, then check:biome and check:types
npm run check:biome      # Run Biome linter + formatter check (all-in-one)
npm run check:fix        # Run Biome linter + formatter with auto-fix
npm run lint             # Run Biome linter only
npm run lint:fix         # Run Biome linter with auto-fix
npm run format           # Format all files with Biome
npm run format:check     # Check formatting without writing
npm run check:types      # Run tsc --noEmit across all packages (app, server, db)
```

### Database
```bash
npm run db:generate      # Generate Drizzle migration files
npm run db:migrate       # Run pending migrations
npm run db:push          # Push schema directly to DB (dev only)
npm run db:studio        # Open Drizzle Studio
```

## Code Style Guidelines

### Formatting (Biome)
- **Semicolons**: always
- **Quotes**: double quotes (`"`)
- **Indentation**: 2 spaces
- **Trailing commas**: all (including function params)
- **Line width**: 80 characters
- **Arrow parens**: always (`(x) => x`, not `x => x`)
- **Line endings**: LF

### Imports
- Use **`type` imports** for type-only imports — enforced by Biome rule
  `style/useImportType`:
  ```ts
  import type { Contact } from "@philotes/db";   // correct
  import { type Contact } from "@philotes/db";    // also acceptable
  import { Contact } from "@philotes/db";         // ERROR if Contact is only used as a type
  ```
- Use `@/` path alias for imports within `app/` (maps to `app/src/`):
  ```ts
  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";
  ```
- Use `@philotes/db` package name when importing from `db/` in `server/`
- Use `.js` extensions in server/db imports (ESM requirement):
  ```ts
  import { typeDefs } from "./schema.js";  // in server code
  ```

### TypeScript
- **Strict mode** enabled everywhere — no implicit `any`, strict null checks
- Prefix unused parameters with `_` (enforced by Biome):
  ```ts
  const handler = (_req: Request, res: Response) => { ... }
  ```
- Use `interface` for object shapes, `type` for unions/intersections/utilities
- Export types alongside runtime values from shared packages (`db/`)
- Use `unknown` over `any` — `suspicious/noExplicitAny` is a warning

### Naming Conventions
- **Files**: `kebab-case.ts` / `kebab-case.tsx`
- **Components**: `PascalCase` (function name and export)
- **Variables/functions**: `camelCase`
- **Types/Interfaces**: `PascalCase`
- **Constants**: `SCREAMING_SNAKE_CASE` for true constants, `camelCase` for
  config objects
- **Database columns**: `snake_case` in SQL, `camelCase` in Drizzle schema
  (Drizzle maps between them)
- **GraphQL**: `camelCase` for fields, `PascalCase` for types, `PascalCase`
  with `Input` suffix for input types

### React / Frontend
- Use **function components** exclusively (no class components)
- shadcn/ui components live in `app/src/components/ui/` — these follow the
  standard shadcn pattern with `forwardRef` and `cn()` for class merging
- Custom app components go in `app/src/components/` (outside `ui/`)
- Routes are file-based via TanStack Router in `app/src/routes/`
- The root layout is in `app/src/routes/__root.tsx`
- Use Apollo Client hooks (`useQuery`, `useMutation`) for data fetching
- Always pass `refetchQueries` on mutations that modify lists

### GraphQL / Server
- GraphQL type definitions live in `server/src/schema.ts` as a tagged
  template literal (`#graphql`)
- Resolvers in `server/src/resolvers.ts` receive `Context` with the `db` instance
- Resolver signature: `(parent, args, context) => result`
- Use Drizzle query builder in resolvers (not raw SQL)
- Server runs on port 4000; Vite proxies `/graphql` to it in development

### Database / Drizzle
- See [`docs/database.md`](docs/database.md) for full schema patterns,
  column conventions, type exports, and a complete example of adding a new table
- Schema definitions in `db/src/schema.ts` using Drizzle's `pgTable`
- Use `defaultNow()` for timestamp defaults, `serial()` for auto-increment IDs
- Export inferred types: `typeof table.$inferSelect` and `$inferInsert`
- `createDb()` factory in `db/src/index.ts` is **async** — returns
  `Promise<Db>`. Accepts optional `dataDir`, defaults to `DATABASE_URL`
  env var or `./pgdata`
- Uses PGlite (embedded Postgres via WASM) — no external DB server needed

### Error Handling
- Server resolvers let Apollo Server handle GraphQL errors naturally
- Frontend: use Apollo Client error states from `useQuery`/`useMutation`
- Never swallow errors silently — always surface them to the user or log them

### Testing
- Test files go in `__tests__/` directories adjacent to source, or as
  `*.test.ts` / `*.test.tsx` files
- Use in-memory PGlite (no `dataDir`) for database tests
- Tests use `describe`/`it`/`expect` from Vitest (globals enabled)
- Create fresh test contexts in `beforeEach` for isolation
