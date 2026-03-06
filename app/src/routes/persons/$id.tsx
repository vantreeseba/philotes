import { useMutation, useQuery } from '@apollo/client';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, CalendarPlus, Pencil, Tag, Trash2, UserRoundPlus } from 'lucide-react';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql.js';
import {
  ImportantDateForm,
  type ImportantDateFormValue,
  RECURRENCE_OPTIONS,
} from '@/components/domain/person/important-date-form.js';
import { ImportantDateTags } from '@/components/domain/person/important-date-tags.js';
import { PersonLabels } from '@/components/domain/person/labels.js';
import { PersonRelationships } from '@/components/domain/person/relationships.js';
import { Button } from '@/components/ui/button.js';
import { Card, CardContent } from '@/components/ui/card.js';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.js';
import { Spinner } from '@/components/ui/spinner.tsx';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip.js';

// ---------------------------------------------------------------------------
// GraphQL
// ---------------------------------------------------------------------------

const GET_PERSON_DETAIL = graphql(`
  query GetPersonDetail($id: String!) {
    persons(where: { id: { eq: $id } }) {
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
        recurrence
        labels {
          id
          label
          color
        }
      }
      relationships {
        id
        type
        relatedPersonId
        relatedPersonFirstName
        relatedPersonLastName
      }
    }
  }
`);

const GET_ALL_PERSONS = graphql(`
  query GetAllPersonsForDetail {
    persons {
      id
      firstName
      lastName
    }
  }
`);

const GET_ALL_LABELS = graphql(`
  query GetAllLabelsForDetail {
    labels {
      id
      label
      color
    }
  }
`);

const DELETE_IMPORTANT_DATE = graphql(`
  mutation DeleteImportantDate($id: String!) {
    deleteImportantDates(where: { id: { eq: $id } }) {
      id
    }
  }
`);

const CREATE_IMPORTANT_DATE = graphql(`
  mutation CreateImportantDate(
    $name: String!
    $date: String!
    $personId: String!
    $description: String
    $recurrence: String
  ) {
    createImportantDate(
      values: {
        name: $name
        date: $date
        personId: $personId
        description: $description
        recurrence: $recurrence
      }
    ) {
      id
      name
      date
      description
      recurrence
      personId
    }
  }
`);

const UPDATE_IMPORTANT_DATE = graphql(`
  mutation UpdateImportantDate(
    $id: String!
    $name: String!
    $date: String!
    $description: String
    $recurrence: String
  ) {
    updateImportantDates(
      set: {
        name: $name
        date: $date
        description: $description
        recurrence: $recurrence
      }
      where: { id: { eq: $id } }
    ) {
      id
      name
      date
      description
      recurrence
    }
  }
`);

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

export const Route = createFileRoute('/persons/$id')({
  component: PersonDetailPage,
});

// ---------------------------------------------------------------------------
// Important date row
// ---------------------------------------------------------------------------

interface ImportantDateRowProps {
  id: string;
  name: string;
  date: string;
  description: string | null | undefined;
  recurrence: string | null | undefined;
  tags: Array<{ id: string; label: string; color: string }>;
  allTags: Array<{ id: string; label: string; color: string }>;
  onDelete: (id: string) => void;
  onEdit: () => void;
  onTagChanged: () => void;
}

function ImportantDateRow({
  id,
  name,
  date,
  description,
  recurrence,
  tags,
  allTags,
  onDelete,
  onEdit,
  onTagChanged,
}: ImportantDateRowProps) {
  const recurrenceLabel = RECURRENCE_OPTIONS.find((o) => o.value === recurrence)?.label;
  const [editOpen, setEditOpen] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);
  const [updateImportantDate] = useMutation(UPDATE_IMPORTANT_DATE, {
    refetchQueries: [],
  });

  const handleEdit = async (values: ImportantDateFormValue) => {
    await updateImportantDate({
      variables: {
        id,
        name: values.name,
        date: values.date,
        description: values.description ?? null,
        recurrence: values.recurrence ?? null,
      },
    });
    setEditOpen(false);
    onEdit();
  };

  return (
    <>
      <div className="rounded-md border border-border px-3 py-2 text-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <span className="font-medium">{name}</span>
            {description && <span className="ml-2 text-muted-foreground text-xs">{description}</span>}
            <div className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1.5">
              <span>{date}</span>
              {recurrenceLabel && (
                <span className="rounded-full bg-muted px-1.5 py-0.5 text-xs">{recurrenceLabel}</span>
              )}
            </div>
          </div>
          <div className="flex shrink-0 gap-1 text-muted-foreground">
            <button
              type="button"
              onClick={() => setEditOpen(true)}
              className="hover:text-foreground transition-colors"
              aria-label="Edit important date"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDelete(id)}
              className="hover:text-destructive transition-colors"
              aria-label="Remove important date"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        <ImportantDateTags
          importantDateId={id}
          tags={tags}
          allTags={allTags}
          showAdd={showAddTag}
          onShowAdd={setShowAddTag}
          onChanged={onTagChanged}
        />
      </div>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Important Date</DialogTitle>
          </DialogHeader>
          <ImportantDateForm
            initialValues={{ name, date, description: description ?? undefined, recurrence: recurrence ?? undefined }}
            onSubmit={handleEdit}
            onCancel={() => setEditOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function PersonDetailPage() {
  const { id } = Route.useParams();

  const { data, loading, error, refetch } = useQuery(GET_PERSON_DETAIL, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });
  const { data: allPersonsData } = useQuery(GET_ALL_PERSONS);
  const { data: allLabelsData } = useQuery(GET_ALL_LABELS);

  const [deleteImportantDate] = useMutation(DELETE_IMPORTANT_DATE, {
    refetchQueries: [{ query: GET_PERSON_DETAIL, variables: { id } }],
  });

  const [createImportantDate] = useMutation(CREATE_IMPORTANT_DATE, {
    refetchQueries: [{ query: GET_PERSON_DETAIL, variables: { id } }],
  });

  const [dateDialogOpen, setDateDialogOpen] = useState(false);
  const [showAddLabel, setShowAddLabel] = useState(false);
  const [showAddRelationship, setShowAddRelationship] = useState(false);

  if (loading) return <Spinner />;
  if (error) return <p>Error loading person: {error.message}</p>;

  const person = data?.persons?.[0];
  if (!person) return <p className="text-muted-foreground">Person not found.</p>;

  const allPersonStubs = (allPersonsData?.persons ?? []).map((p) => ({
    id: p.id,
    firstName: p.firstName,
    lastName: p.lastName,
  }));

  const allLabels = (allLabelsData?.labels ?? []).map((l) => ({
    id: l.id,
    label: l.label,
    color: l.color,
  }));

  const handleDeleteDate = async (dateId: string) => {
    await deleteImportantDate({ variables: { id: dateId } });
  };

  const handleEditDate = () => {
    refetch();
  };

  const handleTagChanged = () => {
    refetch();
  };

  const handleDeleteRelationship = () => {
    refetch();
  };

  const handleAddRelationship = () => {
    refetch();
  };

  const handleEditRelationship = () => {
    refetch();
  };

  const handleDeleteLabel = () => {
    refetch();
  };

  const handleAddLabel = () => {
    refetch();
  };

  const handleCreateDate = async (values: {
    name: string;
    date: string;
    description?: string;
    recurrence?: string;
  }): Promise<void> => {
    await createImportantDate({
      variables: {
        personId: id,
        name: values.name,
        date: values.date,
        description: values.description ?? null,
        recurrence: values.recurrence ?? null,
      },
    });
    setDateDialogOpen(false);
  };

  const allLabelsAttached = allLabels.length > 0 && allLabels.length === person.labels.length;
  const allPersonsLinked =
    allPersonStubs.filter((p) => p.id !== person.id && !person.relationships.some((r) => r.relatedPersonId === p.id))
      .length === 0;

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Back link */}
        <div>
          <Link
            to="/persons"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Persons
          </Link>
        </div>

        {/* Header */}
        <div>
          <h1 className="font-bold text-3xl">
            {person.firstName} {person.lastName}
          </h1>
          <p className="text-muted-foreground">{person.email}</p>
        </div>

        {/* Labels */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-base">Tags</h2>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span tabIndex={allLabelsAttached ? 0 : undefined}>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setShowAddLabel(true)}
                      disabled={allLabelsAttached}
                    >
                      <Tag className="mr-1.5 h-4 w-4" />
                      Add Tag
                    </Button>
                  </span>
                </TooltipTrigger>
                {allLabelsAttached && <TooltipContent>All tags are already attached</TooltipContent>}
              </Tooltip>
            </div>
            <PersonLabels
              person={person}
              allLabels={allLabels}
              onDelete={handleDeleteLabel}
              onAdd={handleAddLabel}
              showAdd={showAddLabel}
              onShowAdd={setShowAddLabel}
            />
          </CardContent>
        </Card>

        {/* Important Dates */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-base">Important Dates</h2>
              <Button size="sm" variant="outline" onClick={() => setDateDialogOpen(true)}>
                <CalendarPlus className="mr-1.5 h-4 w-4" />
                Add Date
              </Button>
            </div>

            {person.importantDates.length === 0 ? (
              <p className="text-muted-foreground text-sm">No important dates yet.</p>
            ) : (
              <div className="space-y-2">
                {person.importantDates.map((d) => (
                  <ImportantDateRow
                    key={d.id}
                    id={d.id}
                    name={d.name}
                    date={d.date}
                    description={d.description}
                    recurrence={d.recurrence}
                    tags={d.labels ?? []}
                    allTags={allLabels}
                    onDelete={handleDeleteDate}
                    onEdit={handleEditDate}
                    onTagChanged={handleTagChanged}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Relationships */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-base">Relationships</h2>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span tabIndex={allPersonsLinked ? 0 : undefined}>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setShowAddRelationship(true)}
                      disabled={allPersonsLinked}
                    >
                      <UserRoundPlus className="mr-1.5 h-4 w-4" />
                      Add Relationship
                    </Button>
                  </span>
                </TooltipTrigger>
                {allPersonsLinked && <TooltipContent>All persons are already linked</TooltipContent>}
              </Tooltip>
            </div>
            <PersonRelationships
              person={person}
              allPersons={allPersonStubs}
              onDelete={handleDeleteRelationship}
              onAdd={handleAddRelationship}
              onEdit={handleEditRelationship}
              showAdd={showAddRelationship}
              onShowAdd={setShowAddRelationship}
            />
          </CardContent>
        </Card>

        {/* Add Important Date Dialog */}
        <Dialog open={dateDialogOpen} onOpenChange={setDateDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add Important Date</DialogTitle>
              <DialogDescription>
                Record a memorable date for {person.firstName} {person.lastName}.
              </DialogDescription>
            </DialogHeader>
            <ImportantDateForm onSubmit={handleCreateDate} onCancel={() => setDateDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
}
