import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ListLayoutProps {
  header: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  className?: string;
  spacing?: boolean;
}

export function ListLayout({ header, body, footer, className, spacing = true }: ListLayoutProps) {
  return (
    <div className={cn('flex flex-col h-[calc(100vh-3.5rem-3rem)]', className)}>
      <div className="shrink-0 sticky top-0 bg-background z-10 pb-3">{header}</div>
      <div className={cn('flex-1 overflow-y-auto min-h-0', spacing && 'space-y-2')}>{body}</div>
      {footer && <div className="shrink-0 sticky bottom-0 bg-background z-10 pt-3 border-t">{footer}</div>}
    </div>
  );
}
