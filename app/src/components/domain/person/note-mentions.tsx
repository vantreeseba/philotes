import { useRef, useState } from 'react';
import { type MentionablePerson, parseMentionedPersonIds } from '@/lib/mentions';

// ---------------------------------------------------------------------------
// @-Mention dropdown
// ---------------------------------------------------------------------------

interface MentionDropdownProps {
  query: string;
  allPersons: MentionablePerson[];
  onSelect: (person: MentionablePerson) => void;
  anchorRef: React.RefObject<HTMLTextAreaElement | null>;
}

export function MentionDropdown({ query, allPersons, onSelect, anchorRef }: MentionDropdownProps) {
  const lower = query.toLowerCase();
  const filtered = allPersons.filter((p) => {
    const full = `${p.firstName} ${p.lastName}`.toLowerCase();
    return full.startsWith(lower) || p.firstName.toLowerCase().startsWith(lower);
  });

  if (filtered.length === 0) return null;

  // Position beneath the textarea
  const rect = anchorRef.current?.getBoundingClientRect();
  const style: React.CSSProperties = rect
    ? {
        position: 'fixed',
        top: rect.bottom + 4,
        left: rect.left,
        zIndex: 50,
        minWidth: 180,
      }
    : { position: 'absolute', zIndex: 50, minWidth: 180 };

  return (
    <div style={style} className="rounded-md border border-border bg-popover shadow-md py-1 max-h-48 overflow-y-auto">
      {filtered.map((p) => (
        <button
          key={p.id}
          type="button"
          onMouseDown={(e) => {
            // Prevent textarea blur before click registers
            e.preventDefault();
            onSelect(p);
          }}
          className="w-full px-3 py-1.5 text-left text-sm hover:bg-muted transition-colors"
        >
          {p.firstName} {p.lastName}
        </button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mention-aware textarea hook
// ---------------------------------------------------------------------------

interface UseMentionTextareaOptions {
  allPersons: MentionablePerson[];
}

export function useMentionTextarea({ allPersons }: UseMentionTextareaOptions, initialBody = '') {
  const [body, setBody] = useState(initialBody);
  const [mentionQuery, setMentionQuery] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const detectMention = (value: string, cursorPos: number) => {
    const textUpToCursor = value.slice(0, cursorPos);
    // Match an @ followed by non-whitespace chars at the end of text
    const match = /@([\w']*)$/.exec(textUpToCursor);
    if (match) {
      setMentionQuery(match[1]);
    } else {
      setMentionQuery(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setBody(val);
    detectMention(val, e.target.selectionStart ?? val.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape' && mentionQuery !== null) {
      setMentionQuery(null);
    }
  };

  const handleSelect = (person: MentionablePerson) => {
    if (!textareaRef.current) return;
    const cursorPos = textareaRef.current.selectionStart ?? body.length;
    const textUpToCursor = body.slice(0, cursorPos);
    // Replace the partial @query with @FirstName LastName
    const replaced = textUpToCursor.replace(/@[\w']*$/, `@${person.firstName} ${person.lastName}`);
    const newBody = replaced + body.slice(cursorPos);
    setBody(newBody);
    setMentionQuery(null);
    // Restore focus + move cursor to end of inserted mention
    setTimeout(() => {
      textareaRef.current?.focus();
      const newPos = replaced.length;
      textareaRef.current?.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const reset = () => {
    setBody('');
    setMentionQuery(null);
  };

  const mentionedPersonIds = parseMentionedPersonIds(body, allPersons);

  return {
    body,
    setBody,
    mentionQuery,
    mentionedPersonIds,
    textareaRef,
    handleChange,
    handleKeyDown,
    handleSelect,
    reset,
  };
}
