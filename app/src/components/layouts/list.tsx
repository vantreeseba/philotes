import type { ReactNode } from 'react';

interface ListLayoutProps {
  header: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
}

export function ListLayout(props: ListLayoutProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">{props.header}</div>
      <div className="space-y-2">{props.body}</div>
      {props.footer && <div>{props.footer}</div>}
    </div>
  );
}
