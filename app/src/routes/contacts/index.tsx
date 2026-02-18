import { useMutation, useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql.js';
import type { CreateContactInput } from '@/__generated__/graphql.js';
import { ContactForm } from '@/components/domain/contact/form.js';
import { ContactList } from '@/components/domain/contact/list.js';
import { Spinner } from '@/components/ui/spinner.tsx';

const GET_CONTACTS = graphql(`
  query GetContacts {
    contacts {
      id
      ...Contact_List
    }
  }
`);

const CREATE_CONTACT = graphql(`
  mutation CreateContact($values: CreateContactInput!) {
    createContact(values: $values) {
      id
      ...Contact_List
    }
  }
`);

const DELETE_CONTACT = graphql(`
  mutation DeleteContact($id: String!) {
    deleteContacts(where: { id: {eq: $id }}) {
      id
    }
  }
`);

export const Route = createFileRoute('/contacts/')({
  component: ContactsPage,
});

function ContactsPage() {
  const { data, loading, error } = useQuery(GET_CONTACTS);
  const [createContact] = useMutation(CREATE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
  });
  const [deleteContact] = useMutation(DELETE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
  });

  const [showForm, setShowForm] = useState(false);

  const handleDelete = async (id: string) => {
    await deleteContact({ variables: { id } });
  };

  const handleAdd = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSubmit = async (values: CreateContactInput) => {
    await createContact({
      variables: { values },
    });
    setShowForm(false);
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error loading contacts: {error.message}</p>;
  if (!data?.contacts) {
    return (
      <p className="text-muted-foreground">
        No contacts yet. Add your first contact above.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {showForm && (
        <ContactForm onSubmit={handleSubmit} onCancel={handleCancel} />
      )}
      <ContactList
        contacts={data.contacts}
        onClickAdd={handleAdd}
        onClickDelete={handleDelete}
      />
    </div>
  );
}
