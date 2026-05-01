import { db as dbInstance } from '@philotes/db';
import { buildSchema } from 'drizzle-graphql';
import { GraphQLInputObjectType, GraphQLNonNull, type GraphQLSchema } from 'graphql';
import { applyAuthExtension } from './resolvers/auth.ts';
import { applyImportContactsExtension } from './resolvers/import-contacts.ts';
import { applyMergeLabelsExtension } from './resolvers/merge-labels.ts';
import { applyNullListCoercion } from './resolvers/null-lists.ts';
import { applyRelationshipsExtension } from './resolvers/relationships.ts';
import { applyScalarResolvers } from './resolvers/scalars.ts';
import { applyUpcomingDatesExtension } from './resolvers/upcoming-dates.ts';
import { applyUserScopeExtensions } from './resolvers/user-scope.ts';

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

function makeUserIdOptionalInInputs(s: GraphQLSchema): GraphQLSchema {
  for (const type of Object.values(s.getTypeMap())) {
    if (!(type instanceof GraphQLInputObjectType)) continue;
    const fields = type.getFields();
    if ('userId' in fields && fields.userId.type instanceof GraphQLNonNull) {
      (fields.userId as { type: unknown }).type = (fields.userId.type as GraphQLNonNull<unknown>).ofType;
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
schema = applyScalarResolvers(schema);
schema = applyNullListCoercion(schema);
schema = applyImportContactsExtension(schema);
schema = applyMergeLabelsExtension(schema);

export { schema, entities };
