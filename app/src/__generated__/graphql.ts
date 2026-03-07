/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type CreateNoteTagInput = {
  labelId: Scalars['String']['input'];
  noteId: Scalars['String']['input'];
};

export type CreatePersonInput = {
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
  __typename: 'ImportantDate';
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
  __typename: 'ImportantDateLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelation = {
  __typename: 'ImportantDatePersonRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<ImportantDatePersonRelationImportantDatesRelation>;
  labels: Array<ImportantDatePersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
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


export type ImportantDatePersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
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
  __typename: 'ImportantDatePersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};

export type ImportantDatePersonRelationLabelsRelation = {
  __typename: 'ImportantDatePersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelation = {
  __typename: 'ImportantDatePersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationNotesRelationLabelsRelation>;
  person: Maybe<ImportantDatePersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type ImportantDatePersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelation = {
  __typename: 'ImportantDatePersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelationPersonRelation = {
  __typename: 'ImportantDatePersonRelationNotesRelationPersonRelation';
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
  __typename: 'ImportantDatePersonRelationRelationshipsFromRelation';
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
  __typename: 'ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename: 'ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename: 'ImportantDatePersonRelationRelationshipsToRelation';
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
  __typename: 'ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation';
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
  __typename: 'ImportantDatePersonRelationRelationshipsToRelationToPersonRelation';
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
  __typename: 'ImportantDateTag';
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

export type Label = {
  __typename: 'Label';
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
  __typename: 'Mutation';
  createImportantDate: Maybe<ImportantDate>;
  createImportantDateTag: Maybe<ImportantDateTag>;
  createImportantDateTags: Array<ImportantDateTag>;
  createImportantDates: Array<ImportantDate>;
  createLabel: Maybe<Label>;
  createLabels: Array<Label>;
  createNote: Maybe<Note>;
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
  deleteLabels: Array<Label>;
  deleteNoteTags: Array<NoteTag>;
  deleteNotes: Array<Note>;
  deletePersonLabels: Array<PersonLabel>;
  deletePersonRelationships: Array<PersonRelationship>;
  deletePersons: Array<Person>;
  updateImportantDateTags: Array<ImportantDateTag>;
  updateImportantDates: Array<ImportantDate>;
  updateLabels: Array<Label>;
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


export type MutationCreateLabelArgs = {
  values: CreateLabelInput;
};


export type MutationCreateLabelsArgs = {
  values: Array<CreateLabelInput>;
};


export type MutationCreateNoteArgs = {
  values: CreateNoteInput;
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


export type MutationDeleteLabelsArgs = {
  where?: InputMaybe<LabelsFilters>;
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


export type MutationUpdateLabelsArgs = {
  set: UpdateLabelInput;
  where?: InputMaybe<LabelsFilters>;
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
  __typename: 'Note';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<NoteLabelsRelation>;
  person: Maybe<NotePersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type NoteLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NotePersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteLabelsRelation = {
  __typename: 'NoteLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelation = {
  __typename: 'NotePersonRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<NotePersonRelationImportantDatesRelation>;
  labels: Array<NotePersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
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


export type NotePersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
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
  __typename: 'NotePersonRelationImportantDatesRelation';
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
  __typename: 'NotePersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'NotePersonRelationImportantDatesRelationPersonRelation';
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
  __typename: 'NotePersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationNotesRelation = {
  __typename: 'NotePersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NotePersonRelationRelationshipsFromRelation = {
  __typename: 'NotePersonRelationRelationshipsFromRelation';
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
  __typename: 'NotePersonRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename: 'NotePersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename: 'NotePersonRelationRelationshipsToRelation';
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
  __typename: 'NotePersonRelationRelationshipsToRelationFromPersonRelation';
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
  __typename: 'NotePersonRelationRelationshipsToRelationToPersonRelation';
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
  __typename: 'NoteTag';
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
  __typename: 'Person';
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<PersonImportantDatesRelation>;
  labels: Array<PersonLabelsRelation>;
  lastName: Scalars['String']['output'];
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


export type PersonLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
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
  __typename: 'PersonImportantDatesRelation';
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
  __typename: 'PersonImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonImportantDatesRelationPersonRelation = {
  __typename: 'PersonImportantDatesRelationPersonRelation';
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
  __typename: 'PersonLabel';
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
  __typename: 'PersonLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonNotesRelation = {
  __typename: 'PersonNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonNotesRelationLabelsRelation>;
  person: Maybe<PersonNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonNotesRelationLabelsRelation = {
  __typename: 'PersonNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonNotesRelationPersonRelation = {
  __typename: 'PersonNotesRelationPersonRelation';
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
  __typename: 'PersonRelationship';
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
  __typename: 'PersonRelationshipEntry';
  id: Scalars['String']['output'];
  relatedPersonFirstName: Scalars['String']['output'];
  relatedPersonId: Scalars['String']['output'];
  relatedPersonLastName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<PersonRelationshipFromPersonRelationImportantDatesRelation>;
  labels: Array<PersonRelationshipFromPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
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


export type PersonRelationshipFromPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
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
  __typename: 'PersonRelationshipFromPersonRelationImportantDatesRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationNotesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationNotesRelationLabelsRelation>;
  person: Maybe<PersonRelationshipFromPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipFromPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationNotesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationNotesRelationPersonRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationRelationshipsFromRelation';
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationRelationshipsToRelation = {
  __typename: 'PersonRelationshipFromPersonRelationRelationshipsToRelation';
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<PersonRelationshipToPersonRelationImportantDatesRelation>;
  labels: Array<PersonRelationshipToPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
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


export type PersonRelationshipToPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
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
  __typename: 'PersonRelationshipToPersonRelationImportantDatesRelation';
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
  __typename: 'PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation';
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
  __typename: 'PersonRelationshipToPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationNotesRelation = {
  __typename: 'PersonRelationshipToPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationNotesRelationLabelsRelation>;
  person: Maybe<PersonRelationshipToPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type PersonRelationshipToPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelation = {
  __typename: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationNotesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationNotesRelationPersonRelation';
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
  __typename: 'PersonRelationshipToPersonRelationRelationshipsFromRelation';
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationRelationshipsToRelation = {
  __typename: 'PersonRelationshipToPersonRelationRelationshipsToRelation';
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
  __typename: 'PersonRelationshipsFromRelation';
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
  __typename: 'PersonRelationshipsFromRelationFromPersonRelation';
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
  __typename: 'PersonRelationshipsFromRelationToPersonRelation';
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
  __typename: 'PersonRelationshipsToRelation';
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
  __typename: 'PersonRelationshipsToRelationFromPersonRelation';
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
  __typename: 'PersonRelationshipsToRelationToPersonRelation';
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
  createdAt?: InputMaybe<PersonsCreatedAtFilters>;
  email?: InputMaybe<PersonsEmailFilters>;
  firstName?: InputMaybe<PersonsFirstNameFilters>;
  id?: InputMaybe<PersonsIdFilters>;
  lastName?: InputMaybe<PersonsLastNameFilters>;
  updatedAt?: InputMaybe<PersonsUpdatedAtFilters>;
};

export type PersonsFiltersOr = {
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
  __typename: 'Query';
  importantDate: Maybe<ImportantDate>;
  importantDateTag: Maybe<ImportantDateTag>;
  importantDateTags: Array<ImportantDateTag>;
  importantDates: Array<ImportantDate>;
  label: Maybe<Label>;
  labels: Array<Label>;
  note: Maybe<Note>;
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

export type UpdateNoteTagInput = {
  labelId?: InputMaybe<Scalars['String']['input']>;
  noteId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePersonInput = {
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

export type GetUpcomingDatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUpcomingDatesQuery = { importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, description: string | null, date: string, recurrence: string | null, person: { __typename: 'ImportantDatePersonRelation', id: string, firstName: string, lastName: string } | null }> };

export type Label_ListFragment = { __typename: 'Label', id: string, color: string, label: string };

export type AttachTagToImportantDateMutationVariables = Exact<{
  importantDateId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type AttachTagToImportantDateMutation = { createImportantDateTag: { __typename: 'ImportantDateTag', importantDateId: string, labelId: string } | null };

export type DetachTagFromImportantDateMutationVariables = Exact<{
  importantDateId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type DetachTagFromImportantDateMutation = { deleteImportantDateTags: Array<{ __typename: 'ImportantDateTag', importantDateId: string, labelId: string }> };

export type Person_LabelsFragment = { __typename: 'Person', id: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }> };

export type AttachLabelToPersonMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type AttachLabelToPersonMutation = { createPersonLabel: { __typename: 'PersonLabel', personId: string, labelId: string } | null };

export type DetachLabelFromPersonMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type DetachLabelFromPersonMutation = { deletePersonLabels: Array<{ __typename: 'PersonLabel', personId: string, labelId: string }> };

export type Person_ListFragment = { __typename: 'Person', id: string, firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'PersonImportantDatesRelation', id: string, name: string, description: string | null, date: string }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> };

export type CreateNoteMutationVariables = Exact<{
  body: Scalars['String']['input'];
  personId: Scalars['String']['input'];
}>;


export type CreateNoteMutation = { createNote: { __typename: 'Note', id: string, body: string, personId: string | null } | null };

export type UpdateNoteMutationVariables = Exact<{
  id: Scalars['String']['input'];
  body: Scalars['String']['input'];
}>;


export type UpdateNoteMutation = { updateNotes: Array<{ __typename: 'Note', id: string, body: string }> };

export type DeleteNoteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteNoteMutation = { deleteNotes: Array<{ __typename: 'Note', id: string }> };

export type AttachTagToNoteMutationVariables = Exact<{
  noteId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type AttachTagToNoteMutation = { createNoteTag: { __typename: 'NoteTag', noteId: string, labelId: string } | null };

export type DetachTagFromNoteMutationVariables = Exact<{
  noteId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type DetachTagFromNoteMutation = { deleteNoteTags: Array<{ __typename: 'NoteTag', noteId: string, labelId: string }> };

export type Person_RelationshipsFragment = { __typename: 'Person', id: string, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> };

export type CreatePersonRelationshipMutationVariables = Exact<{
  fromPersonId: Scalars['String']['input'];
  toPersonId: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type CreatePersonRelationshipMutation = { createPersonRelationship: { __typename: 'PersonRelationship', id: string, fromPersonId: string, toPersonId: string, type: string } | null };

export type UpdatePersonRelationshipMutationVariables = Exact<{
  id: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type UpdatePersonRelationshipMutation = { updatePersonRelationships: Array<{ __typename: 'PersonRelationship', id: string, fromPersonId: string, toPersonId: string, type: string }> };

export type DeletePersonRelationshipMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePersonRelationshipMutation = { deletePersonRelationships: Array<{ __typename: 'PersonRelationship', id: string }> };

export type Tag_ListFragment = { __typename: 'Label', id: string, color: string, label: string };

export type GetImportantDateDetailQueryVariables = Exact<{
  dateId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
}>;


export type GetImportantDateDetailQuery = { importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, description: string | null, date: string, recurrence: string | null, labels: Array<{ __typename: 'ImportantDateLabelsRelation', id: string, label: string, color: string }> }>, notes: Array<{ __typename: 'Note', id: string, body: string, labels: Array<{ __typename: 'NoteLabelsRelation', id: string, label: string, color: string }> }> };

export type GetPersonDetailQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPersonDetailQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'PersonImportantDatesRelation', id: string, name: string, description: string | null, date: string, recurrence: string | null, labels: Array<{ __typename: 'PersonImportantDatesRelationLabelsRelation', id: string, label: string, color: string }> }>, notes: Array<{ __typename: 'PersonNotesRelation', id: string, body: string, labels: Array<{ __typename: 'PersonNotesRelationLabelsRelation', id: string, label: string, color: string }> }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> }> };

export type GetAllPersonsForDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPersonsForDetailQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string }> };

export type GetAllLabelsForDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLabelsForDetailQuery = { labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> };

export type DeleteImportantDateMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteImportantDateMutation = { deleteImportantDates: Array<{ __typename: 'ImportantDate', id: string }> };

export type CreateImportantDateMutationVariables = Exact<{
  name: Scalars['String']['input'];
  date: Scalars['String']['input'];
  personId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  recurrence?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateImportantDateMutation = { createImportantDate: { __typename: 'ImportantDate', id: string, name: string, date: string, description: string | null, recurrence: string | null, personId: string } | null };

export type UpdateImportantDateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  recurrence?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateImportantDateMutation = { updateImportantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, date: string, description: string | null, recurrence: string | null }> };

export type UpdatePersonMutationVariables = Exact<{
  id: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type UpdatePersonMutation = { updatePersons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string }> };

export type AttachLabelToPersonEditMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type AttachLabelToPersonEditMutation = { createPersonLabel: { __typename: 'PersonLabel', personId: string, labelId: string } | null };

export type DetachLabelFromPersonEditMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type DetachLabelFromPersonEditMutation = { deletePersonLabels: Array<{ __typename: 'PersonLabel', personId: string, labelId: string }> };

export type GetPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonsQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'PersonImportantDatesRelation', id: string, name: string, description: string | null, date: string }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> }> };

export type GetLabelsForPersonFormQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLabelsForPersonFormQuery = { labels: Array<{ __typename: 'Label', id: string, color: string, label: string }> };

export type CreatePersonMutationVariables = Exact<{
  values: CreatePersonInput;
}>;


export type CreatePersonMutation = { createPerson: { __typename: 'Person', id: string, firstName: string, lastName: string, email: string, createdAt: string, updatedAt: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'PersonImportantDatesRelation', id: string, name: string, description: string | null, date: string }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> } | null };

export type DeletePersonMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePersonMutation = { deletePersons: Array<{ __typename: 'Person', id: string }> };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { labels: Array<{ __typename: 'Label', id: string, color: string, label: string }> };

export type CreateTagMutationVariables = Exact<{
  values: CreateLabelInput;
}>;


export type CreateTagMutation = { createLabel: { __typename: 'Label', id: string, color: string, label: string } | null };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteTagMutation = { deleteLabels: Array<{ __typename: 'Label', id: string }> };

export const Label_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Label_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<Label_ListFragment, unknown>;
export const Person_LabelsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Labels"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<Person_LabelsFragment, unknown>;
export const Person_RelationshipsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}}]} as unknown as DocumentNode<Person_RelationshipsFragment, unknown>;
export const Person_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_Relationships"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}}]} as unknown as DocumentNode<Person_ListFragment, unknown>;
export const Tag_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tag_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<Tag_ListFragment, unknown>;
export const GetUpcomingDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUpcomingDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetUpcomingDatesQuery, GetUpcomingDatesQueryVariables>;
export const AttachTagToImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachTagToImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImportantDateTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"importantDateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDateId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachTagToImportantDateMutation, AttachTagToImportantDateMutationVariables>;
export const DetachTagFromImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachTagFromImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteImportantDateTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"importantDateId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDateId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachTagFromImportantDateMutation, DetachTagFromImportantDateMutationVariables>;
export const AttachLabelToPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachLabelToPerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachLabelToPersonMutation, AttachLabelToPersonMutationVariables>;
export const DetachLabelFromPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachLabelFromPerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersonLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachLabelFromPersonMutation, DetachLabelFromPersonMutationVariables>;
export const CreateNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}}]}}]}}]} as unknown as DocumentNode<CreateNoteMutation, CreateNoteMutationVariables>;
export const UpdateNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]} as unknown as DocumentNode<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const DeleteNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const AttachTagToNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachTagToNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNoteTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"noteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachTagToNoteMutation, AttachTagToNoteMutationVariables>;
export const DetachTagFromNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachTagFromNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNoteTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"noteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachTagFromNoteMutation, DetachTagFromNoteMutationVariables>;
export const CreatePersonRelationshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePersonRelationship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fromPersonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toPersonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonRelationship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fromPersonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fromPersonId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"toPersonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toPersonId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fromPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"toPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreatePersonRelationshipMutation, CreatePersonRelationshipMutationVariables>;
export const UpdatePersonRelationshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePersonRelationship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonRelationships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fromPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"toPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdatePersonRelationshipMutation, UpdatePersonRelationshipMutationVariables>;
export const DeletePersonRelationshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePersonRelationship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersonRelationships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePersonRelationshipMutation, DeletePersonRelationshipMutationVariables>;
export const GetImportantDateDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetImportantDateDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<GetImportantDateDetailQuery, GetImportantDateDetailQueryVariables>;
export const GetPersonDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonDetailQuery, GetPersonDetailQueryVariables>;
export const GetAllPersonsForDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPersonsForDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetAllPersonsForDetailQuery, GetAllPersonsForDetailQueryVariables>;
export const GetAllLabelsForDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLabelsForDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetAllLabelsForDetailQuery, GetAllLabelsForDetailQueryVariables>;
export const DeleteImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteImportantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteImportantDateMutation, DeleteImportantDateMutationVariables>;
export const CreateImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImportantDate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recurrence"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}}]}}]}}]} as unknown as DocumentNode<CreateImportantDateMutation, CreateImportantDateMutationVariables>;
export const UpdateImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateImportantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recurrence"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}}]}}]}}]} as unknown as DocumentNode<UpdateImportantDateMutation, UpdateImportantDateMutationVariables>;
export const UpdatePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const AttachLabelToPersonEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachLabelToPersonEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachLabelToPersonEditMutation, AttachLabelToPersonEditMutationVariables>;
export const DetachLabelFromPersonEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachLabelFromPersonEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersonLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachLabelFromPersonEditMutation, DetachLabelFromPersonEditMutationVariables>;
export const GetPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_Relationships"}}]}}]} as unknown as DocumentNode<GetPersonsQuery, GetPersonsQueryVariables>;
export const GetLabelsForPersonFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLabelsForPersonForm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Label_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Label_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<GetLabelsForPersonFormQuery, GetLabelsForPersonFormQueryVariables>;
export const CreatePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_Relationships"}}]}}]} as unknown as DocumentNode<CreatePersonMutation, CreatePersonMutationVariables>;
export const DeletePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePersonMutation, DeletePersonMutationVariables>;
export const GetTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tag_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tag_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<GetTagsQuery, GetTagsQueryVariables>;
export const CreateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLabelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tag_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tag_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTagMutation, DeleteTagMutationVariables>;