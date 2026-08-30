import { gql, useQuery } from '@apollo/client';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { buildPersonsCsv, type ExportPerson } from '@/lib/csv-export';
import { downloadFile } from '@/lib/download';

const GET_EXPORT_PERSONS = gql`
  query ExportPersons {
    persons(
      orderBy: {
        lastName: { direction: asc, priority: 1 }
        firstName: { direction: asc, priority: 2 }
      }
    ) {
      id
      firstName
      lastName
      email
      contactInfos {
        type
        label
        value
        isPrimary
      }
      addresses {
        type
        label
        line1
        line2
        city
        state
        postalCode
        country
      }
      importantDates(where: { name: { eq: "Birthday" } }) {
        name
        date
        recurrence
      }
      labels {
        id
        label
        color
      }
    }
  }
`;

interface ExportPersonsQueryResult {
  persons: ExportPerson[];
}

export function ExportPeopleCard() {
  const {
    data: exportData,
    loading: exportLoading,
    error: exportError,
  } = useQuery<ExportPersonsQueryResult>(GET_EXPORT_PERSONS);

  function handleExportPeople() {
    if (!exportData?.persons?.length) return;
    downloadFile(buildPersonsCsv(exportData.persons), 'philotes-contacts.csv', 'text/csv;charset=utf-8');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Export People</CardTitle>
        <CardDescription>
          Download all your contacts as a CSV file compatible with Google Contacts, Apple Contacts, and other
          applications.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {exportError && <p className="text-sm text-destructive mb-4">Failed to load people: {exportError.message}</p>}
        <Button onClick={handleExportPeople} disabled={exportLoading || !!exportError || !exportData?.persons?.length}>
          <Download className="h-4 w-4 mr-2" />
          {exportLoading ? 'Loading…' : `Export ${exportData?.persons?.length ?? 0} People as CSV`}
        </Button>
      </CardContent>
    </Card>
  );
}
