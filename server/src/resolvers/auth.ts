import { createHash, randomBytes } from 'node:crypto';
import { schema as dbSchema } from '@philotes/db';
import { and, eq, gt, isNull } from 'drizzle-orm';
import { GraphQLError } from 'graphql';
import { extendSchema, type GraphQLObjectType, type GraphQLSchema, parse } from 'graphql';
import jwt from 'jsonwebtoken';
import { sendMagicLinkEmail } from '../lib/email.ts';
import type { Context } from '../routes/graphql.ts';

// ── JWT ──────────────────────────────────────────────────────────────────────

const JWT_SECRET = process.env.JWT_SECRET ?? 'dev-secret-change-in-production';
const JWT_EXPIRES_IN = '30d';

export function signToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
  } catch {
    return null;
  }
}

export function requireAuth(ctx: Context): string {
  if (!ctx.userId) {
    throw new GraphQLError('Unauthenticated', {
      extensions: { code: 'UNAUTHENTICATED' },
    });
  }
  return ctx.userId;
}

// ── Shared auth helpers (reusable by OAuth providers) ────────────────────────

/**
 * Find an existing user by email or create a new one.
 * OAuth providers call this with the email from the provider's token.
 */
// biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
export async function findOrCreateUser(db: any, email: string, name?: string): Promise<string> {
  const normalised = email.toLowerCase();

  const [existing] = await db
    .select({ id: dbSchema.users.id })
    .from(dbSchema.users)
    .where(eq(dbSchema.users.email, normalised));

  if (existing) return existing.id;

  const [created] = await db
    .insert(dbSchema.users)
    .values({ email: normalised, name: name ?? normalised.split('@')[0] })
    .returning({ id: dbSchema.users.id });

  if (!created) throw new GraphQLError('Failed to create user');
  return created.id;
}

/**
 * Issue a signed JWT for a userId.
 * OAuth providers call this after exchanging tokens with the provider.
 */
export function createSession(userId: string): { token: string; userId: string } {
  return { token: signToken(userId), userId };
}

// ── Magic-link token helpers ──────────────────────────────────────────────────

const TOKEN_TTL_MS = 15 * 60 * 1000; // 15 minutes

function hashToken(plaintext: string): string {
  return createHash('sha256').update(plaintext).digest('hex');
}

function generateMagicToken(): { plaintext: string; hash: string } {
  const plaintext = randomBytes(32).toString('hex');
  return { plaintext, hash: hashToken(plaintext) };
}

// ── SDL ───────────────────────────────────────────────────────────────────────

const AUTH_SDL = parse(`
  type AuthPayload {
    token: String!
    userId: ID!
  }

  type RequestMagicLinkResult {
    sent: Boolean!
    devLink: String
  }

  extend type Mutation {
    requestMagicLink(email: String!): RequestMagicLinkResult!
    verifyMagicLink(token: String!): AuthPayload!
  }
`);

// ── Extension ─────────────────────────────────────────────────────────────────

export function applyAuthExtension(schema: GraphQLSchema): GraphQLSchema {
  const extendedSchema = extendSchema(schema, AUTH_SDL);
  const mutationType = extendedSchema.getType('Mutation') as GraphQLObjectType;
  const fields = mutationType.getFields();

  fields.requestMagicLink.resolve = async (
    _parent: unknown,
    args: { email: string },
    context: Context,
  ): Promise<{ sent: boolean; devLink: string | null }> => {
    // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
    const db = context.db as any;

    const userId = await findOrCreateUser(db, args.email);
    const { plaintext, hash } = generateMagicToken();

    await db.insert(dbSchema.magicLinkTokens).values({
      userId,
      tokenHash: hash,
      expiresAt: new Date(Date.now() + TOKEN_TTL_MS),
    });

    const appUrl = process.env.APP_URL ?? 'http://localhost:3001';
    const magicLink = `${appUrl}/login?token=${plaintext}`;
    const isDev = !process.env.SMTP_HOST;

    await sendMagicLinkEmail(args.email.toLowerCase(), magicLink);

    return { sent: true, devLink: isDev ? magicLink : null };
  };

  fields.verifyMagicLink.resolve = async (
    _parent: unknown,
    args: { token: string },
    context: Context,
  ) => {
    // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
    const db = context.db as any;

    const hash = hashToken(args.token);
    const now = new Date();

    const [row] = await db
      .select()
      .from(dbSchema.magicLinkTokens)
      .where(
        and(
          eq(dbSchema.magicLinkTokens.tokenHash, hash),
          gt(dbSchema.magicLinkTokens.expiresAt, now),
          isNull(dbSchema.magicLinkTokens.usedAt),
        ),
      );

    if (!row) {
      throw new GraphQLError('Invalid or expired link', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    }

    await db
      .update(dbSchema.magicLinkTokens)
      .set({ usedAt: now })
      .where(eq(dbSchema.magicLinkTokens.id, row.id));

    return createSession(row.userId);
  };

  return extendedSchema;
}
