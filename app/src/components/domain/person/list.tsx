import { useFragment } from '@apollo/client';
import { Link } from '@tanstack/react-router';
import { Trash2, UserPlus } from 'lucide-react';
import { graphql } from '@/__generated__/gql.js';
import type { Person_ListFragment } from '@/__generated__/graphql.ts';
import { PERSON_RELATIONSHIPS } from '@/components/domain/person/relationships.js';
import { Button } from '@/components/ui/button.js';
import { Card, CardContent } from '@/components/ui/card.js';
import { Spinner } from '@/components/ui/spinner.tsx';

const PERSON_LIST = graphql(`
  fragment Person_List on Person {
    id
    firstName
    lastName
    email
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
}

function PersonRow({ person: from, onClickDelete }: PersonRowProps) {
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
      <CardContent className="flex items-start justify-between p-4">
        <div className="min-w-0 flex-1 space-y-1">
          <p className="font-medium">
            <Link to="/persons/$id" params={{ id: person.id }} className="hover:underline">
              {person.firstName} {person.lastName}
            </Link>
          </p>
          <p className="text-muted-foreground text-sm">{person.email}</p>
          {person.labels.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {person.labels.map((l) => (
                <span key={l.id} className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs">
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

interface PersonListProps {
  persons: Array<Person_ListFragment>;
  onClickAdd: () => void;
  onClickDelete: (id: string) => void;
}

export function PersonList({ persons, onClickAdd, onClickDelete }: PersonListProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Persons</h1>
        <Button onClick={onClickAdd}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Person
        </Button>
      </div>

      <div className="grid gap-4">
        {persons.map((person) => (
          <PersonRow key={person.id} person={person} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}
