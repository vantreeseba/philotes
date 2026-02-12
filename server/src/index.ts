import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { db } from "@philotes/db";
import { type Context, resolvers } from "./resolvers.js";
import { typeDefs } from "./schema.js";

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3001 },
  context: async () => ({ db }),
});

console.log(`Server ready at ${url}`);
