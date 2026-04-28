import { useQuery } from '@apollo/client';
import { Link } from '@tanstack/react-router';
import { NotebookPen } from 'lucide-react';
import { graphql } from '@/__generated__/gql.js';
import { Card, CardContent } from '@/components/ui/card.js';
import { Spinner } from '@/components/ui/spinner.js';

const GET_RECENT_NOTES = graphql(`
  query RecentNotes {
    recentNotes(limit: 10) {
      id
      body
      createdAt
      personId
      personFirstName
      personLastName
    }
  }
`);

function formatRelative(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(ms / 60_000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}w ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export function RecentNotes() {
  const { data, loading } = useQuery(GET_RECENT_NOTES);

  const notes = data?.recentNotes ?? [];

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="font-semibold text-base flex items-center gap-2 mb-3">
          <NotebookPen className="h-4 w-4 text-muted-foreground" />
          Recent Notes
        </h2>
        {loading ? (
          <Spinner />
        ) : notes.length === 0 ? (
          <p className="text-sm text-muted-foreground italic">No notes yet.</p>
        ) : (
          <ul className="space-y-3">
            {notes.map((note) => (
              <li key={note.id} className="flex gap-3 min-w-0">
                <div className="min-w-0 flex-1">
                  {note.personId && note.personFirstName ? (
                    <Link
                      to="/persons/$id"
                      params={{ id: note.personId }}
                      className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {note.personFirstName} {note.personLastName}
                    </Link>
                  ) : (
                    <span className="text-xs text-muted-foreground">No person</span>
                  )}
                  <p className="text-sm leading-snug line-clamp-2 mt-0.5">{note.body}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 pt-0.5">
                  {formatRelative(note.createdAt)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
