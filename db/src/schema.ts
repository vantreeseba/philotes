import { date, pgTable, primaryKey, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const INTERACTION_CHANNELS = ['call', 'text', 'email', 'in-person', 'other'] as const;
export type InteractionChannel = (typeof INTERACTION_CHANNELS)[number];

export const INTERACTION_SENTIMENTS = ['great', 'good', 'neutral', 'difficult'] as const;
export type InteractionSentiment = (typeof INTERACTION_SENTIMENTS)[number];

export const persons = pgTable('persons', {
  id: uuid('id').primaryKey().defaultRandom(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull().unique(),
  avatarPath: text('avatar_path'),
  contactFrequency: text('contact_frequency').$type<ContactFrequency>(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const notes = pgTable('notes', {
  id: uuid('id').primaryKey().defaultRandom(),
  body: text('body').notNull(),
  personId: uuid('person_id').references(() => persons.id),
});

export const labels = pgTable('labels', {
  id: uuid('id').primaryKey().defaultRandom(),
  color: text('color').notNull(),
  label: text('label').notNull(),
});

export const personLabels = pgTable(
  'person_labels',
  {
    personId: uuid('person_id')
      .notNull()
      .references(() => persons.id, { onDelete: 'cascade' }),
    labelId: uuid('label_id')
      .notNull()
      .references(() => labels.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.personId, t.labelId] })],
);

// Recurrence values mirror Google Calendar's model.
// null = one-time event (only appears if the original date is upcoming).
// "yearly"  = repeats every year on the same month + day (e.g. birthdays).
// "monthly" = repeats every month on the same day-of-month.
// "weekly"  = repeats every week on the same day-of-week.
export const RECURRENCE_VALUES = ['yearly', 'monthly', 'weekly'] as const;
export type Recurrence = (typeof RECURRENCE_VALUES)[number];

export const CONTACT_FREQUENCY_VALUES = ['weekly', 'monthly', 'quarterly', 'yearly'] as const;
export type ContactFrequency = (typeof CONTACT_FREQUENCY_VALUES)[number];

export const importantDates = pgTable('important_dates', {
  id: uuid('id').primaryKey().defaultRandom(),
  personId: uuid('person_id')
    .notNull()
    .references(() => persons.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  date: date('date').notNull(),
  recurrence: text('recurrence').$type<Recurrence>(),
});

export const noteTags = pgTable(
  'note_tags',
  {
    noteId: uuid('note_id')
      .notNull()
      .references(() => notes.id, { onDelete: 'cascade' }),
    labelId: uuid('label_id')
      .notNull()
      .references(() => labels.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.noteId, t.labelId] })],
);

export const importantDateTags = pgTable(
  'important_date_tags',
  {
    importantDateId: uuid('important_date_id')
      .notNull()
      .references(() => importantDates.id, { onDelete: 'cascade' }),
    labelId: uuid('label_id')
      .notNull()
      .references(() => labels.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.importantDateId, t.labelId] })],
);

export const noteMentions = pgTable(
  'note_mentions',
  {
    noteId: uuid('note_id')
      .notNull()
      .references(() => notes.id, { onDelete: 'cascade' }),
    mentionedPersonId: uuid('mentioned_person_id')
      .notNull()
      .references(() => persons.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.noteId, t.mentionedPersonId] })],
);

export const personRelationships = pgTable('person_relationships', {
  id: uuid('id').primaryKey().defaultRandom(),
  fromPersonId: uuid('from_person_id')
    .notNull()
    .references(() => persons.id, { onDelete: 'cascade' }),
  toPersonId: uuid('to_person_id')
    .notNull()
    .references(() => persons.id, { onDelete: 'cascade' }),
  type: text('type').notNull(),
});

export const interactions = pgTable('interactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  personId: uuid('person_id')
    .notNull()
    .references(() => persons.id, { onDelete: 'cascade' }),
  occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull().defaultNow(),
  channel: text('channel').$type<InteractionChannel>().notNull(),
  sentiment: text('sentiment').$type<InteractionSentiment>(),
  note: text('note'),
});

export const interactionTags = pgTable(
  'interaction_tags',
  {
    interactionId: uuid('interaction_id')
      .notNull()
      .references(() => interactions.id, { onDelete: 'cascade' }),
    labelId: uuid('label_id')
      .notNull()
      .references(() => labels.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.interactionId, t.labelId] })],
);

export type Person = typeof persons.$inferSelect;
export type NewPerson = typeof persons.$inferInsert;
export type Note = typeof notes.$inferSelect;
export type NewNote = typeof notes.$inferInsert;
export type Label = typeof labels.$inferSelect;
export type NewLabel = typeof labels.$inferInsert;
export type PersonLabel = typeof personLabels.$inferSelect;
export type NewPersonLabel = typeof personLabels.$inferInsert;
export type ImportantDate = typeof importantDates.$inferSelect;
export type NewImportantDate = typeof importantDates.$inferInsert;
export type PersonRelationship = typeof personRelationships.$inferSelect;
export type NewPersonRelationship = typeof personRelationships.$inferInsert;
export type ImportantDateTag = typeof importantDateTags.$inferSelect;
export type NewImportantDateTag = typeof importantDateTags.$inferInsert;
export type NoteTag = typeof noteTags.$inferSelect;
export type NewNoteTag = typeof noteTags.$inferInsert;
export type Interaction = typeof interactions.$inferSelect;
export type NewInteraction = typeof interactions.$inferInsert;
export type InteractionTag = typeof interactionTags.$inferSelect;
export type NewInteractionTag = typeof interactionTags.$inferInsert;
export type NoteMention = typeof noteMentions.$inferSelect;
export type NewNoteMention = typeof noteMentions.$inferInsert;
