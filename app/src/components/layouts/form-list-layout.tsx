import type { ReactNode } from 'react';

interface FormListLayoutProps {
  form: ReactNode;
  list: ReactNode;

  showForm: boolean;
}

export function FormListLayout(props: FormListLayoutProps) {
  return (
    <div className="space-y-6">
      {props.showForm && props.form}
      {props.list}
    </div>
  );
}
