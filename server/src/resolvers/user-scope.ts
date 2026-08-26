import { schema as dbSchema } from '@philotes/db';
import {
  and,
  asc,
  type Column,
  desc,
  eq,
  gt,
  gte,
  ilike,
  inArray,
  isNotNull,
  isNull,
  like,
  lt,
  lte,
  ne,
  notInArray,
  or,
  type SQL,
} from 'drizzle-orm';
import {
  defaultFieldResolver,
  extendSchema,
  GraphQLEnumType,
  GraphQLError,
  GraphQLInputObjectType,
  GraphQLObjectType,
  type GraphQLSchema,
  getNamedType,
  parse,
} from 'graphql';
import type { Context } from '../routes/graphql.ts';
import { requireAuth } from './auth.ts';

// ── SDL extensions ───────────────────────────────────────────────────────────
// Adds user_persons operations and a me query to the existing schema.

const USER_SCOPE_SDL = parse(`
  # Re-expose user-specific fields on Person so frontend queries stay unchanged.
  extend type Person {
    avatarPath: String
    contactFrequency: String
    howWeMet: String
    firstMetDate: String
  }

  extend type Query {
    me: User
    myPersonContext(personId: UUID!): UserPerson
  }

  extend type Mutation {
    addPersonToMyContacts(personId: UUID!): UserPerson!
    updateMyPersonContext(
      personId: UUID!
      contactFrequency: String
      howWeMet: String
      firstMetDate: String
      avatarPath: String
    ): UserPerson!
    removePersonFromMyContacts(personId: UUID!): Boolean!
  }
`);

// ── Helpers ──────────────────────────────────────────────────────────────────

// biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
type AnyDB = any;
type Filter = Record<string, unknown>;

function notFound(entity: string): never {
  throw new GraphQLError(`${entity} not found`, {
    extensions: { code: 'NOT_FOUND' },
  });
}

function forbidden(): never {
  throw new GraphQLError('Forbidden', { extensions: { code: 'FORBIDDEN' } });
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function mustField(fields: Record<string, { resolve?: unknown }>, name: string): { resolve?: unknown } {
  const field = fields[name];
  // Fail closed at startup: a missing field means the generated schema no
  // longer matches these overrides, and scoping would silently be skipped.
  if (!field) throw new Error(`user-scope: generated field "${name}" is missing`);
  return field;
}

/**
 * Merge a scope filter into a generated `where` argument. Sibling filter keys
 * AND together, and a top-level OR must stand alone, so the scope is
 * distributed into each branch ((a OR b) AND s ≡ (a AND s) OR (b AND s)).
 * Client-supplied values for the scope's keys are overwritten — a caller's
 * filter can narrow the scope, never widen it. Invalid OR-beside-siblings
 * input is passed through with the scope merged; the library rejects it.
 */
function mergeScope(where: unknown, scope: Filter): Filter {
  const w = { ...((where ?? {}) as Filter) };
  if (Array.isArray(w.OR) && w.OR.length > 0 && Object.keys(w).length === 1) {
    return { OR: w.OR.map((branch) => mergeScope(branch, scope)) };
  }
  return { ...w, ...scope };
}

/**
 * Restrict a `where` argument's `key` column to `parentIds`, intersecting
 * with any client-supplied `eq`/`inArray` on that column (unlike mergeScope,
 * the scope column here — e.g. a junction's noteId — is a legitimate client
 * filter that must narrow the result, not be overwritten). Other operators on
 * the column are preserved and AND with the inArray. Returns null when the
 * intersection is provably empty.
 */
function intersectParentScope(where: unknown, key: string, parentIds: string[]): Filter | null {
  const w = { ...((where ?? {}) as Filter) };
  if (Array.isArray(w.OR) && w.OR.length > 0 && Object.keys(w).length === 1) {
    const branches = w.OR.map((branch) => intersectParentScope(branch, key, parentIds)).filter(
      (branch): branch is Filter => branch !== null,
    );
    return branches.length > 0 ? { OR: branches } : null;
  }
  const client = (typeof w[key] === 'object' && w[key] !== null ? w[key] : {}) as Filter;
  let ids = parentIds;
  if (typeof client.eq === 'string') ids = ids.filter((id) => id === client.eq);
  if (Array.isArray(client.inArray)) {
    const allowed = new Set(client.inArray as string[]);
    ids = ids.filter((id) => allowed.has(id));
  }
  if (ids.length === 0) return null;
  const { eq: _eq, inArray: _inArray, ...restClient } = client;
  return { ...w, [key]: { ...restClient, inArray: ids } };
}

// ── Scope every generated field that can filter a user-owned table ───────────
//
// Instead of replacing generated resolvers with hand-rolled queries (which
// silently dropped where/orderBy/distinct/aggregates and duplicated the
// library's filter translation), every generated resolver is delegated to
// with `userId: { eq: ctx.userId }` merged into its `where` argument. The
// sweep is structural — any field, on any type, whose `where` argument is one
// of these filter inputs gets wrapped: root list/single/aggregate queries,
// update/delete mutations, and relation (+ relation aggregate) fields alike.

const USER_OWNED_FILTERS = new Set([
  'NoteFilters',
  'InteractionFilters',
  'TaskFilters',
  'LabelFilters',
  'ImportantDateFilters',
  'PersonRelationshipFilters',
  'AddressFilters',
  'ContactInfoFilters',
  'RelationshipTypeFilters',
  'PersonLabelFilters',
  'UserPersonFilters',
]);

const USER_OWNED_CREATE_INPUTS = new Set([
  'CreateNoteInput',
  'CreateInteractionInput',
  'CreateTaskInput',
  'CreateLabelInput',
  'CreateImportantDateInput',
  'CreatePersonRelationshipInput',
  'CreateAddressInput',
  'CreateContactInfoInput',
  'CreateRelationshipTypeInput',
  'CreatePersonLabelInput',
  'CreateUserPersonInput',
]);

function stripUserIdFromSet(args: Filter): Filter {
  if (!args.set || typeof args.set !== 'object') return args;
  // Callers cannot change ownership
  const { userId: _uid, ...safeSet } = args.set as Filter;
  return { ...args, set: safeSet };
}

function sweepUserIdScope(schema: GraphQLSchema): void {
  for (const type of Object.values(schema.getTypeMap())) {
    if (!(type instanceof GraphQLObjectType) || type.name.startsWith('__')) continue;
    for (const field of Object.values(type.getFields())) {
      const whereArg = field.args.find((a) => a.name === 'where');
      if (!whereArg || !USER_OWNED_FILTERS.has(getNamedType(whereArg.type).name)) continue;
      const orig = field.resolve ?? defaultFieldResolver;
      field.resolve = (parent, args, ctx: Context, info) => {
        const userId = requireAuth(ctx);
        const scoped = stripUserIdFromSet({
          ...args,
          where: mergeScope(args.where, { userId: { eq: userId } }),
        });
        return orig(parent, scoped, ctx, info);
      };
    }
  }
}

function sweepUserIdInjection(schema: GraphQLSchema): void {
  const mutationType = schema.getMutationType();
  if (!mutationType) return;
  for (const field of Object.values(mutationType.getFields())) {
    const valuesArg = field.args.find((a) => a.name === 'values');
    if (!valuesArg || !USER_OWNED_CREATE_INPUTS.has(getNamedType(valuesArg.type).name)) continue;
    const orig = field.resolve ?? defaultFieldResolver;
    field.resolve = (parent, args, ctx: Context, info) => {
      const userId = requireAuth(ctx);
      const values = Array.isArray(args.values)
        ? args.values.map((v: Filter) => ({ ...v, userId }))
        : { ...args.values, userId };
      return orig(parent, { ...args, values }, ctx, info);
    };
  }
}

// ── Junction tables without a userId column ──────────────────────────────────
//
// noteTags / noteMentions / interactionTags / importantDateTags carry no
// userId; ownership flows through their parent rows. Reads, updates, and
// deletes are scoped to junctions whose parent the user owns; creates (and
// update `set`s) verify that every referenced foreign key is the user's.

type OwnedIdFetcher = (db: AnyDB, userId: string) => Promise<string[]>;

const ownedRowIds =
  (table: { userId: unknown; id: unknown }): OwnedIdFetcher =>
  async (db, userId) => {
    const rows: Array<{ id: string }> = await db
      .select({ id: (table as AnyDB).id })
      .from(table)
      .where(eq((table as AnyDB).userId, userId));
    return rows.map((r) => r.id);
  };

const contactPersonIds: OwnedIdFetcher = async (db, userId) => {
  const rows: Array<{ id: string }> = await db
    .select({ id: dbSchema.userPersons.personId })
    .from(dbSchema.userPersons)
    .where(eq(dbSchema.userPersons.userId, userId));
  return rows.map((r) => r.id);
};

const ownedNoteIds = ownedRowIds(dbSchema.notes);
const ownedLabelIds = ownedRowIds(dbSchema.labels);
const ownedInteractionIds = ownedRowIds(dbSchema.interactions);
const ownedImportantDateIds = ownedRowIds(dbSchema.importantDates);

interface JunctionFk {
  key: string;
  entity: string;
  ownedIds: OwnedIdFetcher;
}

interface JunctionSpec {
  single: string;
  plural: string;
  /** Foreign key used to scope reads/updates/deletes to the user's parent rows. */
  scopeFk: JunctionFk;
  fks: JunctionFk[];
}

const JUNCTIONS: JunctionSpec[] = (() => {
  const note = { key: 'noteId', entity: 'Note', ownedIds: ownedNoteIds };
  const label = { key: 'labelId', entity: 'Label', ownedIds: ownedLabelIds };
  const interaction = { key: 'interactionId', entity: 'Interaction', ownedIds: ownedInteractionIds };
  const importantDate = { key: 'importantDateId', entity: 'ImportantDate', ownedIds: ownedImportantDateIds };
  const mentionedPerson = { key: 'mentionedPersonId', entity: 'Person', ownedIds: contactPersonIds };
  return [
    { single: 'noteTag', plural: 'noteTags', scopeFk: note, fks: [note, label] },
    { single: 'noteMention', plural: 'noteMentions', scopeFk: note, fks: [note, mentionedPerson] },
    { single: 'interactionTag', plural: 'interactionTags', scopeFk: interaction, fks: [interaction, label] },
    {
      single: 'importantDateTag',
      plural: 'importantDateTags',
      scopeFk: importantDate,
      fks: [importantDate, label],
    },
  ];
})();

// personLabels has its own userId column (scoped by the sweeps above), but its
// foreign keys still deserve validation on create.
const CREATE_FK_CHECKS: Record<string, JunctionFk[]> = {
  CreatePersonLabelInput: [
    { key: 'personId', entity: 'Person', ownedIds: contactPersonIds },
    { key: 'labelId', entity: 'Label', ownedIds: ownedLabelIds },
  ],
};
for (const spec of JUNCTIONS) {
  CREATE_FK_CHECKS[`Create${cap(spec.single)}Input`] = spec.fks;
}

async function assertFksOwned(db: AnyDB, userId: string, rows: Filter[], fks: JunctionFk[]): Promise<void> {
  for (const fk of fks) {
    const needed = [...new Set(rows.map((row) => row[fk.key]).filter((v): v is string => typeof v === 'string'))];
    if (needed.length === 0) continue;
    const owned = new Set(await fk.ownedIds(db, userId));
    for (const id of needed) {
      if (!owned.has(id)) notFound(fk.entity);
    }
  }
}

function sweepCreateFkChecks(schema: GraphQLSchema): void {
  const mutationType = schema.getMutationType();
  if (!mutationType) return;
  for (const field of Object.values(mutationType.getFields())) {
    const valuesArg = field.args.find((a) => a.name === 'values');
    if (!valuesArg) continue;
    const fks = CREATE_FK_CHECKS[getNamedType(valuesArg.type).name];
    if (!fks) continue;
    const orig = field.resolve ?? defaultFieldResolver;
    field.resolve = async (parent, args, ctx: Context, info) => {
      const userId = requireAuth(ctx);
      const rows: Filter[] = Array.isArray(args.values) ? args.values : [args.values];
      await assertFksOwned(ctx.db as AnyDB, userId, rows, fks);
      return orig(parent, args, ctx, info);
    };
  }
}

function overrideJunctionTables(schema: GraphQLSchema): void {
  const qf = (schema.getQueryType() as GraphQLObjectType).getFields();
  const mf = (schema.getMutationType() as GraphQLObjectType).getFields();

  for (const spec of JUNCTIONS) {
    const scopeByParent =
      (fieldName: string, emptyResult: unknown, validateSet = false) =>
      (fields: Record<string, { resolve?: unknown }>) => {
        const field = mustField(fields, fieldName) as {
          // biome-ignore lint/suspicious/noExplicitAny: GraphQL field resolver compat
          resolve?: (...a: any[]) => unknown;
        };
        const orig = field.resolve ?? defaultFieldResolver;
        field.resolve = async (parent: unknown, args: Filter, ctx: Context, info: unknown) => {
          const userId = requireAuth(ctx);
          const db = ctx.db as AnyDB;
          if (validateSet && args.set && typeof args.set === 'object') {
            await assertFksOwned(db, userId, [args.set as Filter], spec.fks);
          }
          const parentIds = await spec.scopeFk.ownedIds(db, userId);
          const where = intersectParentScope(args.where, spec.scopeFk.key, parentIds);
          if (where === null) return emptyResult;
          return orig(parent, { ...args, where }, ctx, info);
        };
      };

    scopeByParent(spec.plural, [])(qf);
    scopeByParent(spec.single, null)(qf);
    scopeByParent(`${spec.plural}Aggregate`, { count: 0 })(qf);
    scopeByParent(`update${cap(spec.single)}`, [], true)(mf);
    scopeByParent(`delete${cap(spec.single)}`, [])(mf);
    // create mutations are handled by sweepCreateFkChecks
  }
}

// ── users table: restrict queries to self, forbid generated mutations ────────

function lockDownUsers(schema: GraphQLSchema): void {
  const qf = (schema.getQueryType() as GraphQLObjectType).getFields();
  const mf = (schema.getMutationType() as GraphQLObjectType).getFields();

  for (const name of ['users', 'user', 'usersAggregate']) {
    const field = mustField(qf, name) as {
      // biome-ignore lint/suspicious/noExplicitAny: GraphQL field resolver compat
      resolve?: (...a: any[]) => unknown;
    };
    const orig = field.resolve ?? defaultFieldResolver;
    field.resolve = (parent: unknown, args: Filter, ctx: Context, info: unknown) => {
      const userId = requireAuth(ctx);
      return orig(parent, { ...args, where: mergeScope(args.where, { id: { eq: userId } }) }, ctx, info);
    };
  }

  // User lifecycle belongs to the auth flow (magic links), not generated CRUD.
  for (const name of ['createUser', 'createUsers', 'updateUser', 'deleteUser']) {
    mustField(mf, name).resolve = () => forbidden();
  }
}

// passwordHash must never cross the API — remove it from every generated
// object type (User, its min/max aggregates), input (inserts, filters,
// orderBy), and enum (distinct-on columns), so it can be neither read nor
// probed through filters.
function hidePasswordHash(schema: GraphQLSchema): void {
  for (const type of Object.values(schema.getTypeMap())) {
    if (type instanceof GraphQLObjectType || type instanceof GraphQLInputObjectType) {
      const fields = type.getFields() as Record<string, unknown>;
      if ('passwordHash' in fields) delete fields.passwordHash;
    } else if (type instanceof GraphQLEnumType) {
      const values = type.getValues();
      if (!values.some((v) => v.name === 'passwordHash')) continue;
      // graphql-js memoizes _values on first getValues() and builds the
      // lookup maps lazily; filter the former and reset the latter.
      const internals = type as unknown as {
        _values: unknown[];
        _valueLookup: unknown;
        _nameLookup: unknown;
      };
      internals._values = values.filter((v) => v.name !== 'passwordHash');
      internals._valueLookup = null;
      internals._nameLookup = null;
    }
  }
}

// ── GraphQL → Drizzle filter/sort translators (persons join scoping) ─────────

type FieldFilter = Record<string, unknown>;
type PersonsWhere = {
  OR?: PersonsWhere[];
  AND?: PersonsWhere[];
  [key: string]: FieldFilter | PersonsWhere[] | undefined;
};
type PersonsOrderBy = Record<string, { direction: 'asc' | 'desc'; priority: number }>;

const PERSON_COLUMNS: Record<string, Column> = {
  id: dbSchema.persons.id as unknown as Column,
  firstName: dbSchema.persons.firstName as unknown as Column,
  lastName: dbSchema.persons.lastName as unknown as Column,
  email: dbSchema.persons.email as unknown as Column,
  createdAt: dbSchema.persons.createdAt as unknown as Column,
  updatedAt: dbSchema.persons.updatedAt as unknown as Column,
};

function buildFieldCondition(col: Column, filter: FieldFilter): SQL | undefined {
  const c = col as unknown as SQL;
  const conditions: SQL[] = [];
  if (filter.eq !== undefined) conditions.push(eq(c, filter.eq));
  if (filter.ne !== undefined) conditions.push(ne(c, filter.ne));
  if (filter.ilike !== undefined) conditions.push(ilike(c, filter.ilike as string));
  if (filter.like !== undefined) conditions.push(like(c, filter.like as string));
  if (filter.gt !== undefined) conditions.push(gt(c, filter.gt));
  if (filter.gte !== undefined) conditions.push(gte(c, filter.gte));
  if (filter.lt !== undefined) conditions.push(lt(c, filter.lt));
  if (filter.lte !== undefined) conditions.push(lte(c, filter.lte));
  if (filter.isNull === true) conditions.push(isNull(c));
  if (filter.isNotNull === true) conditions.push(isNotNull(c));
  if (Array.isArray(filter.inArray)) conditions.push(inArray(c, filter.inArray));
  if (Array.isArray(filter.notInArray)) conditions.push(notInArray(c, filter.notInArray));
  return conditions.length > 0 ? and(...conditions) : undefined;
}

export function buildPersonsWhere(where: PersonsWhere): SQL | undefined {
  const parts: SQL[] = [];

  if (where.OR) {
    const orParts = where.OR.map(buildPersonsWhere).filter(Boolean) as SQL[];
    if (orParts.length > 0) parts.push(or(...orParts) as SQL);
  }
  if (where.AND) {
    const andParts = where.AND.map(buildPersonsWhere).filter(Boolean) as SQL[];
    if (andParts.length > 0) parts.push(and(...andParts) as SQL);
  }

  for (const [key, filter] of Object.entries(where)) {
    if (key === 'OR' || key === 'AND') continue;
    const col = PERSON_COLUMNS[key];
    if (!col || !filter || typeof filter !== 'object') continue;
    const cond = buildFieldCondition(col, filter as FieldFilter);
    if (cond) parts.push(cond);
  }

  return parts.length > 0 ? and(...parts) : undefined;
}

export function buildPersonsOrderBy(orderBy: PersonsOrderBy): SQL[] {
  return Object.entries(orderBy)
    .filter(([key]) => PERSON_COLUMNS[key])
    .sort(([, a], [, b]) => (a.priority ?? 0) - (b.priority ?? 0))
    .map(([key, { direction }]) => {
      const col = PERSON_COLUMNS[key] as unknown as Column;
      return direction === 'desc' ? desc(col) : asc(col);
    });
}

// ── persons: scoped via the user_persons join ────────────────────────────────
//
// persons rows are shared between users; visibility and the per-user context
// fields (avatarPath etc.) come from user_persons, so these resolvers run a
// join instead of delegating to the generated ones.

function overridePersonsResolvers(schema: GraphQLSchema): void {
  const queryType = schema.getType('Query') as GraphQLObjectType;
  const mutationType = schema.getType('Mutation') as GraphQLObjectType;
  const qf = queryType.getFields();
  const mf = mutationType.getFields();

  const personSelect = {
    id: dbSchema.persons.id,
    firstName: dbSchema.persons.firstName,
    lastName: dbSchema.persons.lastName,
    email: dbSchema.persons.email,
    createdAt: dbSchema.persons.createdAt,
    updatedAt: dbSchema.persons.updatedAt,
    // user-specific context fields surfaced via the user_persons join
    avatarPath: dbSchema.userPersons.avatarPath,
    contactFrequency: dbSchema.userPersons.contactFrequency,
    howWeMet: dbSchema.userPersons.howWeMet,
    firstMetDate: dbSchema.userPersons.firstMetDate,
  };

  // persons() — scoped to persons the user has added to their contacts
  qf.persons.resolve = async (_parent: unknown, args: Record<string, unknown>, ctx: Context) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;

    const userJoin = and(
      eq(dbSchema.userPersons.personId, dbSchema.persons.id),
      eq(dbSchema.userPersons.userId, userId),
    );
    const whereFilter = args.where ? buildPersonsWhere(args.where as PersonsWhere) : undefined;
    const orderByClauses = args.orderBy ? buildPersonsOrderBy(args.orderBy as PersonsOrderBy) : [];

    return db
      .select(personSelect)
      .from(dbSchema.persons)
      .innerJoin(dbSchema.userPersons, userJoin)
      .where(whereFilter ? and(whereFilter) : undefined)
      .orderBy(
        ...(orderByClauses.length > 0
          ? orderByClauses
          : [asc(dbSchema.persons.lastName), asc(dbSchema.persons.firstName)]),
      )
      .limit((args.limit as number | undefined) ?? 1000)
      .offset((args.offset as number | undefined) ?? 0);
  };

  // person(where) — single, must be in user's contacts
  qf.person.resolve = async (_parent: unknown, args: { where?: { id?: { eq?: string } } }, ctx: Context) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;
    const id = args.where?.id?.eq;
    if (!id) return null;
    const rows = await db
      .select(personSelect)
      .from(dbSchema.persons)
      .innerJoin(
        dbSchema.userPersons,
        and(eq(dbSchema.userPersons.personId, dbSchema.persons.id), eq(dbSchema.userPersons.userId, userId)),
      )
      .where(eq(dbSchema.persons.id, id))
      .limit(1);
    return rows[0] ?? null;
  };

  // personsAggregate — delegate with a user_persons relation filter
  {
    const field = mustField(qf, 'personsAggregate') as {
      // biome-ignore lint/suspicious/noExplicitAny: GraphQL field resolver compat
      resolve?: (...a: any[]) => unknown;
    };
    const orig = field.resolve ?? defaultFieldResolver;
    field.resolve = (parent: unknown, args: Filter, ctx: Context, info: unknown) => {
      const userId = requireAuth(ctx);
      const where = mergeScope(args.where, { userPersons: { some: { userId: { eq: userId } } } });
      return orig(parent, { ...args, where }, ctx, info);
    };
  }

  // createPerson — creates person + auto-creates user_persons link
  mf.createPerson.resolve = async (_parent: unknown, args: { values: Record<string, unknown> }, ctx: Context) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;

    let personId: string;

    // Attempt insert; on unique-email conflict, reuse existing person
    try {
      const [inserted] = await db
        .insert(dbSchema.persons)
        .values({ ...args.values })
        .returning({ id: dbSchema.persons.id });
      if (!inserted) throw new GraphQLError('Failed to create person');
      personId = inserted.id;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('unique') && !msg.includes('duplicate')) throw err;
      // Email collision — find the existing person
      const [existing] = await db
        .select({ id: dbSchema.persons.id })
        .from(dbSchema.persons)
        .where(eq(dbSchema.persons.email, args.values.email as string));
      if (!existing) throw err;
      personId = existing.id;
    }

    // Ensure user_persons link exists (idempotent)
    await db.insert(dbSchema.userPersons).values({ userId, personId }).onConflictDoNothing();

    const [person] = await db.select().from(dbSchema.persons).where(eq(dbSchema.persons.id, personId));
    return person;
  };

  // updatePerson — only rows the user has in their contacts
  mf.updatePerson.resolve = async (
    _parent: unknown,
    args: { set: Record<string, unknown>; where?: Record<string, unknown> },
    ctx: Context,
  ) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;

    // Collect personIds the user is allowed to update
    const userRows: Array<{ personId: string }> = await db
      .select({ personId: dbSchema.userPersons.personId })
      .from(dbSchema.userPersons)
      .where(eq(dbSchema.userPersons.userId, userId));

    const allowedIds = userRows.map((r) => r.personId);
    if (allowedIds.length === 0) return [];

    // We can't easily merge complex GraphQL where args with our id list here,
    // so we restrict to the id in where.id.eq if present, or all allowed ids.
    const targetId = (args.where as { id?: { eq?: string } } | undefined)?.id?.eq;
    const ids = targetId ? (allowedIds.includes(targetId) ? [targetId] : []) : allowedIds;
    if (ids.length === 0) return [];

    const results = [];
    for (const id of ids) {
      const [updated] = await db.update(dbSchema.persons).set(args.set).where(eq(dbSchema.persons.id, id)).returning();
      if (updated) results.push(updated);
    }
    return results;
  };

  // deletePerson — removes from user's contacts (not global registry)
  mf.deletePerson.resolve = async (_parent: unknown, args: { where?: Record<string, unknown> }, ctx: Context) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;
    const targetId = (args.where as { id?: { eq?: string } } | undefined)?.id?.eq;
    if (!targetId) return [];

    // Check user has this person
    const [link] = await db
      .select({ personId: dbSchema.userPersons.personId })
      .from(dbSchema.userPersons)
      .where(and(eq(dbSchema.userPersons.userId, userId), eq(dbSchema.userPersons.personId, targetId)));

    if (!link) return [];

    // Remove from user's contacts; leave the shared person row intact
    await db
      .delete(dbSchema.userPersons)
      .where(and(eq(dbSchema.userPersons.userId, userId), eq(dbSchema.userPersons.personId, targetId)));

    const [person] = await db.select().from(dbSchema.persons).where(eq(dbSchema.persons.id, targetId));
    return person ? [person] : [];
  };
}

// ── me and user_persons resolvers ────────────────────────────────────────────

function addUserPersonsResolvers(schema: GraphQLSchema): void {
  const queryType = schema.getType('Query') as GraphQLObjectType;
  const mutationType = schema.getType('Mutation') as GraphQLObjectType;
  const qf = queryType.getFields();
  const mf = mutationType.getFields();

  qf.me.resolve = async (_parent: unknown, _args: unknown, ctx: Context) => {
    if (!ctx.userId) return null;
    const db = ctx.db as AnyDB;
    const [user] = await db
      .select({
        id: dbSchema.users.id,
        email: dbSchema.users.email,
        name: dbSchema.users.name,
        createdAt: dbSchema.users.createdAt,
        updatedAt: dbSchema.users.updatedAt,
      })
      .from(dbSchema.users)
      .where(eq(dbSchema.users.id, ctx.userId));
    return user ?? null;
  };

  qf.myPersonContext.resolve = async (_parent: unknown, args: { personId: string }, ctx: Context) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;
    const [row] = await db
      .select()
      .from(dbSchema.userPersons)
      .where(and(eq(dbSchema.userPersons.userId, userId), eq(dbSchema.userPersons.personId, args.personId)));
    return row ?? null;
  };

  mf.addPersonToMyContacts.resolve = async (_parent: unknown, args: { personId: string }, ctx: Context) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;

    const [person] = await db
      .select({ id: dbSchema.persons.id })
      .from(dbSchema.persons)
      .where(eq(dbSchema.persons.id, args.personId));
    if (!person) notFound('Person');

    await db.insert(dbSchema.userPersons).values({ userId, personId: args.personId }).onConflictDoNothing();

    const [row] = await db
      .select()
      .from(dbSchema.userPersons)
      .where(and(eq(dbSchema.userPersons.userId, userId), eq(dbSchema.userPersons.personId, args.personId)));
    return row;
  };

  mf.updateMyPersonContext.resolve = async (
    _parent: unknown,
    args: {
      personId: string;
      contactFrequency?: string | null;
      howWeMet?: string | null;
      firstMetDate?: string | null;
      avatarPath?: string | null;
    },
    ctx: Context,
  ) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;
    const { personId, ...updates } = args;

    const defined = Object.fromEntries(Object.entries(updates).filter(([, v]) => v !== undefined));

    const [row] = await db
      .update(dbSchema.userPersons)
      .set(defined)
      .where(and(eq(dbSchema.userPersons.userId, userId), eq(dbSchema.userPersons.personId, personId)))
      .returning();

    if (!row) notFound('UserPerson');
    return row;
  };

  mf.removePersonFromMyContacts.resolve = async (_parent: unknown, args: { personId: string }, ctx: Context) => {
    const userId = requireAuth(ctx);
    const db = ctx.db as AnyDB;
    await db
      .delete(dbSchema.userPersons)
      .where(and(eq(dbSchema.userPersons.userId, userId), eq(dbSchema.userPersons.personId, args.personId)));
    return true;
  };
}

// ── Main export ──────────────────────────────────────────────────────────────

export function applyUserScopeExtensions(schema: GraphQLSchema): GraphQLSchema {
  const extendedSchema = extendSchema(schema, USER_SCOPE_SDL);

  // Structural sweeps: scope/inject userId on every generated field that
  // touches a user-owned table — root queries, aggregates, mutations, and
  // relation fields alike.
  sweepUserIdScope(extendedSchema);
  sweepUserIdInjection(extendedSchema);
  sweepCreateFkChecks(extendedSchema);

  // Junction tables without a userId column — scoped via their parent rows.
  overrideJunctionTables(extendedSchema);

  // users — queries restricted to self; generated mutations forbidden.
  lockDownUsers(extendedSchema);
  hidePasswordHash(extendedSchema);

  // persons — special: scoped via user_persons join
  overridePersonsResolvers(extendedSchema);

  // Extended Person fields (avatarPath etc.) come from the user_persons join
  // already embedded in the parent object by overridePersonsResolvers.
  const personType = extendedSchema.getType('Person') as GraphQLObjectType;
  const personFields = personType.getFields();
  for (const field of ['avatarPath', 'contactFrequency', 'howWeMet', 'firstMetDate'] as const) {
    personFields[field].resolve = (parent: Record<string, unknown>) => parent[field] ?? null;
  }

  // user_persons + me queries/mutations
  addUserPersonsResolvers(extendedSchema);

  return extendedSchema;
}
