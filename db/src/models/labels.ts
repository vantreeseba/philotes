import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const labels = pgTable('labels', {
  id: uuid('id').primaryKey().defaultRandom(),
  color: text('color').notNull(),
  label: text('label').notNull(),
});

export type Label = typeof labels.$inferSelect;
export type NewLabel = typeof labels.$inferInsert;
