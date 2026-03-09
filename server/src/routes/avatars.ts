import { unlink } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { db, schema as dbSchema } from '@philotes/db';
import { eq } from 'drizzle-orm';
import { Router } from 'express';
import multer from 'multer';

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
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const personId = String(req.params.personId);
    const avatarUrl = `/avatars/${req.file.filename}`;

    await db.update(dbSchema.persons).set({ avatarPath: avatarUrl }).where(eq(dbSchema.persons.id, personId));

    res.json({ url: avatarUrl });
  });

  router.delete('/:personId', async (req, res) => {
    const personId = String(req.params.personId);

    const rows = await db
      .select({ avatarPath: dbSchema.persons.avatarPath })
      .from(dbSchema.persons)
      .where(eq(dbSchema.persons.id, personId));

    const avatarPath = rows[0]?.avatarPath;

    if (avatarPath) {
      await unlink(join(avatarDir, avatarPath.replace('/avatars/', ''))).catch(() => {});
      await db.update(dbSchema.persons).set({ avatarPath: null }).where(eq(dbSchema.persons.id, personId));
    }

    res.json({ success: true });
  });

  return router;
}
