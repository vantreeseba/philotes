import type { ReactNode } from 'react';

interface ListLayoutProps {
  header: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
}

export function ListLayout({ header, body, footer }: ListLayoutProps) {
  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem-3rem)]">
      <div className="shrink-0 sticky top-0 bg-background z-10 pb-3">{header}</div>
      <div className="flex-1 overflow-y-auto space-y-2 min-h-0">{body}</div>
      {footer && <div className="shrink-0 sticky bottom-0 bg-background z-10 pt-3 border-t">{footer}</div>}
    </div>
  );
}
