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

export type ActivitiesCreatedAtFilters = {
  OR?: InputMaybe<Array<ActivitiesCreatedAtFiltersOr>>;
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

export type ActivitiesCreatedAtFiltersOr = {
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

export type ActivitiesDescriptionFilters = {
  OR?: InputMaybe<Array<ActivitiesDescriptionFiltersOr>>;
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

export type ActivitiesDescriptionFiltersOr = {
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

export type ActivitiesFilters = {
  OR?: InputMaybe<Array<ActivitiesFiltersOr>>;
  createdAt?: InputMaybe<ActivitiesCreatedAtFilters>;
  description?: InputMaybe<ActivitiesDescriptionFilters>;
  id?: InputMaybe<ActivitiesIdFilters>;
  location?: InputMaybe<ActivitiesLocationFilters>;
  occurredAt?: InputMaybe<ActivitiesOccurredAtFilters>;
  personId?: InputMaybe<ActivitiesPersonIdFilters>;
  title?: InputMaybe<ActivitiesTitleFilters>;
};

export type ActivitiesFiltersOr = {
  createdAt?: InputMaybe<ActivitiesCreatedAtFilters>;
  description?: InputMaybe<ActivitiesDescriptionFilters>;
  id?: InputMaybe<ActivitiesIdFilters>;
  location?: InputMaybe<ActivitiesLocationFilters>;
  occurredAt?: InputMaybe<ActivitiesOccurredAtFilters>;
  personId?: InputMaybe<ActivitiesPersonIdFilters>;
  title?: InputMaybe<ActivitiesTitleFilters>;
};

export type ActivitiesIdFilters = {
  OR?: InputMaybe<Array<ActivitiesIdFiltersOr>>;
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

export type ActivitiesIdFiltersOr = {
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

export type ActivitiesLocationFilters = {
  OR?: InputMaybe<Array<ActivitiesLocationFiltersOr>>;
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

export type ActivitiesLocationFiltersOr = {
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

export type ActivitiesOccurredAtFilters = {
  OR?: InputMaybe<Array<ActivitiesOccurredAtFiltersOr>>;
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

export type ActivitiesOccurredAtFiltersOr = {
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

export type ActivitiesOrderBy = {
  createdAt?: InputMaybe<InnerOrder>;
  description?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  location?: InputMaybe<InnerOrder>;
  occurredAt?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  title?: InputMaybe<InnerOrder>;
};

export type ActivitiesPersonIdFilters = {
  OR?: InputMaybe<Array<ActivitiesPersonIdFiltersOr>>;
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

export type ActivitiesPersonIdFiltersOr = {
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

export type ActivitiesTitleFilters = {
  OR?: InputMaybe<Array<ActivitiesTitleFiltersOr>>;
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

export type ActivitiesTitleFiltersOr = {
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

export type Activity = {
  __typename: 'Activity';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ActivityLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ActivityPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ActivityLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ActivityPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ActivityLabelsRelation = {
  __typename: 'ActivityLabelsRelation';
  activities: Array<ActivityLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ActivityLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ActivityLabelsRelationActivitiesRelation = {
  __typename: 'ActivityLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ActivityPersonRelation = {
  __typename: 'ActivityPersonRelation';
  activities: Array<ActivityPersonRelationActivitiesRelation>;
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<ActivityPersonRelationImportantDatesRelation>;
  interactions: Array<ActivityPersonRelationInteractionsRelation>;
  labels: Array<ActivityPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<ActivityPersonRelationMentionedInNotesRelation>;
  notes: Array<ActivityPersonRelationNotesRelation>;
  relationshipsFrom: Array<ActivityPersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<ActivityPersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type ActivityPersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};


export type ActivityPersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type ActivityPersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type ActivityPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ActivityPersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type ActivityPersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type ActivityPersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type ActivityPersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type ActivityPersonRelationActivitiesRelation = {
  __typename: 'ActivityPersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ActivityPersonRelationImportantDatesRelation = {
  __typename: 'ActivityPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ActivityPersonRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<ActivityPersonRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type ActivityPersonRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ActivityPersonRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ActivityPersonRelationImportantDatesRelationLabelsRelation = {
  __typename: 'ActivityPersonRelationImportantDatesRelationLabelsRelation';
  activities: Array<ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation = {
  __typename: 'ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ActivityPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'ActivityPersonRelationImportantDatesRelationPersonRelation';
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

export type ActivityPersonRelationInteractionsRelation = {
  __typename: 'ActivityPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ActivityPersonRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ActivityPersonRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type ActivityPersonRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ActivityPersonRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ActivityPersonRelationInteractionsRelationLabelsRelation = {
  __typename: 'ActivityPersonRelationInteractionsRelationLabelsRelation';
  activities: Array<ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation = {
  __typename: 'ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ActivityPersonRelationInteractionsRelationPersonRelation = {
  __typename: 'ActivityPersonRelationInteractionsRelationPersonRelation';
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

export type ActivityPersonRelationLabelsRelation = {
  __typename: 'ActivityPersonRelationLabelsRelation';
  activities: Array<ActivityPersonRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ActivityPersonRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ActivityPersonRelationLabelsRelationActivitiesRelation = {
  __typename: 'ActivityPersonRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ActivityPersonRelationMentionedInNotesRelation = {
  __typename: 'ActivityPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ActivityPersonRelationMentionedInNotesRelationLabelsRelation>;
  mentions: Array<ActivityPersonRelationMentionedInNotesRelationMentionsRelation>;
  person: Maybe<ActivityPersonRelationMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type ActivityPersonRelationMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ActivityPersonRelationMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type ActivityPersonRelationMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ActivityPersonRelationMentionedInNotesRelationLabelsRelation = {
  __typename: 'ActivityPersonRelationMentionedInNotesRelationLabelsRelation';
  activities: Array<ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ActivityPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename: 'ActivityPersonRelationMentionedInNotesRelationMentionsRelation';
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

export type ActivityPersonRelationMentionedInNotesRelationPersonRelation = {
  __typename: 'ActivityPersonRelationMentionedInNotesRelationPersonRelation';
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

export type ActivityPersonRelationNotesRelation = {
  __typename: 'ActivityPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ActivityPersonRelationNotesRelationLabelsRelation>;
  mentions: Array<ActivityPersonRelationNotesRelationMentionsRelation>;
  person: Maybe<ActivityPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type ActivityPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ActivityPersonRelationNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type ActivityPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ActivityPersonRelationNotesRelationLabelsRelation = {
  __typename: 'ActivityPersonRelationNotesRelationLabelsRelation';
  activities: Array<ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ActivityPersonRelationNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ActivityPersonRelationNotesRelationMentionsRelation = {
  __typename: 'ActivityPersonRelationNotesRelationMentionsRelation';
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

export type ActivityPersonRelationNotesRelationPersonRelation = {
  __typename: 'ActivityPersonRelationNotesRelationPersonRelation';
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

export type ActivityPersonRelationRelationshipsFromRelation = {
  __typename: 'ActivityPersonRelationRelationshipsFromRelation';
  fromPerson: Maybe<ActivityPersonRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<ActivityPersonRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type ActivityPersonRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type ActivityPersonRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ActivityPersonRelationRelationshipsFromRelationFromPersonRelation = {
  __typename: 'ActivityPersonRelationRelationshipsFromRelationFromPersonRelation';
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

export type ActivityPersonRelationRelationshipsFromRelationToPersonRelation = {
  __typename: 'ActivityPersonRelationRelationshipsFromRelationToPersonRelation';
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

export type ActivityPersonRelationRelationshipsToRelation = {
  __typename: 'ActivityPersonRelationRelationshipsToRelation';
  fromPerson: Maybe<ActivityPersonRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<ActivityPersonRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type ActivityPersonRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type ActivityPersonRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ActivityPersonRelationRelationshipsToRelationFromPersonRelation = {
  __typename: 'ActivityPersonRelationRelationshipsToRelationFromPersonRelation';
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

export type ActivityPersonRelationRelationshipsToRelationToPersonRelation = {
  __typename: 'ActivityPersonRelationRelationshipsToRelationToPersonRelation';
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

export type ActivityTag = {
  __typename: 'ActivityTag';
  activityId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type ActivityTagsActivityIdFilters = {
  OR?: InputMaybe<Array<ActivityTagsActivityIdFiltersOr>>;
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

export type ActivityTagsActivityIdFiltersOr = {
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

export type ActivityTagsFilters = {
  OR?: InputMaybe<Array<ActivityTagsFiltersOr>>;
  activityId?: InputMaybe<ActivityTagsActivityIdFilters>;
  labelId?: InputMaybe<ActivityTagsLabelIdFilters>;
};

export type ActivityTagsFiltersOr = {
  activityId?: InputMaybe<ActivityTagsActivityIdFilters>;
  labelId?: InputMaybe<ActivityTagsLabelIdFilters>;
};

export type ActivityTagsLabelIdFilters = {
  OR?: InputMaybe<Array<ActivityTagsLabelIdFiltersOr>>;
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

export type ActivityTagsLabelIdFiltersOr = {
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

export type ActivityTagsOrderBy = {
  activityId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type CreateActivityInput = {
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  occurredAt: Scalars['String']['input'];
  personId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateActivityTagInput = {
  activityId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
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
  activities: Array<ImportantDateLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ImportantDateLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ImportantDateLabelsRelationActivitiesRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ImportantDateLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ImportantDateLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ImportantDateLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDateLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelation';
  activities: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation>;
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation>;
  interactions: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation>;
  labels: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation>;
  notes: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation>;
  relationshipsFrom: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation';
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

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation>;
  mentions: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation>;
  person: Maybe<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation';
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

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation';
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

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation>;
  mentions: Array<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation>;
  person: Maybe<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation';
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

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation';
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

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation';
  fromPerson: Maybe<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation';
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

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation';
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

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation';
  fromPerson: Maybe<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation';
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

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation = {
  __typename: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation';
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

export type ImportantDatePersonRelation = {
  __typename: 'ImportantDatePersonRelation';
  activities: Array<ImportantDatePersonRelationActivitiesRelation>;
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


export type ImportantDatePersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
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

export type ImportantDatePersonRelationActivitiesRelation = {
  __typename: 'ImportantDatePersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ImportantDatePersonRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ImportantDatePersonRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationActivitiesRelationLabelsRelation = {
  __typename: 'ImportantDatePersonRelationActivitiesRelationLabelsRelation';
  activities: Array<ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation = {
  __typename: 'ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ImportantDatePersonRelationActivitiesRelationPersonRelation = {
  __typename: 'ImportantDatePersonRelationActivitiesRelationPersonRelation';
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

export type ImportantDatePersonRelationImportantDatesRelation = {
  __typename: 'ImportantDatePersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};

export type ImportantDatePersonRelationInteractionsRelation = {
  __typename: 'ImportantDatePersonRelationInteractionsRelation';
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
  __typename: 'ImportantDatePersonRelationInteractionsRelationLabelsRelation';
  activities: Array<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation = {
  __typename: 'ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type ImportantDatePersonRelationInteractionsRelationPersonRelation = {
  __typename: 'ImportantDatePersonRelationInteractionsRelationPersonRelation';
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
  __typename: 'ImportantDatePersonRelationLabelsRelation';
  activities: Array<ImportantDatePersonRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ImportantDatePersonRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ImportantDatePersonRelationLabelsRelationActivitiesRelation = {
  __typename: 'ImportantDatePersonRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type ImportantDatePersonRelationMentionedInNotesRelation = {
  __typename: 'ImportantDatePersonRelationMentionedInNotesRelation';
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
  __typename: 'ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation';
  activities: Array<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename: 'ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation';
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
  __typename: 'ImportantDatePersonRelationMentionedInNotesRelationPersonRelation';
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
  __typename: 'ImportantDatePersonRelationNotesRelation';
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
  __typename: 'ImportantDatePersonRelationNotesRelationLabelsRelation';
  activities: Array<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type ImportantDatePersonRelationNotesRelationMentionsRelation = {
  __typename: 'ImportantDatePersonRelationNotesRelationMentionsRelation';
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
  __typename: 'ImportantDatePersonRelationNotesRelationPersonRelation';
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
  __typename: 'ImportantDatePersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename: 'ImportantDatePersonRelationRelationshipsToRelationToPersonRelation';
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

export type Interaction = {
  __typename: 'Interaction';
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
  __typename: 'InteractionLabelsRelation';
  activities: Array<InteractionLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type InteractionLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type InteractionLabelsRelationActivitiesRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<InteractionLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<InteractionLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type InteractionLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelation';
  activities: Array<InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation>;
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation>;
  interactions: Array<InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation>;
  labels: Array<InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation>;
  notes: Array<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation>;
  relationshipsFrom: Array<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation';
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

export type InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation>;
  mentions: Array<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation>;
  person: Maybe<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation';
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

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation';
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

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation>;
  mentions: Array<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation>;
  person: Maybe<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation';
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

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation';
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

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation';
  fromPerson: Maybe<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation';
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

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation';
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

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation';
  fromPerson: Maybe<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation';
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

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation = {
  __typename: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation';
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

export type InteractionPersonRelation = {
  __typename: 'InteractionPersonRelation';
  activities: Array<InteractionPersonRelationActivitiesRelation>;
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


export type InteractionPersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
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

export type InteractionPersonRelationActivitiesRelation = {
  __typename: 'InteractionPersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<InteractionPersonRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<InteractionPersonRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type InteractionPersonRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationActivitiesRelationLabelsRelation = {
  __typename: 'InteractionPersonRelationActivitiesRelationLabelsRelation';
  activities: Array<InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation = {
  __typename: 'InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type InteractionPersonRelationActivitiesRelationPersonRelation = {
  __typename: 'InteractionPersonRelationActivitiesRelationPersonRelation';
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

export type InteractionPersonRelationImportantDatesRelation = {
  __typename: 'InteractionPersonRelationImportantDatesRelation';
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
  __typename: 'InteractionPersonRelationImportantDatesRelationLabelsRelation';
  activities: Array<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation = {
  __typename: 'InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type InteractionPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'InteractionPersonRelationImportantDatesRelationPersonRelation';
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
  __typename: 'InteractionPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};

export type InteractionPersonRelationLabelsRelation = {
  __typename: 'InteractionPersonRelationLabelsRelation';
  activities: Array<InteractionPersonRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type InteractionPersonRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type InteractionPersonRelationLabelsRelationActivitiesRelation = {
  __typename: 'InteractionPersonRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type InteractionPersonRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type InteractionPersonRelationMentionedInNotesRelation = {
  __typename: 'InteractionPersonRelationMentionedInNotesRelation';
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
  __typename: 'InteractionPersonRelationMentionedInNotesRelationLabelsRelation';
  activities: Array<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type InteractionPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename: 'InteractionPersonRelationMentionedInNotesRelationMentionsRelation';
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
  __typename: 'InteractionPersonRelationMentionedInNotesRelationPersonRelation';
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
  __typename: 'InteractionPersonRelationNotesRelation';
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
  __typename: 'InteractionPersonRelationNotesRelationLabelsRelation';
  activities: Array<InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type InteractionPersonRelationNotesRelationMentionsRelation = {
  __typename: 'InteractionPersonRelationNotesRelationMentionsRelation';
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
  __typename: 'InteractionPersonRelationNotesRelationPersonRelation';
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
  __typename: 'InteractionPersonRelationRelationshipsFromRelation';
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
  __typename: 'InteractionPersonRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename: 'InteractionPersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename: 'InteractionPersonRelationRelationshipsToRelation';
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
  __typename: 'InteractionPersonRelationRelationshipsToRelationFromPersonRelation';
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
  __typename: 'InteractionPersonRelationRelationshipsToRelationToPersonRelation';
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
  __typename: 'InteractionTag';
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
  __typename: 'Label';
  activities: Array<LabelActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type LabelActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type LabelActivitiesRelation = {
  __typename: 'LabelActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<LabelActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<LabelActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type LabelActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type LabelActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type LabelActivitiesRelationLabelsRelation = {
  __typename: 'LabelActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelation';
  activities: Array<LabelActivitiesRelationPersonRelationActivitiesRelation>;
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<LabelActivitiesRelationPersonRelationImportantDatesRelation>;
  interactions: Array<LabelActivitiesRelationPersonRelationInteractionsRelation>;
  labels: Array<LabelActivitiesRelationPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<LabelActivitiesRelationPersonRelationMentionedInNotesRelation>;
  notes: Array<LabelActivitiesRelationPersonRelationNotesRelation>;
  relationshipsFrom: Array<LabelActivitiesRelationPersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<LabelActivitiesRelationPersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type LabelActivitiesRelationPersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};


export type LabelActivitiesRelationPersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type LabelActivitiesRelationPersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type LabelActivitiesRelationPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type LabelActivitiesRelationPersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type LabelActivitiesRelationPersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type LabelActivitiesRelationPersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type LabelActivitiesRelationPersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type LabelActivitiesRelationPersonRelationActivitiesRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationImportantDatesRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type LabelActivitiesRelationPersonRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation';
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

export type LabelActivitiesRelationPersonRelationInteractionsRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type LabelActivitiesRelationPersonRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type LabelActivitiesRelationPersonRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation';
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

export type LabelActivitiesRelationPersonRelationLabelsRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation>;
  mentions: Array<LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation>;
  person: Maybe<LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation';
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

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation';
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

export type LabelActivitiesRelationPersonRelationNotesRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation>;
  mentions: Array<LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation>;
  person: Maybe<LabelActivitiesRelationPersonRelationNotesRelationPersonRelation>;
  personId: Maybe<Scalars['String']['output']>;
};


export type LabelActivitiesRelationPersonRelationNotesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type LabelActivitiesRelationPersonRelationNotesRelationMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonsOrderBy>;
  where?: InputMaybe<PersonsFilters>;
};


export type LabelActivitiesRelationPersonRelationNotesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation';
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

export type LabelActivitiesRelationPersonRelationNotesRelationPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationNotesRelationPersonRelation';
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

export type LabelActivitiesRelationPersonRelationRelationshipsFromRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationRelationshipsFromRelation';
  fromPerson: Maybe<LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation';
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

export type LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation';
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

export type LabelActivitiesRelationPersonRelationRelationshipsToRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationRelationshipsToRelation';
  fromPerson: Maybe<LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation';
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

export type LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation = {
  __typename: 'LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation';
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
  createActivities: Array<Activity>;
  createActivity: Maybe<Activity>;
  createActivityTag: Maybe<ActivityTag>;
  createActivityTags: Array<ActivityTag>;
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
  deleteActivities: Array<Activity>;
  deleteActivityTags: Array<ActivityTag>;
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
  updateActivities: Array<Activity>;
  updateActivityTags: Array<ActivityTag>;
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


export type MutationCreateActivitiesArgs = {
  values: Array<CreateActivityInput>;
};


export type MutationCreateActivityArgs = {
  values: CreateActivityInput;
};


export type MutationCreateActivityTagArgs = {
  values: CreateActivityTagInput;
};


export type MutationCreateActivityTagsArgs = {
  values: Array<CreateActivityTagInput>;
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


export type MutationDeleteActivitiesArgs = {
  where?: InputMaybe<ActivitiesFilters>;
};


export type MutationDeleteActivityTagsArgs = {
  where?: InputMaybe<ActivityTagsFilters>;
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


export type MutationUpdateActivitiesArgs = {
  set: UpdateActivityInput;
  where?: InputMaybe<ActivitiesFilters>;
};


export type MutationUpdateActivityTagsArgs = {
  set: UpdateActivityTagInput;
  where?: InputMaybe<ActivityTagsFilters>;
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
  __typename: 'Note';
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
  __typename: 'NoteLabelsRelation';
  activities: Array<NoteLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NoteLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NoteLabelsRelationActivitiesRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NoteLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NoteLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NoteLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelation';
  activities: Array<NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation>;
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  importantDates: Array<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation>;
  interactions: Array<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation>;
  labels: Array<NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation>;
  notes: Array<NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation>;
  relationshipsFrom: Array<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation>;
  relationshipsTo: Array<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type NoteLabelsRelationActivitiesRelationPersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDatesOrderBy>;
  where?: InputMaybe<ImportantDatesFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionsOrderBy>;
  where?: InputMaybe<InteractionsFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NotesOrderBy>;
  where?: InputMaybe<NotesFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipsOrderBy>;
  where?: InputMaybe<PersonRelationshipsFilters>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation>;
  name: Scalars['String']['output'];
  person: Maybe<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation';
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

export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation';
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

export type NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation';
  fromPerson: Maybe<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation';
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

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation';
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

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation';
  fromPerson: Maybe<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};


export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation';
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

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation = {
  __typename: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation';
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

export type NoteMention = {
  __typename: 'NoteMention';
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
  __typename: 'NoteMentionsRelation';
  activities: Array<NoteMentionsRelationActivitiesRelation>;
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


export type NoteMentionsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
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

export type NoteMentionsRelationActivitiesRelation = {
  __typename: 'NoteMentionsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NoteMentionsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NoteMentionsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NoteMentionsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteMentionsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteMentionsRelationActivitiesRelationLabelsRelation = {
  __typename: 'NoteMentionsRelationActivitiesRelationLabelsRelation';
  activities: Array<NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation = {
  __typename: 'NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type NoteMentionsRelationActivitiesRelationPersonRelation = {
  __typename: 'NoteMentionsRelationActivitiesRelationPersonRelation';
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

export type NoteMentionsRelationImportantDatesRelation = {
  __typename: 'NoteMentionsRelationImportantDatesRelation';
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
  __typename: 'NoteMentionsRelationImportantDatesRelationLabelsRelation';
  activities: Array<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation = {
  __typename: 'NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type NoteMentionsRelationImportantDatesRelationPersonRelation = {
  __typename: 'NoteMentionsRelationImportantDatesRelationPersonRelation';
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
  __typename: 'NoteMentionsRelationInteractionsRelation';
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
  __typename: 'NoteMentionsRelationInteractionsRelationLabelsRelation';
  activities: Array<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation = {
  __typename: 'NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type NoteMentionsRelationInteractionsRelationPersonRelation = {
  __typename: 'NoteMentionsRelationInteractionsRelationPersonRelation';
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
  __typename: 'NoteMentionsRelationLabelsRelation';
  activities: Array<NoteMentionsRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NoteMentionsRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NoteMentionsRelationLabelsRelationActivitiesRelation = {
  __typename: 'NoteMentionsRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NoteMentionsRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NoteMentionsRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type NoteMentionsRelationMentionedInNotesRelation = {
  __typename: 'NoteMentionsRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NoteMentionsRelationNotesRelation = {
  __typename: 'NoteMentionsRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NoteMentionsRelationRelationshipsFromRelation = {
  __typename: 'NoteMentionsRelationRelationshipsFromRelation';
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
  __typename: 'NoteMentionsRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename: 'NoteMentionsRelationRelationshipsFromRelationToPersonRelation';
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
  __typename: 'NoteMentionsRelationRelationshipsToRelation';
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
  __typename: 'NoteMentionsRelationRelationshipsToRelationFromPersonRelation';
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
  __typename: 'NoteMentionsRelationRelationshipsToRelationToPersonRelation';
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
  __typename: 'NotePersonRelation';
  activities: Array<NotePersonRelationActivitiesRelation>;
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


export type NotePersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
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

export type NotePersonRelationActivitiesRelation = {
  __typename: 'NotePersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NotePersonRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NotePersonRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NotePersonRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NotePersonRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NotePersonRelationActivitiesRelationLabelsRelation = {
  __typename: 'NotePersonRelationActivitiesRelationLabelsRelation';
  activities: Array<NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NotePersonRelationActivitiesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation = {
  __typename: 'NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type NotePersonRelationActivitiesRelationPersonRelation = {
  __typename: 'NotePersonRelationActivitiesRelationPersonRelation';
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
  activities: Array<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation = {
  __typename: 'NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type NotePersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'NotePersonRelationImportantDatesRelationPersonRelation';
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
  __typename: 'NotePersonRelationInteractionsRelation';
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
  __typename: 'NotePersonRelationInteractionsRelationLabelsRelation';
  activities: Array<NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation = {
  __typename: 'NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type NotePersonRelationInteractionsRelationPersonRelation = {
  __typename: 'NotePersonRelationInteractionsRelationPersonRelation';
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
  __typename: 'NotePersonRelationLabelsRelation';
  activities: Array<NotePersonRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type NotePersonRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type NotePersonRelationLabelsRelationActivitiesRelation = {
  __typename: 'NotePersonRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<NotePersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type NotePersonRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type NotePersonRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'NotePersonRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type NotePersonRelationMentionedInNotesRelation = {
  __typename: 'NotePersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
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
  __typename: 'NotePersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename: 'NotePersonRelationRelationshipsToRelationToPersonRelation';
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
  activities: Array<PersonActivitiesRelation>;
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


export type PersonActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
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

export type PersonActivitiesRelation = {
  __typename: 'PersonActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonActivitiesRelationLabelsRelation = {
  __typename: 'PersonActivitiesRelationLabelsRelation';
  activities: Array<PersonActivitiesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonActivitiesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonActivitiesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonActivitiesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PersonActivitiesRelationPersonRelation = {
  __typename: 'PersonActivitiesRelationPersonRelation';
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
  activities: Array<PersonImportantDatesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonImportantDatesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonImportantDatesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonImportantDatesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonImportantDatesRelationPersonRelation = {
  __typename: 'PersonImportantDatesRelationPersonRelation';
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
  __typename: 'PersonInteractionsRelation';
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
  __typename: 'PersonInteractionsRelationLabelsRelation';
  activities: Array<PersonInteractionsRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonInteractionsRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonInteractionsRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonInteractionsRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonInteractionsRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonInteractionsRelationPersonRelation = {
  __typename: 'PersonInteractionsRelationPersonRelation';
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
  activities: Array<PersonLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonLabelsRelationActivitiesRelation = {
  __typename: 'PersonLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonMentionedInNotesRelation = {
  __typename: 'PersonMentionedInNotesRelation';
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
  __typename: 'PersonMentionedInNotesRelationLabelsRelation';
  activities: Array<PersonMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonMentionedInNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonMentionedInNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonMentionedInNotesRelationMentionsRelation = {
  __typename: 'PersonMentionedInNotesRelationMentionsRelation';
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
  __typename: 'PersonMentionedInNotesRelationPersonRelation';
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
  __typename: 'PersonNotesRelation';
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
  __typename: 'PersonNotesRelationLabelsRelation';
  activities: Array<PersonNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonNotesRelationMentionsRelation = {
  __typename: 'PersonNotesRelationMentionsRelation';
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
  __typename: 'PersonNotesRelationPersonRelation';
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
  activities: Array<PersonRelationshipFromPersonRelationActivitiesRelation>;
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


export type PersonRelationshipFromPersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
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

export type PersonRelationshipFromPersonRelationActivitiesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation';
  activities: Array<PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation';
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
  activities: Array<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationInteractionsRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation';
  activities: Array<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationLabelsRelation';
  activities: Array<PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipFromPersonRelationMentionedInNotesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationMentionedInNotesRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation';
  activities: Array<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationNotesRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelation';
  activities: Array<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipFromPersonRelationNotesRelationMentionsRelation = {
  __typename: 'PersonRelationshipFromPersonRelationNotesRelationMentionsRelation';
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
  __typename: 'PersonRelationshipFromPersonRelationNotesRelationPersonRelation';
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
  activities: Array<PersonRelationshipToPersonRelationActivitiesRelation>;
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


export type PersonRelationshipToPersonRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
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

export type PersonRelationshipToPersonRelationActivitiesRelation = {
  __typename: 'PersonRelationshipToPersonRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipToPersonRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation';
  activities: Array<PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationActivitiesRelationPersonRelation';
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
  activities: Array<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation';
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
  __typename: 'PersonRelationshipToPersonRelationInteractionsRelation';
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
  __typename: 'PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation';
  activities: Array<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipToPersonRelationInteractionsRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationInteractionsRelationPersonRelation';
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
  __typename: 'PersonRelationshipToPersonRelationLabelsRelation';
  activities: Array<PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipToPersonRelationMentionedInNotesRelation = {
  __typename: 'PersonRelationshipToPersonRelationMentionedInNotesRelation';
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
  __typename: 'PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation';
  activities: Array<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename: 'PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation';
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
  __typename: 'PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation';
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
  __typename: 'PersonRelationshipToPersonRelationNotesRelation';
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
  __typename: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelation';
  activities: Array<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation = {
  __typename: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelsOrderBy>;
  where?: InputMaybe<LabelsFilters>;
};


export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation = {
  __typename: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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

export type PersonRelationshipToPersonRelationNotesRelationMentionsRelation = {
  __typename: 'PersonRelationshipToPersonRelationNotesRelationMentionsRelation';
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
  __typename: 'PersonRelationshipToPersonRelationNotesRelationPersonRelation';
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
  __typename: 'PersonRelationshipsFromRelationToPersonRelation';
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
  __typename: 'PersonRelationshipsToRelationToPersonRelation';
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
  __typename: 'Query';
  activity: Maybe<Activity>;
  activityTag: Maybe<ActivityTag>;
  activityTags: Array<ActivityTag>;
  activitys: Array<Activity>;
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


export type QueryActivityArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};


export type QueryActivityTagArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityTagsOrderBy>;
  where?: InputMaybe<ActivityTagsFilters>;
};


export type QueryActivityTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityTagsOrderBy>;
  where?: InputMaybe<ActivityTagsFilters>;
};


export type QueryActivitysArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
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

export type UpdateActivityInput = {
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  occurredAt?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateActivityTagInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  labelId?: InputMaybe<Scalars['String']['input']>;
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

export type Person_ActivityListFragment = { __typename: 'Person', id: string, activities: Array<{ __typename: 'PersonActivitiesRelation', id: string, title: string, description: string | null, location: string | null, occurredAt: string }> };

export type CreateActivityMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  occurredAt: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateActivityMutation = { createActivity: { __typename: 'Activity', id: string, personId: string, title: string, occurredAt: string, location: string | null, description: string | null } | null };

export type DeleteActivityMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteActivityMutation = { deleteActivities: Array<{ __typename: 'Activity', id: string }> };

export type GetPersonsWithFrequencyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonsWithFrequencyQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, contactFrequency: string | null, interactions: Array<{ __typename: 'PersonInteractionsRelation', occurredAt: string }> }> };

export type GetPersonInteractionsForWidgetQueryVariables = Exact<{
  personId: Scalars['String']['input'];
}>;


export type GetPersonInteractionsForWidgetQuery = { interactions: Array<{ __typename: 'Interaction', id: string, personId: string, channel: string, occurredAt: string, sentiment: string | null, note: string | null, labels: Array<{ __typename: 'InteractionLabelsRelation', id: string, label: string, color: string }> }> };

export type GetAllLabelsForWidgetQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLabelsForWidgetQuery = { labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> };

export type GetRecentPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentPersonsQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, createdAt: string }> };

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

export type CreateInteractionMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  channel: Scalars['String']['input'];
  occurredAt: Scalars['String']['input'];
  sentiment?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateInteractionMutation = { createInteraction: { __typename: 'Interaction', id: string, personId: string, channel: string, occurredAt: string, sentiment: string | null, note: string | null } | null };

export type UpdateInteractionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  channel: Scalars['String']['input'];
  occurredAt: Scalars['String']['input'];
  sentiment?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateInteractionMutation = { updateInteractions: Array<{ __typename: 'Interaction', id: string, channel: string, occurredAt: string, sentiment: string | null, note: string | null }> };

export type DeleteInteractionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteInteractionMutation = { deleteInteractions: Array<{ __typename: 'Interaction', id: string }> };

export type AttachInteractionTagMutationVariables = Exact<{
  interactionId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type AttachInteractionTagMutation = { createInteractionTag: { __typename: 'InteractionTag', interactionId: string, labelId: string } | null };

export type DetachInteractionTagMutationVariables = Exact<{
  interactionId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
}>;


export type DetachInteractionTagMutation = { deleteInteractionTags: Array<{ __typename: 'InteractionTag', interactionId: string, labelId: string }> };

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

export type Person_ListFragment = { __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, createdAt: string, updatedAt: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'PersonImportantDatesRelation', id: string, name: string, description: string | null, date: string }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> };

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

export type CreateNoteMentionMutationVariables = Exact<{
  noteId: Scalars['String']['input'];
  mentionedPersonId: Scalars['String']['input'];
}>;


export type CreateNoteMentionMutation = { createNoteMention: { __typename: 'NoteMention', noteId: string, mentionedPersonId: string } | null };

export type DeleteNoteMentionsMutationVariables = Exact<{
  noteId: Scalars['String']['input'];
}>;


export type DeleteNoteMentionsMutation = { deleteNoteMentions: Array<{ __typename: 'NoteMention', noteId: string, mentionedPersonId: string }> };

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

export type GetNetworkDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNetworkDataQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, relationshipsFrom: Array<{ __typename: 'PersonRelationshipsFromRelation', id: string, toPersonId: string, type: string }> }> };

export type GetImportantDateDetailQueryVariables = Exact<{
  dateId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
}>;


export type GetImportantDateDetailQuery = { importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, description: string | null, date: string, recurrence: string | null, labels: Array<{ __typename: 'ImportantDateLabelsRelation', id: string, label: string, color: string }> }>, notes: Array<{ __typename: 'Note', id: string, body: string, labels: Array<{ __typename: 'NoteLabelsRelation', id: string, label: string, color: string }> }> };

export type GetPersonDetailQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPersonDetailQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, contactFrequency: string | null, createdAt: string, updatedAt: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'PersonImportantDatesRelation', id: string, name: string, description: string | null, date: string, recurrence: string | null, labels: Array<{ __typename: 'PersonImportantDatesRelationLabelsRelation', id: string, label: string, color: string }> }>, notes: Array<{ __typename: 'PersonNotesRelation', id: string, body: string, labels: Array<{ __typename: 'PersonNotesRelationLabelsRelation', id: string, label: string, color: string }>, mentions: Array<{ __typename: 'PersonNotesRelationMentionsRelation', id: string, firstName: string, lastName: string }> }>, mentionedInNotes: Array<{ __typename: 'PersonMentionedInNotesRelation', id: string, body: string, person: { __typename: 'PersonMentionedInNotesRelationPersonRelation', id: string, firstName: string, lastName: string } | null }>, interactions: Array<{ __typename: 'PersonInteractionsRelation', id: string, personId: string, channel: string, occurredAt: string, sentiment: string | null, note: string | null, labels: Array<{ __typename: 'PersonInteractionsRelationLabelsRelation', id: string, label: string, color: string }> }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }>, activities: Array<{ __typename: 'PersonActivitiesRelation', id: string, title: string, description: string | null, location: string | null, occurredAt: string }> }> };

export type GetAllPersonsForDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPersonsForDetailQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }> }> };

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
  contactFrequency?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdatePersonMutation = { updatePersons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, contactFrequency: string | null }> };

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


export type GetPersonsQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, createdAt: string, updatedAt: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, interactions: Array<{ __typename: 'PersonInteractionsRelation', occurredAt: string }>, importantDates: Array<{ __typename: 'PersonImportantDatesRelation', id: string, name: string, description: string | null, date: string }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> }> };

export type GetLabelsForPersonFormQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLabelsForPersonFormQuery = { labels: Array<{ __typename: 'Label', id: string, color: string, label: string }> };

export type CreatePersonMutationVariables = Exact<{
  values: CreatePersonInput;
}>;


export type CreatePersonMutation = { createPerson: { __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, createdAt: string, updatedAt: string, labels: Array<{ __typename: 'PersonLabelsRelation', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'PersonImportantDatesRelation', id: string, name: string, description: string | null, date: string }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> } | null };

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

export const Person_ActivityListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_ActivityList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}}]}}]} as unknown as DocumentNode<Person_ActivityListFragment, unknown>;
export const Label_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Label_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<Label_ListFragment, unknown>;
export const Person_LabelsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Labels"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<Person_LabelsFragment, unknown>;
export const Person_RelationshipsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}}]} as unknown as DocumentNode<Person_RelationshipsFragment, unknown>;
export const Person_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_Relationships"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}}]} as unknown as DocumentNode<Person_ListFragment, unknown>;
export const Tag_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tag_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<Tag_ListFragment, unknown>;
export const CreateActivityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createActivity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateActivityMutation, CreateActivityMutationVariables>;
export const DeleteActivityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteActivities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteActivityMutation, DeleteActivityMutationVariables>;
export const GetPersonsWithFrequencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonsWithFrequency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"contactFrequency"}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonsWithFrequencyQuery, GetPersonsWithFrequencyQueryVariables>;
export const GetPersonInteractionsForWidgetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonInteractionsForWidget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonInteractionsForWidgetQuery, GetPersonInteractionsForWidgetQueryVariables>;
export const GetAllLabelsForWidgetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLabelsForWidget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetAllLabelsForWidgetQuery, GetAllLabelsForWidgetQueryVariables>;
export const GetRecentPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecentPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetRecentPersonsQuery, GetRecentPersonsQueryVariables>;
export const GetUpcomingDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUpcomingDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetUpcomingDatesQuery, GetUpcomingDatesQueryVariables>;
export const AttachTagToImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachTagToImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImportantDateTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"importantDateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDateId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachTagToImportantDateMutation, AttachTagToImportantDateMutationVariables>;
export const DetachTagFromImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachTagFromImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteImportantDateTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"importantDateId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDateId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachTagFromImportantDateMutation, DetachTagFromImportantDateMutationVariables>;
export const CreateInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInteraction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"channel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sentiment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]} as unknown as DocumentNode<CreateInteractionMutation, CreateInteractionMutationVariables>;
export const UpdateInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInteractions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"channel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sentiment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]} as unknown as DocumentNode<UpdateInteractionMutation, UpdateInteractionMutationVariables>;
export const DeleteInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteInteractions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteInteractionMutation, DeleteInteractionMutationVariables>;
export const AttachInteractionTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachInteractionTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interactionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInteractionTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"interactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interactionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interactionId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachInteractionTagMutation, AttachInteractionTagMutationVariables>;
export const DetachInteractionTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachInteractionTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interactionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteInteractionTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"interactionId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interactionId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interactionId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachInteractionTagMutation, DetachInteractionTagMutationVariables>;
export const AttachLabelToPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachLabelToPerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachLabelToPersonMutation, AttachLabelToPersonMutationVariables>;
export const DetachLabelFromPersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachLabelFromPerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersonLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachLabelFromPersonMutation, DetachLabelFromPersonMutationVariables>;
export const CreateNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}}]}}]}}]} as unknown as DocumentNode<CreateNoteMutation, CreateNoteMutationVariables>;
export const UpdateNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]} as unknown as DocumentNode<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const DeleteNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const AttachTagToNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachTagToNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNoteTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"noteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachTagToNoteMutation, AttachTagToNoteMutationVariables>;
export const DetachTagFromNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachTagFromNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNoteTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"noteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachTagFromNoteMutation, DetachTagFromNoteMutationVariables>;
export const CreateNoteMentionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNoteMention"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mentionedPersonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNoteMention"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"noteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mentionedPersonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mentionedPersonId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"mentionedPersonId"}}]}}]}}]} as unknown as DocumentNode<CreateNoteMentionMutation, CreateNoteMentionMutationVariables>;
export const DeleteNoteMentionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNoteMentions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNoteMentions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"noteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"mentionedPersonId"}}]}}]}}]} as unknown as DocumentNode<DeleteNoteMentionsMutation, DeleteNoteMentionsMutationVariables>;
export const CreatePersonRelationshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePersonRelationship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fromPersonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toPersonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonRelationship"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fromPersonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fromPersonId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"toPersonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toPersonId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fromPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"toPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreatePersonRelationshipMutation, CreatePersonRelationshipMutationVariables>;
export const UpdatePersonRelationshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePersonRelationship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonRelationships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fromPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"toPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdatePersonRelationshipMutation, UpdatePersonRelationshipMutationVariables>;
export const DeletePersonRelationshipDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePersonRelationship"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersonRelationships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePersonRelationshipMutation, DeletePersonRelationshipMutationVariables>;
export const GetNetworkDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNetworkData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsFrom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"toPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetNetworkDataQuery, GetNetworkDataQueryVariables>;
export const GetImportantDateDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetImportantDateDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<GetImportantDateDetailQuery, GetImportantDateDetailQueryVariables>;
export const GetPersonDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"contactFrequency"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mentionedInNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_ActivityList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_ActivityList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}}]}}]} as unknown as DocumentNode<GetPersonDetailQuery, GetPersonDetailQueryVariables>;
export const GetAllPersonsForDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPersonsForDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPersonsForDetailQuery, GetAllPersonsForDetailQueryVariables>;
export const GetAllLabelsForDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLabelsForDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetAllLabelsForDetailQuery, GetAllLabelsForDetailQueryVariables>;
export const DeleteImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteImportantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteImportantDateMutation, DeleteImportantDateMutationVariables>;
export const CreateImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImportantDate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recurrence"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}}]}}]}}]} as unknown as DocumentNode<CreateImportantDateMutation, CreateImportantDateMutationVariables>;
export const UpdateImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateImportantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recurrence"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}}]}}]}}]} as unknown as DocumentNode<UpdateImportantDateMutation, UpdateImportantDateMutationVariables>;
export const UpdatePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contactFrequency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contactFrequency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contactFrequency"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"contactFrequency"}}]}}]}}]} as unknown as DocumentNode<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const AttachLabelToPersonEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachLabelToPersonEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachLabelToPersonEditMutation, AttachLabelToPersonEditMutationVariables>;
export const DetachLabelFromPersonEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachLabelFromPersonEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersonLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachLabelFromPersonEditMutation, DetachLabelFromPersonEditMutationVariables>;
export const GetPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_Relationships"}}]}}]} as unknown as DocumentNode<GetPersonsQuery, GetPersonsQueryVariables>;
export const GetLabelsForPersonFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLabelsForPersonForm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Label_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Label_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<GetLabelsForPersonFormQuery, GetLabelsForPersonFormQueryVariables>;
export const CreatePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_Relationships"}}]}}]} as unknown as DocumentNode<CreatePersonMutation, CreatePersonMutationVariables>;
export const DeletePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePersonMutation, DeletePersonMutationVariables>;
export const GetTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tag_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tag_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<GetTagsQuery, GetTagsQueryVariables>;
export const CreateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLabelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tag_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tag_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTagMutation, DeleteTagMutationVariables>;