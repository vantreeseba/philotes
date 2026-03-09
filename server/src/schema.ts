import { db as dbInstance } from '@philotes/db';
import { applyRelationshipsExtension } from './resolvers/relationships.js';
import { applyScalarResolvers } from './resolvers/scalars.js';
import { applyUpcomingDatesExtension } from './resolvers/upcoming-dates.js';
import { buildSchema } from './vendor/drizzle-graphql/index.ts';

const { schema: drizzleSchema, entities } = buildSchema(dbInstance, {
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

const schema = applyScalarResolvers(applyUpcomingDatesExtension(applyRelationshipsExtension(drizzleSchema)));

export { schema, entities };
