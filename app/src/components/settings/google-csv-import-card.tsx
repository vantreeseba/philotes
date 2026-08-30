import { gql, useMutation } from '@apollo/client';
import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IMPORT_GOOGLE_CONTACTS = gql`
  mutation ImportGoogleContacts($csv: String!) {
    importGoogleContacts(csv: $csv) {
      imported
      merged
      skipped
      errors
    }
  }
`;

type ImportState =
  | { stage: 'idle' }
  | { stage: 'preview'; contactCount: number; firstFiveNames: string[]; rawCsv: string }
  | { stage: 'importing' }
  | { stage: 'done'; imported: number; merged: number; skipped: number; errors: string[] }
  | { stage: 'error'; message: string };

export function GoogleCsvImportCard() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importState, setImportState] = useState<ImportState>({ stage: 'idle' });

  const [importContacts] = useMutation<{
    importGoogleContacts: { imported: number; merged: number; skipped: number; errors: string[] };
  }>(IMPORT_GOOGLE_CONTACTS);

  function handleFileButtonClick() {
    fileInputRef.current?.click();
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset so the same file can be re-selected
    e.target.value = '';

    const text = await file.text();

    // Quick preview: count non-empty non-header lines for an estimate
    const lines = text.split(/\r?\n|\r/).filter((l) => l.trim().length > 0);
    const dataLines = Math.max(0, lines.length - 1); // subtract header row

    // Get first 5 names from raw lines for preview (best-effort, unquoted)
    const firstFiveNames = lines.slice(1, 6).map((line) => {
      const firstComma = line.indexOf(',');
      const secondComma = line.indexOf(',', firstComma + 1);
      const first = line.slice(0, firstComma).replace(/^"|"$/g, '').trim();
      const last =
        firstComma !== -1 && secondComma !== -1
          ? line
              .slice(firstComma + 1, secondComma)
              .replace(/^"|"$/g, '')
              .trim()
          : '';
      return [first, last].filter(Boolean).join(' ') || '(unknown)';
    });

    setImportState({
      stage: 'preview',
      contactCount: dataLines,
      firstFiveNames,
      rawCsv: text,
    });
  }

  async function handleImport() {
    if (importState.stage !== 'preview' || !importState.rawCsv) return;

    setImportState({ stage: 'importing' });

    try {
      const result = await importContacts({ variables: { csv: importState.rawCsv } });

      if (result.errors?.length) {
        setImportState({
          stage: 'error',
          message: result.errors.map((e) => e.message).join('; '),
        });
        return;
      }

      const { imported, merged, skipped, errors } = result.data!.importGoogleContacts;
      setImportState({ stage: 'done', imported, merged, skipped, errors });
    } catch (err) {
      setImportState({
        stage: 'error',
        message: err instanceof Error ? err.message : 'Unknown error',
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Import from Google Contacts</CardTitle>
        <CardDescription>
          Upload a CSV export from Google Contacts to import your contacts into Philotes. Contacts without an email
          address will be skipped.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {importState.stage === 'idle' && (
          <>
            <input ref={fileInputRef} type="file" accept=".csv" className="hidden" onChange={handleFileChange} />
            <Button onClick={handleFileButtonClick} variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Choose CSV File
            </Button>
          </>
        )}

        {importState.stage === 'preview' && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Ready to import approximately {importState.contactCount} contacts.
            </p>
            {importState.firstFiveNames.length > 0 && (
              <ul className="text-sm space-y-1">
                {importState.firstFiveNames.map((name, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static preview list
                  <li key={i} className="text-muted-foreground">
                    • {name}
                  </li>
                ))}
                {importState.contactCount > 5 && (
                  <li className="text-muted-foreground">…and {importState.contactCount - 5} more</li>
                )}
              </ul>
            )}
            <Button onClick={handleImport}>
              <Upload className="h-4 w-4 mr-2" />
              Import Contacts
            </Button>
          </div>
        )}

        {importState.stage === 'importing' && <p className="text-sm text-muted-foreground">Importing…</p>}

        {importState.stage === 'done' && (
          <div className="space-y-1">
            <p className="text-sm text-green-600">
              ✓ {importState.imported} contacts imported
              {importState.merged > 0 ? `, ${importState.merged} merged` : ''}
              {importState.skipped > 0 ? `, ${importState.skipped} skipped` : ''}
            </p>
            {importState.errors.length > 0 && (
              <ul className="text-sm text-destructive space-y-0.5">
                {importState.errors.map((e, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static error list
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )}
            <Button variant="outline" size="sm" onClick={() => setImportState({ stage: 'idle' })}>
              Import Another File
            </Button>
          </div>
        )}

        {importState.stage === 'error' && (
          <div className="space-y-3">
            <p className="text-sm text-destructive">Import failed: {importState.message}</p>
            <Button variant="outline" onClick={() => setImportState({ stage: 'idle' })}>
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
