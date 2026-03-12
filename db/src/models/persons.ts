import { date, index, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const CONTACT_FREQUENCY_VALUES = ['weekly', 'monthly', 'quarterly', 'yearly'] as const;
export type ContactFrequency = (typeof CONTACT_FREQUENCY_VALUES)[number];

export const persons = pgTable(
  'persons',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    email: text('email').notNull().unique(),
    avatarPath: text('avatar_path'),
    contactFrequency: text('contact_frequency').$type<ContactFrequency>(),
    howWeMet: text('how_we_met'),
    firstMetDate: date('first_met_date'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index('idx_persons_last_name_first_name').on(t.lastName, t.firstName)],
);

export type Person = typeof persons.$inferSelect;
export type NewPerson = typeof persons.$inferInsert;
