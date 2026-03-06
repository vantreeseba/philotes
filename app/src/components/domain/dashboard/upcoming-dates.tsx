import { useQuery } from '@apollo/client';
import { Link } from '@tanstack/react-router';
import { CalendarDays } from 'lucide-react';
import { graphql } from '@/__generated__/gql.js';
import { Card, CardContent } from '@/components/ui/card.js';
import { Spinner } from '@/components/ui/spinner.tsx';

// ---------------------------------------------------------------------------
// GraphQL
// ---------------------------------------------------------------------------

const GET_UPCOMING_DATES = graphql(`
  query GetUpcomingDates {
    importantDates {
      id
      name
      description
      date
      recurrence
      person {
        id
        firstName
        lastName
      }
    }
  }
`);

// ---------------------------------------------------------------------------
// Recurrence logic
//
// For each recurrence type we compute how many days until the *next*
// occurrence on or after today, then filter to within the lookahead window.
//
// null / undefined  →  one-time: show only if the stored date is in the future
//                       within the lookahead window.
// "yearly"          →  same month + day each year (e.g. birthdays).
// "monthly"         →  same day-of-month each month.
// "weekly"          →  same day-of-week each week.
// ---------------------------------------------------------------------------

/** Return today at midnight in local time. */
function today(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Days between two midnight-normalised dates (can be negative). */
function dayDiff(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

/**
 * Given a stored YYYY-MM-DD string and a recurrence type, return the number
 * of days until the next occurrence on or after today.
 * Returns null if the event will never occur again (one-time already passed).
 */
function daysUntilNext(dateStr: string, recurrence: string | null | undefined): number | null {
  const t = today();
  const [yearStr, monthStr, dayStr] = dateStr.split('-');
  const storedYear = Number(yearStr);
  const month = Number(monthStr) - 1; // 0-indexed for Date constructor
  const day = Number(dayStr);

  if (!recurrence) {
    // One-time event: only show if the stored date is today or in the future.
    const stored = new Date(storedYear, month, day);
    const diff = dayDiff(t, stored);
    return diff >= 0 ? diff : null;
  }

  if (recurrence === 'yearly') {
    // Next occurrence this year.
    const thisYear = new Date(t.getFullYear(), month, day);
    const diff = dayDiff(t, thisYear);
    if (diff >= 0) return diff;
    // Already passed — next year.
    return dayDiff(t, new Date(t.getFullYear() + 1, month, day));
  }

  if (recurrence === 'monthly') {
    // Next occurrence this month.
    const thisMonth = new Date(t.getFullYear(), t.getMonth(), day);
    const diff = dayDiff(t, thisMonth);
    if (diff >= 0) return diff;
    // Already passed — next month.
    return dayDiff(t, new Date(t.getFullYear(), t.getMonth() + 1, day));
  }

  if (recurrence === 'weekly') {
    const storedDate = new Date(storedYear, month, day);
    const targetDow = storedDate.getDay(); // 0 = Sun
    const todayDow = t.getDay();
    const daysAhead = (targetDow - todayDow + 7) % 7;
    return daysAhead; // 0 = today (same day of week)
  }

  return null;
}

/**
 * Return the actual Date object of the next occurrence on or after today.
 * Returns null for one-time events that have already passed.
 */
function nextOccurrenceDate(dateStr: string, recurrence: string | null | undefined): Date | null {
  const t = today();
  const [yearStr, monthStr, dayStr] = dateStr.split('-');
  const storedYear = Number(yearStr);
  const month = Number(monthStr) - 1;
  const day = Number(dayStr);

  if (!recurrence) {
    const stored = new Date(storedYear, month, day);
    return stored >= t ? stored : null;
  }

  if (recurrence === 'yearly') {
    const thisYear = new Date(t.getFullYear(), month, day);
    if (thisYear >= t) return thisYear;
    return new Date(t.getFullYear() + 1, month, day);
  }

  if (recurrence === 'monthly') {
    const thisMonth = new Date(t.getFullYear(), t.getMonth(), day);
    if (thisMonth >= t) return thisMonth;
    return new Date(t.getFullYear(), t.getMonth() + 1, day);
  }

  if (recurrence === 'weekly') {
    const storedDate = new Date(storedYear, month, day);
    const targetDow = storedDate.getDay();
    const todayDow = t.getDay();
    const daysAhead = (targetDow - todayDow + 7) % 7;
    const next = new Date(t);
    next.setDate(t.getDate() + daysAhead);
    return next;
  }

  return null;
}

// ---------------------------------------------------------------------------
// Display helpers
// ---------------------------------------------------------------------------

const RECURRENCE_LABELS: Record<string, string> = {
  yearly: 'Yearly',
  monthly: 'Monthly',
  weekly: 'Weekly',
};

function formatDaysUntil(days: number): string {
  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  return `In ${days} days`;
}

function formatDate(dateStr: string): string {
  const [, monthStr, dayStr] = dateStr.split('-');
  return new Date(2000, Number(monthStr) - 1, Number(dayStr)).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });
}

function formatNextDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const LOOKAHEAD_DAYS = 30;

export function UpcomingDates() {
  const { data, loading, error } = useQuery(GET_UPCOMING_DATES);

  const upcoming = (data?.importantDates ?? [])
    .flatMap((d) => {
      if (!d.person) return [];
      const days = daysUntilNext(d.date, d.recurrence);
      if (days === null || days > LOOKAHEAD_DAYS) return [];
      const nextDate = nextOccurrenceDate(d.date, d.recurrence);
      return [{ ...d, daysUntil: days, nextDate }];
    })
    .sort((a, b) => a.daysUntil - b.daysUntil);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
          <h2 className="font-semibold text-base">Upcoming Dates</h2>
          <span className="ml-auto text-xs text-muted-foreground">Next {LOOKAHEAD_DAYS} days</span>
        </div>

        {loading && <Spinner />}
        {error && <p className="text-sm text-destructive">Failed to load upcoming dates.</p>}

        {!loading && !error && upcoming.length === 0 && (
          <p className="text-sm text-muted-foreground">No upcoming dates in the next {LOOKAHEAD_DAYS} days.</p>
        )}

        {upcoming.length > 0 && (
          <ul className="space-y-2">
            {upcoming.map((d) => (
              <li
                key={d.id}
                className="flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2 text-sm"
              >
                <div className="min-w-0 flex-1">
                  <span className="font-medium">{d.name}</span>
                  {d.description && <span className="ml-2 text-xs text-muted-foreground">{d.description}</span>}
                  <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                    <Link to="/persons/$id" params={{ id: d.person!.id }} className="hover:underline">
                      {d.person!.firstName} {d.person!.lastName}
                    </Link>
                    <span>·</span>
                    {d.recurrence ? (
                      <>
                        <span title={`Original: ${formatDate(d.date)}`}>
                          {d.nextDate ? formatNextDate(d.nextDate) : formatDate(d.date)}
                        </span>
                        {RECURRENCE_LABELS[d.recurrence] && (
                          <span className="rounded-full bg-muted px-1.5 py-0.5 text-xs">
                            {RECURRENCE_LABELS[d.recurrence]}
                          </span>
                        )}
                      </>
                    ) : (
                      <span>{formatDate(d.date)}</span>
                    )}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                    d.daysUntil === 0
                      ? 'bg-destructive/10 text-destructive'
                      : d.daysUntil <= 7
                        ? 'bg-amber-500/10 text-amber-600'
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
