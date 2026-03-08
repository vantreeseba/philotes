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
  __typename?: 'Activity';
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
  __typename?: 'ActivityLabelsRelation';
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
  __typename?: 'ActivityLabelsRelationActivitiesRelation';
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
  __typename?: 'ActivityPersonRelation';
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
  __typename?: 'ActivityPersonRelationActivitiesRelation';
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
  __typename?: 'ActivityPersonRelationImportantDatesRelation';
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
  __typename?: 'ActivityPersonRelationImportantDatesRelationLabelsRelation';
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
  __typename?: 'ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ActivityPersonRelationImportantDatesRelationPersonRelation';
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
  __typename?: 'ActivityPersonRelationInteractionsRelation';
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
  __typename?: 'ActivityPersonRelationInteractionsRelationLabelsRelation';
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
  __typename?: 'ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ActivityPersonRelationInteractionsRelationPersonRelation';
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
  __typename?: 'ActivityPersonRelationLabelsRelation';
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
  __typename?: 'ActivityPersonRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ActivityPersonRelationMentionedInNotesRelation';
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
  __typename?: 'ActivityPersonRelationMentionedInNotesRelationLabelsRelation';
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
  __typename?: 'ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ActivityPersonRelationMentionedInNotesRelationMentionsRelation';
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
  __typename?: 'ActivityPersonRelationMentionedInNotesRelationPersonRelation';
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
  __typename?: 'ActivityPersonRelationNotesRelation';
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
  __typename?: 'ActivityPersonRelationNotesRelationLabelsRelation';
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
  __typename?: 'ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ActivityPersonRelationNotesRelationMentionsRelation';
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
  __typename?: 'ActivityPersonRelationNotesRelationPersonRelation';
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
  __typename?: 'ActivityPersonRelationRelationshipsFromRelation';
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
  __typename?: 'ActivityPersonRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename?: 'ActivityPersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename?: 'ActivityPersonRelationRelationshipsToRelation';
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
  __typename?: 'ActivityPersonRelationRelationshipsToRelationFromPersonRelation';
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
  __typename?: 'ActivityPersonRelationRelationshipsToRelationToPersonRelation';
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
  __typename?: 'ActivityTag';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation = {
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation = {
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation = {
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation = {
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation';
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
  __typename?: 'ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation';
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
  __typename?: 'ImportantDatePersonRelation';
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
  __typename?: 'ImportantDatePersonRelationActivitiesRelation';
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
  __typename?: 'ImportantDatePersonRelationActivitiesRelationLabelsRelation';
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
  __typename?: 'ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ImportantDatePersonRelationActivitiesRelationPersonRelation';
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
  __typename?: 'ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'ImportantDatePersonRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation = {
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation = {
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation = {
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation = {
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation';
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
  __typename?: 'InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation';
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
  __typename?: 'InteractionPersonRelation';
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
  __typename?: 'InteractionPersonRelationActivitiesRelation';
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
  __typename?: 'InteractionPersonRelationActivitiesRelationLabelsRelation';
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
  __typename?: 'InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'InteractionPersonRelationActivitiesRelationPersonRelation';
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
  __typename?: 'InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'InteractionPersonRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'LabelActivitiesRelation';
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
  __typename?: 'LabelActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelation = {
  __typename?: 'LabelActivitiesRelationPersonRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationActivitiesRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationImportantDatesRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation = {
  __typename?: 'LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationInteractionsRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation = {
  __typename?: 'LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelation = {
  __typename?: 'LabelActivitiesRelationPersonRelationMentionedInNotesRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation = {
  __typename?: 'LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationNotesRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation = {
  __typename?: 'LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationNotesRelationPersonRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationRelationshipsFromRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationRelationshipsToRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation';
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
  __typename?: 'LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation';
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
  __typename?: 'Mutation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation = {
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation = {
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation = {
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation = {
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  personId: Maybe<Scalars['String']['output']>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation = {
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation';
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
  __typename?: 'NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation';
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
  __typename?: 'NoteMentionsRelationActivitiesRelation';
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
  __typename?: 'NoteMentionsRelationActivitiesRelationLabelsRelation';
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
  __typename?: 'NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'NoteMentionsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'NoteMentionsRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'NotePersonRelationActivitiesRelation';
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
  __typename?: 'NotePersonRelationActivitiesRelationLabelsRelation';
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
  __typename?: 'NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'NotePersonRelationActivitiesRelationPersonRelation';
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
  __typename?: 'NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'NotePersonRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type NotePersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'NotePersonRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonActivitiesRelation';
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
  __typename?: 'PersonActivitiesRelationLabelsRelation';
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
  __typename?: 'PersonActivitiesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonActivitiesRelationPersonRelation';
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
  __typename?: 'PersonImportantDatesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonInteractionsRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonMentionedInNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation';
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
  __typename?: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation';
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation = {
  __typename?: 'PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation';
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
  ActivitiesCreatedAtFilters: ActivitiesCreatedAtFilters;
  ActivitiesCreatedAtFiltersOr: ActivitiesCreatedAtFiltersOr;
  ActivitiesDescriptionFilters: ActivitiesDescriptionFilters;
  ActivitiesDescriptionFiltersOr: ActivitiesDescriptionFiltersOr;
  ActivitiesFilters: ActivitiesFilters;
  ActivitiesFiltersOr: ActivitiesFiltersOr;
  ActivitiesIdFilters: ActivitiesIdFilters;
  ActivitiesIdFiltersOr: ActivitiesIdFiltersOr;
  ActivitiesLocationFilters: ActivitiesLocationFilters;
  ActivitiesLocationFiltersOr: ActivitiesLocationFiltersOr;
  ActivitiesOccurredAtFilters: ActivitiesOccurredAtFilters;
  ActivitiesOccurredAtFiltersOr: ActivitiesOccurredAtFiltersOr;
  ActivitiesOrderBy: ActivitiesOrderBy;
  ActivitiesPersonIdFilters: ActivitiesPersonIdFilters;
  ActivitiesPersonIdFiltersOr: ActivitiesPersonIdFiltersOr;
  ActivitiesTitleFilters: ActivitiesTitleFilters;
  ActivitiesTitleFiltersOr: ActivitiesTitleFiltersOr;
  Activity: ResolverTypeWrapper<Activity>;
  ActivityLabelsRelation: ResolverTypeWrapper<ActivityLabelsRelation>;
  ActivityLabelsRelationActivitiesRelation: ResolverTypeWrapper<ActivityLabelsRelationActivitiesRelation>;
  ActivityPersonRelation: ResolverTypeWrapper<ActivityPersonRelation>;
  ActivityPersonRelationActivitiesRelation: ResolverTypeWrapper<ActivityPersonRelationActivitiesRelation>;
  ActivityPersonRelationImportantDatesRelation: ResolverTypeWrapper<ActivityPersonRelationImportantDatesRelation>;
  ActivityPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<ActivityPersonRelationImportantDatesRelationLabelsRelation>;
  ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  ActivityPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<ActivityPersonRelationImportantDatesRelationPersonRelation>;
  ActivityPersonRelationInteractionsRelation: ResolverTypeWrapper<ActivityPersonRelationInteractionsRelation>;
  ActivityPersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<ActivityPersonRelationInteractionsRelationLabelsRelation>;
  ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  ActivityPersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<ActivityPersonRelationInteractionsRelationPersonRelation>;
  ActivityPersonRelationLabelsRelation: ResolverTypeWrapper<ActivityPersonRelationLabelsRelation>;
  ActivityPersonRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ActivityPersonRelationLabelsRelationActivitiesRelation>;
  ActivityPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<ActivityPersonRelationMentionedInNotesRelation>;
  ActivityPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<ActivityPersonRelationMentionedInNotesRelationLabelsRelation>;
  ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  ActivityPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<ActivityPersonRelationMentionedInNotesRelationMentionsRelation>;
  ActivityPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<ActivityPersonRelationMentionedInNotesRelationPersonRelation>;
  ActivityPersonRelationNotesRelation: ResolverTypeWrapper<ActivityPersonRelationNotesRelation>;
  ActivityPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<ActivityPersonRelationNotesRelationLabelsRelation>;
  ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  ActivityPersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<ActivityPersonRelationNotesRelationMentionsRelation>;
  ActivityPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<ActivityPersonRelationNotesRelationPersonRelation>;
  ActivityPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<ActivityPersonRelationRelationshipsFromRelation>;
  ActivityPersonRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<ActivityPersonRelationRelationshipsFromRelationFromPersonRelation>;
  ActivityPersonRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<ActivityPersonRelationRelationshipsFromRelationToPersonRelation>;
  ActivityPersonRelationRelationshipsToRelation: ResolverTypeWrapper<ActivityPersonRelationRelationshipsToRelation>;
  ActivityPersonRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<ActivityPersonRelationRelationshipsToRelationFromPersonRelation>;
  ActivityPersonRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<ActivityPersonRelationRelationshipsToRelationToPersonRelation>;
  ActivityTag: ResolverTypeWrapper<ActivityTag>;
  ActivityTagsActivityIdFilters: ActivityTagsActivityIdFilters;
  ActivityTagsActivityIdFiltersOr: ActivityTagsActivityIdFiltersOr;
  ActivityTagsFilters: ActivityTagsFilters;
  ActivityTagsFiltersOr: ActivityTagsFiltersOr;
  ActivityTagsLabelIdFilters: ActivityTagsLabelIdFilters;
  ActivityTagsLabelIdFiltersOr: ActivityTagsLabelIdFiltersOr;
  ActivityTagsOrderBy: ActivityTagsOrderBy;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateActivityInput: CreateActivityInput;
  CreateActivityTagInput: CreateActivityTagInput;
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
  ImportantDateLabelsRelationActivitiesRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelation>;
  ImportantDateLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationLabelsRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation>;
  ImportantDatePersonRelation: ResolverTypeWrapper<ImportantDatePersonRelation>;
  ImportantDatePersonRelationActivitiesRelation: ResolverTypeWrapper<ImportantDatePersonRelationActivitiesRelation>;
  ImportantDatePersonRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationActivitiesRelationLabelsRelation>;
  ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  ImportantDatePersonRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationActivitiesRelationPersonRelation>;
  ImportantDatePersonRelationImportantDatesRelation: ResolverTypeWrapper<ImportantDatePersonRelationImportantDatesRelation>;
  ImportantDatePersonRelationInteractionsRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelation>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelationLabelsRelation>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  ImportantDatePersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationInteractionsRelationPersonRelation>;
  ImportantDatePersonRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationLabelsRelation>;
  ImportantDatePersonRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ImportantDatePersonRelationLabelsRelationActivitiesRelation>;
  ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  ImportantDatePersonRelationMentionedInNotesRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation>;
  ImportantDatePersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationMentionedInNotesRelationPersonRelation>;
  ImportantDatePersonRelationNotesRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelation>;
  ImportantDatePersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelationLabelsRelation>;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
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
  InteractionLabelsRelationActivitiesRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelation>;
  InteractionLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationLabelsRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation>;
  InteractionPersonRelation: ResolverTypeWrapper<InteractionPersonRelation>;
  InteractionPersonRelationActivitiesRelation: ResolverTypeWrapper<InteractionPersonRelationActivitiesRelation>;
  InteractionPersonRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationActivitiesRelationLabelsRelation>;
  InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  InteractionPersonRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationActivitiesRelationPersonRelation>;
  InteractionPersonRelationImportantDatesRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelation>;
  InteractionPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelationLabelsRelation>;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  InteractionPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationImportantDatesRelationPersonRelation>;
  InteractionPersonRelationInteractionsRelation: ResolverTypeWrapper<InteractionPersonRelationInteractionsRelation>;
  InteractionPersonRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationLabelsRelation>;
  InteractionPersonRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<InteractionPersonRelationLabelsRelationActivitiesRelation>;
  InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  InteractionPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelation>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationLabelsRelation>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  InteractionPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationMentionsRelation>;
  InteractionPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationMentionedInNotesRelationPersonRelation>;
  InteractionPersonRelationNotesRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelation>;
  InteractionPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelationLabelsRelation>;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
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
  LabelActivitiesRelation: ResolverTypeWrapper<LabelActivitiesRelation>;
  LabelActivitiesRelationLabelsRelation: ResolverTypeWrapper<LabelActivitiesRelationLabelsRelation>;
  LabelActivitiesRelationPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelation>;
  LabelActivitiesRelationPersonRelationActivitiesRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationActivitiesRelation>;
  LabelActivitiesRelationPersonRelationImportantDatesRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationImportantDatesRelation>;
  LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation>;
  LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation>;
  LabelActivitiesRelationPersonRelationInteractionsRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationInteractionsRelation>;
  LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation>;
  LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation>;
  LabelActivitiesRelationPersonRelationLabelsRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationLabelsRelation>;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationMentionedInNotesRelation>;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation>;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation>;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation>;
  LabelActivitiesRelationPersonRelationNotesRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationNotesRelation>;
  LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation>;
  LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation>;
  LabelActivitiesRelationPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationNotesRelationPersonRelation>;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationRelationshipsFromRelation>;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation>;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation>;
  LabelActivitiesRelationPersonRelationRelationshipsToRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationRelationshipsToRelation>;
  LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation>;
  LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation>;
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
  NoteLabelsRelationActivitiesRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelation>;
  NoteLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationLabelsRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation>;
  NoteMention: ResolverTypeWrapper<NoteMention>;
  NoteMentionsFilters: NoteMentionsFilters;
  NoteMentionsFiltersOr: NoteMentionsFiltersOr;
  NoteMentionsMentionedPersonIdFilters: NoteMentionsMentionedPersonIdFilters;
  NoteMentionsMentionedPersonIdFiltersOr: NoteMentionsMentionedPersonIdFiltersOr;
  NoteMentionsNoteIdFilters: NoteMentionsNoteIdFilters;
  NoteMentionsNoteIdFiltersOr: NoteMentionsNoteIdFiltersOr;
  NoteMentionsOrderBy: NoteMentionsOrderBy;
  NoteMentionsRelation: ResolverTypeWrapper<NoteMentionsRelation>;
  NoteMentionsRelationActivitiesRelation: ResolverTypeWrapper<NoteMentionsRelationActivitiesRelation>;
  NoteMentionsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationActivitiesRelationLabelsRelation>;
  NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  NoteMentionsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NoteMentionsRelationActivitiesRelationPersonRelation>;
  NoteMentionsRelationImportantDatesRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelation>;
  NoteMentionsRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelationLabelsRelation>;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  NoteMentionsRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<NoteMentionsRelationImportantDatesRelationPersonRelation>;
  NoteMentionsRelationInteractionsRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelation>;
  NoteMentionsRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelationLabelsRelation>;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  NoteMentionsRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<NoteMentionsRelationInteractionsRelationPersonRelation>;
  NoteMentionsRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationLabelsRelation>;
  NoteMentionsRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<NoteMentionsRelationLabelsRelationActivitiesRelation>;
  NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  NoteMentionsRelationMentionedInNotesRelation: ResolverTypeWrapper<NoteMentionsRelationMentionedInNotesRelation>;
  NoteMentionsRelationNotesRelation: ResolverTypeWrapper<NoteMentionsRelationNotesRelation>;
  NoteMentionsRelationRelationshipsFromRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsFromRelation>;
  NoteMentionsRelationRelationshipsFromRelationFromPersonRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsFromRelationFromPersonRelation>;
  NoteMentionsRelationRelationshipsFromRelationToPersonRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsFromRelationToPersonRelation>;
  NoteMentionsRelationRelationshipsToRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsToRelation>;
  NoteMentionsRelationRelationshipsToRelationFromPersonRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsToRelationFromPersonRelation>;
  NoteMentionsRelationRelationshipsToRelationToPersonRelation: ResolverTypeWrapper<NoteMentionsRelationRelationshipsToRelationToPersonRelation>;
  NotePersonRelation: ResolverTypeWrapper<NotePersonRelation>;
  NotePersonRelationActivitiesRelation: ResolverTypeWrapper<NotePersonRelationActivitiesRelation>;
  NotePersonRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationActivitiesRelationLabelsRelation>;
  NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  NotePersonRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationActivitiesRelationPersonRelation>;
  NotePersonRelationImportantDatesRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelation>;
  NotePersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationLabelsRelation>;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  NotePersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationImportantDatesRelationPersonRelation>;
  NotePersonRelationInteractionsRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelation>;
  NotePersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelationLabelsRelation>;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  NotePersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationInteractionsRelationPersonRelation>;
  NotePersonRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationLabelsRelation>;
  NotePersonRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<NotePersonRelationLabelsRelationActivitiesRelation>;
  NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  NotePersonRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<NotePersonRelationLabelsRelationActivitiesRelationPersonRelation>;
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
  PersonActivitiesRelation: ResolverTypeWrapper<PersonActivitiesRelation>;
  PersonActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonActivitiesRelationLabelsRelation>;
  PersonActivitiesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonActivitiesRelationLabelsRelationActivitiesRelation>;
  PersonActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonActivitiesRelationPersonRelation>;
  PersonImportantDatesRelation: ResolverTypeWrapper<PersonImportantDatesRelation>;
  PersonImportantDatesRelationLabelsRelation: ResolverTypeWrapper<PersonImportantDatesRelationLabelsRelation>;
  PersonImportantDatesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonImportantDatesRelationLabelsRelationActivitiesRelation>;
  PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonImportantDatesRelationPersonRelation: ResolverTypeWrapper<PersonImportantDatesRelationPersonRelation>;
  PersonInteractionsRelation: ResolverTypeWrapper<PersonInteractionsRelation>;
  PersonInteractionsRelationLabelsRelation: ResolverTypeWrapper<PersonInteractionsRelationLabelsRelation>;
  PersonInteractionsRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonInteractionsRelationLabelsRelationActivitiesRelation>;
  PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
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
  PersonLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonLabelsRelationActivitiesRelation>;
  PersonLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonLabelsRelationActivitiesRelationLabelsRelation>;
  PersonLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonLabelsRelationActivitiesRelationPersonRelation>;
  PersonMentionedInNotesRelation: ResolverTypeWrapper<PersonMentionedInNotesRelation>;
  PersonMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationLabelsRelation>;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationMentionsRelation>;
  PersonMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<PersonMentionedInNotesRelationPersonRelation>;
  PersonNotesRelation: ResolverTypeWrapper<PersonNotesRelation>;
  PersonNotesRelationLabelsRelation: ResolverTypeWrapper<PersonNotesRelationLabelsRelation>;
  PersonNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonNotesRelationLabelsRelationActivitiesRelation>;
  PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonNotesRelationMentionsRelation: ResolverTypeWrapper<PersonNotesRelationMentionsRelation>;
  PersonNotesRelationPersonRelation: ResolverTypeWrapper<PersonNotesRelationPersonRelation>;
  PersonRelationship: ResolverTypeWrapper<PersonRelationship>;
  PersonRelationshipEntry: ResolverTypeWrapper<PersonRelationshipEntry>;
  PersonRelationshipFromPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelation>;
  PersonRelationshipFromPersonRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationActivitiesRelation>;
  PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation>;
  PersonRelationshipFromPersonRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationNotesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelation>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationNotesRelationMentionsRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationMentionsRelation>;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationNotesRelationPersonRelation>;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationRelationshipsFromRelation>;
  PersonRelationshipFromPersonRelationRelationshipsToRelation: ResolverTypeWrapper<PersonRelationshipFromPersonRelationRelationshipsToRelation>;
  PersonRelationshipToPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelation>;
  PersonRelationshipToPersonRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationActivitiesRelation>;
  PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipToPersonRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationActivitiesRelationPersonRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation>;
  PersonRelationshipToPersonRelationInteractionsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelation>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipToPersonRelationInteractionsRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationInteractionsRelationPersonRelation>;
  PersonRelationshipToPersonRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationLabelsRelation>;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation>;
  PersonRelationshipToPersonRelationNotesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelation>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation: ResolverTypeWrapper<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation>;
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
  UpdateActivityInput: UpdateActivityInput;
  UpdateActivityTagInput: UpdateActivityTagInput;
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
  ActivitiesCreatedAtFilters: ActivitiesCreatedAtFilters;
  ActivitiesCreatedAtFiltersOr: ActivitiesCreatedAtFiltersOr;
  ActivitiesDescriptionFilters: ActivitiesDescriptionFilters;
  ActivitiesDescriptionFiltersOr: ActivitiesDescriptionFiltersOr;
  ActivitiesFilters: ActivitiesFilters;
  ActivitiesFiltersOr: ActivitiesFiltersOr;
  ActivitiesIdFilters: ActivitiesIdFilters;
  ActivitiesIdFiltersOr: ActivitiesIdFiltersOr;
  ActivitiesLocationFilters: ActivitiesLocationFilters;
  ActivitiesLocationFiltersOr: ActivitiesLocationFiltersOr;
  ActivitiesOccurredAtFilters: ActivitiesOccurredAtFilters;
  ActivitiesOccurredAtFiltersOr: ActivitiesOccurredAtFiltersOr;
  ActivitiesOrderBy: ActivitiesOrderBy;
  ActivitiesPersonIdFilters: ActivitiesPersonIdFilters;
  ActivitiesPersonIdFiltersOr: ActivitiesPersonIdFiltersOr;
  ActivitiesTitleFilters: ActivitiesTitleFilters;
  ActivitiesTitleFiltersOr: ActivitiesTitleFiltersOr;
  Activity: Activity;
  ActivityLabelsRelation: ActivityLabelsRelation;
  ActivityLabelsRelationActivitiesRelation: ActivityLabelsRelationActivitiesRelation;
  ActivityPersonRelation: ActivityPersonRelation;
  ActivityPersonRelationActivitiesRelation: ActivityPersonRelationActivitiesRelation;
  ActivityPersonRelationImportantDatesRelation: ActivityPersonRelationImportantDatesRelation;
  ActivityPersonRelationImportantDatesRelationLabelsRelation: ActivityPersonRelationImportantDatesRelationLabelsRelation;
  ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation;
  ActivityPersonRelationImportantDatesRelationPersonRelation: ActivityPersonRelationImportantDatesRelationPersonRelation;
  ActivityPersonRelationInteractionsRelation: ActivityPersonRelationInteractionsRelation;
  ActivityPersonRelationInteractionsRelationLabelsRelation: ActivityPersonRelationInteractionsRelationLabelsRelation;
  ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation: ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation;
  ActivityPersonRelationInteractionsRelationPersonRelation: ActivityPersonRelationInteractionsRelationPersonRelation;
  ActivityPersonRelationLabelsRelation: ActivityPersonRelationLabelsRelation;
  ActivityPersonRelationLabelsRelationActivitiesRelation: ActivityPersonRelationLabelsRelationActivitiesRelation;
  ActivityPersonRelationMentionedInNotesRelation: ActivityPersonRelationMentionedInNotesRelation;
  ActivityPersonRelationMentionedInNotesRelationLabelsRelation: ActivityPersonRelationMentionedInNotesRelationLabelsRelation;
  ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation;
  ActivityPersonRelationMentionedInNotesRelationMentionsRelation: ActivityPersonRelationMentionedInNotesRelationMentionsRelation;
  ActivityPersonRelationMentionedInNotesRelationPersonRelation: ActivityPersonRelationMentionedInNotesRelationPersonRelation;
  ActivityPersonRelationNotesRelation: ActivityPersonRelationNotesRelation;
  ActivityPersonRelationNotesRelationLabelsRelation: ActivityPersonRelationNotesRelationLabelsRelation;
  ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation: ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation;
  ActivityPersonRelationNotesRelationMentionsRelation: ActivityPersonRelationNotesRelationMentionsRelation;
  ActivityPersonRelationNotesRelationPersonRelation: ActivityPersonRelationNotesRelationPersonRelation;
  ActivityPersonRelationRelationshipsFromRelation: ActivityPersonRelationRelationshipsFromRelation;
  ActivityPersonRelationRelationshipsFromRelationFromPersonRelation: ActivityPersonRelationRelationshipsFromRelationFromPersonRelation;
  ActivityPersonRelationRelationshipsFromRelationToPersonRelation: ActivityPersonRelationRelationshipsFromRelationToPersonRelation;
  ActivityPersonRelationRelationshipsToRelation: ActivityPersonRelationRelationshipsToRelation;
  ActivityPersonRelationRelationshipsToRelationFromPersonRelation: ActivityPersonRelationRelationshipsToRelationFromPersonRelation;
  ActivityPersonRelationRelationshipsToRelationToPersonRelation: ActivityPersonRelationRelationshipsToRelationToPersonRelation;
  ActivityTag: ActivityTag;
  ActivityTagsActivityIdFilters: ActivityTagsActivityIdFilters;
  ActivityTagsActivityIdFiltersOr: ActivityTagsActivityIdFiltersOr;
  ActivityTagsFilters: ActivityTagsFilters;
  ActivityTagsFiltersOr: ActivityTagsFiltersOr;
  ActivityTagsLabelIdFilters: ActivityTagsLabelIdFilters;
  ActivityTagsLabelIdFiltersOr: ActivityTagsLabelIdFiltersOr;
  ActivityTagsOrderBy: ActivityTagsOrderBy;
  Boolean: Scalars['Boolean']['output'];
  CreateActivityInput: CreateActivityInput;
  CreateActivityTagInput: CreateActivityTagInput;
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
  ImportantDateLabelsRelationActivitiesRelation: ImportantDateLabelsRelationActivitiesRelation;
  ImportantDateLabelsRelationActivitiesRelationLabelsRelation: ImportantDateLabelsRelationActivitiesRelationLabelsRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation;
  ImportantDatePersonRelation: ImportantDatePersonRelation;
  ImportantDatePersonRelationActivitiesRelation: ImportantDatePersonRelationActivitiesRelation;
  ImportantDatePersonRelationActivitiesRelationLabelsRelation: ImportantDatePersonRelationActivitiesRelationLabelsRelation;
  ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation: ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation;
  ImportantDatePersonRelationActivitiesRelationPersonRelation: ImportantDatePersonRelationActivitiesRelationPersonRelation;
  ImportantDatePersonRelationImportantDatesRelation: ImportantDatePersonRelationImportantDatesRelation;
  ImportantDatePersonRelationInteractionsRelation: ImportantDatePersonRelationInteractionsRelation;
  ImportantDatePersonRelationInteractionsRelationLabelsRelation: ImportantDatePersonRelationInteractionsRelationLabelsRelation;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation: ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation;
  ImportantDatePersonRelationInteractionsRelationPersonRelation: ImportantDatePersonRelationInteractionsRelationPersonRelation;
  ImportantDatePersonRelationLabelsRelation: ImportantDatePersonRelationLabelsRelation;
  ImportantDatePersonRelationLabelsRelationActivitiesRelation: ImportantDatePersonRelationLabelsRelationActivitiesRelation;
  ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation: ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation;
  ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation: ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation;
  ImportantDatePersonRelationMentionedInNotesRelation: ImportantDatePersonRelationMentionedInNotesRelation;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation;
  ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation: ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation;
  ImportantDatePersonRelationMentionedInNotesRelationPersonRelation: ImportantDatePersonRelationMentionedInNotesRelationPersonRelation;
  ImportantDatePersonRelationNotesRelation: ImportantDatePersonRelationNotesRelation;
  ImportantDatePersonRelationNotesRelationLabelsRelation: ImportantDatePersonRelationNotesRelationLabelsRelation;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation: ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation: ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation: ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation;
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
  InteractionLabelsRelationActivitiesRelation: InteractionLabelsRelationActivitiesRelation;
  InteractionLabelsRelationActivitiesRelationLabelsRelation: InteractionLabelsRelationActivitiesRelationLabelsRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelation: InteractionLabelsRelationActivitiesRelationPersonRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation: InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation: InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation: InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation: InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation: InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation: InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation: InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation: InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation: InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation: InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation: InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation: InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation: InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation: InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation;
  InteractionPersonRelation: InteractionPersonRelation;
  InteractionPersonRelationActivitiesRelation: InteractionPersonRelationActivitiesRelation;
  InteractionPersonRelationActivitiesRelationLabelsRelation: InteractionPersonRelationActivitiesRelationLabelsRelation;
  InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation: InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation;
  InteractionPersonRelationActivitiesRelationPersonRelation: InteractionPersonRelationActivitiesRelationPersonRelation;
  InteractionPersonRelationImportantDatesRelation: InteractionPersonRelationImportantDatesRelation;
  InteractionPersonRelationImportantDatesRelationLabelsRelation: InteractionPersonRelationImportantDatesRelationLabelsRelation;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation;
  InteractionPersonRelationImportantDatesRelationPersonRelation: InteractionPersonRelationImportantDatesRelationPersonRelation;
  InteractionPersonRelationInteractionsRelation: InteractionPersonRelationInteractionsRelation;
  InteractionPersonRelationLabelsRelation: InteractionPersonRelationLabelsRelation;
  InteractionPersonRelationLabelsRelationActivitiesRelation: InteractionPersonRelationLabelsRelationActivitiesRelation;
  InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation: InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation;
  InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation: InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation;
  InteractionPersonRelationMentionedInNotesRelation: InteractionPersonRelationMentionedInNotesRelation;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelation: InteractionPersonRelationMentionedInNotesRelationLabelsRelation;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation;
  InteractionPersonRelationMentionedInNotesRelationMentionsRelation: InteractionPersonRelationMentionedInNotesRelationMentionsRelation;
  InteractionPersonRelationMentionedInNotesRelationPersonRelation: InteractionPersonRelationMentionedInNotesRelationPersonRelation;
  InteractionPersonRelationNotesRelation: InteractionPersonRelationNotesRelation;
  InteractionPersonRelationNotesRelationLabelsRelation: InteractionPersonRelationNotesRelationLabelsRelation;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation: InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation: InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation: InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation;
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
  LabelActivitiesRelation: LabelActivitiesRelation;
  LabelActivitiesRelationLabelsRelation: LabelActivitiesRelationLabelsRelation;
  LabelActivitiesRelationPersonRelation: LabelActivitiesRelationPersonRelation;
  LabelActivitiesRelationPersonRelationActivitiesRelation: LabelActivitiesRelationPersonRelationActivitiesRelation;
  LabelActivitiesRelationPersonRelationImportantDatesRelation: LabelActivitiesRelationPersonRelationImportantDatesRelation;
  LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation: LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation;
  LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation: LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation;
  LabelActivitiesRelationPersonRelationInteractionsRelation: LabelActivitiesRelationPersonRelationInteractionsRelation;
  LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation: LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation;
  LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation: LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation;
  LabelActivitiesRelationPersonRelationLabelsRelation: LabelActivitiesRelationPersonRelationLabelsRelation;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelation: LabelActivitiesRelationPersonRelationMentionedInNotesRelation;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation: LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation: LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation: LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation;
  LabelActivitiesRelationPersonRelationNotesRelation: LabelActivitiesRelationPersonRelationNotesRelation;
  LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation: LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation;
  LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation: LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation;
  LabelActivitiesRelationPersonRelationNotesRelationPersonRelation: LabelActivitiesRelationPersonRelationNotesRelationPersonRelation;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelation: LabelActivitiesRelationPersonRelationRelationshipsFromRelation;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation: LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation: LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation;
  LabelActivitiesRelationPersonRelationRelationshipsToRelation: LabelActivitiesRelationPersonRelationRelationshipsToRelation;
  LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation: LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation;
  LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation: LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation;
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
  NoteLabelsRelationActivitiesRelation: NoteLabelsRelationActivitiesRelation;
  NoteLabelsRelationActivitiesRelationLabelsRelation: NoteLabelsRelationActivitiesRelationLabelsRelation;
  NoteLabelsRelationActivitiesRelationPersonRelation: NoteLabelsRelationActivitiesRelationPersonRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation: NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation: NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation: NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation: NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation: NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation: NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation: NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation: NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation: NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation: NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation;
  NoteMention: NoteMention;
  NoteMentionsFilters: NoteMentionsFilters;
  NoteMentionsFiltersOr: NoteMentionsFiltersOr;
  NoteMentionsMentionedPersonIdFilters: NoteMentionsMentionedPersonIdFilters;
  NoteMentionsMentionedPersonIdFiltersOr: NoteMentionsMentionedPersonIdFiltersOr;
  NoteMentionsNoteIdFilters: NoteMentionsNoteIdFilters;
  NoteMentionsNoteIdFiltersOr: NoteMentionsNoteIdFiltersOr;
  NoteMentionsOrderBy: NoteMentionsOrderBy;
  NoteMentionsRelation: NoteMentionsRelation;
  NoteMentionsRelationActivitiesRelation: NoteMentionsRelationActivitiesRelation;
  NoteMentionsRelationActivitiesRelationLabelsRelation: NoteMentionsRelationActivitiesRelationLabelsRelation;
  NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation: NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation;
  NoteMentionsRelationActivitiesRelationPersonRelation: NoteMentionsRelationActivitiesRelationPersonRelation;
  NoteMentionsRelationImportantDatesRelation: NoteMentionsRelationImportantDatesRelation;
  NoteMentionsRelationImportantDatesRelationLabelsRelation: NoteMentionsRelationImportantDatesRelationLabelsRelation;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation: NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation;
  NoteMentionsRelationImportantDatesRelationPersonRelation: NoteMentionsRelationImportantDatesRelationPersonRelation;
  NoteMentionsRelationInteractionsRelation: NoteMentionsRelationInteractionsRelation;
  NoteMentionsRelationInteractionsRelationLabelsRelation: NoteMentionsRelationInteractionsRelationLabelsRelation;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation: NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation;
  NoteMentionsRelationInteractionsRelationPersonRelation: NoteMentionsRelationInteractionsRelationPersonRelation;
  NoteMentionsRelationLabelsRelation: NoteMentionsRelationLabelsRelation;
  NoteMentionsRelationLabelsRelationActivitiesRelation: NoteMentionsRelationLabelsRelationActivitiesRelation;
  NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation: NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation;
  NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation: NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation;
  NoteMentionsRelationMentionedInNotesRelation: NoteMentionsRelationMentionedInNotesRelation;
  NoteMentionsRelationNotesRelation: NoteMentionsRelationNotesRelation;
  NoteMentionsRelationRelationshipsFromRelation: NoteMentionsRelationRelationshipsFromRelation;
  NoteMentionsRelationRelationshipsFromRelationFromPersonRelation: NoteMentionsRelationRelationshipsFromRelationFromPersonRelation;
  NoteMentionsRelationRelationshipsFromRelationToPersonRelation: NoteMentionsRelationRelationshipsFromRelationToPersonRelation;
  NoteMentionsRelationRelationshipsToRelation: NoteMentionsRelationRelationshipsToRelation;
  NoteMentionsRelationRelationshipsToRelationFromPersonRelation: NoteMentionsRelationRelationshipsToRelationFromPersonRelation;
  NoteMentionsRelationRelationshipsToRelationToPersonRelation: NoteMentionsRelationRelationshipsToRelationToPersonRelation;
  NotePersonRelation: NotePersonRelation;
  NotePersonRelationActivitiesRelation: NotePersonRelationActivitiesRelation;
  NotePersonRelationActivitiesRelationLabelsRelation: NotePersonRelationActivitiesRelationLabelsRelation;
  NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation: NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation;
  NotePersonRelationActivitiesRelationPersonRelation: NotePersonRelationActivitiesRelationPersonRelation;
  NotePersonRelationImportantDatesRelation: NotePersonRelationImportantDatesRelation;
  NotePersonRelationImportantDatesRelationLabelsRelation: NotePersonRelationImportantDatesRelationLabelsRelation;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation;
  NotePersonRelationImportantDatesRelationPersonRelation: NotePersonRelationImportantDatesRelationPersonRelation;
  NotePersonRelationInteractionsRelation: NotePersonRelationInteractionsRelation;
  NotePersonRelationInteractionsRelationLabelsRelation: NotePersonRelationInteractionsRelationLabelsRelation;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation: NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation;
  NotePersonRelationInteractionsRelationPersonRelation: NotePersonRelationInteractionsRelationPersonRelation;
  NotePersonRelationLabelsRelation: NotePersonRelationLabelsRelation;
  NotePersonRelationLabelsRelationActivitiesRelation: NotePersonRelationLabelsRelationActivitiesRelation;
  NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation: NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation;
  NotePersonRelationLabelsRelationActivitiesRelationPersonRelation: NotePersonRelationLabelsRelationActivitiesRelationPersonRelation;
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
  PersonActivitiesRelation: PersonActivitiesRelation;
  PersonActivitiesRelationLabelsRelation: PersonActivitiesRelationLabelsRelation;
  PersonActivitiesRelationLabelsRelationActivitiesRelation: PersonActivitiesRelationLabelsRelationActivitiesRelation;
  PersonActivitiesRelationPersonRelation: PersonActivitiesRelationPersonRelation;
  PersonImportantDatesRelation: PersonImportantDatesRelation;
  PersonImportantDatesRelationLabelsRelation: PersonImportantDatesRelationLabelsRelation;
  PersonImportantDatesRelationLabelsRelationActivitiesRelation: PersonImportantDatesRelationLabelsRelationActivitiesRelation;
  PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonImportantDatesRelationPersonRelation: PersonImportantDatesRelationPersonRelation;
  PersonInteractionsRelation: PersonInteractionsRelation;
  PersonInteractionsRelationLabelsRelation: PersonInteractionsRelationLabelsRelation;
  PersonInteractionsRelationLabelsRelationActivitiesRelation: PersonInteractionsRelationLabelsRelationActivitiesRelation;
  PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation;
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
  PersonLabelsRelationActivitiesRelation: PersonLabelsRelationActivitiesRelation;
  PersonLabelsRelationActivitiesRelationLabelsRelation: PersonLabelsRelationActivitiesRelationLabelsRelation;
  PersonLabelsRelationActivitiesRelationPersonRelation: PersonLabelsRelationActivitiesRelationPersonRelation;
  PersonMentionedInNotesRelation: PersonMentionedInNotesRelation;
  PersonMentionedInNotesRelationLabelsRelation: PersonMentionedInNotesRelationLabelsRelation;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelation: PersonMentionedInNotesRelationLabelsRelationActivitiesRelation;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonMentionedInNotesRelationMentionsRelation: PersonMentionedInNotesRelationMentionsRelation;
  PersonMentionedInNotesRelationPersonRelation: PersonMentionedInNotesRelationPersonRelation;
  PersonNotesRelation: PersonNotesRelation;
  PersonNotesRelationLabelsRelation: PersonNotesRelationLabelsRelation;
  PersonNotesRelationLabelsRelationActivitiesRelation: PersonNotesRelationLabelsRelationActivitiesRelation;
  PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation: PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonNotesRelationMentionsRelation: PersonNotesRelationMentionsRelation;
  PersonNotesRelationPersonRelation: PersonNotesRelationPersonRelation;
  PersonRelationship: PersonRelationship;
  PersonRelationshipEntry: PersonRelationshipEntry;
  PersonRelationshipFromPersonRelation: PersonRelationshipFromPersonRelation;
  PersonRelationshipFromPersonRelationActivitiesRelation: PersonRelationshipFromPersonRelationActivitiesRelation;
  PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation: PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation: PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation;
  PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation: PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelation: PersonRelationshipFromPersonRelationImportantDatesRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation: PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation;
  PersonRelationshipFromPersonRelationInteractionsRelation: PersonRelationshipFromPersonRelationInteractionsRelation;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation: PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation;
  PersonRelationshipFromPersonRelationLabelsRelation: PersonRelationshipFromPersonRelationLabelsRelation;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation: PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation: PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation;
  PersonRelationshipFromPersonRelationNotesRelation: PersonRelationshipFromPersonRelationNotesRelation;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation: PersonRelationshipFromPersonRelationNotesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipFromPersonRelationNotesRelationMentionsRelation: PersonRelationshipFromPersonRelationNotesRelationMentionsRelation;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation: PersonRelationshipFromPersonRelationNotesRelationPersonRelation;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation: PersonRelationshipFromPersonRelationRelationshipsFromRelation;
  PersonRelationshipFromPersonRelationRelationshipsToRelation: PersonRelationshipFromPersonRelationRelationshipsToRelation;
  PersonRelationshipToPersonRelation: PersonRelationshipToPersonRelation;
  PersonRelationshipToPersonRelationActivitiesRelation: PersonRelationshipToPersonRelationActivitiesRelation;
  PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation: PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation;
  PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation: PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation;
  PersonRelationshipToPersonRelationActivitiesRelationPersonRelation: PersonRelationshipToPersonRelationActivitiesRelationPersonRelation;
  PersonRelationshipToPersonRelationImportantDatesRelation: PersonRelationshipToPersonRelationImportantDatesRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation: PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation;
  PersonRelationshipToPersonRelationInteractionsRelation: PersonRelationshipToPersonRelationInteractionsRelation;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipToPersonRelationInteractionsRelationPersonRelation: PersonRelationshipToPersonRelationInteractionsRelationPersonRelation;
  PersonRelationshipToPersonRelationLabelsRelation: PersonRelationshipToPersonRelationLabelsRelation;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation: PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelation: PersonRelationshipToPersonRelationMentionedInNotesRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation;
  PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation: PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation;
  PersonRelationshipToPersonRelationNotesRelation: PersonRelationshipToPersonRelationNotesRelation;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation: PersonRelationshipToPersonRelationNotesRelationLabelsRelation;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation: PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation: PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation: PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation;
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
  UpdateActivityInput: UpdateActivityInput;
  UpdateActivityTagInput: UpdateActivityTagInput;
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

export type ActivityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ActivityLabelsRelation']>, ParentType, ContextType, Partial<ActivityLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ActivityPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityLabelsRelation'] = ResolversParentTypes['ActivityLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ActivityLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ActivityLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityLabelsRelationActivitiesRelation'] = ResolversParentTypes['ActivityLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelation'] = ResolversParentTypes['ActivityPersonRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ActivityPersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationActivitiesArgs>>;
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['ActivityPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['ActivityPersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['ActivityPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['ActivityPersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['ActivityPersonRelationNotesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['ActivityPersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['ActivityPersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationActivitiesRelation'] = ResolversParentTypes['ActivityPersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationImportantDatesRelation'] = ResolversParentTypes['ActivityPersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ActivityPersonRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ActivityPersonRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ActivityPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['ActivityPersonRelationImportantDatesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['ActivityPersonRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationInteractionsRelation'] = ResolversParentTypes['ActivityPersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ActivityPersonRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ActivityPersonRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ActivityPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['ActivityPersonRelationInteractionsRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['ActivityPersonRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationLabelsRelation'] = ResolversParentTypes['ActivityPersonRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ActivityPersonRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ActivityPersonRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelation'] = ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ActivityPersonRelationMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['ActivityPersonRelationMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['ActivityPersonRelationMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ActivityPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['ActivityPersonRelationMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationNotesRelation'] = ResolversParentTypes['ActivityPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ActivityPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['ActivityPersonRelationNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['ActivityPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ActivityPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['ActivityPersonRelationNotesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationNotesRelationMentionsRelation'] = ResolversParentTypes['ActivityPersonRelationNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['ActivityPersonRelationNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationRelationshipsFromRelation'] = ResolversParentTypes['ActivityPersonRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['ActivityPersonRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['ActivityPersonRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['ActivityPersonRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['ActivityPersonRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationRelationshipsToRelation'] = ResolversParentTypes['ActivityPersonRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['ActivityPersonRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['ActivityPersonRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<ActivityPersonRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['ActivityPersonRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityPersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['ActivityPersonRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityTag'] = ResolversParentTypes['ActivityTag']> = {
  activityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesArgs>>;
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelation'] = ResolversParentTypes['ImportantDatePersonRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationActivitiesArgs>>;
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

export type ImportantDatePersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationActivitiesRelation'] = ResolversParentTypes['ImportantDatePersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationActivitiesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelation']> = {
  activities?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesArgs>>;
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelation'] = ResolversParentTypes['InteractionPersonRelation']> = {
  activities?: Resolver<Array<ResolversTypes['InteractionPersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationActivitiesArgs>>;
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

export type InteractionPersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationActivitiesRelation'] = ResolversParentTypes['InteractionPersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationActivitiesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['InteractionPersonRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['InteractionPersonRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['InteractionPersonRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['LabelActivitiesRelation']>, ParentType, ContextType, Partial<LabelActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelation'] = ResolversParentTypes['LabelActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['LabelActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationLabelsRelation'] = ResolversParentTypes['LabelActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelation']> = {
  activities?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationActivitiesArgs>>;
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationNotesRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationActivitiesRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationImportantDatesRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationInteractionsRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationLabelsRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationNotesRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationNotesRelationLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationNotesRelationMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelationNotesRelationPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationNotesRelationPersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationNotesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationNotesRelationMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationNotesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationNotesRelationPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationNotesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActivities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationCreateActivitiesArgs, 'values'>>;
  createActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationCreateActivityArgs, 'values'>>;
  createActivityTag?: Resolver<Maybe<ResolversTypes['ActivityTag']>, ParentType, ContextType, RequireFields<MutationCreateActivityTagArgs, 'values'>>;
  createActivityTags?: Resolver<Array<ResolversTypes['ActivityTag']>, ParentType, ContextType, RequireFields<MutationCreateActivityTagsArgs, 'values'>>;
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
  deleteActivities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, Partial<MutationDeleteActivitiesArgs>>;
  deleteActivityTags?: Resolver<Array<ResolversTypes['ActivityTag']>, ParentType, ContextType, Partial<MutationDeleteActivityTagsArgs>>;
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
  updateActivities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationUpdateActivitiesArgs, 'set'>>;
  updateActivityTags?: Resolver<Array<ResolversTypes['ActivityTag']>, ParentType, ContextType, RequireFields<MutationUpdateActivityTagsArgs, 'set'>>;
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
  activities?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelation']> = {
  activities?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationActivitiesArgs>>;
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationNotesArgs>>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationNotesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation']>, ParentType, ContextType, Partial<NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonArgs>>;
  toPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation'] = ResolversParentTypes['NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMention'] = ResolversParentTypes['NoteMention']> = {
  mentionedPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  noteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelation'] = ResolversParentTypes['NoteMentionsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['NoteMentionsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationActivitiesArgs>>;
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

export type NoteMentionsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationActivitiesRelation'] = ResolversParentTypes['NoteMentionsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteMentionsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NoteMentionsRelationActivitiesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NoteMentionsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['NoteMentionsRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['NoteMentionsRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NoteMentionsRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['NotePersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<NotePersonRelationActivitiesArgs>>;
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

export type NotePersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationActivitiesRelation'] = ResolversParentTypes['NotePersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NotePersonRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NotePersonRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NotePersonRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NotePersonRelationActivitiesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NotePersonRelationActivitiesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NotePersonRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NotePersonRelationInteractionsRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['NotePersonRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<NotePersonRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['NotePersonRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<NotePersonRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['NotePersonRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<NotePersonRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotePersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotePersonRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['NotePersonRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonActivitiesRelation']>, ParentType, ContextType, Partial<PersonActivitiesArgs>>;
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

export type PersonActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonActivitiesRelation'] = ResolversParentTypes['PersonActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonActivitiesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['PersonActivitiesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonActivitiesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonActivitiesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonActivitiesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonImportantDatesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonInteractionsRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonInteractionsRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonInteractionsRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonInteractionsRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonInteractionsRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonMentionedInNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationActivitiesArgs>>;
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

export type PersonRelationshipFromPersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationActivitiesArgs>>;
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

export type PersonRelationshipToPersonRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation']> = {
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activities?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation']>, ParentType, ContextType, Partial<PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation'] = ResolversParentTypes['PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation']> = {
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, Partial<QueryActivityArgs>>;
  activityTag?: Resolver<Maybe<ResolversTypes['ActivityTag']>, ParentType, ContextType, Partial<QueryActivityTagArgs>>;
  activityTags?: Resolver<Array<ResolversTypes['ActivityTag']>, ParentType, ContextType, Partial<QueryActivityTagsArgs>>;
  activitys?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, Partial<QueryActivitysArgs>>;
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
  Activity?: ActivityResolvers<ContextType>;
  ActivityLabelsRelation?: ActivityLabelsRelationResolvers<ContextType>;
  ActivityLabelsRelationActivitiesRelation?: ActivityLabelsRelationActivitiesRelationResolvers<ContextType>;
  ActivityPersonRelation?: ActivityPersonRelationResolvers<ContextType>;
  ActivityPersonRelationActivitiesRelation?: ActivityPersonRelationActivitiesRelationResolvers<ContextType>;
  ActivityPersonRelationImportantDatesRelation?: ActivityPersonRelationImportantDatesRelationResolvers<ContextType>;
  ActivityPersonRelationImportantDatesRelationLabelsRelation?: ActivityPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation?: ActivityPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ActivityPersonRelationImportantDatesRelationPersonRelation?: ActivityPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  ActivityPersonRelationInteractionsRelation?: ActivityPersonRelationInteractionsRelationResolvers<ContextType>;
  ActivityPersonRelationInteractionsRelationLabelsRelation?: ActivityPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelation?: ActivityPersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ActivityPersonRelationInteractionsRelationPersonRelation?: ActivityPersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  ActivityPersonRelationLabelsRelation?: ActivityPersonRelationLabelsRelationResolvers<ContextType>;
  ActivityPersonRelationLabelsRelationActivitiesRelation?: ActivityPersonRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ActivityPersonRelationMentionedInNotesRelation?: ActivityPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  ActivityPersonRelationMentionedInNotesRelationLabelsRelation?: ActivityPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation?: ActivityPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ActivityPersonRelationMentionedInNotesRelationMentionsRelation?: ActivityPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  ActivityPersonRelationMentionedInNotesRelationPersonRelation?: ActivityPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  ActivityPersonRelationNotesRelation?: ActivityPersonRelationNotesRelationResolvers<ContextType>;
  ActivityPersonRelationNotesRelationLabelsRelation?: ActivityPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelation?: ActivityPersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ActivityPersonRelationNotesRelationMentionsRelation?: ActivityPersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  ActivityPersonRelationNotesRelationPersonRelation?: ActivityPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  ActivityPersonRelationRelationshipsFromRelation?: ActivityPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  ActivityPersonRelationRelationshipsFromRelationFromPersonRelation?: ActivityPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  ActivityPersonRelationRelationshipsFromRelationToPersonRelation?: ActivityPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  ActivityPersonRelationRelationshipsToRelation?: ActivityPersonRelationRelationshipsToRelationResolvers<ContextType>;
  ActivityPersonRelationRelationshipsToRelationFromPersonRelation?: ActivityPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  ActivityPersonRelationRelationshipsToRelationToPersonRelation?: ActivityPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  ActivityTag?: ActivityTagResolvers<ContextType>;
  ImportantDate?: ImportantDateResolvers<ContextType>;
  ImportantDateLabelsRelation?: ImportantDateLabelsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelation?: ImportantDateLabelsRelationActivitiesRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationLabelsRelation?: ImportantDateLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationActivitiesRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationLabelsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation?: ImportantDateLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelation?: ImportantDatePersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationActivitiesRelation?: ImportantDatePersonRelationActivitiesRelationResolvers<ContextType>;
  ImportantDatePersonRelationActivitiesRelationLabelsRelation?: ImportantDatePersonRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelation?: ImportantDatePersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ImportantDatePersonRelationActivitiesRelationPersonRelation?: ImportantDatePersonRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationImportantDatesRelation?: ImportantDatePersonRelationImportantDatesRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelation?: ImportantDatePersonRelationInteractionsRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelation?: ImportantDatePersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelation?: ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation?: ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation?: ImportantDatePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationInteractionsRelationPersonRelation?: ImportantDatePersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationLabelsRelation?: ImportantDatePersonRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationLabelsRelationActivitiesRelation?: ImportantDatePersonRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelation?: ImportantDatePersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelation?: ImportantDatePersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelation?: ImportantDatePersonRelationMentionedInNotesRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelation?: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation?: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation?: ImportantDatePersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationMentionsRelation?: ImportantDatePersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  ImportantDatePersonRelationMentionedInNotesRelationPersonRelation?: ImportantDatePersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelation?: ImportantDatePersonRelationNotesRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationLabelsRelation?: ImportantDatePersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelation?: ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation?: ImportantDatePersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
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
  InteractionLabelsRelationActivitiesRelation?: InteractionLabelsRelationActivitiesRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationLabelsRelation?: InteractionLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationActivitiesRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationInteractionsRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationLabelsRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation?: InteractionLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  InteractionPersonRelation?: InteractionPersonRelationResolvers<ContextType>;
  InteractionPersonRelationActivitiesRelation?: InteractionPersonRelationActivitiesRelationResolvers<ContextType>;
  InteractionPersonRelationActivitiesRelationLabelsRelation?: InteractionPersonRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelation?: InteractionPersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  InteractionPersonRelationActivitiesRelationPersonRelation?: InteractionPersonRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelation?: InteractionPersonRelationImportantDatesRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelationLabelsRelation?: InteractionPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation?: InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation?: InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation?: InteractionPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationImportantDatesRelationPersonRelation?: InteractionPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationInteractionsRelation?: InteractionPersonRelationInteractionsRelationResolvers<ContextType>;
  InteractionPersonRelationLabelsRelation?: InteractionPersonRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationLabelsRelationActivitiesRelation?: InteractionPersonRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelation?: InteractionPersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelation?: InteractionPersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelation?: InteractionPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelation?: InteractionPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation?: InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation?: InteractionPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationMentionsRelation?: InteractionPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  InteractionPersonRelationMentionedInNotesRelationPersonRelation?: InteractionPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelation?: InteractionPersonRelationNotesRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelationLabelsRelation?: InteractionPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelation?: InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation?: InteractionPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
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
  LabelActivitiesRelation?: LabelActivitiesRelationResolvers<ContextType>;
  LabelActivitiesRelationLabelsRelation?: LabelActivitiesRelationLabelsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelation?: LabelActivitiesRelationPersonRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationActivitiesRelation?: LabelActivitiesRelationPersonRelationActivitiesRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationImportantDatesRelation?: LabelActivitiesRelationPersonRelationImportantDatesRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation?: LabelActivitiesRelationPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelation?: LabelActivitiesRelationPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationInteractionsRelation?: LabelActivitiesRelationPersonRelationInteractionsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelation?: LabelActivitiesRelationPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelation?: LabelActivitiesRelationPersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationLabelsRelation?: LabelActivitiesRelationPersonRelationLabelsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelation?: LabelActivitiesRelationPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelation?: LabelActivitiesRelationPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelation?: LabelActivitiesRelationPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelation?: LabelActivitiesRelationPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationNotesRelation?: LabelActivitiesRelationPersonRelationNotesRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationNotesRelationLabelsRelation?: LabelActivitiesRelationPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationNotesRelationMentionsRelation?: LabelActivitiesRelationPersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationNotesRelationPersonRelation?: LabelActivitiesRelationPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelation?: LabelActivitiesRelationPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation?: LabelActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation?: LabelActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationRelationshipsToRelation?: LabelActivitiesRelationPersonRelationRelationshipsToRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation?: LabelActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation?: LabelActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  NoteLabelsRelation?: NoteLabelsRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelation?: NoteLabelsRelationActivitiesRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationLabelsRelation?: NoteLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelation?: NoteLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelation?: NoteLabelsRelationActivitiesRelationPersonRelationActivitiesRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelation?: NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelation?: NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelation?: NoteLabelsRelationActivitiesRelationPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelation?: NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelation?: NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelation?: NoteLabelsRelationActivitiesRelationPersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelation?: NoteLabelsRelationActivitiesRelationPersonRelationLabelsRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelation?: NoteLabelsRelationActivitiesRelationPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationNotesRelation?: NoteLabelsRelationActivitiesRelationPersonRelationNotesRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelation?: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelation?: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelation?: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelation?: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelation?: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelation?: NoteLabelsRelationActivitiesRelationPersonRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  NoteMention?: NoteMentionResolvers<ContextType>;
  NoteMentionsRelation?: NoteMentionsRelationResolvers<ContextType>;
  NoteMentionsRelationActivitiesRelation?: NoteMentionsRelationActivitiesRelationResolvers<ContextType>;
  NoteMentionsRelationActivitiesRelationLabelsRelation?: NoteMentionsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelation?: NoteMentionsRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  NoteMentionsRelationActivitiesRelationPersonRelation?: NoteMentionsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelation?: NoteMentionsRelationImportantDatesRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelationLabelsRelation?: NoteMentionsRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelation?: NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation?: NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation?: NoteMentionsRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  NoteMentionsRelationImportantDatesRelationPersonRelation?: NoteMentionsRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelation?: NoteMentionsRelationInteractionsRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelationLabelsRelation?: NoteMentionsRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelation?: NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation?: NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation?: NoteMentionsRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  NoteMentionsRelationInteractionsRelationPersonRelation?: NoteMentionsRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  NoteMentionsRelationLabelsRelation?: NoteMentionsRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationLabelsRelationActivitiesRelation?: NoteMentionsRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelation?: NoteMentionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelation?: NoteMentionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  NoteMentionsRelationMentionedInNotesRelation?: NoteMentionsRelationMentionedInNotesRelationResolvers<ContextType>;
  NoteMentionsRelationNotesRelation?: NoteMentionsRelationNotesRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsFromRelation?: NoteMentionsRelationRelationshipsFromRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsFromRelationFromPersonRelation?: NoteMentionsRelationRelationshipsFromRelationFromPersonRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsFromRelationToPersonRelation?: NoteMentionsRelationRelationshipsFromRelationToPersonRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsToRelation?: NoteMentionsRelationRelationshipsToRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsToRelationFromPersonRelation?: NoteMentionsRelationRelationshipsToRelationFromPersonRelationResolvers<ContextType>;
  NoteMentionsRelationRelationshipsToRelationToPersonRelation?: NoteMentionsRelationRelationshipsToRelationToPersonRelationResolvers<ContextType>;
  NotePersonRelation?: NotePersonRelationResolvers<ContextType>;
  NotePersonRelationActivitiesRelation?: NotePersonRelationActivitiesRelationResolvers<ContextType>;
  NotePersonRelationActivitiesRelationLabelsRelation?: NotePersonRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelation?: NotePersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  NotePersonRelationActivitiesRelationPersonRelation?: NotePersonRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelation?: NotePersonRelationImportantDatesRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationLabelsRelation?: NotePersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelation?: NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation?: NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation?: NotePersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  NotePersonRelationImportantDatesRelationPersonRelation?: NotePersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelation?: NotePersonRelationInteractionsRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelationLabelsRelation?: NotePersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelation?: NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation?: NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation?: NotePersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  NotePersonRelationInteractionsRelationPersonRelation?: NotePersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  NotePersonRelationLabelsRelation?: NotePersonRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationLabelsRelationActivitiesRelation?: NotePersonRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  NotePersonRelationLabelsRelationActivitiesRelationLabelsRelation?: NotePersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  NotePersonRelationLabelsRelationActivitiesRelationPersonRelation?: NotePersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
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
  PersonActivitiesRelation?: PersonActivitiesRelationResolvers<ContextType>;
  PersonActivitiesRelationLabelsRelation?: PersonActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonActivitiesRelationLabelsRelationActivitiesRelation?: PersonActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonActivitiesRelationPersonRelation?: PersonActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonImportantDatesRelation?: PersonImportantDatesRelationResolvers<ContextType>;
  PersonImportantDatesRelationLabelsRelation?: PersonImportantDatesRelationLabelsRelationResolvers<ContextType>;
  PersonImportantDatesRelationLabelsRelationActivitiesRelation?: PersonImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonImportantDatesRelationPersonRelation?: PersonImportantDatesRelationPersonRelationResolvers<ContextType>;
  PersonInteractionsRelation?: PersonInteractionsRelationResolvers<ContextType>;
  PersonInteractionsRelationLabelsRelation?: PersonInteractionsRelationLabelsRelationResolvers<ContextType>;
  PersonInteractionsRelationLabelsRelationActivitiesRelation?: PersonInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelation?: PersonInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonInteractionsRelationPersonRelation?: PersonInteractionsRelationPersonRelationResolvers<ContextType>;
  PersonLabel?: PersonLabelResolvers<ContextType>;
  PersonLabelsRelation?: PersonLabelsRelationResolvers<ContextType>;
  PersonLabelsRelationActivitiesRelation?: PersonLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonLabelsRelationActivitiesRelationLabelsRelation?: PersonLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonLabelsRelationActivitiesRelationPersonRelation?: PersonLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonMentionedInNotesRelation?: PersonMentionedInNotesRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationLabelsRelation?: PersonMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelation?: PersonMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationMentionsRelation?: PersonMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  PersonMentionedInNotesRelationPersonRelation?: PersonMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  PersonNotesRelation?: PersonNotesRelationResolvers<ContextType>;
  PersonNotesRelationLabelsRelation?: PersonNotesRelationLabelsRelationResolvers<ContextType>;
  PersonNotesRelationLabelsRelationActivitiesRelation?: PersonNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonNotesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonNotesRelationMentionsRelation?: PersonNotesRelationMentionsRelationResolvers<ContextType>;
  PersonNotesRelationPersonRelation?: PersonNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationship?: PersonRelationshipResolvers<ContextType>;
  PersonRelationshipEntry?: PersonRelationshipEntryResolvers<ContextType>;
  PersonRelationshipFromPersonRelation?: PersonRelationshipFromPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationActivitiesRelation?: PersonRelationshipFromPersonRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelation?: PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelation?: PersonRelationshipFromPersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationActivitiesRelationPersonRelation?: PersonRelationshipFromPersonRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelation?: PersonRelationshipFromPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelation?: PersonRelationshipFromPersonRelationInteractionsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelation?: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelation?: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipFromPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationInteractionsRelationPersonRelation?: PersonRelationshipFromPersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationLabelsRelation?: PersonRelationshipFromPersonRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelation?: PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipFromPersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelation?: PersonRelationshipFromPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelation?: PersonRelationshipFromPersonRelationNotesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelation?: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelation?: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipFromPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationMentionsRelation?: PersonRelationshipFromPersonRelationNotesRelationMentionsRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationNotesRelationPersonRelation?: PersonRelationshipFromPersonRelationNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationRelationshipsFromRelation?: PersonRelationshipFromPersonRelationRelationshipsFromRelationResolvers<ContextType>;
  PersonRelationshipFromPersonRelationRelationshipsToRelation?: PersonRelationshipFromPersonRelationRelationshipsToRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelation?: PersonRelationshipToPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationActivitiesRelation?: PersonRelationshipToPersonRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationActivitiesRelationLabelsRelation?: PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelation?: PersonRelationshipToPersonRelationActivitiesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationActivitiesRelationPersonRelation?: PersonRelationshipToPersonRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelation?: PersonRelationshipToPersonRelationImportantDatesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelation?: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelation?: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipToPersonRelationImportantDatesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationImportantDatesRelationPersonRelation?: PersonRelationshipToPersonRelationImportantDatesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelation?: PersonRelationshipToPersonRelationInteractionsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelation?: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelation?: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipToPersonRelationInteractionsRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationInteractionsRelationPersonRelation?: PersonRelationshipToPersonRelationInteractionsRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationLabelsRelation?: PersonRelationshipToPersonRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelation?: PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipToPersonRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationMentionsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelation?: PersonRelationshipToPersonRelationMentionedInNotesRelationPersonRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelation?: PersonRelationshipToPersonRelationNotesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelation?: PersonRelationshipToPersonRelationNotesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelation?: PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelation?: PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationLabelsRelationResolvers<ContextType>;
  PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelation?: PersonRelationshipToPersonRelationNotesRelationLabelsRelationActivitiesRelationPersonRelationResolvers<ContextType>;
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

