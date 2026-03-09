import { useFragment } from '@apollo/client';
import { Link } from '@tanstack/react-router';
import { Search, Trash2, UserPlus, X } from 'lucide-react';
import { graphql } from '@/__generated__/gql.js';
import type { Person_ListFragment } from '@/__generated__/graphql.ts';
import { PERSON_RELATIONSHIPS } from '@/components/domain/person/relationships.js';
import { ListLayout } from '@/components/layouts/list.js';
import { Avatar } from '@/components/ui/avatar.js';
import { Button } from '@/components/ui/button.js';
import { Card, CardContent } from '@/components/ui/card.js';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.js';
import { Spinner } from '@/components/ui/spinner.tsx';
import { useQueryStringState } from '@/hooks/use-query-string-state.js';

const PERSON_LIST = graphql(`
  fragment Person_List on Person {
    id
    firstName
    lastName
    email
    avatarPath
    createdAt
    updatedAt
    labels {
      id
      label
      color
    }
    importantDates {
      id
      name
      description
      date
    }
    ...Person_Relationships
  }
`);

export { PERSON_LIST, PERSON_RELATIONSHIPS };

interface PersonRowProps {
  person: Person_ListFragment;
  onClickDelete: (id: string) => void;
  /** Label IDs currently active as filters — highlighted when matched. */
  activeLabelIds: Set<string>;
  lastContactedAt?: Date | null;
}

function relativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

function PersonRow({ person: from, onClickDelete, activeLabelIds, lastContactedAt }: PersonRowProps) {
  const { data: person, complete } = useFragment({
    fragment: PERSON_LIST,
    fragmentName: 'Person_List',
    from,
  });

  if (!complete) {
    return <Spinner />;
  }

  return (
    <Card>
      <CardContent className="flex items-start gap-3 justify-between p-4">
        <Avatar firstName={person.firstName} lastName={person.lastName} avatarPath={person.avatarPath} size="md" />
        <div className="min-w-0 flex-1 space-y-1">
          <p className="font-medium">
            <Link to="/persons/$id" params={{ id: person.id }} className="hover:underline">
              {person.firstName} {person.lastName}
            </Link>
          </p>
          <p className="text-muted-foreground text-sm">{person.email}</p>
          {lastContactedAt && (
            <p className="text-muted-foreground text-xs">Last contact: {relativeTime(lastContactedAt)}</p>
          )}
          {person.labels.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {person.labels.map((l) => (
                <span
                  key={l.id}
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${
                    activeLabelIds.size > 0 && activeLabelIds.has(l.id)
                      ? 'border-foreground bg-foreground/10 font-medium'
                      : ''
                  }`}
                >
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: l.color }}
                    aria-hidden="true"
                  />
                  {l.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={() => onClickDelete(person.id)} className="ml-2 shrink-0">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Filtering logic (operates on fragment refs by reading fragment data)
// ---------------------------------------------------------------------------

interface FilterablePersonRow {
  ref: Person_ListFragment;
  // Denormalised fields for filtering — read directly from the query result
  // via inline fields (not masked by the fragment).
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarPath?: string | null;
  labels: Array<{ id: string; label: string; color: string }>;
  lastContactedAt?: Date | null;
}

interface PersonListProps {
  persons: Array<FilterablePersonRow>;
  onClickAdd: () => void;
  onClickDelete: (id: string) => void;
}

const PAGE_SIZE_OPTIONS = [10, 25, 50];

interface PersonListUrlState {
  q: string;
  labels: string[];
  page: number;
  pageSize: number;
}

export function PersonList({ persons, onClickAdd, onClickDelete }: PersonListProps) {
  const [urlState, setUrlState] = useQueryStringState<PersonListUrlState>(
    { q: '', labels: [], page: 0, pageSize: 10 },
    { typeMap: { page: 'number', pageSize: 'number', labels: 'stringArray' } },
  );
  const query = urlState.q ?? '';
  const activeLabelIds = new Set(urlState.labels ?? []);
  const page = urlState.page ?? 0;
  const pageSize = urlState.pageSize ?? 10;

  // Collect all unique labels across all persons for the label filter bar
  const allLabels = Array.from(new Map(persons.flatMap((p) => p.labels).map((l) => [l.id, l])).values());

  const toggleLabelFilter = (id: string) => {
    const next = new Set(activeLabelIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setUrlState({ labels: [...next], page: 0 });
  };

  const clearFilters = () => {
    setUrlState({ q: '', labels: [], page: 0 });
  };

  const handleQueryChange = (value: string) => {
    setUrlState({ q: value, page: 0 });
  };

  const q = query.trim().toLowerCase();
  const hasFilters = q.length > 0 || activeLabelIds.size > 0;

  const filteredPersons = persons.filter((p) => {
    if (q) {
      const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
      const matchesText = fullName.includes(q) || p.email.toLowerCase().includes(q);
      if (!matchesText) return false;
    }
    if (activeLabelIds.size > 0) {
      const personLabelIds = new Set(p.labels.map((l) => l.id));
      const matchesLabel = [...activeLabelIds].every((id) => personLabelIds.has(id));
      if (!matchesLabel) return false;
    }
    return true;
  });

  const handlePageSizeChange = (newSize: number) => {
    setUrlState({ pageSize: newSize, page: 0 });
  };

  const pageItems = filteredPersons.slice(page * pageSize, (page + 1) * pageSize);
  const isFirstPage = page === 0;
  const isLastPage = pageItems.length < pageSize;

  return (
    <ListLayout
      header={
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl">Persons</h1>
            <Button onClick={onClickAdd}>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Person
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              placeholder="Search by name or email…"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              className="w-full rounded-md border border-border bg-background py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          {allLabels.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-muted-foreground">Filter:</span>
              {allLabels.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => toggleLabelFilter(l.id)}
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs transition-colors ${
                    activeLabelIds.has(l.id) ? 'border-foreground bg-foreground text-background' : 'hover:bg-muted'
                  }`}
                >
                  <span
                    className="inline-block h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: l.color }}
                    aria-hidden="true"
                  />
                  {l.label}
                  {activeLabelIds.has(l.id) && <X className="h-2.5 w-2.5 ml-0.5" />}
                </button>
              ))}
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors ml-1"
                >
                  Clear
                </button>
              )}
            </div>
          )}
        </div>
      }
      body={
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground">
            {filteredPersons.length} person
            {filteredPersons.length !== 1 ? 's' : ''}
          </p>

          {/* Results */}
          {pageItems.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              {hasFilters ? 'No persons match the current filters.' : 'No persons yet.'}
            </p>
          ) : (
            <div className="grid gap-4">
              {pageItems.map((p) => (
                <PersonRow
                  key={p.id}
                  person={p.ref}
                  onClickDelete={onClickDelete}
                  activeLabelIds={activeLabelIds}
                  lastContactedAt={p.lastContactedAt}
                />
              ))}
            </div>
          )}
        </div>
      }
      footer={
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <label htmlFor="persons-page-size" className="text-xs text-muted-foreground">
              Per page
            </label>
            <select
              id="persons-page-size"
              value={pageSize}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
              className="h-8 rounded-md border border-input bg-background px-2 text-xs focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {PAGE_SIZE_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <Pagination className="w-auto mx-0 justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setUrlState({ page: page - 1 })}
                  className={isFirstPage ? 'pointer-events-none opacity-50' : ''}
                  aria-disabled={isFirstPage}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() => setUrlState({ page: page + 1 })}
                  className={isLastPage ? 'pointer-events-none opacity-50' : ''}
                  aria-disabled={isLastPage}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      }
    />
  );
}
