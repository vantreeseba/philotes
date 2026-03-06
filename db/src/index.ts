import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import { relations } from './relations.ts';
import * as schema from './schema.ts';

const dir = process.env.DATABASE_URL ?? '../pgdata';
const client = new PGlite(dir);
await client.waitReady;

export const db = drizzle({ client, schema, relations });

export type DB = typeof db;

export { schema };
export * from './schema.ts';
