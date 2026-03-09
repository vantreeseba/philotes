import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { db } from '@philotes/db';
import cors from 'cors';
import { migrate } from 'drizzle-orm/pglite/migrator';
import express from 'express';
import { createAvatarRouter } from './routes/avatars.js';
import { createGraphQLRouter } from './routes/graphql.js';

export type { Context } from './routes/graphql.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT ?? 3001;
const staticDir = join(__dirname, '../../app/dist');
const avatarDir = join(__dirname, '../../avatars');

await migrate(db, { migrationsFolder: join(__dirname, '../../db/drizzle') });

const app = express();
const httpServer = createServer(app);

app.use(cors());
app.use('/graphql', await createGraphQLRouter(httpServer));
app.use('/avatars', express.static(avatarDir));
app.use('/avatars', createAvatarRouter(avatarDir));
app.use(express.static(staticDir));
app.get('*', (_req, res) => {
  res.sendFile(join(staticDir, 'index.html'));
});

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  console.log(`🌐 App served at http://localhost:${PORT}`);
});
