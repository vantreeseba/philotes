import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from "./schema.ts";

console.log('db', process.env.DATABASE_URL);

const dir = process.env.DATABASE_URL ?? "../pgdata";
const client = new PGlite(dir);
await client.waitReady;

export const db = drizzle(client, { schema });

export type DB = typeof db;

export { schema };
export * from "./schema.ts";
