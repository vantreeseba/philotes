import { type FragmentType, useFragment } from '@apollo/client';
import { Trash2, UserPlus } from 'lucide-react';
import { graphql } from '@/__generated__/gql.js';
import type { Contact_ListFragment } from '@/__generated__/graphql.ts';
import { Button } from '@/components/ui/button.js';
import { Card, CardContent } from '@/components/ui/card.js';
import { Spinner } from '@/components/ui/spinner.tsx';

const CONTACT_LIST = graphql(`
  fragment Contact_List on Contact {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
  }
`);

interface ContactRowProps {
  contact: Contact_ListFragment;
  onClickDelete: (id: string) => void;
}

function ContactRow({ contact: from, onClickDelete }: ContactRowProps) {
  const { data: contact, complete } = useFragment({
    fragment: CONTACT_LIST,
    from,
  });

  if (!complete) {
    return <Spinner />;
  }

  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <p className="font-medium">
            {contact.firstName} {contact.lastName}
          </p>
          <p className="text-muted-foreground text-sm">{contact.email}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onClickDelete(contact.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

interface ContactListProps {
  contacts: Array<Contact_ListFragment>;
  onClickAdd: () => void;
  onClickDelete: (id: string) => void;
}

export function ContactList({
  contacts,
  onClickAdd,
  onClickDelete,
}: ContactListProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Contacts</h1>
        <Button onClick={onClickAdd}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      <div className="grid gap-4">
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onClickDelete={onClickDelete}
          />
        ))}
      </div>
    </div>
  );
}
