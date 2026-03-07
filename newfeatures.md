# Philotes — Planned Features

## Overview

Six features scoped to make Philotes genuinely useful for staying connected
with friends, family, and significant others. Ordered roughly by implementation
complexity (low → medium), which also makes a reasonable build sequence.

---

## 1. Person Edit

**Goal:** Allow editing a person's name, email, and labels after creation.

**Current state:** The person detail page is read-only for core fields. There
is no `updatePersons` call in the frontend.

**What to build:**
- Add an edit (pencil) button to the person detail page header.
- Reuse `PersonForm` in a dialog, pre-filled with current values.
- Call the existing `updatePersons` GraphQL mutation on submit.
- Re-sync label attachments (detach removed ones, attach added ones).

**Schema changes:** None.

---

## 2. Search / Filter on the Persons List

**Goal:** Let users quickly find a contact by name, email, or label without
scrolling through the full list.

**Current state:** The persons list fetches all persons and renders them with
no filtering.

**What to build:**
- A search input above the persons grid (client-side, no new API needed).
- Filters by first name, last name, or email (case-insensitive substring match).
- Optional label filter: clicking a label chip narrows the list to persons with
  that label attached.
- Active filters shown as dismissible chips; a "Clear" button resets all.

**Schema changes:** None.

---

## 3. Recently Added Dashboard Widget

**Goal:** Surface the newest contacts on the dashboard so users remember to
follow up with people they recently added.

**Current state:** The `RecentPersons` module slot is commented out in
`routes/index.tsx`.

**What to build:**
- A new `RecentPersons` dashboard component (half-width card).
- Fetches the N most recently created persons (e.g. last 5), sorted by
  `createdAt` descending.
- Each item shows avatar (or initials), full name, email, and a relative
  timestamp ("Added 2 days ago").
- Name links to the person detail page.
- Activate the module in the dashboard grid by uncommenting the slot.

**Schema changes:** None.

---

## 4. Person Avatar

**Goal:** Put a face to a name — show a photo or initials avatar on person
cards and the detail page.

**Current state:** No avatar support exists.

**What to build:**

### Schema
- Add `avatar_path text nullable` to `persons` — stores a relative filesystem
  path to the uploaded image file (e.g. `avatars/<uuid>.jpg`).

### Server
- Add a REST endpoint (separate from GraphQL) for avatar upload:
  `POST /avatars/:personId` — accepts `multipart/form-data`, writes the file to
  a configurable directory alongside `pgdata/`, returns the stored path.
- Add `DELETE /avatars/:personId` to remove an avatar.
- Serve the files statically at `/avatars/<filename>`.

### Frontend
- On the person form (create) and edit dialog: a file input that uploads on
  change and previews the image inline.
- On `PersonRow` (list) and the person detail header: show a circular avatar
  image if `avatar_path` is set; otherwise fall back to a deterministic
  initials circle (background color derived from the person's name).

---

## 5. Interaction Log

**Goal:** Track every meaningful touchpoint with a contact — a call, a coffee,
a text — so users have a running history and never feel like they lost the
thread.

**Current state:** No interaction tracking exists.

**What to build:**

### Schema

```
interactions
  id            uuid PK
  person_id     uuid FK → persons.id ON DELETE CASCADE
  occurred_at   timestamptz NOT NULL DEFAULT now()
  channel       text NOT NULL  -- 'call' | 'text' | 'email' | 'in-person' | 'other'
  sentiment     text           -- 'great' | 'good' | 'neutral' | 'difficult'
  note          text           -- free-form, nullable

interaction_tags  (join table)
  interaction_id  uuid FK → interactions.id ON DELETE CASCADE
  label_id        uuid FK → labels.id ON DELETE CASCADE
  PRIMARY KEY (interaction_id, label_id)
```

### Frontend
- New **Interactions** card section on the person detail page (below Notes).
- Each interaction row shows: channel icon, relative date, sentiment emoji,
  truncated note, tag chips, and edit/delete buttons.
- "Log Interaction" button opens a create dialog with:
  - Date/time picker (defaults to now)
  - Channel selector (Call / Text / Email / In-person / Other)
  - Sentiment picker (😄 Great / 🙂 Good / 😐 Neutral / 😟 Difficult)
  - Tag multi-select (reuses existing Labels)
  - Note textarea (optional)
- Full interaction detail is accessible by expanding the row inline.
- The most recent interaction date is shown on the `PersonRow` in the persons
  list ("Last contact: 3 days ago").

---

## 6. Contact Frequency + "Overdue" Dashboard Widget

**Goal:** Gently remind users when they haven't reached out to someone in
longer than they intended, without being prescriptive.

**Current state:** No concept of expected contact cadence exists.

**What to build:**

### Schema
- Add `contact_frequency text nullable` to `persons`.
  Values: `'weekly'` | `'monthly'` | `'quarterly'` | `'yearly'`.

### Frontend — Person detail
- Add a "Contact frequency" field to the person edit dialog (optional select,
  defaults to blank/none).
- Show the current setting in the person detail header alongside email.

### Frontend — Dashboard widget
- A new **"Don't Lose Touch"** module (full-width card) that queries all
  persons with a `contact_frequency` set.
- For each, computes days since last interaction (from the Interaction Log).
  If no interactions exist, uses `createdAt`.
- Filters to persons who are **overdue** (days since last contact >
  frequency threshold).
- Sorts by most overdue first.
- Each row shows avatar/initials, name (linked to detail), relationship type(s),
  frequency setting, and a red "X days overdue" badge.
- A "Log interaction" shortcut button on each row opens the create-interaction
  dialog pre-filled with that person.

**Note:** Reminders are in-app only — no email or push notifications in this
phase.

---

## Build Order Recommendation

```
1. Person Edit              — unblocks everything (edits needed for freq field etc.)
2. Search / Filter          — quick win, purely frontend
3. Recently Added widget    — quick win, purely frontend
4. Person Avatar            — self-contained, medium effort
5. Interaction Log          — foundational for feature 6
6. Contact Frequency        — depends on Interaction Log for "last contacted" data
```
