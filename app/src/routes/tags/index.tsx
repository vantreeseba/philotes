import { useMutation, useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { graphql } from '@/__generated__/gql.js';
import type { CreateLabelInput } from '@/__generated__/graphql.js';
import { LabelList } from '@/components/domain/label/list.js';
import { TagForm } from '@/components/domain/tag/form.js';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.js';
import { Spinner } from '@/components/ui/spinner.tsx';

const GET_TAGS = graphql(`
  query GetTags {
    labels {
      id
      ...Label_List
    }
  }
`);

const CREATE_TAG = graphql(`
  mutation CreateTag($values: CreateLabelInput!) {
    createLabel(values: $values) {
      id
      ...Label_List
    }
  }
`);

const DELETE_TAG = graphql(`
  mutation DeleteTag($id: String!) {
    deleteLabels(where: { id: { eq: $id } }) {
      id
    }
  }
`);

export const Route = createFileRoute('/tags/')({
  component: TagsPage,
});

function TagsPage() {
  const { data, loading, error } = useQuery(GET_TAGS);
  const [createTag] = useMutation(CREATE_TAG, {
    refetchQueries: [{ query: GET_TAGS }],
  });
  const [deleteTag] = useMutation(DELETE_TAG, {
    refetchQueries: [{ query: GET_TAGS }],
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async (id: string) => {
    await deleteTag({ variables: { id } });
  };

  const handleSubmit = async (values: CreateLabelInput): Promise<void> => {
    await createTag({ variables: { values } });
    setDialogOpen(false);
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error loading tags: {error.message}</p>;

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>New Tag</DialogTitle>
            <DialogDescription>Add a new tag to your CRM.</DialogDescription>
          </DialogHeader>
          <TagForm onSubmit={handleSubmit} onCancel={() => setDialogOpen(false)} />
        </DialogContent>
      </Dialog>

      <LabelList labels={data?.labels ?? []} onClickAdd={() => setDialogOpen(true)} onClickDelete={handleDelete} />
    </>
  );
}
