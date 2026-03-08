import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../index.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateImportantDateInput = {
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  personId: Scalars['String']['input'];
  recurrence?: InputMaybe<Scalars['String']['input']>;
};

export type CreateImportantDateTagInput = {
  importantDateId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};

export type CreateInteractionInput = {
  channel: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  occurredAt?: InputMaybe<Scalars['String']['input']>;
  personId: Scalars['String']['input'];
  sentiment?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInteractionTagInput = {
  interactionId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};

export type CreateLabelInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
};

export type CreateNoteInput = {
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNoteMentionInput = {
  mentionedPersonId: Scalars['String']['input'];
  noteId: Scalars['String']['input'];
};

export type CreateNoteTagInput = {
  labelId: Scalars['String']['input'];
  noteId: Scalars['String']['input'];
};

export type CreatePersonInput = {
  avatarPath?: InputMaybe<Scalars['String']['input']>;
  contactFrequency?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  /** JSON */
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePersonLabelInput = {
  labelId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
};

export type CreatePersonRelationshipInput = {
  fromPersonId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  toPersonId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type ImportantDate = {
  __typename?: 'ImportantDate';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ImportantDateLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<ImportantDatePersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type ImportantDateLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDateLabelsRelation = {
  __typename?: 'ImportantDateLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelation = {
  __typename?: 'ImportantDatePersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<ImportantDatePersonRelationImportantDatesRelation>;
  interactions: Array<ImportantDatePersonRelationInteractionsRelation>;
  labels: Array<ImportantDatePersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<ImportantDatePersonRelationMentionedInNotesRelation>;
  notes: Array<ImportantDatePersonRelationNotesRelation>;
  relationshipsFrom: Array<ImportantDatePersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<ImportantDatePersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type ImportantDatePersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type ImportantDatePersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type ImportantDatePersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type ImportantDatePersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type ImportantDatePersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type ImportantDatePersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type ImportantDatePersonRelationImportantDatesRelation = {
  __typename?: 'ImportantDatePersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};

export type ImportantDatePersonRelationInteractionsRelation = {
  __typename?: 'ImportantDatePersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ImportantDatePersonRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type ImportantDatePersonRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelation = {
  __typename?: 'ImportantDatePersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationInteractionsRelationPersonRelation = {
  __typename?: 'ImportantDatePersonRelationInteractionsRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDatePersonRelationLabelsRelation = {
  __typename?: 'ImportantDatePersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationMentionedInNotesRelation = {
  __typename?: 'ImportantDatePersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation>;
  mentions: Array<ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation>;
  person: Maybe<ImportantDatePersonRelationMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type ImportantDatePersonRelationMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type ImportantDatePersonRelationMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation = {
  __typename?: 'ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename?: 'ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDatePersonRelationMentionedInNotesRelationPersonRelation = {
  __typename?: 'ImportantDatePersonRelationMentionedInNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelation = {
  __typename?: 'ImportantDatePersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationNotesRelationLabelsRelation>;
  mentions: Array<ImportantDatePersonRelationNotesRelationMentionsRelation>;
  person: Maybe<ImportantDatePersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type ImportantDatePersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type ImportantDatePersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelation = {
  __typename?: 'ImportantDatePersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelationMentionsRelation = {
  __typename?: 'ImportantDatePersonRelationNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelationPersonRelation = {
  __typename?: 'ImportantDatePersonRelationNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDatePersonRelationRelationshipsFromRelation = {
  __typename?: 'ImportantDatePersonRelationRelationshipsFromRelation';
  fromPerson: Maybe<ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type ImportantDatePersonRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type ImportantDatePersonRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation = {
  __typename?: 'ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation = {
  __typename?: 'ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDatePersonRelationRelationshipsToRelation = {
  __typename?: 'ImportantDatePersonRelationRelationshipsToRelation';
  fromPerson: Maybe<ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<ImportantDatePersonRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type ImportantDatePersonRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type ImportantDatePersonRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation = {
  __typename?: 'ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDatePersonRelationRelationshipsToRelationToPersonRelation = {
  __typename?: 'ImportantDatePersonRelationRelationshipsToRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type ImportantDateTag = {
  __typename?: 'ImportantDateTag';
  importantDateId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type ImportantDateTagsFilters = {
  OR?: InputMaybe<Array<ImportantDateTagsFiltersOr>>;
  importantDateId?: InputMaybe<ImportantDateTagsImportantDateIdFilters>;
  labelId?: InputMaybe<ImportantDateTagsLabelIdFilters>;
};

export type ImportantDateTagsFiltersOr = {
  importantDateId?: InputMaybe<ImportantDateTagsImportantDateIdFilters>;
  labelId?: InputMaybe<ImportantDateTagsLabelIdFilters>;
};

export type ImportantDateTagsImportantDateIdFilters = {
  OR?: InputMaybe<Array<ImportantDateTagsImportantDateIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDateTagsImportantDateIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDateTagsLabelIdFilters = {
  OR?: InputMaybe<Array<ImportantDateTagsLabelIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDateTagsLabelIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDateTagsOrderBy = {
  importantDateId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type ImportantDatesDateFilters = {
  OR?: InputMaybe<Array<ImportantDatesDateFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesDateFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesDescriptionFilters = {
  OR?: InputMaybe<Array<ImportantDatesDescriptionFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesDescriptionFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesFilters = {
  OR?: InputMaybe<Array<ImportantDatesFiltersOr>>;
  date?: InputMaybe<ImportantDatesDateFilters>;
  description?: InputMaybe<ImportantDatesDescriptionFilters>;
  id?: InputMaybe<ImportantDatesIdFilters>;
  name?: InputMaybe<ImportantDatesNameFilters>;
  personId?: InputMaybe<ImportantDatesPersonIdFilters>;
  recurrence?: InputMaybe<ImportantDatesRecurrenceFilters>;
};

export type ImportantDatesFiltersOr = {
  date?: InputMaybe<ImportantDatesDateFilters>;
  description?: InputMaybe<ImportantDatesDescriptionFilters>;
  id?: InputMaybe<ImportantDatesIdFilters>;
  name?: InputMaybe<ImportantDatesNameFilters>;
  personId?: InputMaybe<ImportantDatesPersonIdFilters>;
  recurrence?: InputMaybe<ImportantDatesRecurrenceFilters>;
};

export type ImportantDatesIdFilters = {
  OR?: InputMaybe<Array<ImportantDatesIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesNameFilters = {
  OR?: InputMaybe<Array<ImportantDatesNameFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesNameFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesOrderBy = {
  date?: InputMaybe<InnerOrder>;
  description?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  name?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  recurrence?: InputMaybe<InnerOrder>;
};

export type ImportantDatesPersonIdFilters = {
  OR?: InputMaybe<Array<ImportantDatesPersonIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesPersonIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesRecurrenceFilters = {
  OR?: InputMaybe<Array<ImportantDatesRecurrenceFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesRecurrenceFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InnerOrder = {
  direction: OrderDirection;
  /** Priority of current field */
  priority: Scalars['Int']['input'];
};

export type Interaction = {
  __typename?: 'Interaction';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<InteractionLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<InteractionPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type InteractionLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionLabelsRelation = {
  __typename?: 'InteractionLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelation = {
  __typename?: 'InteractionPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<InteractionPersonRelationImportantDatesRelation>;
  interactions: Array<InteractionPersonRelationInteractionsRelation>;
  labels: Array<InteractionPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<InteractionPersonRelationMentionedInNotesRelation>;
  notes: Array<InteractionPersonRelationNotesRelation>;
  relationshipsFrom: Array<InteractionPersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<InteractionPersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type InteractionPersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type InteractionPersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type InteractionPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type InteractionPersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type InteractionPersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type InteractionPersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type InteractionPersonRelationImportantDatesRelation = {
  __typename?: 'InteractionPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<InteractionPersonRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<InteractionPersonRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type InteractionPersonRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelation = {
  __typename?: 'InteractionPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationImportantDatesRelationPersonRelation = {
  __typename?: 'InteractionPersonRelationImportantDatesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionPersonRelationInteractionsRelation = {
  __typename?: 'InteractionPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};

export type InteractionPersonRelationLabelsRelation = {
  __typename?: 'InteractionPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationMentionedInNotesRelation = {
  __typename?: 'InteractionPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<InteractionPersonRelationMentionedInNotesRelationLabelsRelation>;
  mentions: Array<InteractionPersonRelationMentionedInNotesRelationMentionsRelation>;
  person: Maybe<InteractionPersonRelationMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type InteractionPersonRelationMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type InteractionPersonRelationMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelation = {
  __typename?: 'InteractionPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename?: 'InteractionPersonRelationMentionedInNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionPersonRelationMentionedInNotesRelationPersonRelation = {
  __typename?: 'InteractionPersonRelationMentionedInNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionPersonRelationNotesRelation = {
  __typename?: 'InteractionPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<InteractionPersonRelationNotesRelationLabelsRelation>;
  mentions: Array<InteractionPersonRelationNotesRelationMentionsRelation>;
  person: Maybe<InteractionPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type InteractionPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type InteractionPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationNotesRelationLabelsRelation = {
  __typename?: 'InteractionPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationNotesRelationMentionsRelation = {
  __typename?: 'InteractionPersonRelationNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionPersonRelationNotesRelationPersonRelation = {
  __typename?: 'InteractionPersonRelationNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionPersonRelationRelationshipsFromRelation = {
  __typename?: 'InteractionPersonRelationRelationshipsFromRelation';
  fromPerson: Maybe<InteractionPersonRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<InteractionPersonRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type InteractionPersonRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type InteractionPersonRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationRelationshipsFromRelationFromPersonRelation = {
  __typename?: 'InteractionPersonRelationRelationshipsFromRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionPersonRelationRelationshipsFromRelationToPersonRelation = {
  __typename?: 'InteractionPersonRelationRelationshipsFromRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionPersonRelationRelationshipsToRelation = {
  __typename?: 'InteractionPersonRelationRelationshipsToRelation';
  fromPerson: Maybe<InteractionPersonRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<InteractionPersonRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type InteractionPersonRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type InteractionPersonRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationRelationshipsToRelationFromPersonRelation = {
  __typename?: 'InteractionPersonRelationRelationshipsToRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionPersonRelationRelationshipsToRelationToPersonRelation = {
  __typename?: 'InteractionPersonRelationRelationshipsToRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type InteractionTag = {
  __typename?: 'InteractionTag';
  interactionId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type InteractionTagsFilters = {
  OR?: InputMaybe<Array<InteractionTagsFiltersOr>>;
  interactionId?: InputMaybe<InteractionTagsInteractionIdFilters>;
  labelId?: InputMaybe<InteractionTagsLabelIdFilters>;
};

export type InteractionTagsFiltersOr = {
  interactionId?: InputMaybe<InteractionTagsInteractionIdFilters>;
  labelId?: InputMaybe<InteractionTagsLabelIdFilters>;
};

export type InteractionTagsInteractionIdFilters = {
  OR?: InputMaybe<Array<InteractionTagsInteractionIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionTagsInteractionIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionTagsLabelIdFilters = {
  OR?: InputMaybe<Array<InteractionTagsLabelIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionTagsLabelIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionTagsOrderBy = {
  interactionId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type InteractionsChannelFilters = {
  OR?: InputMaybe<Array<InteractionsChannelFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsChannelFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsFilters = {
  OR?: InputMaybe<Array<InteractionsFiltersOr>>;
  channel?: InputMaybe<InteractionsChannelFilters>;
  id?: InputMaybe<InteractionsIdFilters>;
  note?: InputMaybe<InteractionsNoteFilters>;
  occurredAt?: InputMaybe<InteractionsOccurredAtFilters>;
  personId?: InputMaybe<InteractionsPersonIdFilters>;
  sentiment?: InputMaybe<InteractionsSentimentFilters>;
};

export type InteractionsFiltersOr = {
  channel?: InputMaybe<InteractionsChannelFilters>;
  id?: InputMaybe<InteractionsIdFilters>;
  note?: InputMaybe<InteractionsNoteFilters>;
  occurredAt?: InputMaybe<InteractionsOccurredAtFilters>;
  personId?: InputMaybe<InteractionsPersonIdFilters>;
  sentiment?: InputMaybe<InteractionsSentimentFilters>;
};

export type InteractionsIdFilters = {
  OR?: InputMaybe<Array<InteractionsIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsNoteFilters = {
  OR?: InputMaybe<Array<InteractionsNoteFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsNoteFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsOccurredAtFilters = {
  OR?: InputMaybe<Array<InteractionsOccurredAtFiltersOr>>;
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsOccurredAtFiltersOr = {
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsOrderBy = {
  channel?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  note?: InputMaybe<InnerOrder>;
  occurredAt?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  sentiment?: InputMaybe<InnerOrder>;
};

export type InteractionsPersonIdFilters = {
  OR?: InputMaybe<Array<InteractionsPersonIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsPersonIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsSentimentFilters = {
  OR?: InputMaybe<Array<InteractionsSentimentFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionsSentimentFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Label = {
  __typename?: 'Label';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelsColorFilters = {
  OR?: InputMaybe<Array<LabelsColorFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type LabelsColorFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type LabelsFilters = {
  OR?: InputMaybe<Array<LabelsFiltersOr>>;
  color?: InputMaybe<LabelsColorFilters>;
  id?: InputMaybe<LabelsIdFilters>;
  label?: InputMaybe<LabelsLabelFilters>;
};

export type LabelsFiltersOr = {
  color?: InputMaybe<LabelsColorFilters>;
  id?: InputMaybe<LabelsIdFilters>;
  label?: InputMaybe<LabelsLabelFilters>;
};

export type LabelsIdFilters = {
  OR?: InputMaybe<Array<LabelsIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type LabelsIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type LabelsLabelFilters = {
  OR?: InputMaybe<Array<LabelsLabelFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type LabelsLabelFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type LabelsOrderBy = {
  color?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  label?: InputMaybe<InnerOrder>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createImportantDate: Maybe<ImportantDate>;
  createImportantDateTag: Maybe<ImportantDateTag>;
  createImportantDateTags: Array<ImportantDateTag>;
  createImportantDates: Array<ImportantDate>;
  createInteraction: Maybe<Interaction>;
  createInteractionTag: Maybe<InteractionTag>;
  createInteractionTags: Array<InteractionTag>;
  createInteractions: Array<Interaction>;
  createLabel: Maybe<Label>;
  createLabels: Array<Label>;
  createNote: Maybe<Note>;
  createNoteMention: Maybe<NoteMention>;
  createNoteMentions: Array<NoteMention>;
  createNoteTag: Maybe<NoteTag>;
  createNoteTags: Array<NoteTag>;
  createNotes: Array<Note>;
  createPerson: Maybe<Person>;
  createPersonLabel: Maybe<PersonLabel>;
  createPersonLabels: Array<PersonLabel>;
  createPersonRelationship: Maybe<PersonRelationship>;
  createPersonRelationships: Array<PersonRelationship>;
  createPersons: Array<Person>;
  deleteImportantDateTags: Array<ImportantDateTag>;
  deleteImportantDates: Array<ImportantDate>;
  deleteInteractionTags: Array<InteractionTag>;
  deleteInteractions: Array<Interaction>;
  deleteLabels: Array<Label>;
  deleteNoteMentions: Array<NoteMention>;
  deleteNoteTags: Array<NoteTag>;
  deleteNotes: Array<Note>;
  deletePersonLabels: Array<PersonLabel>;
  deletePersonRelationships: Array<PersonRelationship>;
  deletePersons: Array<Person>;
  updateImportantDateTags: Array<ImportantDateTag>;
  updateImportantDates: Array<ImportantDate>;
  updateInteractionTags: Array<InteractionTag>;
  updateInteractions: Array<Interaction>;
  updateLabels: Array<Label>;
  updateNoteMentions: Array<NoteMention>;
  updateNoteTags: Array<NoteTag>;
  updateNotes: Array<Note>;
  updatePersonLabels: Array<PersonLabel>;
  updatePersonRelationships: Array<PersonRelationship>;
  updatePersons: Array<Person>;
};


export type MutationCreateImportantDateArgs = {
  values: CreateImportantDateInput;
};


export type MutationCreateImportantDateTagArgs = {
  values: CreateImportantDateTagInput;
};


export type MutationCreateImportantDateTagsArgs = {
  values: Array<CreateImportantDateTagInput>;
};


export type MutationCreateImportantDatesArgs = {
  values: Array<CreateImportantDateInput>;
};


export type MutationCreateInteractionArgs = {
  values: CreateInteractionInput;
};


export type MutationCreateInteractionTagArgs = {
  values: CreateInteractionTagInput;
};


export type MutationCreateInteractionTagsArgs = {
  values: Array<CreateInteractionTagInput>;
};


export type MutationCreateInteractionsArgs = {
  values: Array<CreateInteractionInput>;
};


export type MutationCreateLabelArgs = {
  values: CreateLabelInput;
};


export type MutationCreateLabelsArgs = {
  values: Array<CreateLabelInput>;
};


export type MutationCreateNoteArgs = {
  values: CreateNoteInput;
};


export type MutationCreateNoteMentionArgs = {
  values: CreateNoteMentionInput;
};


export type MutationCreateNoteMentionsArgs = {
  values: Array<CreateNoteMentionInput>;
};


export type MutationCreateNoteTagArgs = {
  values: CreateNoteTagInput;
};


export type MutationCreateNoteTagsArgs = {
  values: Array<CreateNoteTagInput>;
};


export type MutationCreateNotesArgs = {
  values: Array<CreateNoteInput>;
};


export type MutationCreatePersonArgs = {
  values: CreatePersonInput;
};


export type MutationCreatePersonLabelArgs = {
  values: CreatePersonLabelInput;
};


export type MutationCreatePersonLabelsArgs = {
  values: Array<CreatePersonLabelInput>;
};


export type MutationCreatePersonRelationshipArgs = {
  values: CreatePersonRelationshipInput;
};


export type MutationCreatePersonRelationshipsArgs = {
  values: Array<CreatePersonRelationshipInput>;
};


export type MutationCreatePersonsArgs = {
  values: Array<CreatePersonInput>;
};


export type MutationDeleteImportantDateTagsArgs = {
  where?: InputMaybe<ImportantDateTagsFilters>;
};


export type MutationDeleteImportantDatesArgs = {
  where?: InputMaybe<ImportantDatesFilters>;
};


export type MutationDeleteInteractionTagsArgs = {
  where?: InputMaybe<InteractionTagsFilters>;
};


export type MutationDeleteInteractionsArgs = {
  where?: InputMaybe<InteractionsFilters>;
};


export type MutationDeleteLabelsArgs = {
  where?: InputMaybe<LabelsFilters>;
};


export type MutationDeleteNoteMentionsArgs = {
  where?: InputMaybe<NoteMentionsFilters>;
};


export type MutationDeleteNoteTagsArgs = {
  where?: InputMaybe<NoteTagsFilters>;
};


export type MutationDeleteNotesArgs = {
  where?: InputMaybe<NotesFilters>;
};


export type MutationDeletePersonLabelsArgs = {
  where?: InputMaybe<PersonLabelsFilters>;
};


export type MutationDeletePersonRelationshipsArgs = {
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type MutationDeletePersonsArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type MutationUpdateImportantDateTagsArgs = {
  set: UpdateImportantDateTagInput;
  where?: InputMaybe<ImportantDateTagsFilters>;
};


export type MutationUpdateImportantDatesArgs = {
  set: UpdateImportantDateInput;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type MutationUpdateInteractionTagsArgs = {
  set: UpdateInteractionTagInput;
  where?: InputMaybe<InteractionTagsFilters>;
};


export type MutationUpdateInteractionsArgs = {
  set: UpdateInteractionInput;
  where?: InputMaybe<InteractionsFilters>;
};


export type MutationUpdateLabelsArgs = {
  set: UpdateLabelInput;
  where?: InputMaybe<LabelsFilters>;
};


export type MutationUpdateNoteMentionsArgs = {
  set: UpdateNoteMentionInput;
  where?: InputMaybe<NoteMentionsFilters>;
};


export type MutationUpdateNoteTagsArgs = {
  set: UpdateNoteTagInput;
  where?: InputMaybe<NoteTagsFilters>;
};


export type MutationUpdateNotesArgs = {
  set: UpdateNoteInput;
  where?: InputMaybe<NotesFilters>;
};


export type MutationUpdatePersonLabelsArgs = {
  set: UpdatePersonLabelInput;
  where?: InputMaybe<PersonLabelsFilters>;
};


export type MutationUpdatePersonRelationshipsArgs = {
  set: UpdatePersonRelationshipInput;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type MutationUpdatePersonsArgs = {
  set: UpdatePersonInput;
  where?: InputMaybe<PersonsFilters>;
};

export type Note = {
  __typename?: 'Note';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<NoteLabelsRelation>;
  mentions: Array<NoteMentionsRelation>;
  person: Maybe<NotePersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type NoteLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type NotePersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteLabelsRelation = {
  __typename?: 'NoteLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMention = {
  __typename?: 'NoteMention';
  mentionedPersonId: Scalars['String']['output'];
  noteId: Scalars['String']['output'];
};

export type NoteMentionsFilters = {
  OR?: InputMaybe<Array<NoteMentionsFiltersOr>>;
  mentionedPersonId?: InputMaybe<NoteMentionsMentionedPersonIdFilters>;
  noteId?: InputMaybe<NoteMentionsNoteIdFilters>;
};

export type NoteMentionsFiltersOr = {
  mentionedPersonId?: InputMaybe<NoteMentionsMentionedPersonIdFilters>;
  noteId?: InputMaybe<NoteMentionsNoteIdFilters>;
};

export type NoteMentionsMentionedPersonIdFilters = {
  OR?: InputMaybe<Array<NoteMentionsMentionedPersonIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NoteMentionsMentionedPersonIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NoteMentionsNoteIdFilters = {
  OR?: InputMaybe<Array<NoteMentionsNoteIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NoteMentionsNoteIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NoteMentionsOrderBy = {
  mentionedPersonId?: InputMaybe<InnerOrder>;
  noteId?: InputMaybe<InnerOrder>;
};

export type NoteMentionsRelation = {
  __typename?: 'NoteMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<NoteMentionsRelationImportantDatesRelation>;
  interactions: Array<NoteMentionsRelationInteractionsRelation>;
  labels: Array<NoteMentionsRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<NoteMentionsRelationMentionedInNotesRelation>;
  notes: Array<NoteMentionsRelationNotesRelation>;
  relationshipsFrom: Array<NoteMentionsRelationRelationshipsFromRelation>;
  relationshipsTo: Array<NoteMentionsRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type NoteMentionsRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type NoteMentionsRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type NoteMentionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteMentionsRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type NoteMentionsRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type NoteMentionsRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type NoteMentionsRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type NoteMentionsRelationImportantDatesRelation = {
  __typename?: 'NoteMentionsRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NoteMentionsRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<NoteMentionsRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type NoteMentionsRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteMentionsRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelation = {
  __typename?: 'NoteMentionsRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationImportantDatesRelationPersonRelation = {
  __typename?: 'NoteMentionsRelationImportantDatesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NoteMentionsRelationInteractionsRelation = {
  __typename?: 'NoteMentionsRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<NoteMentionsRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NoteMentionsRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type NoteMentionsRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteMentionsRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteMentionsRelationInteractionsRelationLabelsRelation = {
  __typename?: 'NoteMentionsRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationInteractionsRelationPersonRelation = {
  __typename?: 'NoteMentionsRelationInteractionsRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NoteMentionsRelationLabelsRelation = {
  __typename?: 'NoteMentionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationMentionedInNotesRelation = {
  __typename?: 'NoteMentionsRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NoteMentionsRelationNotesRelation = {
  __typename?: 'NoteMentionsRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NoteMentionsRelationRelationshipsFromRelation = {
  __typename?: 'NoteMentionsRelationRelationshipsFromRelation';
  fromPerson: Maybe<NoteMentionsRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<NoteMentionsRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type NoteMentionsRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type NoteMentionsRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteMentionsRelationRelationshipsFromRelationFromPersonRelation = {
  __typename?: 'NoteMentionsRelationRelationshipsFromRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NoteMentionsRelationRelationshipsFromRelationToPersonRelation = {
  __typename?: 'NoteMentionsRelationRelationshipsFromRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NoteMentionsRelationRelationshipsToRelation = {
  __typename?: 'NoteMentionsRelationRelationshipsToRelation';
  fromPerson: Maybe<NoteMentionsRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<NoteMentionsRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type NoteMentionsRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type NoteMentionsRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteMentionsRelationRelationshipsToRelationFromPersonRelation = {
  __typename?: 'NoteMentionsRelationRelationshipsToRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NoteMentionsRelationRelationshipsToRelationToPersonRelation = {
  __typename?: 'NoteMentionsRelationRelationshipsToRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NotePersonRelation = {
  __typename?: 'NotePersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<NotePersonRelationImportantDatesRelation>;
  interactions: Array<NotePersonRelationInteractionsRelation>;
  labels: Array<NotePersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<NotePersonRelationMentionedInNotesRelation>;
  notes: Array<NotePersonRelationNotesRelation>;
  relationshipsFrom: Array<NotePersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<NotePersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type NotePersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type NotePersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type NotePersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NotePersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type NotePersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type NotePersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type NotePersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type NotePersonRelationImportantDatesRelation = {
  __typename?: 'NotePersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NotePersonRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<NotePersonRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type NotePersonRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NotePersonRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NotePersonRelationImportantDatesRelationLabelsRelation = {
  __typename?: 'NotePersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationImportantDatesRelationPersonRelation = {
  __typename?: 'NotePersonRelationImportantDatesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NotePersonRelationInteractionsRelation = {
  __typename?: 'NotePersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<NotePersonRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NotePersonRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type NotePersonRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NotePersonRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NotePersonRelationInteractionsRelationLabelsRelation = {
  __typename?: 'NotePersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationInteractionsRelationPersonRelation = {
  __typename?: 'NotePersonRelationInteractionsRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NotePersonRelationLabelsRelation = {
  __typename?: 'NotePersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationMentionedInNotesRelation = {
  __typename?: 'NotePersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NotePersonRelationNotesRelation = {
  __typename?: 'NotePersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NotePersonRelationRelationshipsFromRelation = {
  __typename?: 'NotePersonRelationRelationshipsFromRelation';
  fromPerson: Maybe<NotePersonRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<NotePersonRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type NotePersonRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type NotePersonRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NotePersonRelationRelationshipsFromRelationFromPersonRelation = {
  __typename?: 'NotePersonRelationRelationshipsFromRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NotePersonRelationRelationshipsFromRelationToPersonRelation = {
  __typename?: 'NotePersonRelationRelationshipsFromRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NotePersonRelationRelationshipsToRelation = {
  __typename?: 'NotePersonRelationRelationshipsToRelation';
  fromPerson: Maybe<NotePersonRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<NotePersonRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type NotePersonRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type NotePersonRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NotePersonRelationRelationshipsToRelationFromPersonRelation = {
  __typename?: 'NotePersonRelationRelationshipsToRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NotePersonRelationRelationshipsToRelationToPersonRelation = {
  __typename?: 'NotePersonRelationRelationshipsToRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type NoteTag = {
  __typename?: 'NoteTag';
  labelId: Scalars['String']['output'];
  noteId: Scalars['String']['output'];
};

export type NoteTagsFilters = {
  OR?: InputMaybe<Array<NoteTagsFiltersOr>>;
  labelId?: InputMaybe<NoteTagsLabelIdFilters>;
  noteId?: InputMaybe<NoteTagsNoteIdFilters>;
};

export type NoteTagsFiltersOr = {
  labelId?: InputMaybe<NoteTagsLabelIdFilters>;
  noteId?: InputMaybe<NoteTagsNoteIdFilters>;
};

export type NoteTagsLabelIdFilters = {
  OR?: InputMaybe<Array<NoteTagsLabelIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NoteTagsLabelIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NoteTagsNoteIdFilters = {
  OR?: InputMaybe<Array<NoteTagsNoteIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NoteTagsNoteIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NoteTagsOrderBy = {
  labelId?: InputMaybe<InnerOrder>;
  noteId?: InputMaybe<InnerOrder>;
};

export type NotesBodyFilters = {
  OR?: InputMaybe<Array<NotesBodyFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NotesBodyFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NotesFilters = {
  OR?: InputMaybe<Array<NotesFiltersOr>>;
  body?: InputMaybe<NotesBodyFilters>;
  id?: InputMaybe<NotesIdFilters>;
  personId?: InputMaybe<NotesPersonIdFilters>;
};

export type NotesFiltersOr = {
  body?: InputMaybe<NotesBodyFilters>;
  id?: InputMaybe<NotesIdFilters>;
  personId?: InputMaybe<NotesPersonIdFilters>;
};

export type NotesIdFilters = {
  OR?: InputMaybe<Array<NotesIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NotesIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NotesOrderBy = {
  body?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
};

export type NotesPersonIdFilters = {
  OR?: InputMaybe<Array<NotesPersonIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type NotesPersonIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

/** Order by direction */
export enum OrderDirection {
  /** Ascending order */
  Asc = 'asc',
  /** Descending order */
  Desc = 'desc'
}

export type Person = {
  __typename?: 'Person';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<PersonImportantDatesRelation>;
  interactions: Array<PersonInteractionsRelation>;
  labels: Array<PersonLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<PersonMentionedInNotesRelation>;
  notes: Array<PersonNotesRelation>;
  relationships: Array<PersonRelationshipEntry>;
  relationshipsFrom: Array<PersonRelationshipsFromRelation>;
  relationshipsTo: Array<PersonRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type PersonImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type PersonInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type PersonLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type PersonNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type PersonRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type PersonRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type PersonImportantDatesRelation = {
  __typename?: 'PersonImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<PersonImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type PersonImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonImportantDatesRelationLabelsRelation = {
  __typename?: 'PersonImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonImportantDatesRelationPersonRelation = {
  __typename?: 'PersonImportantDatesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonInteractionsRelation = {
  __typename?: 'PersonInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type PersonInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonInteractionsRelationLabelsRelation = {
  __typename?: 'PersonInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonInteractionsRelationPersonRelation = {
  __typename?: 'PersonInteractionsRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonLabel = {
  __typename?: 'PersonLabel';
  labelId: Scalars['String']['output'];
  personId: Scalars['String']['output'];
};

export type PersonLabelsFilters = {
  OR?: InputMaybe<Array<PersonLabelsFiltersOr>>;
  labelId?: InputMaybe<PersonLabelsLabelIdFilters>;
  personId?: InputMaybe<PersonLabelsPersonIdFilters>;
};

export type PersonLabelsFiltersOr = {
  labelId?: InputMaybe<PersonLabelsLabelIdFilters>;
  personId?: InputMaybe<PersonLabelsPersonIdFilters>;
};

export type PersonLabelsLabelIdFilters = {
  OR?: InputMaybe<Array<PersonLabelsLabelIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonLabelsLabelIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonLabelsOrderBy = {
  labelId?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
};

export type PersonLabelsPersonIdFilters = {
  OR?: InputMaybe<Array<PersonLabelsPersonIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonLabelsPersonIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonLabelsRelation = {
  __typename?: 'PersonLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonMentionedInNotesRelation = {
  __typename?: 'PersonMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonMentionedInNotesRelationLabelsRelation>;
  mentions: Array<PersonMentionedInNotesRelationMentionsRelation>;
  person: Maybe<PersonMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type PersonMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonMentionedInNotesRelationLabelsRelation = {
  __typename?: 'PersonMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonMentionedInNotesRelationMentionsRelation = {
  __typename?: 'PersonMentionedInNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonMentionedInNotesRelationPersonRelation = {
  __typename?: 'PersonMentionedInNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonNotesRelation = {
  __typename?: 'PersonNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonNotesRelationLabelsRelation>;
  mentions: Array<PersonNotesRelationMentionsRelation>;
  person: Maybe<PersonNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type PersonNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonNotesRelationLabelsRelation = {
  __typename?: 'PersonNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonNotesRelationMentionsRelation = {
  __typename?: 'PersonNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonNotesRelationPersonRelation = {
  __typename?: 'PersonNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationship = {
  __typename?: 'PersonRelationship';
  fromPerson: Maybe<PersonRelationshipFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<PersonRelationshipToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type PersonRelationshipToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipEntry = {
  __typename?: 'PersonRelationshipEntry';
  id: Scalars['String']['output'];
  relatedPersonFirstName: Scalars['String']['output'];
  relatedPersonId: Scalars['String']['output'];
  relatedPersonLastName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<PersonRelationshipFromPersonRelationImportantDatesRelation>;
  interactions: Array<PersonRelationshipFromPersonRelationInteractionsRelation>;
  labels: Array<PersonRelationshipFromPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<PersonRelationshipFromPersonRelationMentionedInNotesRelation>;
  notes: Array<PersonRelationshipFromPersonRelationNotesRelation>;
  relationshipsFrom: Array<PersonRelationshipFromPersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<PersonRelationshipFromPersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type PersonRelationshipFromPersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type PersonRelationshipFromPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type PersonRelationshipFromPersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type PersonRelationshipFromPersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type PersonRelationshipFromPersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationInteractionsRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationLabelsRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation>;
  mentions: Array<PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation>;
  person: Maybe<PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationNotesRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationNotesRelationLabelsRelation>;
  mentions: Array<PersonRelationshipFromPersonRelationNotesRelationMentionsRelation>;
  person: Maybe<PersonRelationshipFromPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipFromPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type PersonRelationshipFromPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationNotesRelationMentionsRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationNotesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationRelationshipsFromRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationRelationshipsFromRelation';
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationRelationshipsToRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationRelationshipsToRelation';
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<PersonRelationshipToPersonRelationImportantDatesRelation>;
  interactions: Array<PersonRelationshipToPersonRelationInteractionsRelation>;
  labels: Array<PersonRelationshipToPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<PersonRelationshipToPersonRelationMentionedInNotesRelation>;
  notes: Array<PersonRelationshipToPersonRelationNotesRelation>;
  relationshipsFrom: Array<PersonRelationshipToPersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<PersonRelationshipToPersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type PersonRelationshipToPersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type PersonRelationshipToPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type PersonRelationshipToPersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type PersonRelationshipToPersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type PersonRelationshipToPersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelation = {
  __typename?: 'PersonRelationshipToPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation = {
  __typename?: 'PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationInteractionsRelation = {
  __typename?: 'PersonRelationshipToPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipToPersonRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipToPersonRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation = {
  __typename?: 'PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationInteractionsRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationInteractionsRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationLabelsRelation = {
  __typename?: 'PersonRelationshipToPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelation = {
  __typename?: 'PersonRelationshipToPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation>;
  mentions: Array<PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation>;
  person: Maybe<PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type PersonRelationshipToPersonRelationMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation = {
  __typename?: 'PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename?: 'PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationNotesRelation = {
  __typename?: 'PersonRelationshipToPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationNotesRelationLabelsRelation>;
  mentions: Array<PersonRelationshipToPersonRelationNotesRelationMentionsRelation>;
  person: Maybe<PersonRelationshipToPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipToPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type PersonRelationshipToPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelation = {
  __typename?: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationNotesRelationMentionsRelation = {
  __typename?: 'PersonRelationshipToPersonRelationNotesRelationMentionsRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationNotesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationNotesRelationPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationRelationshipsFromRelation = {
  __typename?: 'PersonRelationshipToPersonRelationRelationshipsFromRelation';
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationRelationshipsToRelation = {
  __typename?: 'PersonRelationshipToPersonRelationRelationshipsToRelation';
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipsFilters = {
  OR?: InputMaybe<Array<PersonRelationshipsFiltersOr>>;
  fromPersonId?: InputMaybe<PersonRelationshipsFromPersonIdFilters>;
  id?: InputMaybe<PersonRelationshipsIdFilters>;
  toPersonId?: InputMaybe<PersonRelationshipsToPersonIdFilters>;
  type?: InputMaybe<PersonRelationshipsTypeFilters>;
};

export type PersonRelationshipsFiltersOr = {
  fromPersonId?: InputMaybe<PersonRelationshipsFromPersonIdFilters>;
  id?: InputMaybe<PersonRelationshipsIdFilters>;
  toPersonId?: InputMaybe<PersonRelationshipsToPersonIdFilters>;
  type?: InputMaybe<PersonRelationshipsTypeFilters>;
};

export type PersonRelationshipsFromPersonIdFilters = {
  OR?: InputMaybe<Array<PersonRelationshipsFromPersonIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonRelationshipsFromPersonIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonRelationshipsFromRelation = {
  __typename?: 'PersonRelationshipsFromRelation';
  fromPerson: Maybe<PersonRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<PersonRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type PersonRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type PersonRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipsFromRelationFromPersonRelation = {
  __typename?: 'PersonRelationshipsFromRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipsFromRelationToPersonRelation = {
  __typename?: 'PersonRelationshipsFromRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipsIdFilters = {
  OR?: InputMaybe<Array<PersonRelationshipsIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonRelationshipsIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonRelationshipsOrderBy = {
  fromPersonId?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  toPersonId?: InputMaybe<InnerOrder>;
  type?: InputMaybe<InnerOrder>;
};

export type PersonRelationshipsToPersonIdFilters = {
  OR?: InputMaybe<Array<PersonRelationshipsToPersonIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonRelationshipsToPersonIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonRelationshipsToRelation = {
  __typename?: 'PersonRelationshipsToRelation';
  fromPerson: Maybe<PersonRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<PersonRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type PersonRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type PersonRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipsToRelationFromPersonRelation = {
  __typename?: 'PersonRelationshipsToRelationFromPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipsToRelationToPersonRelation = {
  __typename?: 'PersonRelationshipsToRelationToPersonRelation';
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** JSON */
  updatedAt: Scalars['String']['output'];
};

export type PersonRelationshipsTypeFilters = {
  OR?: InputMaybe<Array<PersonRelationshipsTypeFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonRelationshipsTypeFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsAvatarPathFilters = {
  OR?: InputMaybe<Array<PersonsAvatarPathFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsAvatarPathFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsContactFrequencyFilters = {
  OR?: InputMaybe<Array<PersonsContactFrequencyFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsContactFrequencyFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsCreatedAtFilters = {
  OR?: InputMaybe<Array<PersonsCreatedAtFiltersOr>>;
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsCreatedAtFiltersOr = {
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsEmailFilters = {
  OR?: InputMaybe<Array<PersonsEmailFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsEmailFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsFilters = {
  OR?: InputMaybe<Array<PersonsFiltersOr>>;
  avatarPath?: InputMaybe<PersonsAvatarPathFilters>;
  contactFrequency?: InputMaybe<PersonsContactFrequencyFilters>;
  createdAt?: InputMaybe<PersonsCreatedAtFilters>;
  email?: InputMaybe<PersonsEmailFilters>;
  firstName?: InputMaybe<PersonsFirstNameFilters>;
  id?: InputMaybe<PersonsIdFilters>;
  lastName?: InputMaybe<PersonsLastNameFilters>;
  updatedAt?: InputMaybe<PersonsUpdatedAtFilters>;
};

export type PersonsFiltersOr = {
  avatarPath?: InputMaybe<PersonsAvatarPathFilters>;
  contactFrequency?: InputMaybe<PersonsContactFrequencyFilters>;
  createdAt?: InputMaybe<PersonsCreatedAtFilters>;
  email?: InputMaybe<PersonsEmailFilters>;
  firstName?: InputMaybe<PersonsFirstNameFilters>;
  id?: InputMaybe<PersonsIdFilters>;
  lastName?: InputMaybe<PersonsLastNameFilters>;
  updatedAt?: InputMaybe<PersonsUpdatedAtFilters>;
};

export type PersonsFirstNameFilters = {
  OR?: InputMaybe<Array<PersonsFirstNameFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsFirstNameFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsIdFilters = {
  OR?: InputMaybe<Array<PersonsIdFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsIdFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsLastNameFilters = {
  OR?: InputMaybe<Array<PersonsLastNameFiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsLastNameFiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsOrderBy = {
  avatarPath?: InputMaybe<InnerOrder>;
  contactFrequency?: InputMaybe<InnerOrder>;
  createdAt?: InputMaybe<InnerOrder>;
  email?: InputMaybe<InnerOrder>;
  firstName?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  lastName?: InputMaybe<InnerOrder>;
  updatedAt?: InputMaybe<InnerOrder>;
};

export type PersonsUpdatedAtFilters = {
  OR?: InputMaybe<Array<PersonsUpdatedAtFiltersOr>>;
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PersonsUpdatedAtFiltersOr = {
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  importantDate: Maybe<ImportantDate>;
  importantDateTag: Maybe<ImportantDateTag>;
  importantDateTags: Array<ImportantDateTag>;
  importantDates: Array<ImportantDate>;
  interaction: Maybe<Interaction>;
  interactionTag: Maybe<InteractionTag>;
  interactionTags: Array<InteractionTag>;
  interactions: Array<Interaction>;
  label: Maybe<Label>;
  labels: Array<Label>;
  note: Maybe<Note>;
  noteMention: Maybe<NoteMention>;
  noteMentions: Array<NoteMention>;
  noteTag: Maybe<NoteTag>;
  noteTags: Array<NoteTag>;
  notes: Array<Note>;
  person: Maybe<Person>;
  personLabel: Maybe<PersonLabel>;
  personLabels: Array<PersonLabel>;
  personRelationship: Maybe<PersonRelationship>;
  personRelationships: Array<PersonRelationship>;
  persons: Array<Person>;
};


export type QueryImportantDateArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type QueryImportantDateTagArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDateTagsOrderBy>;
  where?: InputMaybe<ImportantDateTagsFilters>;
};


export type QueryImportantDateTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDateTagsOrderBy>;
  where?: InputMaybe<ImportantDateTagsFilters>;
};


export type QueryImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type QueryInteractionArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type QueryInteractionTagArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionTagsOrderBy>;
  where?: InputMaybe<InteractionTagsFilters>;
};


export type QueryInteractionTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionTagsOrderBy>;
  where?: InputMaybe<InteractionTagsFilters>;
};


export type QueryInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type QueryLabelArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type QueryLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type QueryNoteArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type QueryNoteMentionArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteMentionsOrderBy>;
  where?: InputMaybe<NoteMentionsFilters>;
};


export type QueryNoteMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteMentionsOrderBy>;
  where?: InputMaybe<NoteMentionsFilters>;
};


export type QueryNoteTagArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteTagsOrderBy>;
  where?: InputMaybe<NoteTagsFilters>;
};


export type QueryNoteTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteTagsOrderBy>;
  where?: InputMaybe<NoteTagsFilters>;
};


export type QueryNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type QueryPersonArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type QueryPersonLabelArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonLabelsOrderBy>;
  where?: InputMaybe<PersonLabelsFilters>;
};


export type QueryPersonLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonLabelsOrderBy>;
  where?: InputMaybe<PersonLabelsFilters>;
};


export type QueryPersonRelationshipArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type QueryPersonRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type QueryPersonsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};

export type UpdateImportantDateInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  recurrence?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateImportantDateTagInput = {
  importantDateId?: InputMaybe<Scalars['String']['input']>;
  labelId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInteractionInput = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  occurredAt?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInteractionTagInput = {
  interactionId?: InputMaybe<Scalars['String']['input']>;
  labelId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLabelInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNoteInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNoteMentionInput = {
  mentionedPersonId?: InputMaybe<Scalars['String']['input']>;
  noteId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNoteTagInput = {
  labelId?: InputMaybe<Scalars['String']['input']>;
  noteId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePersonInput = {
  avatarPath?: InputMaybe<Scalars['String']['input']>;
  contactFrequency?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePersonLabelInput = {
  labelId?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePersonRelationshipInput = {
  fromPersonId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  toPersonId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateImportantDateInput: CreateImportantDateInput;
  CreateImportantDateTagInput: CreateImportantDateTagInput;
  CreateInteractionInput: CreateInteractionInput;
  CreateInteractionTagInput: CreateInteractionTagInput;
  CreateLabelInput: CreateLabelInput;
  CreateNoteInput: CreateNoteInput;
  CreateNoteMentionInput: CreateNoteMentionInput;
  CreateNoteTagInput: CreateNoteTagInput;
  CreatePersonInput: CreatePersonInput;
  CreatePersonLabelInput: CreatePersonLabelInput;
  CreatePersonRelationshipInput: CreatePersonRelationshipInput;
  ImportantDate: ResolverTypeWrapper<ImportantDate>;
  ImportantDateLabelsRelation: ResolverTypeWrapper<ImportantDateLabelsRelation>;
  ImportantDatePersonRelation: ResolverTypeWrapper<ImportantDatePersonRelation>;
  ImportantDatePersonRelationImportantDatesRelation: ResolverTypeWrapper<ImportantDatePersonRelationImportantDatesRelation>;
  ImportantDatePersonRelationInteractionsRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelation>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelationLabelsRelation>;
  ImportantDatePersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelationPersonRelation>;
  ImportantDatePersonRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationLabelsRelation>;
  ImportantDatePersonRelationMentionedInNotesRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationPersonRelation>;
  ImportantDatePersonRelationNotesRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelation>;
  ImportantDatePersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelationLabelsRelation>;
  ImportantDatePersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelationMentionsRelation>;
  ImportantDatePersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelationPersonRelation>;
  ImportantDatePersonRelationRelationshipsFromRelation: ResolverTypeWrapper<ImportantDatePersonRelationRelationshipsFromRelation>;
  ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation>;
  ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation>;
  ImportantDatePersonRelationRelationshipsToRelation: ResolverTypeWrapper<ImportantDatePersonRelationRelationshipsToRelation>;
  ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation>;
  ImportantDatePersonRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationRelationshipsToRelationToPersonRelation>;
  ImportantDateTag: ResolverTypeWrapper<ImportantDateTag>;
  ImportantDateTagsFilters: ImportantDateTagsFilters;
  ImportantDateTagsFiltersOr: ImportantDateTagsFiltersOr;
  ImportantDateTagsImportantDateIdFilters: ImportantDateTagsImportantDateIdFilters;
  ImportantDateTagsImportantDateIdFiltersOr: ImportantDateTagsImportantDateIdFiltersOr;
  ImportantDateTagsLabelIdFilters: ImportantDateTagsLabelIdFilters;
  ImportantDateTagsLabelIdFiltersOr: ImportantDateTagsLabelIdFiltersOr;
  ImportantDateTagsOrderBy: ImportantDateTagsOrderBy;
  ImportantDatesDateFilters: ImportantDatesDateFilters;
  ImportantDatesDateFiltersOr: ImportantDatesDateFiltersOr;
  ImportantDatesDescriptionFilters: ImportantDatesDescriptionFilters;
  ImportantDatesDescriptionFiltersOr: ImportantDatesDescriptionFiltersOr;
  ImportantDatesFilters: ImportantDatesFilters;
  ImportantDatesFiltersOr: ImportantDatesFiltersOr;
  ImportantDatesIdFilters: ImportantDatesIdFilters;
  ImportantDatesIdFiltersOr: ImportantDatesIdFiltersOr;
  ImportantDatesNameFilters: ImportantDatesNameFilters;
  ImportantDatesNameFiltersOr: ImportantDatesNameFiltersOr;
  ImportantDatesOrderBy: ImportantDatesOrderBy;
  ImportantDatesPersonIdFilters: ImportantDatesPersonIdFilters;
  ImportantDatesPersonIdFiltersOr: ImportantDatesPersonIdFiltersOr;
  ImportantDatesRecurrenceFilters: ImportantDatesRecurrenceFilters;
  ImportantDatesRecurrenceFiltersOr: ImportantDatesRecurrenceFiltersOr;
  InnerOrder: InnerOrder;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Interaction: ResolverTypeWrapper<Interaction>;
  InteractionLabelsRelation: ResolverTypeWrapper<InteractionLabelsRelation>;
  InteractionPersonRelation: ResolverTypeWrapper<InteractionPersonRelation>;
  InteractionPersonRelationImportantDatesRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelation>;
  InteractionPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelationLabelsRelation>;
  InteractionPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelationPersonRelation>;
  InteractionPersonRelationInteractionsRelation: ResolverTypeWrapper<InteractionPersonRelationInteractionsRelation>;
  InteractionPersonRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationLabelsRelation>;
  InteractionPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelation>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationLabelsRelation>;
  InteractionPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationMentionsRelation>;
  InteractionPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationPersonRelation>;
  InteractionPersonRelationNotesRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelation>;
  InteractionPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelationLabelsRelation>;
  InteractionPersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelationMentionsRelation>;
  InteractionPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelationPersonRelation>;
  InteractionPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<InteractionPersonRelationRelationshipsFromRelation>;
  InteractionPersonRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<InteractionPersonRelationRelationshipsFromRelationFromPersonRelation>;
  InteractionPersonRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<InteractionPersonRelationRelationshipsFromRelationToPersonRelation>;
  InteractionPersonRelationRelationshipsToRelation: ResolverTypeWrapper<InteractionPersonRelationRelationshipsToRelation>;
  InteractionPersonRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<InteractionPersonRelationRelationshipsToRelationFromPersonRelation>;
  InteractionPersonRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<InteractionPersonRelationRelationshipsToRelationToPersonRelation>;
  InteractionTag: ResolverTypeWrapper<InteractionTag>;
  InteractionTagsFilters: InteractionTagsFilters;
  InteractionTagsFiltersOr: InteractionTagsFiltersOr;
  InteractionTagsInteractionIdFilters: InteractionTagsInteractionIdFilters;
  InteractionTagsInteractionIdFiltersOr: InteractionTagsInteractionIdFiltersOr;
  InteractionTagsLabelIdFilters: InteractionTagsLabelIdFilters;
  InteractionTagsLabelIdFiltersOr: InteractionTagsLabelIdFiltersOr;
  InteractionTagsOrderBy: InteractionTagsOrderBy;
  InteractionsChannelFilters: InteractionsChannelFilters;
  InteractionsChannelFiltersOr: InteractionsChannelFiltersOr;
  InteractionsFilters: InteractionsFilters;
  InteractionsFiltersOr: InteractionsFiltersOr;
  InteractionsIdFilters: InteractionsIdFilters;
  InteractionsIdFiltersOr: InteractionsIdFiltersOr;
  InteractionsNoteFilters: InteractionsNoteFilters;
  InteractionsNoteFiltersOr: InteractionsNoteFiltersOr;
  InteractionsOccurredAtFilters: InteractionsOccurredAtFilters;
  InteractionsOccurredAtFiltersOr: InteractionsOccurredAtFiltersOr;
  InteractionsOrderBy: InteractionsOrderBy;
  InteractionsPersonIdFilters: InteractionsPersonIdFilters;
  InteractionsPersonIdFiltersOr: InteractionsPersonIdFiltersOr;
  InteractionsSentimentFilters: InteractionsSentimentFilters;
  InteractionsSentimentFiltersOr: InteractionsSentimentFiltersOr;
  Label: ResolverTypeWrapper<Label>;
  LabelsColorFilters: LabelsColorFilters;
  LabelsColorFiltersOr: LabelsColorFiltersOr;
  LabelsFilters: LabelsFilters;
  LabelsFiltersOr: LabelsFiltersOr;
  LabelsIdFilters: LabelsIdFilters;
  LabelsIdFiltersOr: LabelsIdFiltersOr;
  LabelsLabelFilters: LabelsLabelFilters;
  LabelsLabelFiltersOr: LabelsLabelFiltersOr;
  LabelsOrderBy: LabelsOrderBy;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Note: ResolverTypeWrapper<Note>;
  NoteLabelsRelation: ResolverTypeWrapper<NoteLabelsRelation>;
  NoteMention: ResolverTypeWrapper<NoteMention>;
  NoteMentionsFilters: NoteMentionsFilters;
  NoteMentionsFiltersOr: NoteMentionsFiltersOr;
  NoteMentionsMentionedPersonIdFilters: NoteMentionsMentionedPersonIdFilters;
  NoteMentionsMentionedPersonIdFiltersOr: NoteMentionsMentionedPersonIdFiltersOr;
  NoteMentionsNoteIdFilters: NoteMentionsNoteIdFilters;
  NoteMentionsNoteIdFiltersOr: NoteMentionsNoteIdFiltersOr;
  NoteMentionsOrderBy: NoteMentionsOrderBy;
  NoteMentionsRelation: ResolverTypeWrapper<NoteMentionsRelation>;
  NoteMentionsRelationImportantDatesRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelation>;
  NoteMentionsRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelationLabelsRelation>;
  NoteMentionsRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelationPersonRelation>;
  NoteMentionsRelationInteractionsRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelation>;
  NoteMentionsRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelationLabelsRelation>;
  NoteMentionsRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelationPersonRelation>;
  NoteMentionsRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationLabelsRelation>;
  NoteMentionsRelationMentionedInNotesRelation: ResolverTypeWrapper<NoteMentionsRelationMentionedInNotesRelation>;
  NoteMentionsRelationNotesRelation: ResolverTypeWrapper<NoteMentionsRelationNotesRelation>;
  NoteMentionsRelationRelationshipsFromRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsFromRelation>;
  NoteMentionsRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsFromRelationFromPersonRelation>;
  NoteMentionsRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsFromRelationToPersonRelation>;
  NoteMentionsRelationRelationshipsToRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsToRelation>;
  NoteMentionsRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsToRelationFromPersonRelation>;
  NoteMentionsRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsToRelationToPersonRelation>;
  NotePersonRelation: ResolverTypeWrapper<NotePersonRelation>;
  NotePersonRelationImportantDatesRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelation>;
  NotePersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationLabelsRelation>;
  NotePersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationPersonRelation>;
  NotePersonRelationInteractionsRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelation>;
  NotePersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelationLabelsRelation>;
  NotePersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelationPersonRelation>;
  NotePersonRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationLabelsRelation>;
  NotePersonRelationMentionedInNotesRelation: ResolverTypeWrapper<NotePersonRelationMentionedInNotesRelation>;
  NotePersonRelationNotesRelation: ResolverTypeWrapper<NotePersonRelationNotesRelation>;
  NotePersonRelationRelationshipsFromRelation: ResolverTypeWrapper<NotePersonRelationRelationshipsFromRelation>;
  NotePersonRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<NotePersonRelationRelationshipsFromRelationFromPersonRelation>;
  NotePersonRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<NotePersonRelationRelationshipsFromRelationToPersonRelation>;
  NotePersonRelationRelationshipsToRelation: ResolverTypeWrapper<NotePersonRelationRelationshipsToRelation>;
  NotePersonRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<NotePersonRelationRelationshipsToRelationFromPersonRelation>;
  NotePersonRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<NotePersonRelationRelationshipsToRelationToPersonRelation>;
  NoteTag: ResolverTypeWrapper<NoteTag>;
  NoteTagsFilters: NoteTagsFilters;
  NoteTagsFiltersOr: NoteTagsFiltersOr;
  NoteTagsLabelIdFilters: NoteTagsLabelIdFilters;
  NoteTagsLabelIdFiltersOr: NoteTagsLabelIdFiltersOr;
  NoteTagsNoteIdFilters: NoteTagsNoteIdFilters;
  NoteTagsNoteIdFiltersOr: NoteTagsNoteIdFiltersOr;
  NoteTagsOrderBy: NoteTagsOrderBy;
  NotesBodyFilters: NotesBodyFilters;
  NotesBodyFiltersOr: NotesBodyFiltersOr;
  NotesFilters: NotesFilters;
  NotesFiltersOr: NotesFiltersOr;
  NotesIdFilters: NotesIdFilters;
  NotesIdFiltersOr: NotesIdFiltersOr;
  NotesOrderBy: NotesOrderBy;
  NotesPersonIdFilters: NotesPersonIdFilters;
  NotesPersonIdFiltersOr: NotesPersonIdFiltersOr;
  OrderDirection: OrderDirection;
  Person: ResolverTypeWrapper<Person>;
  PersonImportantDatesRelation: ResolverTypeWrapper<PersonImportantDatesRelation>;
  PersonImportantDatesRelationLabelsRelation: ResolverTypeWrapper<PersonImportantDatesRelationLabelsRelation>;
  PersonImportantDatesRelationPersonRelation: ResolverTypeWrapper<PersonImportantDatesRelationPersonRelation>;
  PersonInteractionsRelation: ResolverTypeWrapper<PersonInteractionsRelation>;
  PersonInteractionsRelationLabelsRelation: ResolverTypeWrapper<PersonInteractionsRelationLabelsRelation>;
  PersonInteractionsRelationPersonRelation: ResolverTypeWrapper<PersonInteractionsRelationPersonRelation>;
  PersonLabel: ResolverTypeWrapper<PersonLabel>;
  PersonLabelsFilters: PersonLabelsFilters;
  PersonLabelsFiltersOr: PersonLabelsFiltersOr;
  PersonLabelsLabelIdFilters: PersonLabelsLabelIdFilters;
  PersonLabelsLabelIdFiltersOr: PersonLabelsLabelIdFiltersOr;
  PersonLabelsOrderBy: PersonLabelsOrderBy;
  PersonLabelsPersonIdFilters: PersonLabelsPersonIdFilters;
  PersonLabelsPersonIdFiltersOr: PersonLabelsPersonIdFiltersOr;
  PersonLabelsRelation: ResolverTypeWrapper<PersonLabelsRelation>;
  PersonMentionedInNotesRelation: ResolverTypeWrapper<PersonMentionedInNotesRelation>;
  PersonMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationLabelsRelation>;
  PersonMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationMentionsRelation>;
  PersonMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationPersonRelation>;
  PersonNotesRelation: ResolverTypeWrapper<PersonNotesRelation>;
  PersonNotesRelationLabelsRelation: ResolverTypeWrapper<PersonNotesRelationLabelsRelation>;
  PersonNotesRelationMentionsRelation: ResolverTypeWrapper<PersonNotesRelationMentionsRelation>;
  PersonNotesRelationPersonRelation: ResolverTypeWrapper<PersonNotesRelationPersonRelation>;
  PersonRelationship: ResolverTypeWrapper<PersonRelationship>;
  PersonRelationshipEntry: ResolverTypeWrapper<PersonRelationshipEntry>;
  PersonRelationshipFromPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation>;
  PersonRelationshipFromPersonRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationNotesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelation>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationMentionsRelation>;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationRelationshipsFromRelation>;
  PersonRelationshipFromPersonRelationRelationshipsToRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationRelationshipsToRelation>;
  PersonRelationshipToPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation>;
  PersonRelationshipToPersonRelationInteractionsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelation>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation>;
  PersonRelationshipToPersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelationPersonRelation>;
  PersonRelationshipToPersonRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationLabelsRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation>;
  PersonRelationshipToPersonRelationNotesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelation>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelationMentionsRelation>;
  PersonRelationshipToPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelationPersonRelation>;
  PersonRelationshipToPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationRelationshipsFromRelation>;
  PersonRelationshipToPersonRelationRelationshipsToRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationRelationshipsToRelation>;
  PersonRelationshipsFilters: PersonRelationshipsFilters;
  PersonRelationshipsFiltersOr: PersonRelationshipsFiltersOr;
  PersonRelationshipsFromPersonIdFilters: PersonRelationshipsFromPersonIdFilters;
  PersonRelationshipsFromPersonIdFiltersOr: PersonRelationshipsFromPersonIdFiltersOr;
  PersonRelationshipsFromRelation: ResolverTypeWrapper<PersonRelationshipsFromRelation>;
  PersonRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<PersonRelationshipsFromRelationFromPersonRelation>;
  PersonRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<PersonRelationshipsFromRelationToPersonRelation>;
  PersonRelationshipsIdFilters: PersonRelationshipsIdFilters;
  PersonRelationshipsIdFiltersOr: PersonRelationshipsIdFiltersOr;
  PersonRelationshipsOrderBy: PersonRelationshipsOrderBy;
  PersonRelationshipsToPersonIdFilters: PersonRelationshipsToPersonIdFilters;
  PersonRelationshipsToPersonIdFiltersOr: PersonRelationshipsToPersonIdFiltersOr;
  PersonRelationshipsToRelation: ResolverTypeWrapper<PersonRelationshipsToRelation>;
  PersonRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<PersonRelationshipsToRelationFromPersonRelation>;
  PersonRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<PersonRelationshipsToRelationToPersonRelation>;
  PersonRelationshipsTypeFilters: PersonRelationshipsTypeFilters;
  PersonRelationshipsTypeFiltersOr: PersonRelationshipsTypeFiltersOr;
  PersonsAvatarPathFilters: PersonsAvatarPathFilters;
  PersonsAvatarPathFiltersOr: PersonsAvatarPathFiltersOr;
  PersonsContactFrequencyFilters: PersonsContactFrequencyFilters;
  PersonsContactFrequencyFiltersOr: PersonsContactFrequencyFiltersOr;
  PersonsCreatedAtFilters: PersonsCreatedAtFilters;
  PersonsCreatedAtFiltersOr: PersonsCreatedAtFiltersOr;
  PersonsEmailFilters: PersonsEmailFilters;
  PersonsEmailFiltersOr: PersonsEmailFiltersOr;
  PersonsFilters: PersonsFilters;
  PersonsFiltersOr: PersonsFiltersOr;
  PersonsFirstNameFilters: PersonsFirstNameFilters;
  PersonsFirstNameFiltersOr: PersonsFirstNameFiltersOr;
  PersonsIdFilters: PersonsIdFilters;
  PersonsIdFiltersOr: PersonsIdFiltersOr;
  PersonsLastNameFilters: PersonsLastNameFilters;
  PersonsLastNameFiltersOr: PersonsLastNameFiltersOr;
  PersonsOrderBy: PersonsOrderBy;
  PersonsUpdatedAtFilters: PersonsUpdatedAtFilters;
  PersonsUpdatedAtFiltersOr: PersonsUpdatedAtFiltersOr;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateImportantDateInput: UpdateImportantDateInput;
  UpdateImportantDateTagInput: UpdateImportantDateTagInput;
  UpdateInteractionInput: UpdateInteractionInput;
  UpdateInteractionTagInput: UpdateInteractionTagInput;
  UpdateLabelInput: UpdateLabelInput;
  UpdateNoteInput: UpdateNoteInput;
  UpdateNoteMentionInput: UpdateNoteMentionInput;
  UpdateNoteTagInput: UpdateNoteTagInput;
  UpdatePersonInput: UpdatePersonInput;
  UpdatePersonLabelInput: UpdatePersonLabelInput;
  UpdatePersonRelationshipInput: UpdatePersonRelationshipInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateImportantDateInput: CreateImportantDateInput;
  CreateImportantDateTagInput: CreateImportantDateTagInput;
  CreateInteractionInput: CreateInteractionInput;
  CreateInteractionTagInput: CreateInteractionTagInput;
  CreateLabelInput: CreateLabelInput;
  CreateNoteInput: CreateNoteInput;
  CreateNoteMentionInput: CreateNoteMentionInput;
  CreateNoteTagInput: CreateNoteTagInput;
  CreatePersonInput: CreatePersonInput;
  CreatePersonLabelInput: CreatePersonLabelInput;
  CreatePersonRelationshipInput: CreatePersonRelationshipInput;
  ImportantDate: ImportantDate;
  ImportantDateLabelsRelation: ImportantDateLabelsRelation;
  ImportantDatePersonRelation: ImportantDatePersonRelation;
  ImportantDatePersonRelationImportantDatesRelation: ImportantDatePersonRelationImportantDatesRelation;
  ImportantDatePersonRelationInteractionsRelation: ImportantDatePersonRelationInteractionsRelation;
  ImportantDatePersonRelationInteractionsRelationLabelsRelation: ImportantDatePersonRelationInteractionsRelationLabelsRelation;
  ImportantDatePersonRelationInteractionsRelationPersonRelation: ImportantDatePersonRelationInteractionsRelationPersonRelation;
  ImportantDatePersonRelationLabelsRelation: ImportantDatePersonRelationLabelsRelation;
  ImportantDatePersonRelationMentionedInNotesRelation: ImportantDatePersonRelationMentionedInNotesRelation;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation;
  ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation: ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation;
  ImportantDatePersonRelationMentionedInNotesRelationPersonRelation: ImportantDatePersonRelationMentionedInNotesRelationPersonRelation;
  ImportantDatePersonRelationNotesRelation: ImportantDatePersonRelationNotesRelation;
  ImportantDatePersonRelationNotesRelationLabelsRelation: ImportantDatePersonRelationNotesRelationLabelsRelation;
  ImportantDatePersonRelationNotesRelationMentionsRelation: ImportantDatePersonRelationNotesRelationMentionsRelation;
  ImportantDatePersonRelationNotesRelationPersonRelation: ImportantDatePersonRelationNotesRelationPersonRelation;
  ImportantDatePersonRelationRelationshipsFromRelation: ImportantDatePersonRelationRelationshipsFromRelation;
  ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation: ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation;
  ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation: ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation;
  ImportantDatePersonRelationRelationshipsToRelation: ImportantDatePersonRelationRelationshipsToRelation;
  ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation: ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation;
  ImportantDatePersonRelationRelationshipsToRelationToPersonRelation: ImportantDatePersonRelationRelationshipsToRelationToPersonRelation;
  ImportantDateTag: ImportantDateTag;
  ImportantDateTagsFilters: ImportantDateTagsFilters;
  ImportantDateTagsFiltersOr: ImportantDateTagsFiltersOr;
  ImportantDateTagsImportantDateIdFilters: ImportantDateTagsImportantDateIdFilters;
  ImportantDateTagsImportantDateIdFiltersOr: ImportantDateTagsImportantDateIdFiltersOr;
  ImportantDateTagsLabelIdFilters: ImportantDateTagsLabelIdFilters;
  ImportantDateTagsLabelIdFiltersOr: ImportantDateTagsLabelIdFiltersOr;
  ImportantDateTagsOrderBy: ImportantDateTagsOrderBy;
  ImportantDatesDateFilters: ImportantDatesDateFilters;
  ImportantDatesDateFiltersOr: ImportantDatesDateFiltersOr;
  ImportantDatesDescriptionFilters: ImportantDatesDescriptionFilters;
  ImportantDatesDescriptionFiltersOr: ImportantDatesDescriptionFiltersOr;
  ImportantDatesFilters: ImportantDatesFilters;
  ImportantDatesFiltersOr: ImportantDatesFiltersOr;
  ImportantDatesIdFilters: ImportantDatesIdFilters;
  ImportantDatesIdFiltersOr: ImportantDatesIdFiltersOr;
  ImportantDatesNameFilters: ImportantDatesNameFilters;
  ImportantDatesNameFiltersOr: ImportantDatesNameFiltersOr;
  ImportantDatesOrderBy: ImportantDatesOrderBy;
  ImportantDatesPersonIdFilters: ImportantDatesPersonIdFilters;
  ImportantDatesPersonIdFiltersOr: ImportantDatesPersonIdFiltersOr;
  ImportantDatesRecurrenceFilters: ImportantDatesRecurrenceFilters;
  ImportantDatesRecurrenceFiltersOr: ImportantDatesRecurrenceFiltersOr;
  InnerOrder: InnerOrder;
  Int: Scalars['Int']['output'];
  Interaction: Interaction;
  InteractionLabelsRelation: InteractionLabelsRelation;
  InteractionPersonRelation: InteractionPersonRelation;
  InteractionPersonRelationImportantDatesRelation: InteractionPersonRelationImportantDatesRelation;
  InteractionPersonRelationImportantDatesRelationLabelsRelation: InteractionPersonRelationImportantDatesRelationLabelsRelation;
  InteractionPersonRelationImportantDatesRelationPersonRelation: InteractionPersonRelationImportantDatesRelationPersonRelation;
  InteractionPersonRelationInteractionsRelation: InteractionPersonRelationInteractionsRelation;
  InteractionPersonRelationLabelsRelation: InteractionPersonRelationLabelsRelation;
  InteractionPersonRelationMentionedInNotesRelation: InteractionPersonRelationMentionedInNotesRelation;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelation: InteractionPersonRelationMentionedInNotesRelationLabelsRelation;
  InteractionPersonRelationMentionedInNotesRelationMentionsRelation: InteractionPersonRelationMentionedInNotesRelationMentionsRelation;
  InteractionPersonRelationMentionedInNotesRelationPersonRelation: InteractionPersonRelationMentionedInNotesRelationPersonRelation;
  InteractionPersonRelationNotesRelation: InteractionPersonRelationNotesRelation;
  InteractionPersonRelationNotesRelationLabelsRelation: InteractionPersonRelationNotesRelationLabelsRelation;
  InteractionPersonRelationNotesRelationMentionsRelation: InteractionPersonRelationNotesRelationMentionsRelation;
  InteractionPersonRelationNotesRelationPersonRelation: InteractionPersonRelationNotesRelationPersonRelation;
  InteractionPersonRelationRelationshipsFromRelation: InteractionPersonRelationRelationshipsFromRelation;
  InteractionPersonRelationRelationshipsFromRelationFromPersonRelation: InteractionPersonRelationRelationshipsFromRelationFromPersonRelation;
  InteractionPersonRelationRelationshipsFromRelationToPersonRelation: InteractionPersonRelationRelationshipsFromRelationToPersonRelation;
  InteractionPersonRelationRelationshipsToRelation: InteractionPersonRelationRelationshipsToRelation;
  InteractionPersonRelationRelationshipsToRelationFromPersonRelation: InteractionPersonRelationRelationshipsToRelationFromPersonRelation;
  InteractionPersonRelationRelationshipsToRelationToPersonRelation: InteractionPersonRelationRelationshipsToRelationToPersonRelation;
  InteractionTag: InteractionTag;
  InteractionTagsFilters: InteractionTagsFilters;
  InteractionTagsFiltersOr: InteractionTagsFiltersOr;
  InteractionTagsInteractionIdFilters: InteractionTagsInteractionIdFilters;
  InteractionTagsInteractionIdFiltersOr: InteractionTagsInteractionIdFiltersOr;
  InteractionTagsLabelIdFilters: InteractionTagsLabelIdFilters;
  InteractionTagsLabelIdFiltersOr: InteractionTagsLabelIdFiltersOr;
  InteractionTagsOrderBy: InteractionTagsOrderBy;
  InteractionsChannelFilters: InteractionsChannelFilters;
  InteractionsChannelFiltersOr: InteractionsChannelFiltersOr;
  InteractionsFilters: InteractionsFilters;
  InteractionsFiltersOr: InteractionsFiltersOr;
  InteractionsIdFilters: InteractionsIdFilters;
  InteractionsIdFiltersOr: InteractionsIdFiltersOr;
  InteractionsNoteFilters: InteractionsNoteFilters;
  InteractionsNoteFiltersOr: InteractionsNoteFiltersOr;
  InteractionsOccurredAtFilters: InteractionsOccurredAtFilters;
  InteractionsOccurredAtFiltersOr: InteractionsOccurredAtFiltersOr;
  InteractionsOrderBy: InteractionsOrderBy;
  InteractionsPersonIdFilters: InteractionsPersonIdFilters;
  InteractionsPersonIdFiltersOr: InteractionsPersonIdFiltersOr;
  InteractionsSentimentFilters: InteractionsSentimentFilters;
  InteractionsSentimentFiltersOr: InteractionsSentimentFiltersOr;
  Label: Label;
  LabelsColorFilters: LabelsColorFilters;
  LabelsColorFiltersOr: LabelsColorFiltersOr;
  LabelsFilters: LabelsFilters;
  LabelsFiltersOr: LabelsFiltersOr;
  LabelsIdFilters: LabelsIdFilters;
  LabelsIdFiltersOr: LabelsIdFiltersOr;
  LabelsLabelFilters: LabelsLabelFilters;
  LabelsLabelFiltersOr: LabelsLabelFiltersOr;
  LabelsOrderBy: LabelsOrderBy;
  Mutation: Record<PropertyKey, never>;
  Note: Note;
  NoteLabelsRelation: NoteLabelsRelation;
  NoteMention: NoteMention;
  NoteMentionsFilters: NoteMentionsFilters;
  NoteMentionsFiltersOr: NoteMentionsFiltersOr;
  NoteMentionsMentionedPersonIdFilters: NoteMentionsMentionedPersonIdFilters;
  NoteMentionsMentionedPersonIdFiltersOr: NoteMentionsMentionedPersonIdFiltersOr;
  NoteMentionsNoteIdFilters: NoteMentionsNoteIdFilters;
  NoteMentionsNoteIdFiltersOr: NoteMentionsNoteIdFiltersOr;
  NoteMentionsOrderBy: NoteMentionsOrderBy;
  NoteMentionsRelation: NoteMentionsRelation;
  NoteMentionsRelationImportantDatesRelation: NoteMentionsRelationImportantDatesRelation;
  NoteMentionsRelationImportantDatesRelationLabelsRelation: NoteMentionsRelationImportantDatesRelationLabelsRelation;
  NoteMentionsRelationImportantDatesRelationPersonRelation: NoteMentionsRelationImportantDatesRelationPersonRelation;
  NoteMentionsRelationInteractionsRelation: NoteMentionsRelationInteractionsRelation;
  NoteMentionsRelationInteractionsRelationLabelsRelation: NoteMentionsRelationInteractionsRelationLabelsRelation;
  NoteMentionsRelationInteractionsRelationPersonRelation: NoteMentionsRelationInteractionsRelationPersonRelation;
  NoteMentionsRelationLabelsRelation: NoteMentionsRelationLabelsRelation;
  NoteMentionsRelationMentionedInNotesRelation: NoteMentionsRelationMentionedInNotesRelation;
  NoteMentionsRelationNotesRelation: NoteMentionsRelationNotesRelation;
  NoteMentionsRelationRelationshipsFromRelation: NoteMentionsRelationRelationshipsFromRelation;
  NoteMentionsRelationRelationshipsFromRelationFromPersonRelation: NoteMentionsRelationRelationshipsFromRelationFromPersonRelation;
  NoteMentionsRelationRelationshipsFromRelationToPersonRelation: NoteMentionsRelationRelationshipsFromRelationToPersonRelation;
  NoteMentionsRelationRelationshipsToRelation: NoteMentionsRelationRelationshipsToRelation;
  NoteMentionsRelationRelationshipsToRelationFromPersonRelation: NoteMentionsRelationRelationshipsToRelationFromPersonRelation;
  NoteMentionsRelationRelationshipsToRelationToPersonRelation: NoteMentionsRelationRelationshipsToRelationToPersonRelation;
  NotePersonRelation: NotePersonRelation;
  NotePersonRelationImportantDatesRelation: NotePersonRelationImportantDatesRelation;
  NotePersonRelationImportantDatesRelationLabelsRelation: NotePersonRelationImportantDatesRelationLabelsRelation;
  NotePersonRelationImportantDatesRelationPersonRelation: NotePersonRelationImportantDatesRelationPersonRelation;
  NotePersonRelationInteractionsRelation: NotePersonRelationInteractionsRelation;
  NotePersonRelationInteractionsRelationLabelsRelation: NotePersonRelationInteractionsRelationLabelsRelation;
  NotePersonRelationInteractionsRelationPersonRelation: NotePersonRelationInteractionsRelationPersonRelation;
  NotePersonRelationLabelsRelation: NotePersonRelationLabelsRelation;
  NotePersonRelationMentionedInNotesRelation: NotePersonRelationMentionedInNotesRelation;
  NotePersonRelationNotesRelation: NotePersonRelationNotesRelation;
  NotePersonRelationRelationshipsFromRelation: NotePersonRelationRelationshipsFromRelation;
  NotePersonRelationRelationshipsFromRelationFromPersonRelation: NotePersonRelationRelationshipsFromRelationFromPersonRelation;
  NotePersonRelationRelationshipsFromRelationToPersonRelation: NotePersonRelationRelationshipsFromRelationToPersonRelation;
  NotePersonRelationRelationshipsToRelation: NotePersonRelationRelationshipsToRelation;
  NotePersonRelationRelationshipsToRelationFromPersonRelation: NotePersonRelationRelationshipsToRelationFromPersonRelation;
  NotePersonRelationRelationshipsToRelationToPersonRelation: NotePersonRelationRelationshipsToRelationToPersonRelation;
  NoteTag: NoteTag;
  NoteTagsFilters: NoteTagsFilters;
  NoteTagsFiltersOr: NoteTagsFiltersOr;
  NoteTagsLabelIdFilters: NoteTagsLabelIdFilters;
  NoteTagsLabelIdFiltersOr: NoteTagsLabelIdFiltersOr;
  NoteTagsNoteIdFilters: NoteTagsNoteIdFilters;
  NoteTagsNoteIdFiltersOr: NoteTagsNoteIdFiltersOr;
  NoteTagsOrderBy: NoteTagsOrderBy;
  NotesBodyFilters: NotesBodyFilters;
  NotesBodyFiltersOr: NotesBodyFiltersOr;
  NotesFilters: NotesFilters;
  NotesFiltersOr: NotesFiltersOr;
  NotesIdFilters: NotesIdFilters;
  NotesIdFiltersOr: NotesIdFiltersOr;
  NotesOrderBy: NotesOrderBy;
  NotesPersonIdFilters: NotesPersonIdFilters;
  NotesPersonIdFiltersOr: NotesPersonIdFiltersOr;
  Person: Person;
  PersonImportantDatesRelation: PersonImportantDatesRelation;
  PersonImportantDatesRelationLabelsRelation: PersonImportantDatesRelationLabelsRelation;
  PersonImportantDatesRelationPersonRelation: PersonImportantDatesRelationPersonRelation;
  PersonInteractionsRelation: PersonInteractionsRelation;
  PersonInteractionsRelationLabelsRelation: PersonInteractionsRelationLabelsRelation;
  PersonInteractionsRelationPersonRelation: PersonInteractionsRelationPersonRelation;
  PersonLabel: PersonLabel;
  PersonLabelsFilters: PersonLabelsFilters;
  PersonLabelsFiltersOr: PersonLabelsFiltersOr;
  PersonLabelsLabelIdFilters: PersonLabelsLabelIdFilters;
  PersonLabelsLabelIdFiltersOr: PersonLabelsLabelIdFiltersOr;
  PersonLabelsOrderBy: PersonLabelsOrderBy;
  PersonLabelsPersonIdFilters: PersonLabelsPersonIdFilters;
  PersonLabelsPersonIdFiltersOr: PersonLabelsPersonIdFiltersOr;
  PersonLabelsRelation: PersonLabelsRelation;
  PersonMentionedInNotesRelation: PersonMentionedInNotesRelation;
  PersonMentionedInNotesRelationLabelsRelation: PersonMentionedInNotesRelationLabelsRelation;
  PersonMentionedInNotesRelationMentionsRelation: PersonMentionedInNotesRelationMentionsRelation;
  PersonMentionedInNotesRelationPersonRelation: PersonMentionedInNotesRelationPersonRelation;
  PersonNotesRelation: PersonNotesRelation;
  PersonNotesRelationLabelsRelation: PersonNotesRelationLabelsRelation;
  PersonNotesRelationMentionsRelation: PersonNotesRelationMentionsRelation;
  PersonNotesRelationPersonRelation: PersonNotesRelationPersonRelation;
  PersonRelationship: PersonRelationship;
  PersonRelationshipEntry: PersonRelationshipEntry;
  PersonRelationshipFromPersonRelation: PersonRelationshipFromPersonRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelation: PersonRelationshipFromPersonRelationImportantDatesRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation: PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation;
  PersonRelationshipFromPersonRelationInteractionsRelation: PersonRelationshipFromPersonRelationInteractionsRelation;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation;
  PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation: PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation;
  PersonRelationshipFromPersonRelationLabelsRelation: PersonRelationshipFromPersonRelationLabelsRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation;
  PersonRelationshipFromPersonRelationNotesRelation: PersonRelationshipFromPersonRelationNotesRelation;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation: PersonRelationshipFromPersonRelationNotesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationNotesRelationMentionsRelation: PersonRelationshipFromPersonRelationNotesRelationMentionsRelation;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation: PersonRelationshipFromPersonRelationNotesRelationPersonRelation;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation: PersonRelationshipFromPersonRelationRelationshipsFromRelation;
  PersonRelationshipFromPersonRelationRelationshipsToRelation: PersonRelationshipFromPersonRelationRelationshipsToRelation;
  PersonRelationshipToPersonRelation: PersonRelationshipToPersonRelation;
  PersonRelationshipToPersonRelationImportantDatesRelation: PersonRelationshipToPersonRelationImportantDatesRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation: PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation;
  PersonRelationshipToPersonRelationInteractionsRelation: PersonRelationshipToPersonRelationInteractionsRelation;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation;
  PersonRelationshipToPersonRelationInteractionsRelationPersonRelation: PersonRelationshipToPersonRelationInteractionsRelationPersonRelation;
  PersonRelationshipToPersonRelationLabelsRelation: PersonRelationshipToPersonRelationLabelsRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelation: PersonRelationshipToPersonRelationMentionedInNotesRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation;
  PersonRelationshipToPersonRelationNotesRelation: PersonRelationshipToPersonRelationNotesRelation;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation: PersonRelationshipToPersonRelationNotesRelationLabelsRelation;
  PersonRelationshipToPersonRelationNotesRelationMentionsRelation: PersonRelationshipToPersonRelationNotesRelationMentionsRelation;
  PersonRelationshipToPersonRelationNotesRelationPersonRelation: PersonRelationshipToPersonRelationNotesRelationPersonRelation;
  PersonRelationshipToPersonRelationRelationshipsFromRelation: PersonRelationshipToPersonRelationRelationshipsFromRelation;
  PersonRelationshipToPersonRelationRelationshipsToRelation: PersonRelationshipToPersonRelationRelationshipsToRelation;
  PersonRelationshipsFilters: PersonRelationshipsFilters;
  PersonRelationshipsFiltersOr: PersonRelationshipsFiltersOr;
  PersonRelationshipsFromPersonIdFilters: PersonRelationshipsFromPersonIdFilters;
  PersonRelationshipsFromPersonIdFiltersOr: PersonRelationshipsFromPersonIdFiltersOr;
  PersonRelationshipsFromRelation: PersonRelationshipsFromRelation;
  PersonRelationshipsFromRelationFromPersonRelation: PersonRelationshipsFromRelationFromPersonRelation;
  PersonRelationshipsFromRelationToPersonRelation: PersonRelationshipsFromRelationToPersonRelation;
  PersonRelationshipsIdFilters: PersonRelationshipsIdFilters;
  PersonRelationshipsIdFiltersOr: PersonRelationshipsIdFiltersOr;
  PersonRelationshipsOrderBy: PersonRelationshipsOrderBy;
  PersonRelationshipsToPersonIdFilters: PersonRelationshipsToPersonIdFilters;
  PersonRelationshipsToPersonIdFiltersOr: PersonRelationshipsToPersonIdFiltersOr;
  PersonRelationshipsToRelation: PersonRelationshipsToRelation;
  PersonRelationshipsToRelationFromPersonRelation: PersonRelationshipsToRelationFromPersonRelation;
  PersonRelationshipsToRelationToPersonRelation: PersonRelationshipsToRelationToPersonRelation;
  PersonRelationshipsTypeFilters: PersonRelationshipsTypeFilters;
  PersonRelationshipsTypeFiltersOr: PersonRelationshipsTypeFiltersOr;
  PersonsAvatarPathFilters: PersonsAvatarPathFilters;
  PersonsAvatarPathFiltersOr: PersonsAvatarPathFiltersOr;
  PersonsContactFrequencyFilters: PersonsContactFrequencyFilters;
  PersonsContactFrequencyFiltersOr: PersonsContactFrequencyFiltersOr;
  PersonsCreatedAtFilters: PersonsCreatedAtFilters;
  PersonsCreatedAtFiltersOr: PersonsCreatedAtFiltersOr;
  PersonsEmailFilters: PersonsEmailFilters;
  PersonsEmailFiltersOr: PersonsEmailFiltersOr;
  PersonsFilters: PersonsFilters;
  PersonsFiltersOr: PersonsFiltersOr;
  PersonsFirstNameFilters: PersonsFirstNameFilters;
  PersonsFirstNameFiltersOr: PersonsFirstNameFiltersOr;
  PersonsIdFilters: PersonsIdFilters;
  PersonsIdFiltersOr: PersonsIdFiltersOr;
  PersonsLastNameFilters: PersonsLastNameFilters;
  PersonsLastNameFiltersOr: PersonsLastNameFiltersOr;
  PersonsOrderBy: PersonsOrderBy;
  PersonsUpdatedAtFilters: PersonsUpdatedAtFilters;
  PersonsUpdatedAtFiltersOr: PersonsUpdatedAtFiltersOr;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  UpdateImportantDateInput: UpdateImportantDateInput;
  UpdateImportantDateTagInput: UpdateImportantDateTagInput;
  UpdateInteractionInput: UpdateInteractionInput;
  UpdateInteractionTagInput: UpdateInteractionTagInput;
  UpdateLabelInput: UpdateLabelInput;
  UpdateNoteInput: UpdateNoteInput;
  UpdateNoteMentionInput: UpdateNoteMentionInput;
  UpdateNoteTagInput: UpdateNoteTagInput;
  UpdatePersonInput: UpdatePersonInput;
  UpdatePersonLabelInput: UpdatePersonLabelInput;
  UpdatePersonRelationshipInput: UpdatePersonRelationshipInput;
};

export type ImportantDateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDate'] = ResolversParentTypes['ImportantDate']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDateLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelation'] = ResolversParentTypes['ImportantDateLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelation'] = ResolversParentTypes['ImportantDatePersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationNotesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationImportantDatesRelation'] = ResolversParentTypes['ImportantDatePersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDatePersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationInteractionsRelation'] = ResolversParentTypes['ImportantDatePersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelation'] = ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelationMentionsRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationRelationshipsFromRelation'] = ResolversParentTypes['ImportantDatePersonRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationRelationshipsToRelation'] = ResolversParentTypes['ImportantDatePersonRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateTag'] = ResolversParentTypes['ImportantDateTag']> = {
  importantDateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Interaction'] = ResolversParentTypes['Interaction']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionLabelsRelation']>, ParentType, ContextType, Partial<InteractionLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelation'] = ResolversParentTypes['InteractionLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelation'] = ResolversParentTypes['InteractionPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['InteractionPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['InteractionPersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['InteractionPersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['InteractionPersonRelationNotesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['InteractionPersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['InteractionPersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationImportantDatesRelation'] = ResolversParentTypes['InteractionPersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['InteractionPersonRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationInteractionsRelation'] = ResolversParentTypes['InteractionPersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionPersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelation'] = ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['InteractionPersonRelationMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationNotesRelation'] = ResolversParentTypes['InteractionPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['InteractionPersonRelationNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationNotesRelationMentionsRelation'] = ResolversParentTypes['InteractionPersonRelationNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['InteractionPersonRelationNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationRelationshipsFromRelation'] = ResolversParentTypes['InteractionPersonRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['InteractionPersonRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['InteractionPersonRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationRelationshipsToRelation'] = ResolversParentTypes['InteractionPersonRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['InteractionPersonRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['InteractionPersonRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionTag'] = ResolversParentTypes['InteractionTag']> = {
  interactionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Label'] = ResolversParentTypes['Label']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createImportantDate?: Resolver<Maybe<ResolversTypes['ImportantDate']>, ParentType, ContextType, RequireFields<MutationCreateImportantDateArgs, 'values'>>;
  createImportantDateTag?: Resolver<Maybe<ResolversTypes['ImportantDateTag']>, ParentType, ContextType, RequireFields<MutationCreateImportantDateTagArgs, 'values'>>;
  createImportantDateTags?: Resolver<Array<ResolversTypes['ImportantDateTag']>, ParentType, ContextType, RequireFields<MutationCreateImportantDateTagsArgs, 'values'>>;
  createImportantDates?: Resolver<Array<ResolversTypes['ImportantDate']>, ParentType, ContextType, RequireFields<MutationCreateImportantDatesArgs, 'values'>>;
  createInteraction?: Resolver<Maybe<ResolversTypes['Interaction']>, ParentType, ContextType, RequireFields<MutationCreateInteractionArgs, 'values'>>;
  createInteractionTag?: Resolver<Maybe<ResolversTypes['InteractionTag']>, ParentType, ContextType, RequireFields<MutationCreateInteractionTagArgs, 'values'>>;
  createInteractionTags?: Resolver<Array<ResolversTypes['InteractionTag']>, ParentType, ContextType, RequireFields<MutationCreateInteractionTagsArgs, 'values'>>;
  createInteractions?: Resolver<Array<ResolversTypes['Interaction']>, ParentType, ContextType, RequireFields<MutationCreateInteractionsArgs, 'values'>>;
  createLabel?: Resolver<Maybe<ResolversTypes['Label']>, ParentType, ContextType, RequireFields<MutationCreateLabelArgs, 'values'>>;
  createLabels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, RequireFields<MutationCreateLabelsArgs, 'values'>>;
  createNote?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<MutationCreateNoteArgs, 'values'>>;
  createNoteMention?: Resolver<Maybe<ResolversTypes['NoteMention']>, ParentType, ContextType, RequireFields<MutationCreateNoteMentionArgs, 'values'>>;
  createNoteMentions?: Resolver<Array<ResolversTypes['NoteMention']>, ParentType, ContextType, RequireFields<MutationCreateNoteMentionsArgs, 'values'>>;
  createNoteTag?: Resolver<Maybe<ResolversTypes['NoteTag']>, ParentType, ContextType, RequireFields<MutationCreateNoteTagArgs, 'values'>>;
  createNoteTags?: Resolver<Array<ResolversTypes['NoteTag']>, ParentType, ContextType, RequireFields<MutationCreateNoteTagsArgs, 'values'>>;
  createNotes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<MutationCreateNotesArgs, 'values'>>;
  createPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationCreatePersonArgs, 'values'>>;
  createPersonLabel?: Resolver<Maybe<ResolversTypes['PersonLabel']>, ParentType, ContextType, RequireFields<MutationCreatePersonLabelArgs, 'values'>>;
  createPersonLabels?: Resolver<Array<ResolversTypes['PersonLabel']>, ParentType, ContextType, RequireFields<MutationCreatePersonLabelsArgs, 'values'>>;
  createPersonRelationship?: Resolver<Maybe<ResolversTypes['PersonRelationship']>, ParentType, ContextType, RequireFields<MutationCreatePersonRelationshipArgs, 'values'>>;
  createPersonRelationships?: Resolver<Array<ResolversTypes['PersonRelationship']>, ParentType, ContextType, RequireFields<MutationCreatePersonRelationshipsArgs, 'values'>>;
  createPersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationCreatePersonsArgs, 'values'>>;
  deleteImportantDateTags?: Resolver<Array<ResolversTypes['ImportantDateTag']>, ParentType, ContextType, Partial<MutationDeleteImportantDateTagsArgs>>;
  deleteImportantDates?: Resolver<Array<ResolversTypes['ImportantDate']>, ParentType, ContextType, Partial<MutationDeleteImportantDatesArgs>>;
  deleteInteractionTags?: Resolver<Array<ResolversTypes['InteractionTag']>, ParentType, ContextType, Partial<MutationDeleteInteractionTagsArgs>>;
  deleteInteractions?: Resolver<Array<ResolversTypes['Interaction']>, ParentType, ContextType, Partial<MutationDeleteInteractionsArgs>>;
  deleteLabels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<MutationDeleteLabelsArgs>>;
  deleteNoteMentions?: Resolver<Array<ResolversTypes['NoteMention']>, ParentType, ContextType, Partial<MutationDeleteNoteMentionsArgs>>;
  deleteNoteTags?: Resolver<Array<ResolversTypes['NoteTag']>, ParentType, ContextType, Partial<MutationDeleteNoteTagsArgs>>;
  deleteNotes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType, Partial<MutationDeleteNotesArgs>>;
  deletePersonLabels?: Resolver<Array<ResolversTypes['PersonLabel']>, ParentType, ContextType, Partial<MutationDeletePersonLabelsArgs>>;
  deletePersonRelationships?: Resolver<Array<ResolversTypes['PersonRelationship']>, ParentType, ContextType, Partial<MutationDeletePersonRelationshipsArgs>>;
  deletePersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, Partial<MutationDeletePersonsArgs>>;
  updateImportantDateTags?: Resolver<Array<ResolversTypes['ImportantDateTag']>, ParentType, ContextType, RequireFields<MutationUpdateImportantDateTagsArgs, 'set'>>;
  updateImportantDates?: Resolver<Array<ResolversTypes['ImportantDate']>, ParentType, ContextType, RequireFields<MutationUpdateImportantDatesArgs, 'set'>>;
  updateInteractionTags?: Resolver<Array<ResolversTypes['InteractionTag']>, ParentType, ContextType, RequireFields<MutationUpdateInteractionTagsArgs, 'set'>>;
  updateInteractions?: Resolver<Array<ResolversTypes['Interaction']>, ParentType, ContextType, RequireFields<MutationUpdateInteractionsArgs, 'set'>>;
  updateLabels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, RequireFields<MutationUpdateLabelsArgs, 'set'>>;
  updateNoteMentions?: Resolver<Array<ResolversTypes['NoteMention']>, ParentType, ContextType, RequireFields<MutationUpdateNoteMentionsArgs, 'set'>>;
  updateNoteTags?: Resolver<Array<ResolversTypes['NoteTag']>, ParentType, ContextType, RequireFields<MutationUpdateNoteTagsArgs, 'set'>>;
  updateNotes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<MutationUpdateNotesArgs, 'set'>>;
  updatePersonLabels?: Resolver<Array<ResolversTypes['PersonLabel']>, ParentType, ContextType, RequireFields<MutationUpdatePersonLabelsArgs, 'set'>>;
  updatePersonRelationships?: Resolver<Array<ResolversTypes['PersonRelationship']>, ParentType, ContextType, RequireFields<MutationUpdatePersonRelationshipsArgs, 'set'>>;
  updatePersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationUpdatePersonsArgs, 'set'>>;
};

export type NoteResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteLabelsRelation']>, ParentType, ContextType, Partial<NoteLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['NoteMentionsRelation']>, ParentType, ContextType, Partial<NoteMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['NotePersonRelation']>, ParentType, ContextType, Partial<NotePersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelation'] = ResolversParentTypes['NoteLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMention'] = ResolversParentTypes['NoteMention']> = {
  mentionedPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  noteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelation'] = ResolversParentTypes['NoteMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['NoteMentionsRelationImportantDatesRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['NoteMentionsRelationInteractionsRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['NoteMentionsRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['NoteMentionsRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['NoteMentionsRelationNotesRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['NoteMentionsRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['NoteMentionsRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationImportantDatesRelation'] = ResolversParentTypes['NoteMentionsRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteMentionsRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['NoteMentionsRelationImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['NoteMentionsRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationInteractionsRelation'] = ResolversParentTypes['NoteMentionsRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteMentionsRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteMentionsRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['NoteMentionsRelationInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['NoteMentionsRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationLabelsRelation'] = ResolversParentTypes['NoteMentionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationMentionedInNotesRelation'] = ResolversParentTypes['NoteMentionsRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteMentionsRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationNotesRelation'] = ResolversParentTypes['NoteMentionsRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteMentionsRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationRelationshipsFromRelation'] = ResolversParentTypes['NoteMentionsRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['NoteMentionsRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['NoteMentionsRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationRelationshipsToRelation'] = ResolversParentTypes['NoteMentionsRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['NoteMentionsRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['NoteMentionsRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelation'] = ResolversParentTypes['NotePersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['NotePersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<NotePersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['NotePersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<NotePersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['NotePersonRelationLabelsRelation']>, ParentType, ContextType, Partial<NotePersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['NotePersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<NotePersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['NotePersonRelationNotesRelation']>, ParentType, ContextType, Partial<NotePersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['NotePersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<NotePersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['NotePersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<NotePersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationImportantDatesRelation'] = ResolversParentTypes['NotePersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NotePersonRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<NotePersonRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NotePersonRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NotePersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['NotePersonRelationImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['NotePersonRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationInteractionsRelation'] = ResolversParentTypes['NotePersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NotePersonRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<NotePersonRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NotePersonRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NotePersonRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['NotePersonRelationInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['NotePersonRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationLabelsRelation'] = ResolversParentTypes['NotePersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationMentionedInNotesRelation'] = ResolversParentTypes['NotePersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NotePersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationNotesRelation'] = ResolversParentTypes['NotePersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NotePersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationRelationshipsFromRelation'] = ResolversParentTypes['NotePersonRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['NotePersonRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['NotePersonRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['NotePersonRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['NotePersonRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationRelationshipsToRelation'] = ResolversParentTypes['NotePersonRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['NotePersonRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['NotePersonRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['NotePersonRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['NotePersonRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteTag'] = ResolversParentTypes['NoteTag']> = {
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  noteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['PersonImportantDatesRelation']>, ParentType, ContextType, Partial<PersonImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['PersonInteractionsRelation']>, ParentType, ContextType, Partial<PersonInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['PersonLabelsRelation']>, ParentType, ContextType, Partial<PersonLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['PersonMentionedInNotesRelation']>, ParentType, ContextType, Partial<PersonMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['PersonNotesRelation']>, ParentType, ContextType, Partial<PersonNotesArgs>>;
  relationships?: Resolver<Array<ResolversTypes['PersonRelationshipEntry']>, ParentType, ContextType>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['PersonRelationshipsFromRelation']>, ParentType, ContextType, Partial<PersonRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['PersonRelationshipsToRelation']>, ParentType, ContextType, Partial<PersonRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonImportantDatesRelation'] = ResolversParentTypes['PersonImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonImportantDatesRelationLabelsRelation'] = ResolversParentTypes['PersonImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonImportantDatesRelationPersonRelation'] = ResolversParentTypes['PersonImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonInteractionsRelation'] = ResolversParentTypes['PersonInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<PersonInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonInteractionsRelationLabelsRelation'] = ResolversParentTypes['PersonInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonInteractionsRelationPersonRelation'] = ResolversParentTypes['PersonInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonLabelResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonLabel'] = ResolversParentTypes['PersonLabel']> = {
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonLabelsRelation'] = ResolversParentTypes['PersonLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonMentionedInNotesRelation'] = ResolversParentTypes['PersonMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['PersonMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<PersonMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['PersonMentionedInNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['PersonMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['PersonMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelation'] = ResolversParentTypes['PersonNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['PersonNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<PersonNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelationLabelsRelation'] = ResolversParentTypes['PersonNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelationMentionsRelation'] = ResolversParentTypes['PersonNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelationPersonRelation'] = ResolversParentTypes['PersonNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationship'] = ResolversParentTypes['PersonRelationship']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipEntryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipEntry'] = ResolversParentTypes['PersonRelationshipEntry']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relatedPersonFirstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relatedPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relatedPersonLastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationMentionsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationRelationshipsFromRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationRelationshipsFromRelation']> = {
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationRelationshipsToRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationRelationshipsToRelation']> = {
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationNotesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationMentionsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationRelationshipsFromRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationRelationshipsFromRelation']> = {
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationRelationshipsToRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationRelationshipsToRelation']> = {
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipsFromRelation'] = ResolversParentTypes['PersonRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['PersonRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['PersonRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['PersonRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['PersonRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipsToRelation'] = ResolversParentTypes['PersonRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['PersonRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['PersonRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['PersonRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['PersonRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  importantDate?: Resolver<Maybe<ResolversTypes['ImportantDate']>, ParentType, ContextType, Partial<QueryImportantDateArgs>>;
  importantDateTag?: Resolver<Maybe<ResolversTypes['ImportantDateTag']>, ParentType, ContextType, Partial<QueryImportantDateTagArgs>>;
  importantDateTags?: Resolver<Array<ResolversTypes['ImportantDateTag']>, ParentType, ContextType, Partial<QueryImportantDateTagsArgs>>;
  importantDates?: Resolver<Array<ResolversTypes['ImportantDate']>, ParentType, ContextType, Partial<QueryImportantDatesArgs>>;
  interaction?: Resolver<Maybe<ResolversTypes['Interaction']>, ParentType, ContextType, Partial<QueryInteractionArgs>>;
  interactionTag?: Resolver<Maybe<ResolversTypes['InteractionTag']>, ParentType, ContextType, Partial<QueryInteractionTagArgs>>;
  interactionTags?: Resolver<Array<ResolversTypes['InteractionTag']>, ParentType, ContextType, Partial<QueryInteractionTagsArgs>>;
  interactions?: Resolver<Array<ResolversTypes['Interaction']>, ParentType, ContextType, Partial<QueryInteractionsArgs>>;
  label?: Resolver<Maybe<ResolversTypes['Label']>, ParentType, ContextType, Partial<QueryLabelArgs>>;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<QueryLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, Partial<QueryNoteArgs>>;
  noteMention?: Resolver<Maybe<ResolversTypes['NoteMention']>, ParentType, ContextType, Partial<QueryNoteMentionArgs>>;
  noteMentions?: Resolver<Array<ResolversTypes['NoteMention']>, ParentType, ContextType, Partial<QueryNoteMentionsArgs>>;
  noteTag?: Resolver<Maybe<ResolversTypes['NoteTag']>, ParentType, ContextType, Partial<QueryNoteTagArgs>>;
  noteTags?: Resolver<Array<ResolversTypes['NoteTag']>, ParentType, ContextType, Partial<QueryNoteTagsArgs>>;
  notes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType, Partial<QueryNotesArgs>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryPersonArgs>>;
  personLabel?: Resolver<Maybe<ResolversTypes['PersonLabel']>, ParentType, ContextType, Partial<QueryPersonLabelArgs>>;
  personLabels?: Resolver<Array<ResolversTypes['PersonLabel']>, ParentType, ContextType, Partial<QueryPersonLabelsArgs>>;
  personRelationship?: Resolver<Maybe<ResolversTypes['PersonRelationship']>, ParentType, ContextType, Partial<QueryPersonRelationshipArgs>>;
  personRelationships?: Resolver<Array<ResolversTypes['PersonRelationship']>, ParentType, ContextType, Partial<QueryPersonRelationshipsArgs>>;
  persons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryPersonsArgs>>;
};

export type Resolvers<ContextType = Context> = {
  ImportantDate?: ImportantDateResolvers<ContextType>;
  ImportantDateLabelsRelation?: ImportantDateLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelation?: ImportantDatePersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationImportantDatesRelation?: ImportantDatePersonRelationImportantDatesRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelation?: ImportantDatePersonRelationInteractionsRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelation?: ImportantDatePersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelationPersonRelation?: ImportantDatePersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationLabelsRelation?: ImportantDatePersonRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelation?: ImportantDatePersonRelationMentionedInNotesRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation?: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation?: ImportantDatePersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationPersonRelation?: ImportantDatePersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelation?: ImportantDatePersonRelationNotesRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationLabelsRelation?: ImportantDatePersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationMentionsRelation?: ImportantDatePersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationPersonRelation?: ImportantDatePersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsFromRelation?: ImportantDatePersonRelationRelationshipsFromRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation?: ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation?: ImportantDatePersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsToRelation?: ImportantDatePersonRelationRelationshipsToRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation?: ImportantDatePersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsToRelationToPersonRelation?: ImportantDatePersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  ImportantDateTag?: ImportantDateTagResolvers<ContextType>;
  Interaction?: InteractionResolvers<ContextType>;
  InteractionLabelsRelation?: InteractionLabelsRelationResolvers<ContextType>;
  InteractionPersonRelation?: InteractionPersonRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelation?: InteractionPersonRelationImportantDatesRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelationLabelsRelation?: InteractionPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelationPersonRelation?: InteractionPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationInteractionsRelation?: InteractionPersonRelationInteractionsRelationResolvers<ContextType>;
  InteractionPersonRelationLabelsRelation?: InteractionPersonRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelation?: InteractionPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelation?: InteractionPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationMentionsRelation?: InteractionPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationPersonRelation?: InteractionPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelation?: InteractionPersonRelationNotesRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelationLabelsRelation?: InteractionPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelationMentionsRelation?: InteractionPersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelationPersonRelation?: InteractionPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationRelationshipsFromRelation?: InteractionPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  InteractionPersonRelationRelationshipsFromRelationFromPersonRelation?: InteractionPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  InteractionPersonRelationRelationshipsFromRelationToPersonRelation?: InteractionPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  InteractionPersonRelationRelationshipsToRelation?: InteractionPersonRelationRelationshipsToRelationResolvers<ContextType>;
  InteractionPersonRelationRelationshipsToRelationFromPersonRelation?: InteractionPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  InteractionPersonRelationRelationshipsToRelationToPersonRelation?: InteractionPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  InteractionTag?: InteractionTagResolvers<ContextType>;
  Label?: LabelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  NoteLabelsRelation?: NoteLabelsRelationResolvers<ContextType>;
  NoteMention?: NoteMentionResolvers<ContextType>;
  NoteMentionsRelation?: NoteMentionsRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelation?: NoteMentionsRelationImportantDatesRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelationLabelsRelation?: NoteMentionsRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelationPersonRelation?: NoteMentionsRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelation?: NoteMentionsRelationInteractionsRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelationLabelsRelation?: NoteMentionsRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelationPersonRelation?: NoteMentionsRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  NoteMentionsRelationLabelsRelation?: NoteMentionsRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationMentionedInNotesRelation?: NoteMentionsRelationMentionedInNotesRelationResolvers<ContextType>;
  NoteMentionsRelationNotesRelation?: NoteMentionsRelationNotesRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsFromRelation?: NoteMentionsRelationRelationshipsFromRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsFromRelationFromPersonRelation?: NoteMentionsRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsFromRelationToPersonRelation?: NoteMentionsRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsToRelation?: NoteMentionsRelationRelationshipsToRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsToRelationFromPersonRelation?: NoteMentionsRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsToRelationToPersonRelation?: NoteMentionsRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  NotePersonRelation?: NotePersonRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelation?: NotePersonRelationImportantDatesRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationLabelsRelation?: NotePersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationPersonRelation?: NotePersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelation?: NotePersonRelationInteractionsRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelationLabelsRelation?: NotePersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelationPersonRelation?: NotePersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  NotePersonRelationLabelsRelation?: NotePersonRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationMentionedInNotesRelation?: NotePersonRelationMentionedInNotesRelationResolvers<ContextType>;
  NotePersonRelationNotesRelation?: NotePersonRelationNotesRelationResolvers<ContextType>;
  NotePersonRelationRelationshipsFromRelation?: NotePersonRelationRelationshipsFromRelationResolvers<ContextType>;
  NotePersonRelationRelationshipsFromRelationFromPersonRelation?: NotePersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  NotePersonRelationRelationshipsFromRelationToPersonRelation?: NotePersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  NotePersonRelationRelationshipsToRelation?: NotePersonRelationRelationshipsToRelationResolvers<ContextType>;
  NotePersonRelationRelationshipsToRelationFromPersonRelation?: NotePersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  NotePersonRelationRelationshipsToRelationToPersonRelation?: NotePersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  NoteTag?: NoteTagResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonImportantDatesRelation?: PersonImportantDatesRelationResolvers<ContextType>;
  PersonImportantDatesRelationLabelsRelation?: PersonImportantDatesRelationLabelsRelationResolvers<ContextType>;
  PersonImportantDatesRelationPersonRelation?: PersonImportantDatesRelationPersonRelationResolvers<ContextType>;
  PersonInteractionsRelation?: PersonInteractionsRelationResolvers<ContextType>;
  PersonInteractionsRelationLabelsRelation?: PersonInteractionsRelationLabelsRelationResolvers<ContextType>;
  PersonInteractionsRelationPersonRelation?: PersonInteractionsRelationPersonRelationResolvers<ContextType>;
  PersonLabel?: PersonLabelResolvers<ContextType>;
  PersonLabelsRelation?: PersonLabelsRelationResolvers<ContextType>;
  PersonMentionedInNotesRelation?: PersonMentionedInNotesRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationLabelsRelation?: PersonMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationMentionsRelation?: PersonMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationPersonRelation?: PersonMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  PersonNotesRelation?: PersonNotesRelationResolvers<ContextType>;
  PersonNotesRelationLabelsRelation?: PersonNotesRelationLabelsRelationResolvers<ContextType>;
  PersonNotesRelationMentionsRelation?: PersonNotesRelationMentionsRelationResolvers<ContextType>;
  PersonNotesRelationPersonRelation?: PersonNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationship?: PersonRelationshipResolvers<ContextType>;
  PersonRelationshipEntry?: PersonRelationshipEntryResolvers<ContextType>;
  PersonRelationshipFromPersonRelation?: PersonRelationshipFromPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelation?: PersonRelationshipFromPersonRelationInteractionsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation?: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation?: PersonRelationshipFromPersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationLabelsRelation?: PersonRelationshipFromPersonRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelation?: PersonRelationshipFromPersonRelationNotesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation?: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationMentionsRelation?: PersonRelationshipFromPersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation?: PersonRelationshipFromPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation?: PersonRelationshipFromPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationRelationshipsToRelation?: PersonRelationshipFromPersonRelationRelationshipsToRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelation?: PersonRelationshipToPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelation?: PersonRelationshipToPersonRelationImportantDatesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation?: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation?: PersonRelationshipToPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelation?: PersonRelationshipToPersonRelationInteractionsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation?: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelationPersonRelation?: PersonRelationshipToPersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationLabelsRelation?: PersonRelationshipToPersonRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelation?: PersonRelationshipToPersonRelationNotesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation?: PersonRelationshipToPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelationMentionsRelation?: PersonRelationshipToPersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelationPersonRelation?: PersonRelationshipToPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationRelationshipsFromRelation?: PersonRelationshipToPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationRelationshipsToRelation?: PersonRelationshipToPersonRelationRelationshipsToRelationResolvers<ContextType>;
  PersonRelationshipsFromRelation?: PersonRelationshipsFromRelationResolvers<ContextType>;
  PersonRelationshipsFromRelationFromPersonRelation?: PersonRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  PersonRelationshipsFromRelationToPersonRelation?: PersonRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  PersonRelationshipsToRelation?: PersonRelationshipsToRelationResolvers<ContextType>;
  PersonRelationshipsToRelationFromPersonRelation?: PersonRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  PersonRelationshipsToRelationToPersonRelation?: PersonRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

