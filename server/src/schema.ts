import type { DB } from '@philotes/db';
import { db as dbInstance, schema as dbSchema } from '@philotes/db';
import { eq, or } from 'drizzle-orm';
import { extendSchema, type GraphQLObjectType, parse } from 'graphql';
import { buildSchema } from './vendor/drizzle-graphql/index.ts';

const { persons, personRelationships, importantDates } = dbSchema;

const { schema: drizzleSchema, entities } = buildSchema(dbInstance, {
  prefixes: {
    insert: 'create',
    update: 'update',
    delete: 'delete',
  },
  suffixes: {
    list: 's',
    single: '',
  },
});

// ---------------------------------------------------------------------------
// Extend Person with a unified `relationships` field
// ---------------------------------------------------------------------------

const extensionSDL = parse(`
  type PersonRelationshipEntry {
    id: String!
    type: String!
    relatedPersonId: String!
    relatedPersonFirstName: String!
    relatedPersonLastName: String!
  }

  extend type Person {
    relationships: [PersonRelationshipEntry!]!
  }
`);

const extendedSchema = extendSchema(drizzleSchema, extensionSDL);

// Attach resolver to Person.relationships
const personType = extendedSchema.getType('Person') as GraphQLObjectType;
const personFields = personType.getFields();

personFields.relationships.resolve = async (parent: { id: string }, _args: unknown, context: { db: DB }) => {
  // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
  const dbCtx = context.db as any;

  const rows: Array<{
    id: string;
    type: string;
    fromPersonId: string;
    toPersonId: string;
  }> = await dbCtx
    .select()
    .from(personRelationships)
    .where(or(eq(personRelationships.fromPersonId, parent.id), eq(personRelationships.toPersonId, parent.id)));

  if (rows.length === 0) return [];

  const relatedPersonIds = [
    ...new Set(rows.map((row) => (row.fromPersonId === parent.id ? row.toPersonId : row.fromPersonId))),
  ];

  const relatedPersonRows: Array<{
    id: string;
    firstName: string;
    lastName: string;
  }> = await dbCtx
    .select({
      id: persons.id,
      firstName: persons.firstName,
      lastName: persons.lastName,
    })
    .from(persons)
    .where(or(...relatedPersonIds.map((pid) => eq(persons.id, pid))));

  const personMap = new Map(relatedPersonRows.map((p) => [p.id, { firstName: p.firstName, lastName: p.lastName }]));

  return rows.flatMap((row) => {
    const relatedId = row.fromPersonId === parent.id ? row.toPersonId : row.fromPersonId;
    const related = personMap.get(relatedId);
    if (!related) return [];
    return [
      {
        id: row.id,
        type: row.type,
        relatedPersonId: relatedId,
        relatedPersonFirstName: related.firstName,
        relatedPersonLastName: related.lastName,
      },
    ];
  });
};

// ---------------------------------------------------------------------------
// Extend Query with upcomingDates field
// ---------------------------------------------------------------------------

const upcomingDatesExtensionSDL = parse(`
  type UpcomingDateEntry {
    id: String!
    name: String!
    description: String
    date: String!
    recurrence: String
    daysUntil: Int!
    nextDate: String!
    personId: String!
    personFirstName: String!
    personLastName: String!
  }

  extend type Query {
    upcomingDates(limit: Int, offset: Int, lookaheadDays: Int): [UpcomingDateEntry!]!
  }
`);

const fullyExtendedSchema = extendSchema(extendedSchema, upcomingDatesExtensionSDL);

// ---------------------------------------------------------------------------
// Recurrence helpers (server-side, mirrors client logic)
// ---------------------------------------------------------------------------

/** Return today at midnight in local time. */
function todayMidnight(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Days between two midnight-normalised dates (can be negative). */
function daysBetween(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

interface UpcomingDatesArgs {
  limit?: number | null;
  offset?: number | null;
  lookaheadDays?: number | null;
}

interface ImportantDateRow {
  id: string;
  name: string;
  description: string | null;
  date: string;
  recurrence: string | null;
  personId: string;
  personFirstName: string;
  personLastName: string;
}

interface UpcomingDateEntry {
  id: string;
  name: string;
  description: string | null;
  date: string;
  recurrence: string | null;
  daysUntil: number;
  nextDate: string;
  personId: string;
  personFirstName: string;
  personLastName: string;
}

/**
 * Format a Date as YYYY-MM-DD in local time.
 */
function toLocalDateString(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Compute days until next occurrence and the next occurrence date.
 * Returns null when the event is one-time and has already passed.
 */
function computeNextOccurrence(
  dateStr: string,
  recurrence: string | null,
): { daysUntil: number; nextDate: Date } | null {
  const t = todayMidnight();
  const [yearStr, monthStr, dayStr] = dateStr.split('-');
  const storedYear = Number(yearStr);
  const month = Number(monthStr) - 1; // 0-indexed for Date constructor
  const day = Number(dayStr);

  if (!recurrence) {
    const stored = new Date(storedYear, month, day);
    const daysUntil = daysBetween(t, stored);
    if (daysUntil < 0) return null;
    return { daysUntil, nextDate: stored };
  }

  if (recurrence === 'yearly') {
    const thisYear = new Date(t.getFullYear(), month, day);
    const diff = daysBetween(t, thisYear);
    if (diff >= 0) return { daysUntil: diff, nextDate: thisYear };
    const nextYear = new Date(t.getFullYear() + 1, month, day);
    return { daysUntil: daysBetween(t, nextYear), nextDate: nextYear };
  }

  if (recurrence === 'monthly') {
    const thisMonth = new Date(t.getFullYear(), t.getMonth(), day);
    const diff = daysBetween(t, thisMonth);
    if (diff >= 0) return { daysUntil: diff, nextDate: thisMonth };
    const nextMonth = new Date(t.getFullYear(), t.getMonth() + 1, day);
    return { daysUntil: daysBetween(t, nextMonth), nextDate: nextMonth };
  }

  if (recurrence === 'weekly') {
    const storedDate = new Date(storedYear, month, day);
    const targetDow = storedDate.getDay(); // 0 = Sun
    const todayDow = t.getDay();
    const daysAhead = (targetDow - todayDow + 7) % 7;
    const next = new Date(t);
    next.setDate(t.getDate() + daysAhead);
    return { daysUntil: daysAhead, nextDate: next };
  }

  return null;
}

// Attach resolver to Query.upcomingDates
const queryType = fullyExtendedSchema.getType('Query') as GraphQLObjectType;

queryType.getFields().upcomingDates.resolve = async (
  _parent: unknown,
  args: UpcomingDatesArgs,
  context: { db: DB },
) => {
  const lookaheadDays = args.lookaheadDays ?? 30;
  const offset = args.offset ?? 0;

  // biome-ignore lint/suspicious/noExplicitAny: drizzle-orm 1.0 column type compat
  const dbCtx = context.db as any;

  const rows: ImportantDateRow[] = await dbCtx
    .select({
      id: importantDates.id,
      name: importantDates.name,
      description: importantDates.description,
      date: importantDates.date,
      recurrence: importantDates.recurrence,
      personId: persons.id,
      personFirstName: persons.firstName,
      personLastName: persons.lastName,
    })
    .from(importantDates)
    .innerJoin(persons, eq(importantDates.personId, persons.id));

  const entries: UpcomingDateEntry[] = rows.flatMap((row) => {
    const occurrence = computeNextOccurrence(row.date, row.recurrence);
    if (occurrence === null || occurrence.daysUntil > lookaheadDays) return [];
    return [
      {
        id: row.id,
        name: row.name,
        description: row.description,
        date: row.date,
        recurrence: row.recurrence,
        daysUntil: occurrence.daysUntil,
        nextDate: toLocalDateString(occurrence.nextDate),
        personId: row.personId,
        personFirstName: row.personFirstName,
        personLastName: row.personLastName,
      },
    ];
  });

  entries.sort((a, b) => a.daysUntil - b.daysUntil);

  const paginated = entries.slice(offset);
  return args.limit != null ? paginated.slice(0, args.limit) : paginated;
};

export const schema = fullyExtendedSchema;
export { entities };
