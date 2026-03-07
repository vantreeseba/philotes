import { useMutation, useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql.js';
import { PersonForm, type PersonFormValue } from '@/components/domain/person/form.js';
import { PersonList } from '@/components/domain/person/list.js';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.js';
import { Spinner } from '@/components/ui/spinner.tsx';

const GET_PERSONS = graphql(`
  query GetPersons {
    persons {
      id
      firstName
      lastName
      email
      avatarPath
      labels {
        id
        label
        color
      }
      interactions(limit: 1, orderBy: { occurredAt: { direction: desc, priority: 1 } }) {
        occurredAt
      }
      ...Person_List
    }
  }
`);

const GET_LABELS = graphql(`
  query GetLabelsForPersonForm {
    labels {
      id
      ...Label_List
    }
  }
`);

const CREATE_PERSON = graphql(`
  mutation CreatePerson($values: CreatePersonInput!) {
    createPerson(values: $values) {
      id
      ...Person_List
    }
  }
`);

const DELETE_PERSON = graphql(`
  mutation DeletePerson($id: String!) {
    deletePersons(where: { id: { eq: $id } }) {
      id
    }
  }
`);

export const Route = createFileRoute('/persons/')({
  component: PersonsPage,
});

function PersonsPage() {
  const { data, loading, error } = useQuery(GET_PERSONS);
  const { data: labelsData } = useQuery(GET_LABELS);
  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: GET_PERSONS }],
  });
  const [deletePerson] = useMutation(DELETE_PERSON, {
    refetchQueries: [{ query: GET_PERSONS }],
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async (id: string) => {
    await deletePerson({ variables: { id } });
  };

  const handleSubmit = async ({ person }: PersonFormValue): Promise<void> => {
    await createPerson({ variables: { values: person } });
    setDialogOpen(false);
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error loading persons: {error.message}</p>;

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>New Person</DialogTitle>
            <DialogDescription>Add a new person to your CRM.</DialogDescription>
          </DialogHeader>
          <PersonForm
            availableLabels={labelsData?.labels ?? []}
            onSubmit={handleSubmit}
            onCancel={() => setDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <PersonList
        persons={(data?.persons ?? []).map((p) => ({
          ref: p,
          id: p.id,
          firstName: p.firstName,
          lastName: p.lastName,
          email: p.email,
          avatarPath: p.avatarPath,
          labels: p.labels ?? [],
          lastContactedAt: p.interactions?.[0]?.occurredAt ?? null,
        }))}
        onClickAdd={() => setDialogOpen(true)}
        onClickDelete={handleDelete}
      />
    </>
  );
}
