import { db as dbInstance } from '@philotes/db';
import { buildSchema } from '@vantreeseba/drizzle-graphql';
import { GraphQLInputObjectType, GraphQLNonNull, type GraphQLNullableType, type GraphQLSchema } from 'graphql';
import pluralize from 'pluralize';
import { applyApiKeysExtension } from './resolvers/api-keys.ts';
import { applyAuthExtension } from './resolvers/auth.ts';
import { applyImportContactsExtension } from './resolvers/import-contacts.ts';
import { applyMergeLabelsExtension } from './resolvers/merge-labels.ts';
import { applyRelationshipsExtension } from './resolvers/relationships.ts';
import { applyUpcomingDatesExtension } from './resolvers/upcoming-dates.ts';
import { applyUserScopeExtensions } from './resolvers/user-scope.ts';

const { schema: drizzleSchema, entities } = buildSchema(dbInstance, {
  prefixes: {
    insert: 'create',
    update: 'update',
    delete: 'delete',
  },
  // Table keys are plural (e.g. `tasks`); derive singular names for type and
  // single-row field naming (Task, task, createTask).
  typeNameMapper: (tableName) => ({
    singular: pluralize.singular(tableName),
    plural: tableName,
  }),
});

function makeUserIdOptionalInInputs(s: GraphQLSchema): GraphQLSchema {
  for (const type of Object.values(s.getTypeMap())) {
    if (!(type instanceof GraphQLInputObjectType)) continue;
    const fields = type.getFields();
    if ('userId' in fields && fields.userId.type instanceof GraphQLNonNull) {
      (fields.userId as { type: unknown }).type = (fields.userId.type as GraphQLNonNull<GraphQLNullableType>).ofType;
    }
  }
  return s;
}

// let schema = drizzleSchema;
let schema = applyAuthExtension(drizzleSchema);
schema = makeUserIdOptionalInInputs(schema);
schema = applyUserScopeExtensions(schema);
schema = applyRelationshipsExtension(schema);
schema = applyUpcomingDatesExtension(schema);
schema = applyImportContactsExtension(schema);
schema = applyMergeLabelsExtension(schema);
schema = applyApiKeysExtension(schema);

export { schema, entities };
