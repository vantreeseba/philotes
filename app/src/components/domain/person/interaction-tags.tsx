import { useMutation } from '@apollo/client';
import { X } from 'lucide-react';
import { graphql } from '@/__generated__/gql';

export const ATTACH_INTERACTION_TAG = graphql(`
  mutation AttachInteractionTag($interactionId: UUID!, $labelId: UUID!) {
    createInteractionTag(
      values: { interactionId: $interactionId, labelId: $labelId }
    ) {
      interactionId
      labelId
    }
  }
`);

const DETACH_INTERACTION_TAG = graphql(`
  mutation DetachInteractionTag($interactionId: UUID!, $labelId: UUID!) {
    deleteInteractionTag(
      where: {
        interactionId: { eq: $interactionId }
        labelId: { eq: $labelId }
      }
    ) {
      interactionId
      labelId
    }
  }
`);

// ---------------------------------------------------------------------------
// Tag chip (detachable)
// ---------------------------------------------------------------------------

interface InteractionTagChipProps {
  interactionId: string;
  labelId: string;
  label: string;
  color: string;
  onDetach: () => void;
}

export function InteractionTagChip({ interactionId, labelId, label, color, onDetach }: InteractionTagChipProps) {
  const [detachTag] = useMutation(DETACH_INTERACTION_TAG);

  const handleDetach = async () => {
    await detachTag({ variables: { interactionId, labelId } });
    onDetach();
  };

  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs">
      <span
        className="inline-block h-2 w-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {label}
      <button
        type="button"
        onClick={handleDetach}
        className="ml-0.5 text-muted-foreground hover:text-destructive transition-colors"
        aria-label={`Remove tag ${label}`}
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Tag picker
// ---------------------------------------------------------------------------

interface InteractionTagPickerProps {
  interactionId: string;
  allTags: Array<{ id: string; label: string; color: string }>;
  attachedTagIds: Set<string>;
  onClose: () => void;
  onAdd: () => void;
}

export function InteractionTagPicker({
  interactionId,
  allTags,
  attachedTagIds,
  onClose,
  onAdd,
}: InteractionTagPickerProps) {
  const [attachTag] = useMutation(ATTACH_INTERACTION_TAG);
  const available = allTags.filter((t) => !attachedTagIds.has(t.id));

  const handleSelect = async (labelId: string) => {
    await attachTag({ variables: { interactionId, labelId } });
    onAdd();
    onClose();
  };

  if (available.length === 0) {
    return (
      <div className="flex gap-1.5 rounded-md border border-border p-2 text-xs text-muted-foreground">
        All tags attached.
        <button type="button" onClick={onClose} className="ml-auto hover:text-foreground transition-colors">
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-1.5 rounded-md border border-border p-2">
      {available.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => handleSelect(t.id)}
          className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs hover:bg-muted transition-colors cursor-pointer"
        >
          <span
            className="inline-block h-2 w-2 rounded-full shrink-0"
            style={{ backgroundColor: t.color }}
            aria-hidden="true"
          />
          {t.label}
        </button>
      ))}
      <button
        type="button"
        onClick={onClose}
        className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        Cancel
      </button>
    </div>
  );
}
