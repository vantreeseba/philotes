import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import type { DB } from '@philotes/db';
import { db } from '@philotes/db';
import { schema } from './schema.js';

export interface Context {
  db: DB;
}

const server = new ApolloServer<Context>({ schema });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
  context: async () => ({ db }),
});

console.log(`Server ready at ${url}`);
