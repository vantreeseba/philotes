import { gql, useQuery } from '@apollo/client';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { downloadFile } from '@/lib/download';
import { buildIcsContent, type CalendarEventsData } from '@/lib/ics-export';

const GET_ALL_EVENTS_FOR_EXPORT = gql`
  query GetAllEventsForExport {
    interactions {
      id
      channel
      occurredAt
      note
      person {
        id
        firstName
        lastName
      }
    }
    importantDates {
      id
      name
      description
      date
      recurrence
      milestoneType
      person {
        id
        firstName
        lastName
      }
    }
  }
`;

export function ExportCalendarCard() {
  const { data, loading, error } = useQuery<CalendarEventsData>(GET_ALL_EVENTS_FOR_EXPORT);

  const totalCount = (data?.interactions?.length ?? 0) + (data?.importantDates?.length ?? 0);

  function handleExport() {
    if (!data) return;
    downloadFile(buildIcsContent(data), 'philotes-events.ics', 'text/calendar;charset=utf-8');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Export Calendar Events</CardTitle>
        <CardDescription>
          Download all your interactions and important dates as an ICS file. You can import this into Google Calendar,
          Apple Calendar, Outlook, or any other calendar application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && <p className="text-sm text-destructive mb-4">Failed to load events: {error.message}</p>}
        <Button onClick={handleExport} disabled={loading || !!error || totalCount === 0}>
          <Download className="h-4 w-4 mr-2" />
          {loading ? 'Loading…' : `Export ${totalCount} Events as ICS`}
        </Button>
        {!loading && !error && totalCount > 0 && (
          <p className="text-sm text-muted-foreground mt-3">
            {data?.interactions?.length ?? 0} interactions · {data?.importantDates?.length ?? 0} important dates
          </p>
        )}
        {!loading && !error && totalCount === 0 && (
          <p className="text-sm text-muted-foreground mt-3">No events to export yet.</p>
        )}
      </CardContent>
    </Card>
  );
}
