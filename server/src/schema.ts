import { db as dbInstance } from '@philotes/db';
import { buildSchema } from 'drizzle-graphql';
import { applyNullListCoercion } from './resolvers/null-lists.ts';
import { applyRelationshipsExtension } from './resolvers/relationships.ts';
import { applyScalarResolvers } from './resolvers/scalars.ts';
import { applyUpcomingDatesExtension } from './resolvers/upcoming-dates.ts';

const { schema: drizzleSchema, entities } = buildSchema(dbInstance, {
  singularTypes: true,
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

// let schema = drizzleSchema;
let schema = applyRelationshipsExtension(drizzleSchema);
schema = applyUpcomingDatesExtension(schema);
schema = applyScalarResolvers(schema);
schema = applyNullListCoercion(schema);

export { schema, entities };
