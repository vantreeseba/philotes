import { useQuery } from '@apollo/client';
import { graphql } from '@/__generated__/gql.js';
import { Card, CardContent } from '@/components/ui/card.js';
import { Spinner } from '@/components/ui/spinner.js';

const GET_HEALTH_DATA = graphql(`
  query RelationshipHealth {
    persons {
      id
      contactFrequency
      interactions(limit: 1, orderBy: { occurredAt: { direction: desc, priority: 1 } }) {
        occurredAt
      }
    }
  }
`);

const FREQUENCY_DAYS: Record<string, number> = {
  weekly: 7,
  monthly: 30,
  quarterly: 90,
  yearly: 365,
};

const DORMANT_DAYS = 90;

interface StatProps {
  label: string;
  value: number;
  total: number;
  accent?: string;
}

function Stat({ label, value, total, accent = 'text-foreground' }: StatProps) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);
  return (
    <div className="flex flex-col items-center gap-0.5 min-w-0">
      <span className={`text-2xl font-bold tabular-nums ${accent}`}>{value}</span>
      <div className="w-full bg-muted rounded-full h-1 mt-0.5">
        <div
          className={`h-1 rounded-full transition-all ${accent.replace('text-', 'bg-')}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground text-center leading-tight mt-0.5">{label}</span>
    </div>
  );
}

export function RelationshipHealth() {
  const { data, loading } = useQuery(GET_HEALTH_DATA);

  const persons = data?.persons ?? [];
  const total = persons.length;

  const stats = persons.reduce(
    (acc, p) => {
      const lastContact = p.interactions[0]?.occurredAt ?? null;
      const daysSince = lastContact
        ? Math.floor((Date.now() - lastContact.getTime()) / (1000 * 60 * 60 * 24))
        : Number.POSITIVE_INFINITY;

      if (daysSince >= DORMANT_DAYS) acc.dormant++;

      if (!p.contactFrequency) {
        acc.noGoal++;
        return acc;
      }

      acc.withGoal++;
      const period = FREQUENCY_DAYS[p.contactFrequency] ?? 30;
      if (daysSince <= period) acc.onTrack++;
      else acc.overdue++;

      return acc;
    },
    { withGoal: 0, onTrack: 0, overdue: 0, dormant: 0, noGoal: 0 },
  );

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="font-semibold text-base mb-4">Relationship Health</h2>
        {loading ? (
          <Spinner />
        ) : total === 0 ? (
          <p className="text-sm text-muted-foreground italic">No contacts yet.</p>
        ) : (
          <div className="grid grid-cols-4 gap-3">
            <Stat label="With goal" value={stats.withGoal} total={total} />
            <Stat label="On track" value={stats.onTrack} total={total} accent="text-green-600" />
            <Stat label="Overdue" value={stats.overdue} total={total} accent="text-amber-500" />
            <Stat label="Dormant" value={stats.dormant} total={total} accent="text-red-500" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
