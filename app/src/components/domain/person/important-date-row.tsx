import { useMutation } from '@apollo/client';
import { Link } from 'expo-router';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql';
import type { ImportantDatesMilestoneTypeEnum } from '@/__generated__/graphql';
import {
  ImportantDateForm,
  type ImportantDateFormValue,
  MILESTONE_TYPE_OPTIONS,
  RECURRENCE_OPTIONS,
} from '@/components/domain/person/important-date-form';
import { ImportantDateTags } from '@/components/domain/person/important-date-tags';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const UPDATE_IMPORTANT_DATE = graphql(`
  mutation UpdateImportantDate(
    $id: UUID!
    $name: String!
    $date: String!
    $description: String
    $recurrence: String
    $milestoneType: ImportantDatesMilestoneTypeEnum
  ) {
    updateImportantDate(
      set: {
        name: $name
        date: $date
        description: $description
        recurrence: $recurrence
        milestoneType: $milestoneType
      }
      where: { id: { eq: $id } }
    ) {
      id
      name
      date
      description
      recurrence
      milestoneType
    }
  }
`);

interface ImportantDateRowProps {
  id: string;
  personId: string;
  name: string;
  date: string;
  description: string | null | undefined;
  recurrence: string | null | undefined;
  milestoneType: string | null | undefined;
  tags: Array<{ id: string; label: string; color: string }>;
  allTags: Array<{ id: string; label: string; color: string }>;
  onDelete: (id: string) => void;
  onEdit: () => void;
  onTagChanged: () => void;
}

export function ImportantDateRow({
  id,
  personId,
  name,
  date,
  description,
  recurrence,
  milestoneType,
  tags,
  allTags,
  onDelete,
  onEdit,
  onTagChanged,
}: ImportantDateRowProps) {
  const recurrenceLabel = RECURRENCE_OPTIONS.find((o) => o.value === recurrence)?.label;
  const milestoneLabel = MILESTONE_TYPE_OPTIONS.find((o) => o.value === milestoneType)?.label;
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
        milestoneType: (values.milestoneType as ImportantDatesMilestoneTypeEnum | null) ?? null,
      },
    });
    setEditOpen(false);
    onEdit();
  };

  return (
    <>
      <div className="rounded-md border border-border px-3 py-2 text-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <Link href={`/persons/${personId}/dates/${id}`} className="font-medium text-foreground hover:underline">
              {name}
            </Link>
            {description && <span className="ml-2 text-muted-foreground text-xs">{description}</span>}
            <div className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1.5">
              <span>{new Date(date).toLocaleDateString()}</span>
              {recurrenceLabel && (
                <span className="rounded-full bg-muted px-1.5 py-0.5 text-xs">{recurrenceLabel}</span>
              )}
              {milestoneLabel && (
                <span className="rounded-full bg-primary/10 text-primary px-1.5 py-0.5 text-xs font-medium">
                  {milestoneLabel}
                </span>
              )}
            </div>
          </div>
          <div className="flex shrink-0 text-muted-foreground/60">
            <button
              type="button"
              onClick={() => setEditOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-md hover:text-foreground transition-colors"
              aria-label="Edit important date"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onDelete(id)}
              className="flex h-8 w-8 items-center justify-center rounded-md hover:text-destructive transition-colors"
              aria-label="Remove important date"
            >
              <Trash2 className="h-4 w-4" />
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
            initialValues={{
              name,
              date: date,
              description: description ?? undefined,
              recurrence: recurrence ?? undefined,
              milestoneType: milestoneType ?? undefined,
            }}
            onSubmit={handleEdit}
            onCancel={() => setEditOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
