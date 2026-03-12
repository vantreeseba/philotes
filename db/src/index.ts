import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import { relations } from './relations.ts';
import * as schema from './schema.ts';

// db/src/index.ts is two levels below the project root (db/src → db → root)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../..');
const dataDir = process.env.DATABASE_URL ?? path.join(projectRoot, 'pgdata');

const client = new PGlite(dataDir);
await client.waitReady;

export const db = drizzle({ client, schema, relations });

export type DB = typeof db;

export { schema };
export * from './schema.ts';
