import { useMutation } from '@apollo/client';
import { CheckSquare, Square, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql.js';
import { Button } from '@/components/ui/button.js';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.js';

// ---------------------------------------------------------------------------
// Fragment
// ---------------------------------------------------------------------------

export const TASK_LIST = graphql(`
  fragment Person_Tasks on Person {
    id
    tasks {
      id
      title
      notes
      dueAt
      completedAt
      createdAt
    }
  }
`);

// ---------------------------------------------------------------------------
// Mutations
// ---------------------------------------------------------------------------

const CREATE_TASK = graphql(`
  mutation CreateTask(
    $personId: String!
    $title: String!
    $notes: String
    $dueAt: String
  ) {
    createTask(
      values: {
        personId: $personId
        title: $title
        notes: $notes
        dueAt: $dueAt
      }
    ) {
      id
      personId
      title
      notes
      dueAt
      completedAt
      createdAt
    }
  }
`);

const UPDATE_TASK = graphql(`
  mutation UpdateTask($id: String!, $completedAt: String) {
    updateTasks(
      set: { completedAt: $completedAt }
      where: { id: { eq: $id } }
    ) {
      id
      completedAt
    }
  }
`);

const DELETE_TASK = graphql(`
  mutation DeleteTask($id: String!) {
    deleteTasks(where: { id: { eq: $id } }) {
      id
    }
  }
`);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TaskData {
  id: string;
  title: string;
  notes: string | null | undefined;
  dueAt: string | null | undefined;
  completedAt: string | null | undefined;
  createdAt: string | null | undefined;
}

export interface TaskListProps {
  personId: string;
  tasks: TaskData[];
  onAdd: () => void;
  onDelete: () => void;
  onUpdate: () => void;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDueDate(dueAt: string): string {
  const date = new Date(dueAt);
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// ---------------------------------------------------------------------------
// Task row
// ---------------------------------------------------------------------------

interface TaskRowProps {
  task: TaskData;
  onDelete: () => void;
  onUpdate: () => void;
}

function TaskRow({ task, onDelete, onUpdate }: TaskRowProps) {
  const [updateTask] = useMutation(UPDATE_TASK);
  const [deleteTask] = useMutation(DELETE_TASK);

  const isCompleted = task.completedAt != null;

  const handleToggle = async () => {
    const completedAt = isCompleted ? null : new Date().toISOString();
    await updateTask({ variables: { id: task.id, completedAt } });
    onUpdate();
  };

  const handleDelete = async () => {
    await deleteTask({ variables: { id: task.id } });
    onDelete();
  };

  return (
    <div className="flex items-start gap-2 rounded-md border border-border px-3 py-2 text-sm">
      <button
        type="button"
        onClick={handleToggle}
        className="mt-0.5 shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={isCompleted ? 'Mark incomplete' : 'Mark complete'}
      >
        {isCompleted ? <CheckSquare className="h-4 w-4 text-primary" /> : <Square className="h-4 w-4" />}
      </button>

      <div className="min-w-0 flex-1">
        <p className={isCompleted ? 'line-through text-muted-foreground' : 'font-medium'}>{task.title}</p>
        {task.notes && <p className="text-xs text-muted-foreground mt-0.5 whitespace-pre-wrap">{task.notes}</p>}
        {task.dueAt && <p className="text-xs text-muted-foreground mt-0.5">Due: {formatDueDate(task.dueAt)}</p>}
      </div>

      <button
        type="button"
        onClick={handleDelete}
        className="shrink-0 text-muted-foreground hover:text-destructive transition-colors"
        aria-label="Delete task"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Add task form
// ---------------------------------------------------------------------------

interface AddTaskFormProps {
  personId: string;
  onAdded: () => void;
  onCancel: () => void;
}

function AddTaskForm({ personId, onAdded, onCancel }: AddTaskFormProps) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [dueAt, setDueAt] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [createTask] = useMutation(CREATE_TASK);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSubmitting(true);
    try {
      await createTask({
        variables: {
          personId,
          title: title.trim(),
          notes: notes.trim() || null,
          dueAt: dueAt || null,
        },
      });
      onAdded();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="task-title" className="text-sm font-medium">
          Title <span className="text-destructive">*</span>
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          // biome-ignore lint/a11y/noAutofocus: intentional for modal forms
          autoFocus
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="task-notes" className="text-sm font-medium">
          Notes
        </label>
        <textarea
          id="task-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Optional notes..."
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="task-due-at" className="text-sm font-medium">
          Due Date
        </label>
        <input
          id="task-due-at"
          type="datetime-local"
          value={dueAt}
          onChange={(e) => setDueAt(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={!title.trim() || submitting}>
          {submitting ? 'Adding...' : 'Add Task'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function TaskList({ personId, tasks, onAdd, onDelete, onUpdate }: TaskListProps) {
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const openTasks = tasks.filter((t) => t.completedAt == null);
  const doneTasks = tasks.filter((t) => t.completedAt != null);

  return (
    <div className="space-y-4">
      {/* Add Task button */}
      <div className="flex justify-end">
        <Button size="sm" variant="outline" onClick={() => setAddDialogOpen(true)}>
          Add Task
        </Button>
      </div>

      {/* Open tasks */}
      {openTasks.length === 0 && doneTasks.length === 0 && (
        <p className="text-muted-foreground text-sm">No tasks yet.</p>
      )}

      {openTasks.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Open</h3>
          {openTasks.map((task) => (
            <TaskRow key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
          ))}
        </div>
      )}

      {/* Done tasks */}
      {doneTasks.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Done</h3>
          {doneTasks.map((task) => (
            <TaskRow key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
          ))}
        </div>
      )}

      {/* Add Task dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          <AddTaskForm
            personId={personId}
            onAdded={() => {
              setAddDialogOpen(false);
              onAdd();
            }}
            onCancel={() => setAddDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
