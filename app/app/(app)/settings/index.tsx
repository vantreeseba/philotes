import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { ApiKeyManager } from '@/components/settings/api-key-manager';
import { ExportCalendarCard } from '@/components/settings/export-calendar-card';
import { ExportPeopleCard } from '@/components/settings/export-people-card';
import { GoogleCsvImportCard } from '@/components/settings/google-csv-import-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDarkMode } from '@/hooks/use-dark-mode';

type SettingsTab = 'import-export' | 'api-keys' | 'app';

const TABS: { id: SettingsTab; label: string }[] = [
  { id: 'import-export', label: 'Import / Export' },
  { id: 'api-keys', label: 'API Keys' },
  { id: 'app', label: 'App Settings' },
];

function ImportExportTab() {
  return (
    <div className="space-y-6">
      <ExportCalendarCard />
      <ExportPeopleCard />
      <GoogleCsvImportCard />
    </div>
  );
}

function AppSettingsTab() {
  const { dark, toggle } = useDarkMode();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize how Philotes looks on your device.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Dark mode</p>
              <p className="text-xs text-muted-foreground mt-0.5">Switch between light and dark theme.</p>
            </div>
            <Button variant="outline" size="sm" onClick={toggle}>
              {dark ? <Sun className="mr-1.5 h-4 w-4" /> : <Moon className="mr-1.5 h-4 w-4" />}
              {dark ? 'Light mode' : 'Dark mode'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('import-export');

  return (
    <div className="h-full overflow-y-auto min-h-0 pr-2">
      <div className="px-6 py-8 max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">Settings</h1>

        <div>
          <div className="flex border-b border-border">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? 'border-primary text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="pt-6">
            {activeTab === 'import-export' && <ImportExportTab />}
            {activeTab === 'api-keys' && <ApiKeyManager />}
            {activeTab === 'app' && <AppSettingsTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
