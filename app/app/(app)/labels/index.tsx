import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql';
import type { CreateLabelInput, Label_ListFragment } from '@/__generated__/graphql';
import { LabelForm } from '@/components/domain/label/form';
import { LabelList } from '@/components/domain/label/list';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Spinner } from '@/components/ui/spinner.tsx';

const GET_LABELS = graphql(`
  query GetLabels {
    labels {
      __typename
      id
      ...Label_List
    }
  }
`);

const CREATE_LABEL = graphql(`
  mutation CreateLabel($values: CreateLabelInput!) {
    createLabel(values: $values) {
      __typename
      id
      ...Label_List
    }
  }
`);

const DELETE_LABEL = graphql(`
  mutation DeleteLabel($id: UUID!) {
    deleteLabel(where: { id: { eq: $id } }) {
      __typename
      id
    }
  }
`);

const UPDATE_LABEL = graphql(`
  mutation UpdateLabel($id: UUID!, $label: String!, $color: String!) {
    updateLabel(
      set: { label: $label, color: $color }
      where: { id: { eq: $id } }
    ) {
      __typename
      id
      label
      color
    }
  }
`);

const MERGE_LABEL_INTO = graphql(`
  mutation MergeLabelInto($keepId: UUID!, $deleteId: UUID!) {
    mergeLabelInto(keepId: $keepId, deleteId: $deleteId) {
      __typename
      id
      label
      color
    }
  }
`);

export default function LabelsPage() {
  const { data, loading, error, refetch } = useQuery(GET_LABELS);
  const [createLabel] = useMutation(CREATE_LABEL, {
    refetchQueries: [{ query: GET_LABELS }],
  });
  const [deleteLabel] = useMutation(DELETE_LABEL, {
    refetchQueries: [{ query: GET_LABELS }],
  });
  const [updateLabel] = useMutation(UPDATE_LABEL, {
    refetchQueries: [{ query: GET_LABELS }],
  });
  const [mergeLabelInto] = useMutation(MERGE_LABEL_INTO);

  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editingLabel, setEditingLabel] = useState<Label_ListFragment | null>(null);
  const [mergingLabel, setMergingLabel] = useState<Label_ListFragment | null>(null);
  const [mergeTargetId, setMergeTargetId] = useState<string>('');

  const handleDelete = async (id: string) => {
    await deleteLabel({ variables: { id } });
  };

  const handleCreate = async (values: CreateLabelInput): Promise<void> => {
    await createLabel({ variables: { values } });
    setCreateDialogOpen(false);
  };

  const handleEdit = async (values: CreateLabelInput): Promise<void> => {
    if (!editingLabel) return;
    await updateLabel({
      variables: { id: editingLabel.id, label: values.label, color: values.color },
    });
    setEditingLabel(null);
  };

  const handleMergeConfirm = async (): Promise<void> => {
    if (!mergingLabel || !mergeTargetId) return;
    await mergeLabelInto({
      variables: { keepId: mergeTargetId, deleteId: mergingLabel.id },
    });
    setMergingLabel(null);
    setMergeTargetId('');
    await refetch();
  };

  const otherLabels = (data?.labels ?? []).filter((l) => l.id !== mergingLabel?.id);

  if (loading) return <Spinner />;
  if (error) return <p>Error loading labels: {error.message}</p>;

  return (
    <>
      {/* Create dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>New Label</DialogTitle>
            <DialogDescription>Add a new label to your CRM.</DialogDescription>
          </DialogHeader>
          <LabelForm onSubmit={handleCreate} onCancel={() => setCreateDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Edit dialog */}
      <Dialog
        open={editingLabel !== null}
        onOpenChange={(open) => {
          if (!open) setEditingLabel(null);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Label</DialogTitle>
            <DialogDescription>Rename or recolor this label.</DialogDescription>
          </DialogHeader>
          {editingLabel && (
            <LabelForm
              key={editingLabel.id}
              initialValues={{ label: editingLabel.label, color: editingLabel.color }}
              onSubmit={handleEdit}
              onCancel={() => setEditingLabel(null)}
              submitLabel="Save"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Merge dialog */}
      <Dialog
        open={mergingLabel !== null}
        onOpenChange={(open) => {
          if (!open) {
            setMergingLabel(null);
            setMergeTargetId('');
          }
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Merge label</DialogTitle>
            <DialogDescription>
              Choose the label to merge &ldquo;{mergingLabel?.label}&rdquo; into. All items labeled with &ldquo;
              {mergingLabel?.label}&rdquo; will be re-labeled with the chosen label, and &ldquo;{mergingLabel?.label}
              &rdquo; will be deleted.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-1.5">
              <label htmlFor="merge-target" className="text-sm font-medium leading-none">
                Merge into
              </label>
              <select
                id="merge-target"
                value={mergeTargetId}
                onChange={(e) => setMergeTargetId(e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a label…</option>
                {otherLabels.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setMergingLabel(null);
                  setMergeTargetId('');
                }}
              >
                Cancel
              </Button>
              <Button disabled={!mergeTargetId} onClick={handleMergeConfirm}>
                Merge
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <LabelList
        labels={data?.labels ?? []}
        onClickAdd={() => setCreateDialogOpen(true)}
        onClickDelete={handleDelete}
        onClickEdit={setEditingLabel}
        onClickMerge={(label) => {
          setMergingLabel(label);
          setMergeTargetId('');
        }}
      />
    </>
  );
}
