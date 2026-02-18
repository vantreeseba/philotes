import { migrate } from 'drizzle-orm/pglite/migrator';
import { db } from './index.ts';

await migrate(db, {
  migrationsFolder: './drizzle/',
});

console.log('Migration complete');
