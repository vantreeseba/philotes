import { useFragment } from '@apollo/client';
import { Tag, Trash2 } from 'lucide-react';
import { graphql } from '@/__generated__/gql.js';
import type { Label_ListFragment } from '@/__generated__/graphql.ts';
import { Button } from '@/components/ui/button.js';
import { Card, CardContent } from '@/components/ui/card.js';
import { Spinner } from '@/components/ui/spinner.tsx';

const LABEL_LIST = graphql(`
  fragment Label_List on Label {
    id
    color
    label
  }
`);

interface LabelRowProps {
  label: Label_ListFragment;
  onClickDelete: (id: string) => void;
}

function LabelRow({ label: from, onClickDelete }: LabelRowProps) {
  const { data: label, complete } = useFragment({
    fragment: LABEL_LIST,
    from,
  });

  if (!complete) {
    return <Spinner />;
  }

  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-4 w-4 rounded-full border"
            style={{ backgroundColor: label.color }}
            aria-hidden="true"
          />
          <p className="font-medium">{label.label}</p>
          <p className="text-muted-foreground text-sm">{label.color}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={() => onClickDelete(label.id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

interface LabelListProps {
  labels: Array<Label_ListFragment>;
  onClickAdd: () => void;
  onClickDelete: (id: string) => void;
}

export function LabelList({ labels, onClickAdd, onClickDelete }: LabelListProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Labels</h1>
        <Button onClick={onClickAdd}>
          <Tag className="mr-2 h-4 w-4" />
          Add Label
        </Button>
      </div>

      <div className="grid gap-4">
        {labels.map((label) => (
          <LabelRow key={label.id} label={label} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}
