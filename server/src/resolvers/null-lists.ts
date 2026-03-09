import { GraphQLList, GraphQLNonNull, type GraphQLSchema, isObjectType } from 'graphql';

/**
 * Wraps every [T]! field resolver in the schema to coerce null → [].
 * The drizzle-graphql auto-generated resolvers return null for empty
 * relation lists, which violates the non-nullable list contract.
 */
export function applyNullListCoercion(schema: GraphQLSchema): GraphQLSchema {
  for (const type of Object.values(schema.getTypeMap())) {
    if (!isObjectType(type) || type.name.startsWith('__')) continue;

    for (const field of Object.values(type.getFields())) {
      // Match [T]! — NonNull wrapping a List
      if (field.type instanceof GraphQLNonNull && field.type.ofType instanceof GraphQLList) {
        const originalResolve = field.resolve;
        field.resolve = async (source, args, context, info) => {
          const result = originalResolve ? await originalResolve(source, args, context, info) : source[info.fieldName];
          return result ?? [];
        };
      }
    }
  }
  return schema;
}
