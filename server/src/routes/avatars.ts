import { unlink } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { db, schema as dbSchema } from '@philotes/db';
import { and, eq } from 'drizzle-orm';
import { Router } from 'express';
import multer from 'multer';
import { verifyToken } from '../resolvers/auth.ts';

function extractUserId(req: import('express').Request): string | null {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return null;
  return verifyToken(auth.slice(7))?.userId ?? null;
}

export function createAvatarRouter(avatarDir: string) {
  const storage = multer.diskStorage({
    destination: avatarDir,
    filename: (req, file, cb) => {
      const ext = extname(file.originalname) || '.jpg';
      cb(null, `${req.params.personId}${ext}`);
    },
  });

  const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      cb(null, allowedMimeTypes.includes(file.mimetype));
    },
  });

  const router = Router();

  router.post('/:personId', upload.single('file'), async (req, res) => {
    const userId = extractUserId(req);
    if (!userId) {
      res.status(401).json({ error: 'Unauthenticated' });
      return;
    }

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const personId = String(req.params.personId);
    const avatarUrl = `/avatars/${req.file.filename}`;

    // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
    await (db as any)
      .update(dbSchema.userPersons)
      .set({ avatarPath: avatarUrl })
      .where(and(eq(dbSchema.userPersons.personId, personId), eq(dbSchema.userPersons.userId, userId)));

    res.json({ url: avatarUrl });
  });

  router.delete('/:personId', async (req, res) => {
    const userId = extractUserId(req);
    if (!userId) {
      res.status(401).json({ error: 'Unauthenticated' });
      return;
    }

    const personId = String(req.params.personId);

    // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
    const rows: Array<{ avatarPath: string | null }> = await (db as any)
      .select({ avatarPath: dbSchema.userPersons.avatarPath })
      .from(dbSchema.userPersons)
      .where(and(eq(dbSchema.userPersons.personId, personId), eq(dbSchema.userPersons.userId, userId)));

    const avatarPath = rows[0]?.avatarPath;

    if (avatarPath) {
      await unlink(join(avatarDir, avatarPath.replace('/avatars/', ''))).catch(() => {});
      // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
      await (db as any)
        .update(dbSchema.userPersons)
        .set({ avatarPath: null })
        .where(and(eq(dbSchema.userPersons.personId, personId), eq(dbSchema.userPersons.userId, userId)));
    }

    res.json({ success: true });
  });

  return router;
}
