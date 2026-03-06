import http from 'node:http';
import path from 'node:path';
import { ApolloServer, HeaderMap } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import type { DB } from '@philotes/db';
import { db } from '@philotes/db';
import bodyParser from 'body-parser';
import cors from 'cors';
import { migrate } from 'drizzle-orm/pglite/migrator';
import finalhandler from 'finalhandler';
import sirv from 'sirv';
import { schema } from './schema.js';

export interface Context {
  db: DB;
}

const port = Number(process.env.PORT ?? 3001);

const staticDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../app/dist');
const serveStatic = sirv(staticDir, { single: true });

const corsHandler = cors();
const jsonHandler = bodyParser.json({ limit: '50mb' });

// Resolve migrations folder relative to this file's location at runtime
const migrationsFolder = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../db/drizzle');
await migrate(db, { migrationsFolder });

const apolloServer = new ApolloServer<Context>({ schema });

const httpServer = http.createServer((req, res) => {
  const errorHandler = finalhandler(req, res, {
    onerror(err: Error) {
      console.error(err.stack ?? err.toString());
    },
  });

  const pathname = new URL(req.url ?? '/', 'http://localhost').pathname;

  if (pathname === '/graphql') {
    corsHandler(req, res, (err?: unknown) => {
      if (err) {
        errorHandler(err as Error);
        return;
      }
      jsonHandler(req, res, (err?: unknown) => {
        if (err) {
          errorHandler(err as Error);
          return;
        }

        const headers = new HeaderMap();
        for (const [key, value] of Object.entries(req.headers)) {
          if (value !== undefined) {
            headers.set(key, Array.isArray(value) ? value.join(', ') : value);
          }
        }

        apolloServer
          .executeHTTPGraphQLRequest({
            httpGraphQLRequest: {
              method: (req.method ?? 'GET').toUpperCase(),
              headers,
              search: new URL(req.url ?? '/', 'http://localhost').search ?? '',
              body: 'body' in req ? (req as typeof req & { body: unknown }).body : undefined,
            },
            context: async () => ({ db }),
          })
          .then(async (response) => {
            for (const [key, value] of response.headers) {
              res.setHeader(key, value);
            }
            res.statusCode = response.status ?? 200;
            if (response.body.kind === 'complete') {
              res.end(response.body.string);
              return;
            }
            for await (const chunk of response.body.asyncIterator) {
              res.write(chunk);
            }
            res.end();
          })
          .catch((err: Error) => errorHandler(err));
      });
    });
    return;
  }

  serveStatic(req, res, () => errorHandler(new Error('Not found')));
});

apolloServer.addPlugin(ApolloServerPluginDrainHttpServer({ httpServer }));
await apolloServer.start();

httpServer.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
