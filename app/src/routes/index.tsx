import { useMutation, useQuery } from "@apollo/client";
import { createFileRoute } from "@tanstack/react-router";
import { Trash2, UserPlus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACTS } from "@/lib/graphql";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export const Route = createFileRoute("/")({
  component: ContactsPage,
});

function ContactsPage() {
  const { data, loading, error } = useQuery<{ contacts: Contact[] }>(
    GET_CONTACTS,
  );
  const [createContact] = useMutation(CREATE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
  });
  const [deleteContact] = useMutation(DELETE_CONTACT, {
    refetchQueries: [{ query: GET_CONTACTS }],
  });

  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createContact({
      variables: { input: { firstName, lastName, email } },
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setShowForm(false);
  };

  const handleDelete = async (id: number) => {
    await deleteContact({ variables: { id } });
  };

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>Error loading contacts: {error.message}</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Contacts</h1>
        <Button onClick={() => setShowForm(!showForm)}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>New Contact</CardTitle>
            <CardDescription>Add a new contact to your CRM.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">Create</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {data?.contacts.length === 0 && (
          <p className="text-muted-foreground">
            No contacts yet. Add your first contact above.
          </p>
        )}
        {data?.contacts.map((contact) => (
          <Card key={contact.id}>
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
                onClick={() => handleDelete(contact.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
