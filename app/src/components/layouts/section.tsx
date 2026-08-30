import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SectionProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

/** One auto-height content card with a quiet heading and an optional action. */
export function Section({ title, action, children }: SectionProps) {
  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</h2>
          {action}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}

interface SectionActionProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

/** Small ghost icon+text button used as a section's add action. */
export function SectionAction({ icon, label, onClick }: SectionActionProps) {
  return (
    <Button size="sm" variant="ghost" onClick={onClick} className="h-7 px-2 text-xs text-muted-foreground">
      {icon}
      {label}
    </Button>
  );
}
