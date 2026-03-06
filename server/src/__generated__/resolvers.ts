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
  __typename?: 'ImportantDatePersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};

export type ImportantDatePersonRelationLabelsRelation = {
  __typename?: 'ImportantDatePersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelation = {
  __typename?: 'ImportantDatePersonRelationNotesRelation';
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
  __typename?: 'ImportantDatePersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelationPersonRelation = {
  __typename?: 'ImportantDatePersonRelationNotesRelationPersonRelation';
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
  __typename?: 'Note';
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
  __typename?: 'NoteLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelation = {
  __typename?: 'NotePersonRelation';
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

export type PersonNotesRelation = {
  __typename?: 'PersonNotesRelation';
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
  __typename?: 'PersonNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonNotesRelationPersonRelation = {
  __typename?: 'PersonNotesRelationPersonRelation';
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

export type PersonRelationshipFromPersonRelationNotesRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationNotesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelationPersonRelation';
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

export type PersonRelationshipToPersonRelationNotesRelation = {
  __typename?: 'PersonRelationshipToPersonRelationNotesRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationNotesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationNotesRelationPersonRelation';
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
  __typename?: 'Query';
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
  CreateLabelInput: CreateLabelInput;
  CreateNoteInput: CreateNoteInput;
  CreateNoteTagInput: CreateNoteTagInput;
  CreatePersonInput: CreatePersonInput;
  CreatePersonLabelInput: CreatePersonLabelInput;
  CreatePersonRelationshipInput: CreatePersonRelationshipInput;
  ImportantDate: ResolverTypeWrapper<ImportantDate>;
  ImportantDateLabelsRelation: ResolverTypeWrapper<ImportantDateLabelsRelation>;
  ImportantDatePersonRelation: ResolverTypeWrapper<ImportantDatePersonRelation>;
  ImportantDatePersonRelationImportantDatesRelation: ResolverTypeWrapper<ImportantDatePersonRelationImportantDatesRelation>;
  ImportantDatePersonRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationLabelsRelation>;
  ImportantDatePersonRelationNotesRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelation>;
  ImportantDatePersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelationLabelsRelation>;
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
  NotePersonRelation: ResolverTypeWrapper<NotePersonRelation>;
  NotePersonRelationImportantDatesRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelation>;
  NotePersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationLabelsRelation>;
  NotePersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationPersonRelation>;
  NotePersonRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationLabelsRelation>;
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
  PersonLabel: ResolverTypeWrapper<PersonLabel>;
  PersonLabelsFilters: PersonLabelsFilters;
  PersonLabelsFiltersOr: PersonLabelsFiltersOr;
  PersonLabelsLabelIdFilters: PersonLabelsLabelIdFilters;
  PersonLabelsLabelIdFiltersOr: PersonLabelsLabelIdFiltersOr;
  PersonLabelsOrderBy: PersonLabelsOrderBy;
  PersonLabelsPersonIdFilters: PersonLabelsPersonIdFilters;
  PersonLabelsPersonIdFiltersOr: PersonLabelsPersonIdFiltersOr;
  PersonLabelsRelation: ResolverTypeWrapper<PersonLabelsRelation>;
  PersonNotesRelation: ResolverTypeWrapper<PersonNotesRelation>;
  PersonNotesRelationLabelsRelation: ResolverTypeWrapper<PersonNotesRelationLabelsRelation>;
  PersonNotesRelationPersonRelation: ResolverTypeWrapper<PersonNotesRelationPersonRelation>;
  PersonRelationship: ResolverTypeWrapper<PersonRelationship>;
  PersonRelationshipEntry: ResolverTypeWrapper<PersonRelationshipEntry>;
  PersonRelationshipFromPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationNotesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelation>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationRelationshipsFromRelation>;
  PersonRelationshipFromPersonRelationRelationshipsToRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationRelationshipsToRelation>;
  PersonRelationshipToPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation>;
  PersonRelationshipToPersonRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationLabelsRelation>;
  PersonRelationshipToPersonRelationNotesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelation>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelationLabelsRelation>;
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
  UpdateLabelInput: UpdateLabelInput;
  UpdateNoteInput: UpdateNoteInput;
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
  CreateLabelInput: CreateLabelInput;
  CreateNoteInput: CreateNoteInput;
  CreateNoteTagInput: CreateNoteTagInput;
  CreatePersonInput: CreatePersonInput;
  CreatePersonLabelInput: CreatePersonLabelInput;
  CreatePersonRelationshipInput: CreatePersonRelationshipInput;
  ImportantDate: ImportantDate;
  ImportantDateLabelsRelation: ImportantDateLabelsRelation;
  ImportantDatePersonRelation: ImportantDatePersonRelation;
  ImportantDatePersonRelationImportantDatesRelation: ImportantDatePersonRelationImportantDatesRelation;
  ImportantDatePersonRelationLabelsRelation: ImportantDatePersonRelationLabelsRelation;
  ImportantDatePersonRelationNotesRelation: ImportantDatePersonRelationNotesRelation;
  ImportantDatePersonRelationNotesRelationLabelsRelation: ImportantDatePersonRelationNotesRelationLabelsRelation;
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
  NotePersonRelation: NotePersonRelation;
  NotePersonRelationImportantDatesRelation: NotePersonRelationImportantDatesRelation;
  NotePersonRelationImportantDatesRelationLabelsRelation: NotePersonRelationImportantDatesRelationLabelsRelation;
  NotePersonRelationImportantDatesRelationPersonRelation: NotePersonRelationImportantDatesRelationPersonRelation;
  NotePersonRelationLabelsRelation: NotePersonRelationLabelsRelation;
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
  PersonLabel: PersonLabel;
  PersonLabelsFilters: PersonLabelsFilters;
  PersonLabelsFiltersOr: PersonLabelsFiltersOr;
  PersonLabelsLabelIdFilters: PersonLabelsLabelIdFilters;
  PersonLabelsLabelIdFiltersOr: PersonLabelsLabelIdFiltersOr;
  PersonLabelsOrderBy: PersonLabelsOrderBy;
  PersonLabelsPersonIdFilters: PersonLabelsPersonIdFilters;
  PersonLabelsPersonIdFiltersOr: PersonLabelsPersonIdFiltersOr;
  PersonLabelsRelation: PersonLabelsRelation;
  PersonNotesRelation: PersonNotesRelation;
  PersonNotesRelationLabelsRelation: PersonNotesRelationLabelsRelation;
  PersonNotesRelationPersonRelation: PersonNotesRelationPersonRelation;
  PersonRelationship: PersonRelationship;
  PersonRelationshipEntry: PersonRelationshipEntry;
  PersonRelationshipFromPersonRelation: PersonRelationshipFromPersonRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelation: PersonRelationshipFromPersonRelationImportantDatesRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation: PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation;
  PersonRelationshipFromPersonRelationLabelsRelation: PersonRelationshipFromPersonRelationLabelsRelation;
  PersonRelationshipFromPersonRelationNotesRelation: PersonRelationshipFromPersonRelationNotesRelation;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation: PersonRelationshipFromPersonRelationNotesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation: PersonRelationshipFromPersonRelationNotesRelationPersonRelation;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation: PersonRelationshipFromPersonRelationRelationshipsFromRelation;
  PersonRelationshipFromPersonRelationRelationshipsToRelation: PersonRelationshipFromPersonRelationRelationshipsToRelation;
  PersonRelationshipToPersonRelation: PersonRelationshipToPersonRelation;
  PersonRelationshipToPersonRelationImportantDatesRelation: PersonRelationshipToPersonRelationImportantDatesRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation: PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation;
  PersonRelationshipToPersonRelationLabelsRelation: PersonRelationshipToPersonRelationLabelsRelation;
  PersonRelationshipToPersonRelationNotesRelation: PersonRelationshipToPersonRelationNotesRelation;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation: PersonRelationshipToPersonRelationNotesRelationLabelsRelation;
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
  UpdateLabelInput: UpdateLabelInput;
  UpdateNoteInput: UpdateNoteInput;
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationImportantDatesArgs>>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type ImportantDatePersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesRelationLabelsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelationPersonRelation']> = {
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation']> = {
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationRelationshipsToRelationToPersonRelation']> = {
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
  createLabel?: Resolver<Maybe<ResolversTypes['Label']>, ParentType, ContextType, RequireFields<MutationCreateLabelArgs, 'values'>>;
  createLabels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, RequireFields<MutationCreateLabelsArgs, 'values'>>;
  createNote?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<MutationCreateNoteArgs, 'values'>>;
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
  deleteLabels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<MutationDeleteLabelsArgs>>;
  deleteNoteTags?: Resolver<Array<ResolversTypes['NoteTag']>, ParentType, ContextType, Partial<MutationDeleteNoteTagsArgs>>;
  deleteNotes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType, Partial<MutationDeleteNotesArgs>>;
  deletePersonLabels?: Resolver<Array<ResolversTypes['PersonLabel']>, ParentType, ContextType, Partial<MutationDeletePersonLabelsArgs>>;
  deletePersonRelationships?: Resolver<Array<ResolversTypes['PersonRelationship']>, ParentType, ContextType, Partial<MutationDeletePersonRelationshipsArgs>>;
  deletePersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, Partial<MutationDeletePersonsArgs>>;
  updateImportantDateTags?: Resolver<Array<ResolversTypes['ImportantDateTag']>, ParentType, ContextType, RequireFields<MutationUpdateImportantDateTagsArgs, 'set'>>;
  updateImportantDates?: Resolver<Array<ResolversTypes['ImportantDate']>, ParentType, ContextType, RequireFields<MutationUpdateImportantDatesArgs, 'set'>>;
  updateLabels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, RequireFields<MutationUpdateLabelsArgs, 'set'>>;
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
  person?: Resolver<Maybe<ResolversTypes['NotePersonRelation']>, ParentType, ContextType, Partial<NotePersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelation'] = ResolversParentTypes['NoteLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelation'] = ResolversParentTypes['NotePersonRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['NotePersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<NotePersonRelationImportantDatesArgs>>;
  labels?: Resolver<Array<ResolversTypes['NotePersonRelationLabelsRelation']>, ParentType, ContextType, Partial<NotePersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['NotePersonRelationRelationshipsFromRelationToPersonRelation']> = {
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['NotePersonRelationRelationshipsToRelationToPersonRelation']> = {
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['PersonImportantDatesRelation']>, ParentType, ContextType, Partial<PersonImportantDatesArgs>>;
  labels?: Resolver<Array<ResolversTypes['PersonLabelsRelation']>, ParentType, ContextType, Partial<PersonLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type PersonNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelation'] = ResolversParentTypes['PersonNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonNotesRelationLabelsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelationLabelsRelation'] = ResolversParentTypes['PersonNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelationPersonRelation'] = ResolversParentTypes['PersonNotesRelationPersonRelation']> = {
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationImportantDatesArgs>>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type PersonRelationshipFromPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesRelationLabelsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationPersonRelation']> = {
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationImportantDatesArgs>>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type PersonRelationshipToPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesRelationLabelsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationPersonRelation']> = {
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['PersonRelationshipsFromRelationToPersonRelation']> = {
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
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['PersonRelationshipsToRelationToPersonRelation']> = {
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
  label?: Resolver<Maybe<ResolversTypes['Label']>, ParentType, ContextType, Partial<QueryLabelArgs>>;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<QueryLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, Partial<QueryNoteArgs>>;
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
  ImportantDatePersonRelationLabelsRelation?: ImportantDatePersonRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelation?: ImportantDatePersonRelationNotesRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationLabelsRelation?: ImportantDatePersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationPersonRelation?: ImportantDatePersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsFromRelation?: ImportantDatePersonRelationRelationshipsFromRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelation?: ImportantDatePersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation?: ImportantDatePersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsToRelation?: ImportantDatePersonRelationRelationshipsToRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsToRelationFromPersonRelation?: ImportantDatePersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationRelationshipsToRelationToPersonRelation?: ImportantDatePersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  ImportantDateTag?: ImportantDateTagResolvers<ContextType>;
  Label?: LabelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  NoteLabelsRelation?: NoteLabelsRelationResolvers<ContextType>;
  NotePersonRelation?: NotePersonRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelation?: NotePersonRelationImportantDatesRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationLabelsRelation?: NotePersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationPersonRelation?: NotePersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  NotePersonRelationLabelsRelation?: NotePersonRelationLabelsRelationResolvers<ContextType>;
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
  PersonLabel?: PersonLabelResolvers<ContextType>;
  PersonLabelsRelation?: PersonLabelsRelationResolvers<ContextType>;
  PersonNotesRelation?: PersonNotesRelationResolvers<ContextType>;
  PersonNotesRelationLabelsRelation?: PersonNotesRelationLabelsRelationResolvers<ContextType>;
  PersonNotesRelationPersonRelation?: PersonNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationship?: PersonRelationshipResolvers<ContextType>;
  PersonRelationshipEntry?: PersonRelationshipEntryResolvers<ContextType>;
  PersonRelationshipFromPersonRelation?: PersonRelationshipFromPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationLabelsRelation?: PersonRelationshipFromPersonRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelation?: PersonRelationshipFromPersonRelationNotesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation?: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation?: PersonRelationshipFromPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation?: PersonRelationshipFromPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationRelationshipsToRelation?: PersonRelationshipFromPersonRelationRelationshipsToRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelation?: PersonRelationshipToPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelation?: PersonRelationshipToPersonRelationImportantDatesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation?: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation?: PersonRelationshipToPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationLabelsRelation?: PersonRelationshipToPersonRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelation?: PersonRelationshipToPersonRelationNotesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation?: PersonRelationshipToPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
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

