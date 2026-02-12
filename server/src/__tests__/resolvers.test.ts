import { createDb } from "@philotes/db";
import { sql } from "drizzle-orm";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { type Context, resolvers } from "../resolvers.js";

async function createTestContext(): Promise<Context> {
  const db = await createDb("memory://");
  // Create the contacts table in the in-memory PGlite instance
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    )
  `);
  return { db };
}

describe("resolvers", () => {
  let ctx: Context;

  beforeEach(async () => {
    ctx = await createTestContext();
  });

  afterEach(async () => {
    await ctx.db.execute(sql`DROP TABLE IF EXISTS contacts`);
  });

  describe("Query", () => {
    it("should return empty contacts list", async () => {
      const result = await resolvers.Query.contacts(null, null, ctx);
      expect(result).toEqual([]);
    });

    it("should return contact by id", async () => {
      await resolvers.Mutation.createContact(
        null,
        {
          input: {
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
          },
        },
        ctx,
      );
      const result = await resolvers.Query.contact(null, { id: 1 }, ctx);
      expect(result).toBeDefined();
      expect(result?.firstName).toBe("John");
      expect(result?.lastName).toBe("Doe");
      expect(result?.email).toBe("john@example.com");
    });

    it("should return null for non-existent contact", async () => {
      const result = await resolvers.Query.contact(null, { id: 999 }, ctx);
      expect(result).toBeNull();
    });
  });

  describe("Mutation", () => {
    it("should create a contact", async () => {
      const result = await resolvers.Mutation.createContact(
        null,
        {
          input: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane@example.com",
          },
        },
        ctx,
      );
      expect(result.id).toBe(1);
      expect(result.firstName).toBe("Jane");
      expect(result.lastName).toBe("Smith");
      expect(result.email).toBe("jane@example.com");
    });

    it("should update a contact", async () => {
      await resolvers.Mutation.createContact(
        null,
        {
          input: {
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
          },
        },
        ctx,
      );
      const result = await resolvers.Mutation.updateContact(
        null,
        { id: 1, input: { firstName: "Jonathan" } },
        ctx,
      );
      expect(result.firstName).toBe("Jonathan");
      expect(result.lastName).toBe("Doe");
    });

    it("should delete a contact", async () => {
      await resolvers.Mutation.createContact(
        null,
        {
          input: {
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
          },
        },
        ctx,
      );
      const result = await resolvers.Mutation.deleteContact(
        null,
        { id: 1 },
        ctx,
      );
      expect(result).toBe(true);

      const remaining = await resolvers.Query.contacts(null, null, ctx);
      expect(remaining).toEqual([]);
    });
  });
});
