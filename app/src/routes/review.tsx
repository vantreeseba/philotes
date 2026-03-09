import { useQuery } from '@apollo/client';
import { createFileRoute, Link } from '@tanstack/react-router';
import { CalendarCheck, CheckSquare, Heart, Users } from 'lucide-react';
import { graphql } from '@/__generated__/gql.js';
import { Avatar } from '@/components/ui/avatar.js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.js';
import { Spinner } from '@/components/ui/spinner.tsx';

// ---------------------------------------------------------------------------
// GraphQL
// ---------------------------------------------------------------------------

const GET_WEEKLY_REVIEW = graphql(`
  query WeeklyReview {
    persons {
      id
      firstName
      lastName
      avatarPath
      contactFrequency
      createdAt
      importantDates {
        id
        name
        date
        recurrence
      }
      tasks {
        id
        title
        dueAt
        completedAt
        personId
      }
      interactions(
        orderBy: { occurredAt: { direction: desc, priority: 1 } }
        limit: 1
      ) {
        occurredAt
      }
    }
  }
`);

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

export const Route = createFileRoute('/review')({
  component: WeeklyReviewPage,
});

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ReviewPerson = {
  id: string;
  firstName: string;
  lastName: string;
  avatarPath?: string | null;
  contactFrequency?: string | null;
  createdAt: string;
  importantDates: Array<{
    id: string;
    name: string;
    date: string;
    recurrence?: string | null;
  }>;
  tasks: Array<{
    id: string;
    title: string;
    dueAt?: string | null;
    completedAt?: string | null;
    personId: string;
  }>;
  interactions: Array<{
    occurredAt: string;
  }>;
};

type OverduePerson = ReviewPerson & {
  overdueByDays: number;
  lastContactedAt: string | null;
};

type UpcomingDate = {
  id: string;
  name: string;
  daysUntil: number;
  personId: string;
  personFirstName: string;
  personLastName: string;
};

type OpenTask = {
  id: string;
  title: string;
  dueAt: string | null;
  personId: string;
  personFirstName: string;
  personLastName: string;
  isOverdue: boolean;
};

// ---------------------------------------------------------------------------
// Date utilities
// ---------------------------------------------------------------------------

const FREQUENCY_DAYS: Record<string, number> = {
  weekly: 7,
  monthly: 30,
  quarterly: 90,
  yearly: 365,
};

function todayMidnight(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function daysBetween(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

function computeOverdueByDays(contactFrequency: string, lastContactedAt: string | null): number {
  const periodDays = FREQUENCY_DAYS[contactFrequency] ?? 30;
  if (!lastContactedAt) {
    return periodDays;
  }
  const daysSince = Math.floor((Date.now() - new Date(lastContactedAt).getTime()) / (1000 * 60 * 60 * 24));
  return daysSince - periodDays;
}

/**
 * Given a YYYY-MM-DD date string and a recurrence type, returns the number of
 * days until the next occurrence on or after today.
 * Returns null if the event will never recur (one-time already passed).
 */
function daysUntilNextOccurrence(dateStr: string, recurrence: string | null | undefined): number | null {
  const t = todayMidnight();
  const [yearStr, monthStr, dayStr] = dateStr.split('-');
  const storedYear = Number(yearStr);
  const month = Number(monthStr) - 1;
  const day = Number(dayStr);

  if (!recurrence) {
    const stored = new Date(storedYear, month, day);
    const diff = daysBetween(t, stored);
    return diff >= 0 ? diff : null;
  }

  if (recurrence === 'yearly') {
    const thisYear = new Date(t.getFullYear(), month, day);
    const diff = daysBetween(t, thisYear);
    if (diff >= 0) return diff;
    return daysBetween(t, new Date(t.getFullYear() + 1, month, day));
  }

  if (recurrence === 'monthly') {
    const thisMonth = new Date(t.getFullYear(), t.getMonth(), day);
    const diff = daysBetween(t, thisMonth);
    if (diff >= 0) return diff;
    return daysBetween(t, new Date(t.getFullYear(), t.getMonth() + 1, day));
  }

  if (recurrence === 'weekly') {
    const storedDate = new Date(storedYear, month, day);
    const targetDow = storedDate.getDay();
    const todayDow = t.getDay();
    return (targetDow - todayDow + 7) % 7;
  }

  return null;
}

// ---------------------------------------------------------------------------
// Derived data computations
// ---------------------------------------------------------------------------

const MAX_OVERDUE_SHOWN = 5;
const UPCOMING_WINDOW_DAYS = 14;
const DORMANT_THRESHOLD_DAYS = 365;

function computeOverdueContacts(persons: ReviewPerson[]): OverduePerson[] {
  return persons
    .filter((p) => Boolean(p.contactFrequency))
    .map((p) => ({
      ...p,
      lastContactedAt: p.interactions[0]?.occurredAt ?? null,
      overdueByDays: computeOverdueByDays(p.contactFrequency ?? '', p.interactions[0]?.occurredAt ?? null),
    }))
    .filter((p) => p.overdueByDays >= 0)
    .sort((a, b) => b.overdueByDays - a.overdueByDays)
    .slice(0, MAX_OVERDUE_SHOWN);
}

function computeUpcomingDates(persons: ReviewPerson[]): UpcomingDate[] {
  const results: UpcomingDate[] = [];

  for (const person of persons) {
    for (const importantDate of person.importantDates) {
      const daysUntil = daysUntilNextOccurrence(importantDate.date, importantDate.recurrence);
      if (daysUntil === null || daysUntil > UPCOMING_WINDOW_DAYS) continue;
      results.push({
        id: importantDate.id,
        name: importantDate.name,
        daysUntil,
        personId: person.id,
        personFirstName: person.firstName,
        personLastName: person.lastName,
      });
    }
  }

  return results.sort((a, b) => a.daysUntil - b.daysUntil);
}

function computeOpenTasks(persons: ReviewPerson[]): OpenTask[] {
  const now = Date.now();
  const sevenDaysFromNow = now + 7 * 24 * 60 * 60 * 1000;
  const results: OpenTask[] = [];

  for (const person of persons) {
    for (const task of person.tasks) {
      if (task.completedAt) continue;

      const dueAt = task.dueAt ? new Date(task.dueAt).getTime() : null;
      const isOverdue = dueAt !== null && dueAt < now;
      const isDueThisWeek = dueAt !== null && dueAt <= sevenDaysFromNow;

      if (!isOverdue && !isDueThisWeek) continue;

      results.push({
        id: task.id,
        title: task.title,
        dueAt: task.dueAt ?? null,
        personId: person.id,
        personFirstName: person.firstName,
        personLastName: person.lastName,
        isOverdue,
      });
    }
  }

  return results.sort((a, b) => {
    // Overdue first, then by due date
    if (a.isOverdue && !b.isOverdue) return -1;
    if (!a.isOverdue && b.isOverdue) return 1;
    const aTime = a.dueAt ? new Date(a.dueAt).getTime() : 0;
    const bTime = b.dueAt ? new Date(b.dueAt).getTime() : 0;
    return aTime - bTime;
  });
}

function computeMostDormantPerson(persons: ReviewPerson[]): (ReviewPerson & { daysSinceContact: number }) | null {
  const candidates = persons
    .map((p) => ({
      ...p,
      daysSinceContact: p.interactions[0]?.occurredAt
        ? Math.floor((Date.now() - new Date(p.interactions[0].occurredAt).getTime()) / (1000 * 60 * 60 * 24))
        : Number.POSITIVE_INFINITY,
    }))
    .filter((p) => p.daysSinceContact >= DORMANT_THRESHOLD_DAYS);

  if (candidates.length === 0) return null;

  return candidates.reduce((most, current) => (current.daysSinceContact > most.daysSinceContact ? current : most));
}

// ---------------------------------------------------------------------------
// Display helpers
// ---------------------------------------------------------------------------

function formatOverdueLabel(days: number): string {
  if (days === 0) return 'Due today';
  if (days === 1) return '1 day overdue';
  if (days < 7) return `${days} days overdue`;
  const weeks = Math.floor(days / 7);
  if (weeks === 1) return '1 week overdue';
  if (weeks < 4) return `${weeks} weeks overdue`;
  const months = Math.floor(days / 30);
  if (months === 1) return '1 month overdue';
  return `${months} months overdue`;
}

function formatDaysUntil(days: number): string {
  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  return `In ${days} days`;
}

function formatDueDate(dueAt: string | null, isOverdue: boolean): string {
  if (!dueAt) return 'No due date';
  const date = new Date(dueAt);
  const formatted = date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });
  return isOverdue ? `${formatted} (overdue)` : formatted;
}

function formatMonthsAgo(days: number): string {
  if (days === Number.POSITIVE_INFINITY) return 'never';
  const months = Math.floor(days / 30);
  if (months < 2) return 'over a year';
  if (months < 12) return `${months} months`;
  const years = Math.floor(months / 12);
  return years === 1 ? 'over a year' : `over ${years} years`;
}

// ---------------------------------------------------------------------------
// Section components
// ---------------------------------------------------------------------------

function AllCaughtUp({ message }: { message: string }) {
  return <p className="text-sm text-muted-foreground italic py-1">{message} ✓</p>;
}

function ReachOutSection({ persons }: { persons: OverduePerson[] }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-base font-semibold">Reach Out</CardTitle>
        </div>
        <p className="text-xs text-muted-foreground">Contacts past their check-in window</p>
      </CardHeader>
      <CardContent>
        {persons.length === 0 ? (
          <AllCaughtUp message="You're all caught up here" />
        ) : (
          <ul className="space-y-2">
            {persons.map((p) => (
              <li key={p.id} className="flex items-center gap-3 rounded-md border border-border px-3 py-2 text-sm">
                <Avatar firstName={p.firstName} lastName={p.lastName} avatarPath={p.avatarPath} size="sm" />
                <div className="min-w-0 flex-1">
                  <Link to="/persons/$id" params={{ id: p.id }} className="font-medium hover:underline">
                    {p.firstName} {p.lastName}
                  </Link>
                  <p className="text-xs text-amber-600 dark:text-amber-400">{formatOverdueLabel(p.overdueByDays)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function ComingUpSection({ dates }: { dates: UpcomingDate[] }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <CalendarCheck className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-base font-semibold">Coming Up</CardTitle>
        </div>
        <p className="text-xs text-muted-foreground">Important dates in the next 14 days</p>
      </CardHeader>
      <CardContent>
        {dates.length === 0 ? (
          <AllCaughtUp message="No upcoming dates this fortnight" />
        ) : (
          <ul className="space-y-2">
            {dates.map((d) => (
              <li
                key={d.id}
                className="flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2 text-sm"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{d.name}</p>
                  <Link
                    to="/persons/$id"
                    params={{ id: d.personId }}
                    className="text-xs text-muted-foreground hover:underline"
                  >
                    {d.personFirstName} {d.personLastName}
                  </Link>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                    d.daysUntil === 0
                      ? 'bg-destructive/10 text-destructive'
                      : d.daysUntil <= 3
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {formatDaysUntil(d.daysUntil)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function OpenTasksSection({ tasks }: { tasks: OpenTask[] }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-base font-semibold">Open Tasks</CardTitle>
        </div>
        <p className="text-xs text-muted-foreground">Tasks due this week or overdue</p>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <AllCaughtUp message="No tasks due this week" />
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2 text-sm"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">{task.title}</p>
                  <Link
                    to="/persons/$id"
                    params={{ id: task.personId }}
                    className="text-xs text-muted-foreground hover:underline"
                  >
                    {task.personFirstName} {task.personLastName}
                  </Link>
                </div>
                <span className={`shrink-0 text-xs ${task.isOverdue ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {formatDueDate(task.dueAt, task.isOverdue)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function DormantTieSection({ person }: { person: (ReviewPerson & { daysSinceContact: number }) | null }) {
  return (
    <Card className="border-muted bg-muted/30">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-base font-semibold">Someone to Reconnect With</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {!person ? (
          <AllCaughtUp message="No dormant connections right now" />
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar
                firstName={person.firstName}
                lastName={person.lastName}
                avatarPath={person.avatarPath}
                size="md"
              />
              <div>
                <p className="font-medium text-sm">
                  {person.firstName} {person.lastName}
                </p>
                <p className="text-xs text-muted-foreground">
                  Last contact:{' '}
                  {person.daysSinceContact === Number.POSITIVE_INFINITY
                    ? 'never recorded'
                    : `${formatMonthsAgo(person.daysSinceContact)} ago`}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You haven&apos;t spoken to {person.firstName} in {formatMonthsAgo(person.daysSinceContact)}. Reconnecting
              is easier than it feels.
            </p>
            <Link
              to="/persons/$id"
              params={{ id: person.id }}
              className="inline-flex items-center rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              View {person.firstName}&apos;s profile
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function WeeklyReviewPage() {
  const { data, loading, error } = useQuery(GET_WEEKLY_REVIEW);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive text-sm">Error loading review data: {error.message}</p>;
  }

  const persons = (data?.persons ?? []) as ReviewPerson[];

  const overdueContacts = computeOverdueContacts(persons);
  const upcomingDates = computeUpcomingDates(persons);
  const openTasks = computeOpenTasks(persons);
  const dormantPerson = computeMostDormantPerson(persons);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="font-bold text-2xl">Weekly Review</h1>
        <p className="text-muted-foreground text-sm mt-1">A moment to tend your relationships.</p>
      </div>

      <div className="space-y-4">
        <ReachOutSection persons={overdueContacts} />
        <ComingUpSection dates={upcomingDates} />
        <OpenTasksSection tasks={openTasks} />
        <DormantTieSection person={dormantPerson} />
      </div>
    </div>
  );
}
