import { index, pgTable, text, uuid } from 'drizzle-orm/pg-core';

import { persons } from './persons.js';

export const personRelationships = pgTable(
  'person_relationships',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    fromPersonId: uuid('from_person_id')
      .notNull()
      .references(() => persons.id, { onDelete: 'cascade' }),
    toPersonId: uuid('to_person_id')
      .notNull()
      .references(() => persons.id, { onDelete: 'cascade' }),
    type: text('type').notNull(),
  },
  (t) => [
    index('idx_person_relationships_from_person_id').on(t.fromPersonId),
    index('idx_person_relationships_to_person_id').on(t.toPersonId),
  ],
);

export type PersonRelationship = typeof personRelationships.$inferSelect;
export type NewPersonRelationship = typeof personRelationships.$inferInsert;
