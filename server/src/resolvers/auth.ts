import { schema as dbSchema } from '@philotes/db';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { GraphQLError } from 'graphql';
import { extendSchema, type GraphQLObjectType, type GraphQLSchema, parse } from 'graphql';
import jwt from 'jsonwebtoken';
import type { Context } from '../routes/graphql.ts';

const JWT_SECRET = process.env.JWT_SECRET ?? 'dev-secret-change-in-production';
const JWT_EXPIRES_IN = '30d';

const AUTH_SDL = parse(`
  type AuthPayload {
    token: String!
    userId: ID!
  }

  extend type Mutation {
    register(email: String!, name: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`);

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

interface AuthArgs {
  email: string;
  name?: string;
  password: string;
}

export function applyAuthExtension(schema: GraphQLSchema): GraphQLSchema {
  const extendedSchema = extendSchema(schema, AUTH_SDL);
  const mutationType = extendedSchema.getType('Mutation') as GraphQLObjectType;
  const fields = mutationType.getFields();

  fields.register.resolve = async (_parent: unknown, args: AuthArgs, context: Context) => {
    // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
    const db = context.db as any;

    const existing = await db
      .select({ id: dbSchema.users.id })
      .from(dbSchema.users)
      .where(eq(dbSchema.users.email, args.email.toLowerCase()));

    if (existing.length > 0) {
      throw new GraphQLError('Email already registered', {
        extensions: { code: 'BAD_USER_INPUT' },
      });
    }

    const passwordHash = await bcrypt.hash(args.password, 12);

    const [user] = await db
      .insert(dbSchema.users)
      .values({
        email: args.email.toLowerCase(),
        name: args.name ?? args.email,
        passwordHash,
      })
      .returning({ id: dbSchema.users.id });

    if (!user) throw new GraphQLError('Registration failed');

    return { token: signToken(user.id), userId: user.id };
  };

  fields.login.resolve = async (_parent: unknown, args: AuthArgs, context: Context) => {
    // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
    const db = context.db as any;

    const [user] = await db
      .select({ id: dbSchema.users.id, passwordHash: dbSchema.users.passwordHash })
      .from(dbSchema.users)
      .where(eq(dbSchema.users.email, args.email.toLowerCase()));

    if (!user) {
      throw new GraphQLError('Invalid credentials', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    }

    const valid = await bcrypt.compare(args.password, user.passwordHash);
    if (!valid) {
      throw new GraphQLError('Invalid credentials', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    }

    return { token: signToken(user.id), userId: user.id };
  };

  return extendedSchema;
}
