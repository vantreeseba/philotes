import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const notes = pgTable('notes', {
  id: uuid('id').primaryKey().defaultRandom(),
  body: text('body').notNull(),
});

export const contacts = pgTable('contacts', {
  id: uuid('id').primaryKey().defaultRandom(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  noteId: uuid('note_id').references(() => notes.id),
});

// export const contactsRelations = relations(contacts, ({ many }) => ({
//   notes: many(notes),
//   //   notes: many(notes, {
//   //     fields: [contacts.noteId],
//   //     references: [notes.id],
//   //   }),
// }));

// export const notesRelations = relations(contacts, ({ one }) => ({
//   contact: one(notes, {
//     fields: [contacts.noteId],
//     references: [notes.id],
//   }),
// }));

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
export type Note = typeof notes.$inferSelect;
export type NewNote = typeof notes.$inferInsert;
