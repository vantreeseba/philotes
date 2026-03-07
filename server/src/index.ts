import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { ApolloServer, HeaderMap } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import type { DB } from '@philotes/db';
import { db, schema as dbSchema } from '@philotes/db';
import bodyParser from 'body-parser';
import busboy from 'busboy';
import cors from 'cors';
import { eq } from 'drizzle-orm';
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

// ---------------------------------------------------------------------------
// Avatar storage
// ---------------------------------------------------------------------------

const avatarDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../avatars');
if (!fs.existsSync(avatarDir)) {
  fs.mkdirSync(avatarDir, { recursive: true });
}
const serveAvatars = sirv(avatarDir, { dev: true });

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------

const corsHandler = cors();
const jsonHandler = bodyParser.json({ limit: '50mb' });

// Resolve migrations folder relative to this file's location at runtime
const migrationsFolder = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../db/drizzle');
await migrate(db, { migrationsFolder });

const apolloServer = new ApolloServer<Context>({ schema });

// ---------------------------------------------------------------------------
// Avatar route helpers
// ---------------------------------------------------------------------------

const AVATAR_ROUTE = /^\/avatars\/([^/]+)$/;
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/gif', 'image/webp']);
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

function sendJson(res: http.ServerResponse, status: number, body: unknown) {
  const json = JSON.stringify(body);
  res.writeHead(status, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(json) });
  res.end(json);
}

async function handleAvatarUpload(req: http.IncomingMessage, res: http.ServerResponse, personId: string) {
  const contentType = req.headers['content-type'] ?? '';
  if (!contentType.includes('multipart/form-data')) {
    return sendJson(res, 400, { error: 'Expected multipart/form-data' });
  }

  const bb = busboy({ headers: req.headers, limits: { fileSize: MAX_FILE_SIZE, files: 1 } });
  let saved = false;
  let avatarRelPath = '';

  bb.on('file', (_field, fileStream, info) => {
    const { mimeType } = info;
    if (!ALLOWED_MIME.has(mimeType)) {
      fileStream.resume(); // drain
      return sendJson(res, 415, { error: 'Unsupported image type' });
    }
    const ext = mimeType.split('/')[1] ?? 'jpg';
    const filename = `${personId}.${ext}`;
    avatarRelPath = filename;
    const dest = path.join(avatarDir, filename);
    const writeStream = fs.createWriteStream(dest);
    fileStream.pipe(writeStream);
    fileStream.on('limit', () => {
      writeStream.destroy();
      fs.unlink(dest, () => {});
      sendJson(res, 413, { error: 'File too large (max 5 MB)' });
    });
    writeStream.on('finish', () => {
      saved = true;
    });
  });

  bb.on('finish', async () => {
    if (!saved) {
      return sendJson(res, 400, { error: 'No file received' });
    }
    try {
      await db.update(dbSchema.persons).set({ avatarPath: avatarRelPath }).where(eq(dbSchema.persons.id, personId));
      sendJson(res, 200, { avatarPath: avatarRelPath });
    } catch (err) {
      console.error('Avatar DB update failed:', err);
      sendJson(res, 500, { error: 'Failed to update person record' });
    }
  });

  bb.on('error', (err: Error) => {
    console.error('Busboy error:', err);
    sendJson(res, 500, { error: 'Upload failed' });
  });

  req.pipe(bb);
}

async function handleAvatarDelete(res: http.ServerResponse, personId: string) {
  try {
    const rows = await db
      .select({ avatarPath: dbSchema.persons.avatarPath })
      .from(dbSchema.persons)
      .where(eq(dbSchema.persons.id, personId));

    const avatarPath = rows[0]?.avatarPath;
    if (avatarPath) {
      const fullPath = path.join(avatarDir, avatarPath);
      try {
        fs.unlinkSync(fullPath);
      } catch {
        /* ignore missing file */
      }
    }

    await db.update(dbSchema.persons).set({ avatarPath: null }).where(eq(dbSchema.persons.id, personId));

    sendJson(res, 200, { ok: true });
  } catch (err) {
    console.error('Avatar delete failed:', err);
    sendJson(res, 500, { error: 'Failed to remove avatar' });
  }
}

// ---------------------------------------------------------------------------
// HTTP server
// ---------------------------------------------------------------------------

const httpServer = http.createServer((req, res) => {
  const errorHandler = finalhandler(req, res, {
    onerror(err: Error) {
      console.error(err.stack ?? err.toString());
    },
  });

  const pathname = new URL(req.url ?? '/', 'http://localhost').pathname;

  // Avatar upload / delete
  const avatarMatch = AVATAR_ROUTE.exec(pathname);
  if (avatarMatch) {
    const personId = avatarMatch[1];
    corsHandler(req, res, () => {
      if (req.method === 'POST') {
        handleAvatarUpload(req, res, personId);
      } else if (req.method === 'DELETE') {
        handleAvatarDelete(res, personId);
      } else if (req.method === 'GET' || req.method === 'HEAD') {
        // Strip /avatars/ prefix before passing to sirv
        req.url = `/${personId}`;
        serveAvatars(req, res, () => sendJson(res, 404, { error: 'Not found' }));
      } else {
        sendJson(res, 405, { error: 'Method not allowed' });
      }
    });
    return;
  }

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
