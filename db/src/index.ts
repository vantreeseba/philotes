import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PgliteDatabase } from 'drizzle-orm/pglite';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { relations } from './relations.ts';
import * as schema from './schema.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../..');

const DATABASE_URL = process.env.DATABASE_URL ?? path.join(projectRoot, 'pgdata');

const isPostgres =
  DATABASE_URL.startsWith('postgres://') || DATABASE_URL.startsWith('postgresql://');

type Schema = typeof schema;
export type DB = PgliteDatabase<Schema> | PostgresJsDatabase<Schema>;

// Initialized synchronously after the top-level await below.
export let db!: DB;

if (isPostgres) {
  const { drizzle } = await import('drizzle-orm/postgres-js');
  db = drizzle(DATABASE_URL, { schema });
} else {
  const { drizzle } = await import('drizzle-orm/pglite');
  const { PGlite } = await import('@electric-sql/pglite');
  const dataDir = DATABASE_URL.startsWith('file:') ? DATABASE_URL.slice(5) : DATABASE_URL;
  const client = new PGlite(dataDir);
  await client.waitReady;
  db = drizzle({ client, schema, relations });
}

export { schema };
export * from './schema.ts';
