import { db as dbInstance } from '@philotes/db';
import { applyRelationshipsExtension } from './resolvers/relationships.ts';
import { applyScalarResolvers } from './resolvers/scalars.ts';
import { applyUpcomingDatesExtension } from './resolvers/upcoming-dates.ts';
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
