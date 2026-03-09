import type { FieldPolicy } from '@apollo/client';

/**
 * Apollo InMemoryCache FieldPolicy that deserializes ISO date strings
 * (from the GraphQL wire) into JavaScript Date objects when reading
 * DateTime or Date scalars from the cache.
 */
export const dateTypePolicy: FieldPolicy<Date> = {
  merge: (_existing, incoming: unknown) => {
    if (incoming == null) {
      return incoming as unknown as Date;
    }
    if (incoming instanceof Date) {
      return incoming;
    }
    return new Date(incoming as string);
  },
};
