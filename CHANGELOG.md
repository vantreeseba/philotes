## [1.2.2](https://github.com/vantreeseba/philotes/compare/v1.2.1...v1.2.2) (2026-03-12)


### Bug Fixes

* **docker:** Make docker node version 24 for ts stuff. ([7f38c16](https://github.com/vantreeseba/philotes/commit/7f38c1609522bef59f46f0121552678da700eea5))

## [1.2.1](https://github.com/vantreeseba/philotes/compare/v1.2.0...v1.2.1) (2026-03-12)


### Bug Fixes

* resolve pgdata path using import.meta.url to prevent CWD-relative DB splits ([41106d0](https://github.com/vantreeseba/philotes/commit/41106d0937f138d02f7f89567cd9801b1bf5ac44))

# [1.2.0](https://github.com/vantreeseba/philotes/compare/v1.1.9...v1.2.0) (2026-03-09)


### Features

* extract drizzle-graphql vendor code into standalone package ([3b612f0](https://github.com/vantreeseba/philotes/commit/3b612f03fd6d1c45322a90b68ac9e42680c836cb))

## [1.1.9](https://github.com/vantreeseba/philotes/compare/v1.1.8...v1.1.9) (2026-03-09)


### Bug Fixes

* remove sticky positioning from ListLayout header/footer ([e0ee06f](https://github.com/vantreeseba/philotes/commit/e0ee06f82d9676c5fd6483941fe7640fb774caec))

## [1.1.8](https://github.com/vantreeseba/philotes/compare/v1.1.7...v1.1.8) (2026-03-09)


### Bug Fixes

* coerce null list relation fields to empty arrays ([b5b5ec9](https://github.com/vantreeseba/philotes/commit/b5b5ec9c9f33cb04d1a260f9ead6d47053c811fb))

## [1.1.7](https://github.com/vantreeseba/philotes/compare/v1.1.6...v1.1.7) (2026-03-09)


### Bug Fixes

* remove relation fields from createPerson mutation response ([354cde3](https://github.com/vantreeseba/philotes/commit/354cde33add80cf4f7bb996adf600e8850598422))

## [1.1.6](https://github.com/vantreeseba/philotes/compare/v1.1.5...v1.1.6) (2026-03-09)


### Bug Fixes

* pass firstMetDate as YYYY-MM-DD string, not Date object ([47a225f](https://github.com/vantreeseba/philotes/commit/47a225f14cc6c75532ee3d0bbcb9dc1c2ed1597e))
* remove new Date() wrapping from ImportantDate date inputs ([56c58cb](https://github.com/vantreeseba/philotes/commit/56c58cbede6a9b7003c20167972ade6443b883ab))

## [1.1.5](https://github.com/vantreeseba/philotes/compare/v1.1.4...v1.1.5) (2026-03-09)


### Bug Fixes

* use named wildcard route for Express 5 / path-to-regexp v8 compat ([00e17d6](https://github.com/vantreeseba/philotes/commit/00e17d67b1c639f881d133c68c4c709909f08521))

## [1.1.4](https://github.com/vantreeseba/philotes/compare/v1.1.3...v1.1.4) (2026-03-09)


### Bug Fixes

* commit routeTree.gen.ts and restore two-stage Dockerfile ([e9c7165](https://github.com/vantreeseba/philotes/commit/e9c7165fe2d07abd67943f5295e5445cd62779bb))

## [1.1.3](https://github.com/vantreeseba/philotes/compare/v1.1.2...v1.1.3) (2026-03-09)


### Bug Fixes

* trigger docker hub deployment ([f729a6f](https://github.com/vantreeseba/philotes/commit/f729a6f24e4869ec537d87a9f1abfb5e71de4cde))

## [1.1.2](https://github.com/vantreeseba/philotes/compare/v1.1.1...v1.1.2) (2026-03-09)


### Bug Fixes

* resolve build failures from resolver refactor and missing vendored dep ([e89349e](https://github.com/vantreeseba/philotes/commit/e89349e4f020cea4891115b13402e735ec4dad50))

## [1.1.1](https://github.com/vantreeseba/philotes/compare/v1.1.0...v1.1.1) (2026-03-09)


### Bug Fixes

* trigger docker hub deployment ([ef52a30](https://github.com/vantreeseba/philotes/commit/ef52a302795889663c954aed3b5ef0841268700d))

# [1.1.0](https://github.com/vantreeseba/philotes/compare/v1.0.0...v1.1.0) (2026-03-09)


### Features

* initial release ([5688e4a](https://github.com/vantreeseba/philotes/commit/5688e4a769567c719c45ddc278548ea0c021d819))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Features

- 2-column person detail layout; merge DashboardLayout into ListLayout
- Paginate persons and tags lists with sticky header/footer layout
- Paginate all dashboard modules and switch to 2-column layout
- Persist person list filters and pagination in URL query string
- Person avatar with local file upload
- Person edit — update name/email/labels from detail page
- Person detail component skeleton with labels, notes, and tasks
- PersonActivities, PersonAddresses, PersonContactInfo sub-components in detail view
- Activities tracking per person
- Addresses per person
- Contact info per person
- Tasks/todos per person
- Notes with tags on person detail page
- Tags on important dates; rename labels to tags throughout the app UI
- Important date detail view with related notes
- Link date name on dashboard to its detail view
- Search and label filter on persons list
- Contact frequency and "don't lose touch" widget
- Dormant ties dashboard widget
- Recently Added dashboard widget
- Introductions panel, network graph, and note @-mentions
- Network graph: zoom and pan
- Network graph: full name on nodes, always-visible relationship labels on edges
- Network graph: improved layout — spacing, edge pills, name halos, arrowheads, rotation
- Interaction log
- Pre-contact brief panel on person detail page
- Life milestones and "how we met" fields on persons and important dates
- Weekly review route
- Move upcoming-dates recurrence logic to server-side resolver
- Deserialize DateTime/Date scalars to JS Date objects in Apollo Client
- Use DateTime and Date scalars for timestamp/date columns
- Dockerfile and Docker Hub deployment instructions in README
- Seed and cleanup scripts with Faker data
- Switch to shadcn form with TanStack Form

### Bug Fixes

- Use timezone-safe parsing for Date scalar type policy
- Use RAW callbacks for where/orderBy in relational queries to prevent malformed SQL aliases
- Pass aliased table to orderBy callback in relational queries
- Add explicit `from`/`to` config to new relations to prevent malformed SQL aliases
- Use direct table ref for sub-relation `where` clause; remove debug logs
- White edge label text on dark pill; remove directional arrowheads
- Wire LabelList (with pagination) to `/tags` route
- Remove stale `person-detail.tsx` dead code

### Refactoring

- Extract avatar and GraphQL routes into `server/src/routes/`
- Split `schema.ts` resolvers into `server/src/resolvers/`
- Consolidate GraphQL filter input types to generic shared types
- Flatten GraphQL relation types to base model types
- Convert AddTaskForm to `useAppForm`+`AppField` pattern

### CI

- Add semantic-release and Docker Hub deployment workflow
- Add changelog generation to semantic-release (`@semantic-release/changelog`, `@semantic-release/git`)

### Documentation

- Add research background section to README
- Add screenshots to README
- Add worktree setup instructions to AGENTS.md
- Add feature backlog for tasks A, F, H
