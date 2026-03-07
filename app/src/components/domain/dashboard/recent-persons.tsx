import { useQuery } from '@apollo/client';
import { Link } from '@tanstack/react-router';
import { Users } from 'lucide-react';
import { graphql } from '@/__generated__/gql.js';
import { Card, CardContent } from '@/components/ui/card.js';
import { Spinner } from '@/components/ui/spinner.tsx';

// ---------------------------------------------------------------------------
// GraphQL
// ---------------------------------------------------------------------------

const GET_RECENT_PERSONS = graphql(`
  query GetRecentPersons {
    persons(orderBy: { createdAt: { direction: desc, priority: 1 } }) {
      id
      firstName
      lastName
      email
      createdAt
    }
  }
`);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const MAX_SHOWN = 5;

function formatRelativeTime(isoString: string): string {
  const created = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  }
  const months = Math.floor(diffDays / 30);
  return months === 1 ? '1 month ago' : `${months} months ago`;
}

/** Deterministic background color from a name string. */
function nameToColor(name: string): string {
  const colors = [
    '#e2a87a',
    '#7ab8e2',
    '#7ae2a8',
    '#e27ab8',
    '#a8e27a',
    '#b87ae2',
    '#e2c87a',
    '#7ae2c8',
    '#c87ae2',
    '#e27a7a',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return colors[hash % colors.length];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function RecentPersons() {
  const { data, loading, error } = useQuery(GET_RECENT_PERSONS);

  const persons = (data?.persons ?? []).slice(0, MAX_SHOWN);

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <h2 className="font-semibold text-base">Recently Added</h2>
          <span className="ml-auto text-xs text-muted-foreground">Last {MAX_SHOWN}</span>
        </div>

        {loading && <Spinner />}
        {error && <p className="text-sm text-destructive">Failed to load recent contacts.</p>}

        {!loading && !error && persons.length === 0 && (
          <p className="text-sm text-muted-foreground">No contacts added yet.</p>
        )}

        {persons.length > 0 && (
          <ul className="space-y-2">
            {persons.map((p) => {
              const initials = `${p.firstName[0] ?? ''}${p.lastName[0] ?? ''}`.toUpperCase();
              const bgColor = nameToColor(`${p.firstName} ${p.lastName}`);

              return (
                <li key={p.id} className="flex items-center gap-3 rounded-md border border-border px-3 py-2 text-sm">
                  {/* Avatar / initials */}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: bgColor }}
                    aria-hidden="true"
                  >
                    {initials}
                  </span>

                  <div className="min-w-0 flex-1">
                    <Link to="/persons/$id" params={{ id: p.id }} className="font-medium hover:underline">
                      {p.firstName} {p.lastName}
                    </Link>
                    <p className="truncate text-xs text-muted-foreground">{p.email}</p>
                  </div>

                  <span className="shrink-0 text-xs text-muted-foreground">{formatRelativeTime(p.createdAt)}</span>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
