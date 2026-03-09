import { GraphQLScalarType, type GraphQLSchema } from 'graphql';
import { DateResolver, DateTimeResolver } from 'graphql-scalars';

export function applyScalarResolvers(schema: GraphQLSchema): GraphQLSchema {
  const dateTimeType = schema.getType('DateTime');
  if (dateTimeType instanceof GraphQLScalarType) {
    Object.assign(dateTimeType, {
      serialize: DateTimeResolver.serialize,
      parseValue: DateTimeResolver.parseValue,
      parseLiteral: DateTimeResolver.parseLiteral,
    });
  }

  const dateType = schema.getType('Date');
  if (dateType instanceof GraphQLScalarType) {
    Object.assign(dateType, {
      serialize: DateResolver.serialize,
      parseValue: DateResolver.parseValue,
      parseLiteral: DateResolver.parseLiteral,
    });
  }

  return schema;
}
