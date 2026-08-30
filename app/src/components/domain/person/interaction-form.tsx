import { Mail, MessageSquare, MoreHorizontal, Phone, Users } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TagMultiSelect } from '@/components/ui/tag-multi-select';

// ---------------------------------------------------------------------------
// Channel / Sentiment helpers
// ---------------------------------------------------------------------------

export type Channel = 'call' | 'text' | 'email' | 'in-person' | 'other';
export type Sentiment = 'great' | 'good' | 'neutral' | 'difficult';

export const CHANNEL_OPTIONS: Array<{ value: Channel; label: string }> = [
  { value: 'call', label: 'Call' },
  { value: 'text', label: 'Text' },
  { value: 'email', label: 'Email' },
  { value: 'in-person', label: 'In Person' },
  { value: 'other', label: 'Other' },
];

export const SENTIMENT_OPTIONS: Array<{
  value: Sentiment;
  label: string;
  emoji: string;
}> = [
  { value: 'great', label: 'Great', emoji: '😄' },
  { value: 'good', label: 'Good', emoji: '🙂' },
  { value: 'neutral', label: 'Neutral', emoji: '😐' },
  { value: 'difficult', label: 'Difficult', emoji: '😟' },
];

export function ChannelIcon({ channel, className }: { channel: string; className?: string }) {
  switch (channel as Channel) {
    case 'call':
      return <Phone className={className} />;
    case 'text':
      return <MessageSquare className={className} />;
    case 'email':
      return <Mail className={className} />;
    case 'in-person':
      return <Users className={className} />;
    default:
      return <MoreHorizontal className={className} />;
  }
}

export function sentimentEmoji(sentiment: string | null | undefined): string {
  return SENTIMENT_OPTIONS.find((s) => s.value === sentiment)?.emoji ?? '';
}

// ---------------------------------------------------------------------------
// Interaction form (create + edit)
// ---------------------------------------------------------------------------

export interface InteractionFormValues {
  channel: Channel;
  occurredAt: string;
  sentiment: Sentiment | '';
  note: string;
  labelIds: string[];
}

interface InteractionFormProps {
  personId: string;
  allTags: Array<{ id: string; label: string; color: string }>;
  initialValues?: Partial<InteractionFormValues>;
  submitLabel?: string;
  onSubmit: (values: InteractionFormValues) => Promise<void>;
  onCancel: () => void;
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 16);
}

export function InteractionForm({
  personId: _personId,
  allTags,
  initialValues,
  submitLabel = 'Add Interaction',
  onSubmit,
  onCancel,
}: InteractionFormProps) {
  const [channel, setChannel] = useState<Channel>(initialValues?.channel ?? 'call');
  const [occurredAt, setOccurredAt] = useState(
    initialValues?.occurredAt ? new Date(initialValues.occurredAt).toISOString().slice(0, 16) : todayIso(),
  );
  const [sentiment, setSentiment] = useState<Sentiment | ''>(initialValues?.sentiment ?? '');
  const [note, setNote] = useState(initialValues?.note ?? '');
  const [labelIds, setLabelIds] = useState<string[]>(initialValues?.labelIds ?? []);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit({ channel, occurredAt, sentiment, note, labelIds });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Date/time */}
      <div className="space-y-1.5">
        <label htmlFor="interaction-date" className="text-sm font-medium">
          Date &amp; Time
        </label>
        <input
          id="interaction-date"
          type="datetime-local"
          value={occurredAt}
          onChange={(e) => setOccurredAt(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          required
        />
      </div>

      {/* Channel */}
      <div className="space-y-1.5">
        <span className="text-sm font-medium">Channel</span>
        <div className="flex flex-wrap gap-2">
          {CHANNEL_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setChannel(opt.value)}
              className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                channel === opt.value
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border hover:bg-muted'
              }`}
            >
              <ChannelIcon channel={opt.value} className="h-3.5 w-3.5" />
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sentiment */}
      <div className="space-y-1.5">
        <span className="text-sm font-medium">Sentiment</span>
        <div className="flex flex-wrap gap-2">
          {SENTIMENT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSentiment(sentiment === opt.value ? '' : opt.value)}
              className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                sentiment === opt.value
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border hover:bg-muted'
              }`}
            >
              <span>{opt.emoji}</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="space-y-1.5">
        <label htmlFor="interaction-note" className="text-sm font-medium">
          Note
        </label>
        <textarea
          id="interaction-note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="What happened?"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      {/* Tags */}
      {allTags.length > 0 && (
        <div className="space-y-1.5">
          <label htmlFor="interaction-tags" className="text-sm font-medium">
            Tags
          </label>
          <TagMultiSelect
            id="interaction-tags"
            options={allTags}
            selected={labelIds}
            onChange={setLabelIds}
            placeholder="Add tags..."
          />
        </div>
      )}

      <div className="flex gap-2">
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : submitLabel}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
