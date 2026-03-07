import { createFileRoute } from '@tanstack/react-router';
import { RecentPersons } from '@/components/domain/dashboard/recent-persons.js';
import { UpcomingDates } from '@/components/domain/dashboard/upcoming-dates.js';

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

export const Route = createFileRoute('/')({
  component: DashboardPage,
});

// ---------------------------------------------------------------------------
// Dashboard modules
//
// To add a new module:
//   1. Create a self-contained component in app/src/components/domain/dashboard/
//   2. Import it here and add it to the MODULES array below.
//   3. Choose a span: "half" fills one column, "full" spans both columns.
// ---------------------------------------------------------------------------

type DashboardModule = {
  id: string;
  span: 'half' | 'full';
  component: React.ComponentType;
};

const MODULES: DashboardModule[] = [
  { id: 'upcoming-dates', span: 'full', component: UpcomingDates },
  { id: 'recent-persons', span: 'full', component: RecentPersons },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {MODULES.map(({ id, span, component: Module }) => (
          <div key={id} className={span === 'full' ? 'md:col-span-2' : ''}>
            <Module />
          </div>
        ))}
      </div>
    </div>
  );
}
