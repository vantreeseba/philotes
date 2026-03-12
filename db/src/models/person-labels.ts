import { index, pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';

import { labels } from './labels.js';
import { persons } from './persons.js';

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
  (t) => [primaryKey({ columns: [t.personId, t.labelId] }), index('idx_person_labels_label_id').on(t.labelId)],
);

export type PersonLabel = typeof personLabels.$inferSelect;
export type NewPersonLabel = typeof personLabels.$inferInsert;
