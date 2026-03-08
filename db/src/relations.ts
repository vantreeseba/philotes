import { defineRelations } from 'drizzle-orm';
import * as schema from './schema.ts';

export const relations = defineRelations(schema, (r) => ({
  persons: {
    notes: r.many.notes({
      from: r.persons.id,
      to: r.notes.personId,
      alias: 'personNotes',
    }),
    labels: r.many.labels({
      from: r.persons.id.through(r.personLabels.personId),
      to: r.labels.id.through(r.personLabels.labelId),
    }),
    importantDates: r.many.importantDates(),
    interactions: r.many.interactions(),
    relationshipsFrom: r.many.personRelationships({
      from: r.persons.id,
      to: r.personRelationships.fromPersonId,
    }),
    relationshipsTo: r.many.personRelationships({
      from: r.persons.id,
      to: r.personRelationships.toPersonId,
    }),
    mentionedInNotes: r.many.notes({
      from: r.persons.id.through(r.noteMentions.mentionedPersonId),
      to: r.notes.id.through(r.noteMentions.noteId),
      alias: 'noteMentions',
    }),
    addresses: r.many.addresses(),
  },
  notes: {
    person: r.one.persons({
      from: r.notes.personId,
      to: r.persons.id,
      alias: 'personNotes',
    }),
    labels: r.many.labels({
      from: r.notes.id.through(r.noteTags.noteId),
      to: r.labels.id.through(r.noteTags.labelId),
    }),
    mentions: r.many.persons({
      from: r.notes.id.through(r.noteMentions.noteId),
      to: r.persons.id.through(r.noteMentions.mentionedPersonId),
      alias: 'noteMentions',
    }),
  },
  importantDates: {
    person: r.one.persons({
      from: r.importantDates.personId,
      to: r.persons.id,
    }),
    labels: r.many.labels({
      from: r.importantDates.id.through(r.importantDateTags.importantDateId),
      to: r.labels.id.through(r.importantDateTags.labelId),
    }),
  },
  personRelationships: {
    fromPerson: r.one.persons({
      from: r.personRelationships.fromPersonId,
      to: r.persons.id,
    }),
    toPerson: r.one.persons({
      from: r.personRelationships.toPersonId,
      to: r.persons.id,
    }),
  },
  interactions: {
    person: r.one.persons({
      from: r.interactions.personId,
      to: r.persons.id,
    }),
    labels: r.many.labels({
      from: r.interactions.id.through(r.interactionTags.interactionId),
      to: r.labels.id.through(r.interactionTags.labelId),
    }),
  },
  addresses: {
    person: r.one.persons({
      from: r.addresses.personId,
      to: r.persons.id,
    }),
  },
}));
