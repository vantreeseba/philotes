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

export type ActivitiesFilters = {
  OR?: InputMaybe<Array<ActivitiesFiltersOr>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  personId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ActivitiesFiltersOr = {
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  personId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
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

export type Activity = {
  __typename?: 'Activity';
  /** JSON */
  createdAt: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<Label>;
  location: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<Person>;
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

export type ActivityTag = {
  __typename?: 'ActivityTag';
  activityId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type ActivityTagsFilters = {
  OR?: InputMaybe<Array<ActivityTagsFiltersOr>>;
  activityId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type ActivityTagsFiltersOr = {
  activityId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type ActivityTagsOrderBy = {
  activityId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type Address = {
  __typename?: 'Address';
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isPrimary: Scalars['Boolean']['output'];
  label: Maybe<Scalars['String']['output']>;
  line1: Scalars['String']['output'];
  line2: Maybe<Scalars['String']['output']>;
  person: Maybe<Person>;
  personId: Scalars['String']['output'];
  postalCode: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  type: AddressesTypeEnum;
};


export type AddressPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type AddressesFilters = {
  OR?: InputMaybe<Array<AddressesFiltersOr>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  isPrimary?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  line1?: InputMaybe<StringFilter>;
  line2?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  postalCode?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  type?: InputMaybe<AddressesTypeEnumFilter>;
};

export type AddressesFiltersOr = {
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  isPrimary?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  line1?: InputMaybe<StringFilter>;
  line2?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  postalCode?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  type?: InputMaybe<AddressesTypeEnumFilter>;
};

export type AddressesOrderBy = {
  city?: InputMaybe<InnerOrder>;
  country?: InputMaybe<InnerOrder>;
  createdAt?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  isPrimary?: InputMaybe<InnerOrder>;
  label?: InputMaybe<InnerOrder>;
  line1?: InputMaybe<InnerOrder>;
  line2?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  postalCode?: InputMaybe<InnerOrder>;
  state?: InputMaybe<InnerOrder>;
  type?: InputMaybe<InnerOrder>;
};

export enum AddressesTypeEnum {
  /** Value: home */
  Home = 'home',
  /** Value: other */
  Other = 'other',
  /** Value: work */
  Work = 'work'
}

export type AddressesTypeEnumFilter = {
  OR?: InputMaybe<Array<AddressesTypeEnumFilterOr>>;
  eq?: InputMaybe<AddressesTypeEnum>;
  gt?: InputMaybe<AddressesTypeEnum>;
  gte?: InputMaybe<AddressesTypeEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<AddressesTypeEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<AddressesTypeEnum>;
  lte?: InputMaybe<AddressesTypeEnum>;
  ne?: InputMaybe<AddressesTypeEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<AddressesTypeEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type AddressesTypeEnumFilterOr = {
  eq?: InputMaybe<AddressesTypeEnum>;
  gt?: InputMaybe<AddressesTypeEnum>;
  gte?: InputMaybe<AddressesTypeEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<AddressesTypeEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<AddressesTypeEnum>;
  lte?: InputMaybe<AddressesTypeEnum>;
  ne?: InputMaybe<AddressesTypeEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<AddressesTypeEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilter = {
  OR?: InputMaybe<Array<BooleanFilterOr>>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterOr = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  /** JSON */
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isPrimary: Scalars['Boolean']['output'];
  label: Maybe<Scalars['String']['output']>;
  person: Maybe<Person>;
  personId: Scalars['String']['output'];
  type: ContactInfosTypeEnum;
  value: Scalars['String']['output'];
};


export type ContactInfoPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type ContactInfosFilters = {
  OR?: InputMaybe<Array<ContactInfosFiltersOr>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  isPrimary?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  type?: InputMaybe<ContactInfosTypeEnumFilter>;
  value?: InputMaybe<StringFilter>;
};

export type ContactInfosFiltersOr = {
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  isPrimary?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  type?: InputMaybe<ContactInfosTypeEnumFilter>;
  value?: InputMaybe<StringFilter>;
};

export type ContactInfosOrderBy = {
  createdAt?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  isPrimary?: InputMaybe<InnerOrder>;
  label?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  type?: InputMaybe<InnerOrder>;
  value?: InputMaybe<InnerOrder>;
};

export enum ContactInfosTypeEnum {
  /** Value: email */
  Email = 'email',
  /** Value: instagram */
  Instagram = 'instagram',
  /** Value: linkedin */
  Linkedin = 'linkedin',
  /** Value: mobile */
  Mobile = 'mobile',
  /** Value: other */
  Other = 'other',
  /** Value: phone */
  Phone = 'phone',
  /** Value: twitter */
  Twitter = 'twitter',
  /** Value: website */
  Website = 'website'
}

export type ContactInfosTypeEnumFilter = {
  OR?: InputMaybe<Array<ContactInfosTypeEnumFilterOr>>;
  eq?: InputMaybe<ContactInfosTypeEnum>;
  gt?: InputMaybe<ContactInfosTypeEnum>;
  gte?: InputMaybe<ContactInfosTypeEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<ContactInfosTypeEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<ContactInfosTypeEnum>;
  lte?: InputMaybe<ContactInfosTypeEnum>;
  ne?: InputMaybe<ContactInfosTypeEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<ContactInfosTypeEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ContactInfosTypeEnumFilterOr = {
  eq?: InputMaybe<ContactInfosTypeEnum>;
  gt?: InputMaybe<ContactInfosTypeEnum>;
  gte?: InputMaybe<ContactInfosTypeEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<ContactInfosTypeEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<ContactInfosTypeEnum>;
  lte?: InputMaybe<ContactInfosTypeEnum>;
  ne?: InputMaybe<ContactInfosTypeEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<ContactInfosTypeEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
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

export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  personId: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  type: AddressesTypeEnum;
};

export type CreateContactInfoInput = {
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  personId: Scalars['String']['input'];
  type: ContactInfosTypeEnum;
  value: Scalars['String']['input'];
};

export type CreateImportantDateInput = {
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
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
  firstMetDate?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  howWeMet?: InputMaybe<Scalars['String']['input']>;
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

export type CreateTaskInput = {
  /** JSON */
  completedAt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  dueAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  personId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type DateTimeFilter = {
  OR?: InputMaybe<Array<DateTimeFilterOr>>;
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

export type DateTimeFilterOr = {
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

export type IdFilter = {
  OR?: InputMaybe<Array<IdFilterOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type IdFilterOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ImportantDate = {
  __typename?: 'ImportantDate';
  date: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<Label>;
  milestoneType: Maybe<ImportantDatesMilestoneTypeEnum>;
  name: Scalars['String']['output'];
  person: Maybe<Person>;
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

export type ImportantDateTag = {
  __typename?: 'ImportantDateTag';
  importantDateId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type ImportantDateTagsFilters = {
  OR?: InputMaybe<Array<ImportantDateTagsFiltersOr>>;
  importantDateId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type ImportantDateTagsFiltersOr = {
  importantDateId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type ImportantDateTagsOrderBy = {
  importantDateId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type ImportantDatesFilters = {
  OR?: InputMaybe<Array<ImportantDatesFiltersOr>>;
  date?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnumFilter>;
  name?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  recurrence?: InputMaybe<StringFilter>;
};

export type ImportantDatesFiltersOr = {
  date?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnumFilter>;
  name?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  recurrence?: InputMaybe<StringFilter>;
};

export enum ImportantDatesMilestoneTypeEnum {
  /** Value: divorced */
  Divorced = 'divorced',
  /** Value: graduation */
  Graduation = 'graduation',
  /** Value: health_event */
  HealthEvent = 'health_event',
  /** Value: loss */
  Loss = 'loss',
  /** Value: married */
  Married = 'married',
  /** Value: moved */
  Moved = 'moved',
  /** Value: new_baby */
  NewBaby = 'new_baby',
  /** Value: new_job */
  NewJob = 'new_job',
  /** Value: other */
  Other = 'other',
  /** Value: promotion */
  Promotion = 'promotion',
  /** Value: retired */
  Retired = 'retired'
}

export type ImportantDatesMilestoneTypeEnumFilter = {
  OR?: InputMaybe<Array<ImportantDatesMilestoneTypeEnumFilterOr>>;
  eq?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  gt?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  gte?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<ImportantDatesMilestoneTypeEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  lte?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  ne?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<ImportantDatesMilestoneTypeEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesMilestoneTypeEnumFilterOr = {
  eq?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  gt?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  gte?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<ImportantDatesMilestoneTypeEnum>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  lte?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  ne?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<ImportantDatesMilestoneTypeEnum>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDatesOrderBy = {
  date?: InputMaybe<InnerOrder>;
  description?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  milestoneType?: InputMaybe<InnerOrder>;
  name?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  recurrence?: InputMaybe<InnerOrder>;
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
  labels: Array<Label>;
  note: Maybe<Scalars['String']['output']>;
  /** JSON */
  occurredAt: Scalars['String']['output'];
  person: Maybe<Person>;
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

export type InteractionTag = {
  __typename?: 'InteractionTag';
  interactionId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type InteractionTagsFilters = {
  OR?: InputMaybe<Array<InteractionTagsFiltersOr>>;
  interactionId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type InteractionTagsFiltersOr = {
  interactionId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type InteractionTagsOrderBy = {
  interactionId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type InteractionsFilters = {
  OR?: InputMaybe<Array<InteractionsFiltersOr>>;
  channel?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  note?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  personId?: InputMaybe<IdFilter>;
  sentiment?: InputMaybe<StringFilter>;
};

export type InteractionsFiltersOr = {
  channel?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  note?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  personId?: InputMaybe<IdFilter>;
  sentiment?: InputMaybe<StringFilter>;
};

export type InteractionsOrderBy = {
  channel?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  note?: InputMaybe<InnerOrder>;
  occurredAt?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  sentiment?: InputMaybe<InnerOrder>;
};

export type Label = {
  __typename?: 'Label';
  activities: Array<Activity>;
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

export type LabelsFilters = {
  OR?: InputMaybe<Array<LabelsFiltersOr>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
};

export type LabelsFiltersOr = {
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
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
  createAddress: Maybe<Address>;
  createAddresses: Array<Address>;
  createContactInfo: Maybe<ContactInfo>;
  createContactInfos: Array<ContactInfo>;
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
  createTask: Maybe<Task>;
  createTasks: Array<Task>;
  deleteActivities: Array<Activity>;
  deleteActivityTags: Array<ActivityTag>;
  deleteAddresses: Array<Address>;
  deleteContactInfos: Array<ContactInfo>;
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
  deleteTasks: Array<Task>;
  updateActivities: Array<Activity>;
  updateActivityTags: Array<ActivityTag>;
  updateAddresses: Array<Address>;
  updateContactInfos: Array<ContactInfo>;
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
  updateTasks: Array<Task>;
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


export type MutationCreateAddressArgs = {
  values: CreateAddressInput;
};


export type MutationCreateAddressesArgs = {
  values: Array<CreateAddressInput>;
};


export type MutationCreateContactInfoArgs = {
  values: CreateContactInfoInput;
};


export type MutationCreateContactInfosArgs = {
  values: Array<CreateContactInfoInput>;
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


export type MutationCreateTaskArgs = {
  values: CreateTaskInput;
};


export type MutationCreateTasksArgs = {
  values: Array<CreateTaskInput>;
};


export type MutationDeleteActivitiesArgs = {
  where?: InputMaybe<ActivitiesFilters>;
};


export type MutationDeleteActivityTagsArgs = {
  where?: InputMaybe<ActivityTagsFilters>;
};


export type MutationDeleteAddressesArgs = {
  where?: InputMaybe<AddressesFilters>;
};


export type MutationDeleteContactInfosArgs = {
  where?: InputMaybe<ContactInfosFilters>;
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


export type MutationDeleteTasksArgs = {
  where?: InputMaybe<TasksFilters>;
};


export type MutationUpdateActivitiesArgs = {
  set: UpdateActivityInput;
  where?: InputMaybe<ActivitiesFilters>;
};


export type MutationUpdateActivityTagsArgs = {
  set: UpdateActivityTagInput;
  where?: InputMaybe<ActivityTagsFilters>;
};


export type MutationUpdateAddressesArgs = {
  set: UpdateAddressInput;
  where?: InputMaybe<AddressesFilters>;
};


export type MutationUpdateContactInfosArgs = {
  set: UpdateContactInfoInput;
  where?: InputMaybe<ContactInfosFilters>;
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


export type MutationUpdateTasksArgs = {
  set: UpdateTaskInput;
  where?: InputMaybe<TasksFilters>;
};

export type Note = {
  __typename?: 'Note';
  body: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<Label>;
  mentions: Array<Person>;
  person: Maybe<Person>;
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

export type NoteMention = {
  __typename?: 'NoteMention';
  mentionedPersonId: Scalars['String']['output'];
  noteId: Scalars['String']['output'];
};

export type NoteMentionsFilters = {
  OR?: InputMaybe<Array<NoteMentionsFiltersOr>>;
  mentionedPersonId?: InputMaybe<IdFilter>;
  noteId?: InputMaybe<IdFilter>;
};

export type NoteMentionsFiltersOr = {
  mentionedPersonId?: InputMaybe<IdFilter>;
  noteId?: InputMaybe<IdFilter>;
};

export type NoteMentionsOrderBy = {
  mentionedPersonId?: InputMaybe<InnerOrder>;
  noteId?: InputMaybe<InnerOrder>;
};

export type NoteTag = {
  __typename?: 'NoteTag';
  labelId: Scalars['String']['output'];
  noteId: Scalars['String']['output'];
};

export type NoteTagsFilters = {
  OR?: InputMaybe<Array<NoteTagsFiltersOr>>;
  labelId?: InputMaybe<IdFilter>;
  noteId?: InputMaybe<IdFilter>;
};

export type NoteTagsFiltersOr = {
  labelId?: InputMaybe<IdFilter>;
  noteId?: InputMaybe<IdFilter>;
};

export type NoteTagsOrderBy = {
  labelId?: InputMaybe<InnerOrder>;
  noteId?: InputMaybe<InnerOrder>;
};

export type NotesFilters = {
  OR?: InputMaybe<Array<NotesFiltersOr>>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
};

export type NotesFiltersOr = {
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
};

export type NotesOrderBy = {
  body?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
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
  activities: Array<Activity>;
  addresses: Array<Address>;
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  contactInfos: Array<ContactInfo>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstMetDate: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  howWeMet: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  importantDates: Array<ImportantDate>;
  interactions: Array<Interaction>;
  labels: Array<Label>;
  lastName: Scalars['String']['output'];
  mentionedInNotes: Array<Note>;
  notes: Array<Note>;
  relationships: Array<PersonRelationshipEntry>;
  relationshipsFrom: Array<PersonRelationship>;
  relationshipsTo: Array<PersonRelationship>;
  tasks: Array<Task>;
  /** JSON */
  updatedAt: Scalars['String']['output'];
};


export type PersonActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivitiesOrderBy>;
  where?: InputMaybe<ActivitiesFilters>;
};


export type PersonAddressesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressesOrderBy>;
  where?: InputMaybe<AddressesFilters>;
};


export type PersonContactInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContactInfosOrderBy>;
  where?: InputMaybe<ContactInfosFilters>;
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


export type PersonTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TasksOrderBy>;
  where?: InputMaybe<TasksFilters>;
};

export type PersonLabel = {
  __typename?: 'PersonLabel';
  labelId: Scalars['String']['output'];
  personId: Scalars['String']['output'];
};

export type PersonLabelsFilters = {
  OR?: InputMaybe<Array<PersonLabelsFiltersOr>>;
  labelId?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
};

export type PersonLabelsFiltersOr = {
  labelId?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
};

export type PersonLabelsOrderBy = {
  labelId?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
};

export type PersonRelationship = {
  __typename?: 'PersonRelationship';
  fromPerson: Maybe<Person>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<Person>;
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

export type PersonRelationshipsFilters = {
  OR?: InputMaybe<Array<PersonRelationshipsFiltersOr>>;
  fromPersonId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  toPersonId?: InputMaybe<IdFilter>;
  type?: InputMaybe<StringFilter>;
};

export type PersonRelationshipsFiltersOr = {
  fromPersonId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  toPersonId?: InputMaybe<IdFilter>;
  type?: InputMaybe<StringFilter>;
};

export type PersonRelationshipsOrderBy = {
  fromPersonId?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  toPersonId?: InputMaybe<InnerOrder>;
  type?: InputMaybe<InnerOrder>;
};

export type PersonsFilters = {
  OR?: InputMaybe<Array<PersonsFiltersOr>>;
  avatarPath?: InputMaybe<StringFilter>;
  contactFrequency?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstMetDate?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  howWeMet?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonsFiltersOr = {
  avatarPath?: InputMaybe<StringFilter>;
  contactFrequency?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstMetDate?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  howWeMet?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonsOrderBy = {
  avatarPath?: InputMaybe<InnerOrder>;
  contactFrequency?: InputMaybe<InnerOrder>;
  createdAt?: InputMaybe<InnerOrder>;
  email?: InputMaybe<InnerOrder>;
  firstMetDate?: InputMaybe<InnerOrder>;
  firstName?: InputMaybe<InnerOrder>;
  howWeMet?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  lastName?: InputMaybe<InnerOrder>;
  updatedAt?: InputMaybe<InnerOrder>;
};

export type Query = {
  __typename?: 'Query';
  activity: Maybe<Activity>;
  activityTag: Maybe<ActivityTag>;
  activityTags: Array<ActivityTag>;
  activitys: Array<Activity>;
  address: Maybe<Address>;
  addresss: Array<Address>;
  contactInfo: Maybe<ContactInfo>;
  contactInfos: Array<ContactInfo>;
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
  task: Maybe<Task>;
  tasks: Array<Task>;
  upcomingDates: Array<UpcomingDateEntry>;
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


export type QueryAddressArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressesOrderBy>;
  where?: InputMaybe<AddressesFilters>;
};


export type QueryAddresssArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressesOrderBy>;
  where?: InputMaybe<AddressesFilters>;
};


export type QueryContactInfoArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContactInfosOrderBy>;
  where?: InputMaybe<ContactInfosFilters>;
};


export type QueryContactInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContactInfosOrderBy>;
  where?: InputMaybe<ContactInfosFilters>;
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


export type QueryTaskArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TasksOrderBy>;
  where?: InputMaybe<TasksFilters>;
};


export type QueryTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TasksOrderBy>;
  where?: InputMaybe<TasksFilters>;
};


export type QueryUpcomingDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  lookaheadDays?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type StringFilter = {
  OR?: InputMaybe<Array<StringFilterOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  /** JSON */
  completedAt: Maybe<Scalars['String']['output']>;
  /** JSON */
  createdAt: Scalars['String']['output'];
  /** JSON */
  dueAt: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  notes: Maybe<Scalars['String']['output']>;
  person: Maybe<Person>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type TaskPersonArgs = {
  where?: InputMaybe<PersonsFilters>;
};

export type TasksFilters = {
  OR?: InputMaybe<Array<TasksFiltersOr>>;
  completedAt?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  notes?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TasksFiltersOr = {
  completedAt?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  notes?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TasksOrderBy = {
  completedAt?: InputMaybe<InnerOrder>;
  createdAt?: InputMaybe<InnerOrder>;
  dueAt?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  notes?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  title?: InputMaybe<InnerOrder>;
};

export type UpcomingDateEntry = {
  __typename?: 'UpcomingDateEntry';
  date: Scalars['String']['output'];
  daysUntil: Scalars['Int']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nextDate: Scalars['String']['output'];
  personFirstName: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  personLastName: Scalars['String']['output'];
  recurrence: Maybe<Scalars['String']['output']>;
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

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AddressesTypeEnum>;
};

export type UpdateContactInfoInput = {
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ContactInfosTypeEnum>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateImportantDateInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
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
  firstMetDate?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  howWeMet?: InputMaybe<Scalars['String']['input']>;
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

export type UpdateTaskInput = {
  /** JSON */
  completedAt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  dueAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  ActivitiesFilters: ActivitiesFilters;
  ActivitiesFiltersOr: ActivitiesFiltersOr;
  ActivitiesOrderBy: ActivitiesOrderBy;
  Activity: ResolverTypeWrapper<Activity>;
  ActivityTag: ResolverTypeWrapper<ActivityTag>;
  ActivityTagsFilters: ActivityTagsFilters;
  ActivityTagsFiltersOr: ActivityTagsFiltersOr;
  ActivityTagsOrderBy: ActivityTagsOrderBy;
  Address: ResolverTypeWrapper<Address>;
  AddressesFilters: AddressesFilters;
  AddressesFiltersOr: AddressesFiltersOr;
  AddressesOrderBy: AddressesOrderBy;
  AddressesTypeEnum: AddressesTypeEnum;
  AddressesTypeEnumFilter: AddressesTypeEnumFilter;
  AddressesTypeEnumFilterOr: AddressesTypeEnumFilterOr;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFilter: BooleanFilter;
  BooleanFilterOr: BooleanFilterOr;
  ContactInfo: ResolverTypeWrapper<ContactInfo>;
  ContactInfosFilters: ContactInfosFilters;
  ContactInfosFiltersOr: ContactInfosFiltersOr;
  ContactInfosOrderBy: ContactInfosOrderBy;
  ContactInfosTypeEnum: ContactInfosTypeEnum;
  ContactInfosTypeEnumFilter: ContactInfosTypeEnumFilter;
  ContactInfosTypeEnumFilterOr: ContactInfosTypeEnumFilterOr;
  CreateActivityInput: CreateActivityInput;
  CreateActivityTagInput: CreateActivityTagInput;
  CreateAddressInput: CreateAddressInput;
  CreateContactInfoInput: CreateContactInfoInput;
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
  CreateTaskInput: CreateTaskInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeFilterOr: DateTimeFilterOr;
  IdFilter: IdFilter;
  IdFilterOr: IdFilterOr;
  ImportantDate: ResolverTypeWrapper<ImportantDate>;
  ImportantDateTag: ResolverTypeWrapper<ImportantDateTag>;
  ImportantDateTagsFilters: ImportantDateTagsFilters;
  ImportantDateTagsFiltersOr: ImportantDateTagsFiltersOr;
  ImportantDateTagsOrderBy: ImportantDateTagsOrderBy;
  ImportantDatesFilters: ImportantDatesFilters;
  ImportantDatesFiltersOr: ImportantDatesFiltersOr;
  ImportantDatesMilestoneTypeEnum: ImportantDatesMilestoneTypeEnum;
  ImportantDatesMilestoneTypeEnumFilter: ImportantDatesMilestoneTypeEnumFilter;
  ImportantDatesMilestoneTypeEnumFilterOr: ImportantDatesMilestoneTypeEnumFilterOr;
  ImportantDatesOrderBy: ImportantDatesOrderBy;
  InnerOrder: InnerOrder;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Interaction: ResolverTypeWrapper<Interaction>;
  InteractionTag: ResolverTypeWrapper<InteractionTag>;
  InteractionTagsFilters: InteractionTagsFilters;
  InteractionTagsFiltersOr: InteractionTagsFiltersOr;
  InteractionTagsOrderBy: InteractionTagsOrderBy;
  InteractionsFilters: InteractionsFilters;
  InteractionsFiltersOr: InteractionsFiltersOr;
  InteractionsOrderBy: InteractionsOrderBy;
  Label: ResolverTypeWrapper<Label>;
  LabelsFilters: LabelsFilters;
  LabelsFiltersOr: LabelsFiltersOr;
  LabelsOrderBy: LabelsOrderBy;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Note: ResolverTypeWrapper<Note>;
  NoteMention: ResolverTypeWrapper<NoteMention>;
  NoteMentionsFilters: NoteMentionsFilters;
  NoteMentionsFiltersOr: NoteMentionsFiltersOr;
  NoteMentionsOrderBy: NoteMentionsOrderBy;
  NoteTag: ResolverTypeWrapper<NoteTag>;
  NoteTagsFilters: NoteTagsFilters;
  NoteTagsFiltersOr: NoteTagsFiltersOr;
  NoteTagsOrderBy: NoteTagsOrderBy;
  NotesFilters: NotesFilters;
  NotesFiltersOr: NotesFiltersOr;
  NotesOrderBy: NotesOrderBy;
  OrderDirection: OrderDirection;
  Person: ResolverTypeWrapper<Person>;
  PersonLabel: ResolverTypeWrapper<PersonLabel>;
  PersonLabelsFilters: PersonLabelsFilters;
  PersonLabelsFiltersOr: PersonLabelsFiltersOr;
  PersonLabelsOrderBy: PersonLabelsOrderBy;
  PersonRelationship: ResolverTypeWrapper<PersonRelationship>;
  PersonRelationshipEntry: ResolverTypeWrapper<PersonRelationshipEntry>;
  PersonRelationshipsFilters: PersonRelationshipsFilters;
  PersonRelationshipsFiltersOr: PersonRelationshipsFiltersOr;
  PersonRelationshipsOrderBy: PersonRelationshipsOrderBy;
  PersonsFilters: PersonsFilters;
  PersonsFiltersOr: PersonsFiltersOr;
  PersonsOrderBy: PersonsOrderBy;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFilter: StringFilter;
  StringFilterOr: StringFilterOr;
  Task: ResolverTypeWrapper<Task>;
  TasksFilters: TasksFilters;
  TasksFiltersOr: TasksFiltersOr;
  TasksOrderBy: TasksOrderBy;
  UpcomingDateEntry: ResolverTypeWrapper<UpcomingDateEntry>;
  UpdateActivityInput: UpdateActivityInput;
  UpdateActivityTagInput: UpdateActivityTagInput;
  UpdateAddressInput: UpdateAddressInput;
  UpdateContactInfoInput: UpdateContactInfoInput;
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
  UpdateTaskInput: UpdateTaskInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActivitiesFilters: ActivitiesFilters;
  ActivitiesFiltersOr: ActivitiesFiltersOr;
  ActivitiesOrderBy: ActivitiesOrderBy;
  Activity: Activity;
  ActivityTag: ActivityTag;
  ActivityTagsFilters: ActivityTagsFilters;
  ActivityTagsFiltersOr: ActivityTagsFiltersOr;
  ActivityTagsOrderBy: ActivityTagsOrderBy;
  Address: Address;
  AddressesFilters: AddressesFilters;
  AddressesFiltersOr: AddressesFiltersOr;
  AddressesOrderBy: AddressesOrderBy;
  AddressesTypeEnumFilter: AddressesTypeEnumFilter;
  AddressesTypeEnumFilterOr: AddressesTypeEnumFilterOr;
  Boolean: Scalars['Boolean']['output'];
  BooleanFilter: BooleanFilter;
  BooleanFilterOr: BooleanFilterOr;
  ContactInfo: ContactInfo;
  ContactInfosFilters: ContactInfosFilters;
  ContactInfosFiltersOr: ContactInfosFiltersOr;
  ContactInfosOrderBy: ContactInfosOrderBy;
  ContactInfosTypeEnumFilter: ContactInfosTypeEnumFilter;
  ContactInfosTypeEnumFilterOr: ContactInfosTypeEnumFilterOr;
  CreateActivityInput: CreateActivityInput;
  CreateActivityTagInput: CreateActivityTagInput;
  CreateAddressInput: CreateAddressInput;
  CreateContactInfoInput: CreateContactInfoInput;
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
  CreateTaskInput: CreateTaskInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeFilterOr: DateTimeFilterOr;
  IdFilter: IdFilter;
  IdFilterOr: IdFilterOr;
  ImportantDate: ImportantDate;
  ImportantDateTag: ImportantDateTag;
  ImportantDateTagsFilters: ImportantDateTagsFilters;
  ImportantDateTagsFiltersOr: ImportantDateTagsFiltersOr;
  ImportantDateTagsOrderBy: ImportantDateTagsOrderBy;
  ImportantDatesFilters: ImportantDatesFilters;
  ImportantDatesFiltersOr: ImportantDatesFiltersOr;
  ImportantDatesMilestoneTypeEnumFilter: ImportantDatesMilestoneTypeEnumFilter;
  ImportantDatesMilestoneTypeEnumFilterOr: ImportantDatesMilestoneTypeEnumFilterOr;
  ImportantDatesOrderBy: ImportantDatesOrderBy;
  InnerOrder: InnerOrder;
  Int: Scalars['Int']['output'];
  Interaction: Interaction;
  InteractionTag: InteractionTag;
  InteractionTagsFilters: InteractionTagsFilters;
  InteractionTagsFiltersOr: InteractionTagsFiltersOr;
  InteractionTagsOrderBy: InteractionTagsOrderBy;
  InteractionsFilters: InteractionsFilters;
  InteractionsFiltersOr: InteractionsFiltersOr;
  InteractionsOrderBy: InteractionsOrderBy;
  Label: Label;
  LabelsFilters: LabelsFilters;
  LabelsFiltersOr: LabelsFiltersOr;
  LabelsOrderBy: LabelsOrderBy;
  Mutation: Record<PropertyKey, never>;
  Note: Note;
  NoteMention: NoteMention;
  NoteMentionsFilters: NoteMentionsFilters;
  NoteMentionsFiltersOr: NoteMentionsFiltersOr;
  NoteMentionsOrderBy: NoteMentionsOrderBy;
  NoteTag: NoteTag;
  NoteTagsFilters: NoteTagsFilters;
  NoteTagsFiltersOr: NoteTagsFiltersOr;
  NoteTagsOrderBy: NoteTagsOrderBy;
  NotesFilters: NotesFilters;
  NotesFiltersOr: NotesFiltersOr;
  NotesOrderBy: NotesOrderBy;
  Person: Person;
  PersonLabel: PersonLabel;
  PersonLabelsFilters: PersonLabelsFilters;
  PersonLabelsFiltersOr: PersonLabelsFiltersOr;
  PersonLabelsOrderBy: PersonLabelsOrderBy;
  PersonRelationship: PersonRelationship;
  PersonRelationshipEntry: PersonRelationshipEntry;
  PersonRelationshipsFilters: PersonRelationshipsFilters;
  PersonRelationshipsFiltersOr: PersonRelationshipsFiltersOr;
  PersonRelationshipsOrderBy: PersonRelationshipsOrderBy;
  PersonsFilters: PersonsFilters;
  PersonsFiltersOr: PersonsFiltersOr;
  PersonsOrderBy: PersonsOrderBy;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  StringFilter: StringFilter;
  StringFilterOr: StringFilterOr;
  Task: Task;
  TasksFilters: TasksFilters;
  TasksFiltersOr: TasksFiltersOr;
  TasksOrderBy: TasksOrderBy;
  UpcomingDateEntry: UpcomingDateEntry;
  UpdateActivityInput: UpdateActivityInput;
  UpdateActivityTagInput: UpdateActivityTagInput;
  UpdateAddressInput: UpdateAddressInput;
  UpdateContactInfoInput: UpdateContactInfoInput;
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
  UpdateTaskInput: UpdateTaskInput;
};

export type ActivityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<ActivityLabelsArgs>>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<ActivityPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ActivityTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ActivityTag'] = ResolversParentTypes['ActivityTag']> = {
  activityId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AddressResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPrimary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<AddressPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AddressesTypeEnum'], ParentType, ContextType>;
};

export type ContactInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ContactInfo'] = ResolversParentTypes['ContactInfo']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPrimary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<ContactInfoPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ContactInfosTypeEnum'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImportantDateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDate'] = ResolversParentTypes['ImportantDate']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<ImportantDateLabelsArgs>>;
  milestoneType?: Resolver<Maybe<ResolversTypes['ImportantDatesMilestoneTypeEnum']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<ImportantDatePersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImportantDateTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ImportantDateTag'] = ResolversParentTypes['ImportantDateTag']> = {
  importantDateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InteractionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Interaction'] = ResolversParentTypes['Interaction']> = {
  channel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<InteractionLabelsArgs>>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<InteractionPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type InteractionTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InteractionTag'] = ResolversParentTypes['InteractionTag']> = {
  interactionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LabelResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Label'] = ResolversParentTypes['Label']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, Partial<LabelActivitiesArgs>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActivities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationCreateActivitiesArgs, 'values'>>;
  createActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationCreateActivityArgs, 'values'>>;
  createActivityTag?: Resolver<Maybe<ResolversTypes['ActivityTag']>, ParentType, ContextType, RequireFields<MutationCreateActivityTagArgs, 'values'>>;
  createActivityTags?: Resolver<Array<ResolversTypes['ActivityTag']>, ParentType, ContextType, RequireFields<MutationCreateActivityTagsArgs, 'values'>>;
  createAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<MutationCreateAddressArgs, 'values'>>;
  createAddresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<MutationCreateAddressesArgs, 'values'>>;
  createContactInfo?: Resolver<Maybe<ResolversTypes['ContactInfo']>, ParentType, ContextType, RequireFields<MutationCreateContactInfoArgs, 'values'>>;
  createContactInfos?: Resolver<Array<ResolversTypes['ContactInfo']>, ParentType, ContextType, RequireFields<MutationCreateContactInfosArgs, 'values'>>;
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
  createTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationCreateTaskArgs, 'values'>>;
  createTasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationCreateTasksArgs, 'values'>>;
  deleteActivities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, Partial<MutationDeleteActivitiesArgs>>;
  deleteActivityTags?: Resolver<Array<ResolversTypes['ActivityTag']>, ParentType, ContextType, Partial<MutationDeleteActivityTagsArgs>>;
  deleteAddresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, Partial<MutationDeleteAddressesArgs>>;
  deleteContactInfos?: Resolver<Array<ResolversTypes['ContactInfo']>, ParentType, ContextType, Partial<MutationDeleteContactInfosArgs>>;
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
  deleteTasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, Partial<MutationDeleteTasksArgs>>;
  updateActivities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationUpdateActivitiesArgs, 'set'>>;
  updateActivityTags?: Resolver<Array<ResolversTypes['ActivityTag']>, ParentType, ContextType, RequireFields<MutationUpdateActivityTagsArgs, 'set'>>;
  updateAddresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<MutationUpdateAddressesArgs, 'set'>>;
  updateContactInfos?: Resolver<Array<ResolversTypes['ContactInfo']>, ParentType, ContextType, RequireFields<MutationUpdateContactInfosArgs, 'set'>>;
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
  updateTasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationUpdateTasksArgs, 'set'>>;
};

export type NoteResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<NoteLabelsArgs>>;
  mentions?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, Partial<NoteMentionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<NotePersonArgs>>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type NoteMentionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteMention'] = ResolversParentTypes['NoteMention']> = {
  mentionedPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  noteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NoteTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NoteTag'] = ResolversParentTypes['NoteTag']> = {
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  noteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, Partial<PersonActivitiesArgs>>;
  addresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, Partial<PersonAddressesArgs>>;
  avatarPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactInfos?: Resolver<Array<ResolversTypes['ContactInfo']>, ParentType, ContextType, Partial<PersonContactInfosArgs>>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstMetDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  howWeMet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importantDates?: Resolver<Array<ResolversTypes['ImportantDate']>, ParentType, ContextType, Partial<PersonImportantDatesArgs>>;
  interactions?: Resolver<Array<ResolversTypes['Interaction']>, ParentType, ContextType, Partial<PersonInteractionsArgs>>;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType, Partial<PersonLabelsArgs>>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mentionedInNotes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType, Partial<PersonMentionedInNotesArgs>>;
  notes?: Resolver<Array<ResolversTypes['Note']>, ParentType, ContextType, Partial<PersonNotesArgs>>;
  relationships?: Resolver<Array<ResolversTypes['PersonRelationshipEntry']>, ParentType, ContextType>;
  relationshipsFrom?: Resolver<Array<ResolversTypes['PersonRelationship']>, ParentType, ContextType, Partial<PersonRelationshipsFromArgs>>;
  relationshipsTo?: Resolver<Array<ResolversTypes['PersonRelationship']>, ParentType, ContextType, Partial<PersonRelationshipsToArgs>>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, Partial<PersonTasksArgs>>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonLabelResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonLabel'] = ResolversParentTypes['PersonLabel']> = {
  labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PersonRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonRelationship'] = ResolversParentTypes['PersonRelationship']> = {
  fromPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonRelationshipFromPersonArgs>>;
  fromPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<PersonRelationshipToPersonArgs>>;
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

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, Partial<QueryActivityArgs>>;
  activityTag?: Resolver<Maybe<ResolversTypes['ActivityTag']>, ParentType, ContextType, Partial<QueryActivityTagArgs>>;
  activityTags?: Resolver<Array<ResolversTypes['ActivityTag']>, ParentType, ContextType, Partial<QueryActivityTagsArgs>>;
  activitys?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType, Partial<QueryActivitysArgs>>;
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType, Partial<QueryAddressArgs>>;
  addresss?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, Partial<QueryAddresssArgs>>;
  contactInfo?: Resolver<Maybe<ResolversTypes['ContactInfo']>, ParentType, ContextType, Partial<QueryContactInfoArgs>>;
  contactInfos?: Resolver<Array<ResolversTypes['ContactInfo']>, ParentType, ContextType, Partial<QueryContactInfosArgs>>;
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
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, Partial<QueryTaskArgs>>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, Partial<QueryTasksArgs>>;
  upcomingDates?: Resolver<Array<ResolversTypes['UpcomingDateEntry']>, ParentType, ContextType, Partial<QueryUpcomingDatesArgs>>;
};

export type TaskResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  completedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dueAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<TaskPersonArgs>>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UpcomingDateEntryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpcomingDateEntry'] = ResolversParentTypes['UpcomingDateEntry']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  daysUntil?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nextDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personFirstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personLastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Activity?: ActivityResolvers<ContextType>;
  ActivityTag?: ActivityTagResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  ContactInfo?: ContactInfoResolvers<ContextType>;
  ImportantDate?: ImportantDateResolvers<ContextType>;
  ImportantDateTag?: ImportantDateTagResolvers<ContextType>;
  Interaction?: InteractionResolvers<ContextType>;
  InteractionTag?: InteractionTagResolvers<ContextType>;
  Label?: LabelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  NoteMention?: NoteMentionResolvers<ContextType>;
  NoteTag?: NoteTagResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonLabel?: PersonLabelResolvers<ContextType>;
  PersonRelationship?: PersonRelationshipResolvers<ContextType>;
  PersonRelationshipEntry?: PersonRelationshipEntryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  UpcomingDateEntry?: UpcomingDateEntryResolvers<ContextType>;
};

