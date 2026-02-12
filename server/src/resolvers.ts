import type { Db } from "@philotes/db";
import { contacts } from "@philotes/db";
import { eq } from "drizzle-orm";

export interface Context {
  db: Db;
}

interface CreateContactInput {
  firstName: string;
  lastName: string;
  email: string;
}

interface UpdateContactInput {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export const resolvers = {
  Query: {
    contacts: async (_: unknown, __: unknown, { db }: Context) => {
      return db.select().from(contacts);
    },

    contact: async (_: unknown, { id }: { id: number }, { db }: Context) => {
      const rows = await db.select().from(contacts).where(eq(contacts.id, id));
      return rows[0] ?? null;
    },
  },

  Mutation: {
    createContact: async (
      _: unknown,
      { input }: { input: CreateContactInput },
      { db }: Context,
    ) => {
      const rows = await db.insert(contacts).values(input).returning();
      return rows[0];
    },

    updateContact: async (
      _: unknown,
      { id, input }: { id: number; input: UpdateContactInput },
      { db }: Context,
    ) => {
      const rows = await db
        .update(contacts)
        .set({ ...input, updatedAt: new Date() })
        .where(eq(contacts.id, id))
        .returning();
      return rows[0];
    },

    deleteContact: async (
      _: unknown,
      { id }: { id: number },
      { db }: Context,
    ) => {
      const rows = await db
        .delete(contacts)
        .where(eq(contacts.id, id))
        .returning();
      return rows.length > 0;
    },
  },
};
