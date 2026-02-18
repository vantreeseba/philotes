import { db } from '@philotes/db';
import { buildSchema } from './vendor/drizzle-graphql/index.ts';

export const { schema, entities } = buildSchema(db, {
  prefixes: {
    insert: 'create',
    update: 'update',
    delete: 'delete',
  },
  suffixes: {
    list: 's',
    single: '',
  },
});
