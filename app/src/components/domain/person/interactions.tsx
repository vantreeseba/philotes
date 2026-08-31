import { useMutation } from '@apollo/client';
import { Pencil, Tag, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql';
import {
  CHANNEL_OPTIONS,
  type Channel,
  ChannelIcon,
  InteractionForm,
  type InteractionFormValues,
  type Sentiment,
  sentimentEmoji,
} from '@/components/domain/person/interaction-form';
import {
  ATTACH_INTERACTION_TAG,
  InteractionTagChip,
  InteractionTagPicker,
} from '@/components/domain/person/interaction-tags';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { relativeTime } from '@/lib/relative-time';

// ---------------------------------------------------------------------------
// Mutations
// ---------------------------------------------------------------------------

const CREATE_INTERACTION = graphql(`
  mutation CreateInteraction(
    $personId: UUID!
    $channel: String!
    $occurredAt: DateTime!
    $sentiment: String
    $note: String
  ) {
    createInteraction(
      values: {
        personId: $personId
        channel: $channel
        occurredAt: $occurredAt
        sentiment: $sentiment
        note: $note
      }
    ) {
      id
      personId
      channel
      occurredAt
      sentiment
      note
    }
  }
`);

const UPDATE_INTERACTION = graphql(`
  mutation UpdateInteraction(
    $id: UUID!
    $channel: String!
    $occurredAt: DateTime!
    $sentiment: String
    $note: String
  ) {
    updateInteraction(
      set: {
        channel: $channel
        occurredAt: $occurredAt
        sentiment: $sentiment
        note: $note
      }
      where: { id: { eq: $id } }
    ) {
      id
      channel
      occurredAt
      sentiment
      note
    }
  }
`);

const DELETE_INTERACTION = graphql(`
  mutation DeleteInteraction($id: UUID!) {
    deleteInteraction(where: { id: { eq: $id } }) {
      id
    }
  }
`);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface InteractionData {
  id: string;
  personId: string;
  channel: string;
  occurredAt: Date;
  sentiment: string | null | undefined;
  note: string | null | undefined;
  labels: Array<{ id: string; label: string; color: string }>;
}

export interface PersonInteractionsProps {
  personId: string;
  interactions: InteractionData[];
  allTags: Array<{ id: string; label: string; color: string }>;
  onChanged: () => void;
  createOpen: boolean;
  onCreateOpenChange: (open: boolean) => void;
}

// ---------------------------------------------------------------------------
// Interaction row
// ---------------------------------------------------------------------------

interface InteractionRowProps {
  interaction: InteractionData;
  allTags: Array<{ id: string; label: string; color: string }>;
  onChanged: () => void;
}

function InteractionRow({ interaction, allTags, onChanged }: InteractionRowProps) {
  const [expanded, setExpanded] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);
  const [deleteInteraction] = useMutation(DELETE_INTERACTION);
  const [updateInteraction] = useMutation(UPDATE_INTERACTION);

  const NOTE_TRUNCATE = 80;
  const longNote = interaction.note && interaction.note.length > NOTE_TRUNCATE;
  const displayNote = longNote && !expanded ? `${interaction.note?.slice(0, NOTE_TRUNCATE)}…` : interaction.note;

  const attachedIds = new Set(interaction.labels.map((t) => t.id));

  const handleDelete = async () => {
    await deleteInteraction({ variables: { id: interaction.id } });
    onChanged();
  };

  const handleEdit = async (values: InteractionFormValues) => {
    await updateInteraction({
      variables: {
        id: interaction.id,
        channel: values.channel,
        occurredAt: new Date(values.occurredAt),
        sentiment: values.sentiment || null,
        note: values.note || null,
      },
    });
    setEditOpen(false);
    onChanged();
  };

  return (
    <>
      <div className="rounded-md border border-border px-3 py-2 text-sm space-y-1.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2 min-w-0 flex-1">
            {/* Channel icon */}
            <ChannelIcon channel={interaction.channel} className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              {/* Date + sentiment */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{relativeTime(interaction.occurredAt)}</span>
                {interaction.sentiment && (
                  <span title={interaction.sentiment}>{sentimentEmoji(interaction.sentiment)}</span>
                )}
                <span className="capitalize">
                  {CHANNEL_OPTIONS.find((c) => c.value === interaction.channel)?.label ?? interaction.channel}
                </span>
              </div>
              {/* Note */}
              {displayNote && (
                <p className="mt-0.5 text-sm whitespace-pre-wrap">
                  {displayNote}
                  {longNote && (
                    <button
                      type="button"
                      onClick={() => setExpanded(!expanded)}
                      className="ml-1 text-xs text-muted-foreground hover:text-foreground underline"
                    >
                      {expanded ? 'less' : 'more'}
                    </button>
                  )}
                </p>
              )}
            </div>
          </div>
          {/* Actions */}
          <div className="flex shrink-0 gap-1 text-muted-foreground">
            <button
              type="button"
              onClick={() => setEditOpen(true)}
              className="hover:text-foreground transition-colors"
              aria-label="Edit interaction"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="hover:text-destructive transition-colors"
              aria-label="Delete interaction"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-1">
          {interaction.labels.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {interaction.labels.map((t) => (
                <InteractionTagChip
                  key={t.id}
                  interactionId={interaction.id}
                  labelId={t.id}
                  label={t.label}
                  color={t.color}
                  onDetach={onChanged}
                />
              ))}
            </div>
          )}
          {showAddTag ? (
            <InteractionTagPicker
              interactionId={interaction.id}
              allTags={allTags}
              attachedTagIds={attachedIds}
              onClose={() => setShowAddTag(false)}
              onAdd={onChanged}
            />
          ) : (
            <button
              type="button"
              onClick={() => setShowAddTag(true)}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Tag className="h-3 w-3" />
              Add tag
            </button>
          )}
        </div>
      </div>

      {/* Edit dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Interaction</DialogTitle>
          </DialogHeader>
          <InteractionForm
            personId={interaction.personId}
            allTags={allTags}
            initialValues={{
              channel: interaction.channel as Channel,
              occurredAt: interaction.occurredAt.toISOString().slice(0, 16),
              sentiment: (interaction.sentiment as Sentiment | undefined) ?? '',
              note: interaction.note ?? '',
              labelIds: interaction.labels.map((l) => l.id),
            }}
            submitLabel="Save Changes"
            onSubmit={handleEdit}
            onCancel={() => setEditOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

// ---------------------------------------------------------------------------
// Create interaction form (in a dialog)
// ---------------------------------------------------------------------------

interface CreateInteractionFormProps {
  personId: string;
  allTags: Array<{ id: string; label: string; color: string }>;
  onAdded: () => void;
  onCancel: () => void;
}

function CreateInteractionForm({ personId, allTags, onAdded, onCancel }: CreateInteractionFormProps) {
  const [createInteraction] = useMutation(CREATE_INTERACTION);
  const [attachTag] = useMutation(ATTACH_INTERACTION_TAG);

  const handleSubmit = async (values: InteractionFormValues) => {
    const result = await createInteraction({
      variables: {
        personId,
        channel: values.channel,
        occurredAt: new Date(values.occurredAt),
        sentiment: values.sentiment || null,
        note: values.note || null,
      },
    });
    const interactionId = result.data?.createInteraction?.id;
    if (interactionId && values.labelIds.length > 0) {
      for (const labelId of values.labelIds) {
        await attachTag({ variables: { interactionId, labelId } });
      }
    }
    onAdded();
  };

  return <InteractionForm personId={personId} allTags={allTags} onSubmit={handleSubmit} onCancel={onCancel} />;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function PersonInteractions({
  personId,
  interactions,
  allTags,
  onChanged,
  createOpen,
  onCreateOpenChange,
}: PersonInteractionsProps) {
  // Sort by most recent first
  const sorted = [...interactions].sort((a, b) => b.occurredAt.getTime() - a.occurredAt.getTime());

  return (
    <div className="space-y-2">
      {sorted.length === 0 && <p className="text-muted-foreground text-sm">No interactions yet.</p>}

      {sorted.map((interaction) => (
        <InteractionRow key={interaction.id} interaction={interaction} allTags={allTags} onChanged={onChanged} />
      ))}

      <Dialog open={createOpen} onOpenChange={onCreateOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Log Interaction</DialogTitle>
          </DialogHeader>
          <CreateInteractionForm
            personId={personId}
            allTags={allTags}
            onAdded={() => {
              onCreateOpenChange(false);
              onChanged();
            }}
            onCancel={() => onCreateOpenChange(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
