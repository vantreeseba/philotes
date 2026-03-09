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
