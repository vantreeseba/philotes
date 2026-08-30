/** A person a note body can @-mention. */
export interface MentionablePerson {
  id: string;
  firstName: string;
  lastName: string;
}

/** Parse all @FirstName LastName mentions in a body string and return the
 *  matching person IDs from allPersons. */
export function parseMentionedPersonIds(body: string, allPersons: MentionablePerson[]): string[] {
  const ids = new Set<string>();
  const pattern = /@([\w'-]+)\s+([\w'-]+)/g;
  let match: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: standard regex loop
  while ((match = pattern.exec(body)) !== null) {
    const first = match[1].toLowerCase();
    const last = match[2].toLowerCase();
    for (const p of allPersons) {
      if (p.firstName.toLowerCase() === first && p.lastName.toLowerCase() === last) {
        ids.add(p.id);
      }
    }
  }
  return Array.from(ids);
}
