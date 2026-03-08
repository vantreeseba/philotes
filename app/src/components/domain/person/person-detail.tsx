import { useQuery } from '@apollo/client';
import type { GetPersonQuery } from '@/__generated__/graphql';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GET_PERSON } from '@/graphql/queries';
import { PersonActivities } from './person-activities';
import { PersonAddresses } from './person-addresses';
import { PersonContactInfo } from './person-contact-info';
import { PersonLabels } from './person-labels';
import { PersonNotes } from './person-notes';
import { PersonTasks } from './person-tasks';

interface PersonDetailProps {
  personId: string;
}

export function PersonDetail({ personId }: PersonDetailProps) {
  const { data, loading, error } = useQuery<GetPersonQuery>(GET_PERSON, {
    variables: { id: personId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const person = data?.person;
  if (!person) return <div>Person not found</div>;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>
            {person.firstName} {person.lastName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{person.bio}</p>
        </CardContent>
      </Card>
      <PersonLabels personId={personId} labels={person.labels ?? []} />
      <PersonNotes personId={personId} notes={person.notes ?? []} />
      <PersonTasks personId={personId} tasks={person.tasks ?? []} />
      <PersonActivities personId={personId} activities={person.activities ?? []} />
      <PersonAddresses personId={personId} addresses={person.addresses ?? []} />
      <PersonContactInfo personId={personId} contactInfo={person.contactInfo ?? []} />
    </div>
  );
}
