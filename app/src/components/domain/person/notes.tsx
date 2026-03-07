import { useMutation } from '@apollo/client';
import { Pencil, Tag, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql.js';
import { Button } from '@/components/ui/button.js';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.js';
import { TagMultiSelect } from '@/components/ui/tag-multi-select.js';

// ---------------------------------------------------------------------------
// Mutations
// ---------------------------------------------------------------------------

const CREATE_NOTE = graphql(`
  mutation CreateNote($body: String!, $personId: String!) {
    createNote(values: { body: $body, personId: $personId }) {
      id
      body
      personId
    }
  }
`);

const UPDATE_NOTE = graphql(`
  mutation UpdateNote($id: String!, $body: String!) {
    updateNotes(set: { body: $body }, where: { id: { eq: $id } }) {
      id
      body
    }
  }
`);

const DELETE_NOTE = graphql(`
  mutation DeleteNote($id: String!) {
    deleteNotes(where: { id: { eq: $id } }) {
      id
    }
  }
`);

const ATTACH_NOTE_TAG = graphql(`
  mutation AttachTagToNote($noteId: String!, $labelId: String!) {
    createNoteTag(values: { noteId: $noteId, labelId: $labelId }) {
      noteId
      labelId
    }
  }
`);

const DETACH_NOTE_TAG = graphql(`
  mutation DetachTagFromNote($noteId: String!, $labelId: String!) {
    deleteNoteTags(
      where: { noteId: { eq: $noteId }, labelId: { eq: $labelId } }
    ) {
      noteId
      labelId
    }
  }
`);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface NoteData {
  id: string;
  body: string;
  labels: Array<{ id: string; label: string; color: string }>;
}

export interface PersonNotesProps {
  personId: string;
  notes: NoteData[];
  allTags: Array<{ id: string; label: string; color: string }>;
  onChanged: () => void;
  createOpen: boolean;
  onCreateOpenChange: (open: boolean) => void;
}

// ---------------------------------------------------------------------------
// Tag chip on a note (for existing notes)
// ---------------------------------------------------------------------------

interface NoteTagChipProps {
  noteId: string;
  labelId: string;
  label: string;
  color: string;
  onDetach: () => void;
}

function NoteTagChip({ noteId, labelId, label, color, onDetach }: NoteTagChipProps) {
  const [detachTag] = useMutation(DETACH_NOTE_TAG);

  const handleDetach = async () => {
    await detachTag({ variables: { noteId, labelId } });
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
// Add-tag picker on a note (for existing notes)
// ---------------------------------------------------------------------------

interface NoteTagPickerProps {
  noteId: string;
  allTags: Array<{ id: string; label: string; color: string }>;
  attachedTagIds: Set<string>;
  onClose: () => void;
  onAdd: () => void;
}

function NoteTagPicker({ noteId, allTags, attachedTagIds, onClose, onAdd }: NoteTagPickerProps) {
  const [attachTag] = useMutation(ATTACH_NOTE_TAG);
  const available = allTags.filter((t) => !attachedTagIds.has(t.id));

  const handleSelect = async (labelId: string) => {
    await attachTag({ variables: { noteId, labelId } });
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

// ---------------------------------------------------------------------------
// Edit note form (body only — tags managed inline on the row)
// ---------------------------------------------------------------------------

interface EditNoteFormProps {
  initialBody: string;
  onSubmit: (body: string) => Promise<void>;
  onCancel: () => void;
}

function EditNoteForm({ initialBody, onSubmit, onCancel }: EditNoteFormProps) {
  const [body, setBody] = useState(initialBody);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;
    setSubmitting(true);
    try {
      await onSubmit(body.trim());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        placeholder="Write your note..."
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        // biome-ignore lint/a11y/noAutofocus: intentional for modal forms
        autoFocus
      />
      <div className="flex gap-2">
        <Button type="submit" disabled={!body.trim() || submitting}>
          {submitting ? 'Saving...' : 'Save'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Create note form (body + tag multi-select)
// ---------------------------------------------------------------------------

interface CreateNoteFormProps {
  personId: string;
  allTags: Array<{ id: string; label: string; color: string }>;
  onAdded: () => void;
  onCancel: () => void;
}

function CreateNoteForm({ personId, allTags, onAdded, onCancel }: CreateNoteFormProps) {
  const [body, setBody] = useState('');
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [createNote] = useMutation(CREATE_NOTE);
  const [attachTag] = useMutation(ATTACH_NOTE_TAG);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;
    setSubmitting(true);
    try {
      const result = await createNote({ variables: { body: body.trim(), personId } });
      const noteId = result.data?.createNote?.id;
      if (noteId && selectedTagIds.length > 0) {
        for (const labelId of selectedTagIds) {
          await attachTag({ variables: { noteId, labelId } });
        }
      }
      onAdded();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        placeholder="Write your note..."
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        // biome-ignore lint/a11y/noAutofocus: intentional for modal forms
        autoFocus
      />
      {allTags.length > 0 && (
        <div className="space-y-1.5">
          <label htmlFor="note-tags" className="text-sm font-medium">
            Tags
          </label>
          <TagMultiSelect
            id="note-tags"
            options={allTags}
            selected={selectedTagIds}
            onChange={setSelectedTagIds}
            placeholder="Add tags..."
          />
        </div>
      )}
      <div className="flex gap-2">
        <Button type="submit" disabled={!body.trim() || submitting}>
          {submitting ? 'Saving...' : 'Add Note'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Note row
// ---------------------------------------------------------------------------

interface NoteRowProps {
  note: NoteData;
  allTags: Array<{ id: string; label: string; color: string }>;
  onChanged: () => void;
}

function NoteRow({ note, allTags, onChanged }: NoteRowProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);
  const [updateNote] = useMutation(UPDATE_NOTE);
  const [deleteNote] = useMutation(DELETE_NOTE);

  const handleEdit = async (body: string) => {
    await updateNote({ variables: { id: note.id, body } });
    setEditOpen(false);
    onChanged();
  };

  const handleDelete = async () => {
    await deleteNote({ variables: { id: note.id } });
    onChanged();
  };

  const attachedIds = new Set(note.labels.map((t) => t.id));

  return (
    <>
      <div className="rounded-md border border-border px-3 py-2 text-sm space-y-1.5">
        <div className="flex items-start justify-between gap-3">
          <p className="flex-1 whitespace-pre-wrap text-sm">{note.body}</p>
          <div className="flex shrink-0 gap-1 text-muted-foreground">
            <button
              type="button"
              onClick={() => setEditOpen(true)}
              className="hover:text-foreground transition-colors"
              aria-label="Edit note"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="hover:text-destructive transition-colors"
              aria-label="Delete note"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-1">
          {note.labels.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {note.labels.map((t) => (
                <NoteTagChip
                  key={t.id}
                  noteId={note.id}
                  labelId={t.id}
                  label={t.label}
                  color={t.color}
                  onDetach={onChanged}
                />
              ))}
            </div>
          )}
          {showAddTag ? (
            <NoteTagPicker
              noteId={note.id}
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

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Note</DialogTitle>
          </DialogHeader>
          <EditNoteForm initialBody={note.body} onSubmit={handleEdit} onCancel={() => setEditOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function PersonNotes({ personId, notes, allTags, onChanged, createOpen, onCreateOpenChange }: PersonNotesProps) {
  return (
    <div className="space-y-2">
      {notes.length === 0 && <p className="text-muted-foreground text-sm">No notes yet.</p>}

      {notes.map((note) => (
        <NoteRow key={note.id} note={note} allTags={allTags} onChanged={onChanged} />
      ))}

      <Dialog open={createOpen} onOpenChange={onCreateOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Note</DialogTitle>
          </DialogHeader>
          <CreateNoteForm
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
