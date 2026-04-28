import { useQuery } from '@apollo/client';
import { createFileRoute } from '@tanstack/react-router';
import { graphql } from '@/__generated__/gql.js';
import { DontLoseTouch } from '@/components/domain/dashboard/dont-lose-touch.js';
import { DormantTies } from '@/components/domain/dashboard/dormant-ties.js';
import type { OpenTask } from '@/components/domain/dashboard/open-tasks.js';
import { OpenTasks } from '@/components/domain/dashboard/open-tasks.js';
import { RecentPersons } from '@/components/domain/dashboard/recent-persons.js';
import { UpcomingDates } from '@/components/domain/dashboard/upcoming-dates.js';
import { ListLayout } from '@/components/layouts/list.js';
import { Spinner } from '@/components/ui/spinner.tsx';

// ---------------------------------------------------------------------------
// GraphQL — only tasks remain in the main dashboard query; all other modules
// fetch their own data independently.
// ---------------------------------------------------------------------------

const GET_OPEN_TASKS = graphql(`
  query DashboardOpenTasks {
    persons {
      id
      firstName
      lastName
      tasks {
        id
        title
        dueAt
        completedAt
        personId
      }
    }
  }
`);

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

export const Route = createFileRoute('/')({
  component: DashboardPage,
});

// ---------------------------------------------------------------------------
// Open-tasks computation
// ---------------------------------------------------------------------------

function computeOpenTasks(
  persons: Array<{
    id: string;
    firstName: string;
    lastName: string;
    tasks: Array<{ id: string; title: string; dueAt?: Date | null; completedAt?: Date | null; personId: string }>;
  }>,
): OpenTask[] {
  const now = Date.now();
  const sevenDaysFromNow = now + 7 * 24 * 60 * 60 * 1000;
  const results: OpenTask[] = [];

  for (const person of persons) {
    for (const task of person.tasks) {
      if (task.completedAt) continue;
      const dueAt = task.dueAt ? task.dueAt.getTime() : null;
      const isOverdue = dueAt !== null && dueAt < now;
      const isDueThisWeek = dueAt !== null && dueAt <= sevenDaysFromNow;
      if (!isOverdue && !isDueThisWeek) continue;
      results.push({
        id: task.id,
        title: task.title,
        dueAt: task.dueAt ?? null,
        personId: person.id,
        personFirstName: person.firstName,
        personLastName: person.lastName,
        isOverdue,
      });
    }
  }

  return results.sort((a, b) => {
    if (a.isOverdue && !b.isOverdue) return -1;
    if (!a.isOverdue && b.isOverdue) return 1;
    const aTime = a.dueAt ? a.dueAt.getTime() : 0;
    const bTime = b.dueAt ? b.dueAt.getTime() : 0;
    return aTime - bTime;
  });
}

// ---------------------------------------------------------------------------
// Dashboard modules
//
// To add a module:
//   1. Create a self-contained component in app/src/components/domain/dashboard/
//   2. Import it here and add it to the MODULES array.
//   3. span: 'half' fills one column, 'full' spans both columns.
// ---------------------------------------------------------------------------

type DashboardModule = { id: string; span: 'half' | 'full'; component: React.ReactNode };

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function DashboardPage() {
  const { data, loading, error } = useQuery(GET_OPEN_TASKS);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive text-sm">Error loading dashboard: {error.message}</p>;
  }

  const openTasks = computeOpenTasks(data?.persons ?? []);

  const MODULES: DashboardModule[] = [
    { id: 'upcoming-dates', span: 'half', component: <UpcomingDates /> },
    { id: 'dont-lose-touch', span: 'half', component: <DontLoseTouch /> },
    { id: 'open-tasks', span: 'half', component: <OpenTasks tasks={openTasks} /> },
    { id: 'dormant-ties', span: 'half', component: <DormantTies /> },
    { id: 'recent-persons', span: 'full', component: <RecentPersons /> },
  ];

  return (
    <ListLayout
      header={<h1 className="font-bold text-2xl">Dashboard</h1>}
      spacing={false}
      body={
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {MODULES.map(({ id, span, component }) => (
            <div key={id} className={span === 'full' ? 'md:col-span-2' : ''}>
              {component}
            </div>
          ))}
        </div>
      }
    />
  );
}
