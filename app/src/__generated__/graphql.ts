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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: string; output: Date; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date; output: Date; }
};

export type Activity = {
  __typename: 'Activity';
  /** DateTime */
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  labels: Array<Label>;
  location: Maybe<Scalars['String']['output']>;
  /** DateTime */
  occurredAt: Scalars['DateTime']['output'];
  person: Maybe<Person>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type ActivityLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelOrderBy>;
  where?: InputMaybe<LabelFilters>;
};


export type ActivityPersonArgs = {
  where?: InputMaybe<PersonFilters>;
};

export type ActivityFilters = {
  OR?: InputMaybe<Array<ActivityFiltersOr>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  personId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ActivityFiltersOr = {
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  personId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ActivityInsertInput = {
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  occurredAt: Scalars['DateTime']['input'];
  personId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ActivityOrderBy = {
  createdAt?: InputMaybe<InnerOrder>;
  description?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  location?: InputMaybe<InnerOrder>;
  occurredAt?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  title?: InputMaybe<InnerOrder>;
};

export type ActivityTag = {
  __typename: 'ActivityTag';
  activityId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type ActivityTagFilters = {
  OR?: InputMaybe<Array<ActivityTagFiltersOr>>;
  activityId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type ActivityTagFiltersOr = {
  activityId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type ActivityTagInsertInput = {
  activityId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};

export type ActivityTagOrderBy = {
  activityId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type ActivityTagUpdateInput = {
  activityId?: InputMaybe<Scalars['String']['input']>;
  labelId?: InputMaybe<Scalars['String']['input']>;
};

export type ActivityUpdateInput = {
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  occurredAt?: InputMaybe<Scalars['DateTime']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Address = {
  __typename: 'Address';
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  /** DateTime */
  createdAt: Scalars['DateTime']['output'];
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
  where?: InputMaybe<PersonFilters>;
};

export type AddressFilters = {
  OR?: InputMaybe<Array<AddressFiltersOr>>;
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

export type AddressFiltersOr = {
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

export type AddressInsertInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type AddressOrderBy = {
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

export type AddressUpdateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  __typename: 'ContactInfo';
  /** DateTime */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isPrimary: Scalars['Boolean']['output'];
  label: Maybe<Scalars['String']['output']>;
  person: Maybe<Person>;
  personId: Scalars['String']['output'];
  type: ContactInfosTypeEnum;
  value: Scalars['String']['output'];
};


export type ContactInfoPersonArgs = {
  where?: InputMaybe<PersonFilters>;
};

export type ContactInfoFilters = {
  OR?: InputMaybe<Array<ContactInfoFiltersOr>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  isPrimary?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  type?: InputMaybe<ContactInfosTypeEnumFilter>;
  value?: InputMaybe<StringFilter>;
};

export type ContactInfoFiltersOr = {
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  isPrimary?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  type?: InputMaybe<ContactInfosTypeEnumFilter>;
  value?: InputMaybe<StringFilter>;
};

export type ContactInfoInsertInput = {
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  personId: Scalars['String']['input'];
  type: ContactInfosTypeEnum;
  value: Scalars['String']['input'];
};

export type ContactInfoOrderBy = {
  createdAt?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  isPrimary?: InputMaybe<InnerOrder>;
  label?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  type?: InputMaybe<InnerOrder>;
  value?: InputMaybe<InnerOrder>;
};

export type ContactInfoUpdateInput = {
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ContactInfosTypeEnum>;
  value?: InputMaybe<Scalars['String']['input']>;
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

export type DateTimeFilter = {
  OR?: InputMaybe<Array<DateTimeFilterOr>>;
  /** DateTime */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<DateTime> */
  inArray?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<DateTime> */
  notInArray?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterOr = {
  /** DateTime */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<DateTime> */
  inArray?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<DateTime> */
  notInArray?: InputMaybe<Array<Scalars['DateTime']['input']>>;
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

export type ImportContactsResult = {
  __typename: 'ImportContactsResult';
  errors: Array<Scalars['String']['output']>;
  imported: Scalars['Int']['output'];
  merged: Scalars['Int']['output'];
  skipped: Scalars['Int']['output'];
};

export type ImportantDate = {
  __typename: 'ImportantDate';
  date: Scalars['Date']['output'];
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
  orderBy?: InputMaybe<LabelOrderBy>;
  where?: InputMaybe<LabelFilters>;
};


export type ImportantDatePersonArgs = {
  where?: InputMaybe<PersonFilters>;
};

export type ImportantDateFilters = {
  OR?: InputMaybe<Array<ImportantDateFiltersOr>>;
  date?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnumFilter>;
  name?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  recurrence?: InputMaybe<StringFilter>;
};

export type ImportantDateFiltersOr = {
  date?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnumFilter>;
  name?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  recurrence?: InputMaybe<StringFilter>;
};

export type ImportantDateInsertInput = {
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  name: Scalars['String']['input'];
  personId: Scalars['String']['input'];
  recurrence?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDateOrderBy = {
  date?: InputMaybe<InnerOrder>;
  description?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  milestoneType?: InputMaybe<InnerOrder>;
  name?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  recurrence?: InputMaybe<InnerOrder>;
};

export type ImportantDateTag = {
  __typename: 'ImportantDateTag';
  importantDateId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type ImportantDateTagFilters = {
  OR?: InputMaybe<Array<ImportantDateTagFiltersOr>>;
  importantDateId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type ImportantDateTagFiltersOr = {
  importantDateId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type ImportantDateTagInsertInput = {
  importantDateId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};

export type ImportantDateTagOrderBy = {
  importantDateId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type ImportantDateTagUpdateInput = {
  importantDateId?: InputMaybe<Scalars['String']['input']>;
  labelId?: InputMaybe<Scalars['String']['input']>;
};

export type ImportantDateUpdateInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  recurrence?: InputMaybe<Scalars['String']['input']>;
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

export type InnerOrder = {
  direction: OrderDirection;
  /** Priority of current field */
  priority: Scalars['Int']['input'];
};

export type Interaction = {
  __typename: 'Interaction';
  channel: Scalars['String']['output'];
  id: Scalars['String']['output'];
  labels: Array<Label>;
  note: Maybe<Scalars['String']['output']>;
  /** DateTime */
  occurredAt: Scalars['DateTime']['output'];
  person: Maybe<Person>;
  personId: Scalars['String']['output'];
  sentiment: Maybe<Scalars['String']['output']>;
};


export type InteractionLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelOrderBy>;
  where?: InputMaybe<LabelFilters>;
};


export type InteractionPersonArgs = {
  where?: InputMaybe<PersonFilters>;
};

export type InteractionFilters = {
  OR?: InputMaybe<Array<InteractionFiltersOr>>;
  channel?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  note?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  personId?: InputMaybe<IdFilter>;
  sentiment?: InputMaybe<StringFilter>;
};

export type InteractionFiltersOr = {
  channel?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  note?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  personId?: InputMaybe<IdFilter>;
  sentiment?: InputMaybe<StringFilter>;
};

export type InteractionInsertInput = {
  channel: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  occurredAt?: InputMaybe<Scalars['DateTime']['input']>;
  personId: Scalars['String']['input'];
  sentiment?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionOrderBy = {
  channel?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  note?: InputMaybe<InnerOrder>;
  occurredAt?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  sentiment?: InputMaybe<InnerOrder>;
};

export type InteractionTag = {
  __typename: 'InteractionTag';
  interactionId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type InteractionTagFilters = {
  OR?: InputMaybe<Array<InteractionTagFiltersOr>>;
  interactionId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type InteractionTagFiltersOr = {
  interactionId?: InputMaybe<IdFilter>;
  labelId?: InputMaybe<IdFilter>;
};

export type InteractionTagInsertInput = {
  interactionId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};

export type InteractionTagOrderBy = {
  interactionId?: InputMaybe<InnerOrder>;
  labelId?: InputMaybe<InnerOrder>;
};

export type InteractionTagUpdateInput = {
  interactionId?: InputMaybe<Scalars['String']['input']>;
  labelId?: InputMaybe<Scalars['String']['input']>;
};

export type InteractionUpdateInput = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  occurredAt?: InputMaybe<Scalars['DateTime']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  sentiment?: InputMaybe<Scalars['String']['input']>;
};

export type Label = {
  __typename: 'Label';
  activities: Array<Activity>;
  color: Scalars['String']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};


export type LabelActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityOrderBy>;
  where?: InputMaybe<ActivityFilters>;
};

export type LabelFilters = {
  OR?: InputMaybe<Array<LabelFiltersOr>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
};

export type LabelFiltersOr = {
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
};

export type LabelInsertInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
};

export type LabelOrderBy = {
  color?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  label?: InputMaybe<InnerOrder>;
};

export type LabelUpdateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename: 'Mutation';
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
  importGoogleContacts: ImportContactsResult;
  mergeLabelInto: Maybe<Label>;
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
  values: Array<ActivityInsertInput>;
};


export type MutationCreateActivityArgs = {
  values: ActivityInsertInput;
};


export type MutationCreateActivityTagArgs = {
  values: ActivityTagInsertInput;
};


export type MutationCreateActivityTagsArgs = {
  values: Array<ActivityTagInsertInput>;
};


export type MutationCreateAddressArgs = {
  values: AddressInsertInput;
};


export type MutationCreateAddressesArgs = {
  values: Array<AddressInsertInput>;
};


export type MutationCreateContactInfoArgs = {
  values: ContactInfoInsertInput;
};


export type MutationCreateContactInfosArgs = {
  values: Array<ContactInfoInsertInput>;
};


export type MutationCreateImportantDateArgs = {
  values: ImportantDateInsertInput;
};


export type MutationCreateImportantDateTagArgs = {
  values: ImportantDateTagInsertInput;
};


export type MutationCreateImportantDateTagsArgs = {
  values: Array<ImportantDateTagInsertInput>;
};


export type MutationCreateImportantDatesArgs = {
  values: Array<ImportantDateInsertInput>;
};


export type MutationCreateInteractionArgs = {
  values: InteractionInsertInput;
};


export type MutationCreateInteractionTagArgs = {
  values: InteractionTagInsertInput;
};


export type MutationCreateInteractionTagsArgs = {
  values: Array<InteractionTagInsertInput>;
};


export type MutationCreateInteractionsArgs = {
  values: Array<InteractionInsertInput>;
};


export type MutationCreateLabelArgs = {
  values: LabelInsertInput;
};


export type MutationCreateLabelsArgs = {
  values: Array<LabelInsertInput>;
};


export type MutationCreateNoteArgs = {
  values: NoteInsertInput;
};


export type MutationCreateNoteMentionArgs = {
  values: NoteMentionInsertInput;
};


export type MutationCreateNoteMentionsArgs = {
  values: Array<NoteMentionInsertInput>;
};


export type MutationCreateNoteTagArgs = {
  values: NoteTagInsertInput;
};


export type MutationCreateNoteTagsArgs = {
  values: Array<NoteTagInsertInput>;
};


export type MutationCreateNotesArgs = {
  values: Array<NoteInsertInput>;
};


export type MutationCreatePersonArgs = {
  values: PersonInsertInput;
};


export type MutationCreatePersonLabelArgs = {
  values: PersonLabelInsertInput;
};


export type MutationCreatePersonLabelsArgs = {
  values: Array<PersonLabelInsertInput>;
};


export type MutationCreatePersonRelationshipArgs = {
  values: PersonRelationshipInsertInput;
};


export type MutationCreatePersonRelationshipsArgs = {
  values: Array<PersonRelationshipInsertInput>;
};


export type MutationCreatePersonsArgs = {
  values: Array<PersonInsertInput>;
};


export type MutationCreateTaskArgs = {
  values: TaskInsertInput;
};


export type MutationCreateTasksArgs = {
  values: Array<TaskInsertInput>;
};


export type MutationDeleteActivitiesArgs = {
  where?: InputMaybe<ActivityFilters>;
};


export type MutationDeleteActivityTagsArgs = {
  where?: InputMaybe<ActivityTagFilters>;
};


export type MutationDeleteAddressesArgs = {
  where?: InputMaybe<AddressFilters>;
};


export type MutationDeleteContactInfosArgs = {
  where?: InputMaybe<ContactInfoFilters>;
};


export type MutationDeleteImportantDateTagsArgs = {
  where?: InputMaybe<ImportantDateTagFilters>;
};


export type MutationDeleteImportantDatesArgs = {
  where?: InputMaybe<ImportantDateFilters>;
};


export type MutationDeleteInteractionTagsArgs = {
  where?: InputMaybe<InteractionTagFilters>;
};


export type MutationDeleteInteractionsArgs = {
  where?: InputMaybe<InteractionFilters>;
};


export type MutationDeleteLabelsArgs = {
  where?: InputMaybe<LabelFilters>;
};


export type MutationDeleteNoteMentionsArgs = {
  where?: InputMaybe<NoteMentionFilters>;
};


export type MutationDeleteNoteTagsArgs = {
  where?: InputMaybe<NoteTagFilters>;
};


export type MutationDeleteNotesArgs = {
  where?: InputMaybe<NoteFilters>;
};


export type MutationDeletePersonLabelsArgs = {
  where?: InputMaybe<PersonLabelFilters>;
};


export type MutationDeletePersonRelationshipsArgs = {
  where?: InputMaybe<PersonRelationshipFilters>;
};


export type MutationDeletePersonsArgs = {
  where?: InputMaybe<PersonFilters>;
};


export type MutationDeleteTasksArgs = {
  where?: InputMaybe<TaskFilters>;
};


export type MutationImportGoogleContactsArgs = {
  csv: Scalars['String']['input'];
};


export type MutationMergeLabelIntoArgs = {
  deleteId: Scalars['String']['input'];
  keepId: Scalars['String']['input'];
};


export type MutationUpdateActivitiesArgs = {
  set: ActivityUpdateInput;
  where?: InputMaybe<ActivityFilters>;
};


export type MutationUpdateActivityTagsArgs = {
  set: ActivityTagUpdateInput;
  where?: InputMaybe<ActivityTagFilters>;
};


export type MutationUpdateAddressesArgs = {
  set: AddressUpdateInput;
  where?: InputMaybe<AddressFilters>;
};


export type MutationUpdateContactInfosArgs = {
  set: ContactInfoUpdateInput;
  where?: InputMaybe<ContactInfoFilters>;
};


export type MutationUpdateImportantDateTagsArgs = {
  set: ImportantDateTagUpdateInput;
  where?: InputMaybe<ImportantDateTagFilters>;
};


export type MutationUpdateImportantDatesArgs = {
  set: ImportantDateUpdateInput;
  where?: InputMaybe<ImportantDateFilters>;
};


export type MutationUpdateInteractionTagsArgs = {
  set: InteractionTagUpdateInput;
  where?: InputMaybe<InteractionTagFilters>;
};


export type MutationUpdateInteractionsArgs = {
  set: InteractionUpdateInput;
  where?: InputMaybe<InteractionFilters>;
};


export type MutationUpdateLabelsArgs = {
  set: LabelUpdateInput;
  where?: InputMaybe<LabelFilters>;
};


export type MutationUpdateNoteMentionsArgs = {
  set: NoteMentionUpdateInput;
  where?: InputMaybe<NoteMentionFilters>;
};


export type MutationUpdateNoteTagsArgs = {
  set: NoteTagUpdateInput;
  where?: InputMaybe<NoteTagFilters>;
};


export type MutationUpdateNotesArgs = {
  set: NoteUpdateInput;
  where?: InputMaybe<NoteFilters>;
};


export type MutationUpdatePersonLabelsArgs = {
  set: PersonLabelUpdateInput;
  where?: InputMaybe<PersonLabelFilters>;
};


export type MutationUpdatePersonRelationshipsArgs = {
  set: PersonRelationshipUpdateInput;
  where?: InputMaybe<PersonRelationshipFilters>;
};


export type MutationUpdatePersonsArgs = {
  set: PersonUpdateInput;
  where?: InputMaybe<PersonFilters>;
};


export type MutationUpdateTasksArgs = {
  set: TaskUpdateInput;
  where?: InputMaybe<TaskFilters>;
};

export type Note = {
  __typename: 'Note';
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
  orderBy?: InputMaybe<LabelOrderBy>;
  where?: InputMaybe<LabelFilters>;
};


export type NoteMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonOrderBy>;
  where?: InputMaybe<PersonFilters>;
};


export type NotePersonArgs = {
  where?: InputMaybe<PersonFilters>;
};

export type NoteFilters = {
  OR?: InputMaybe<Array<NoteFiltersOr>>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
};

export type NoteFiltersOr = {
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
};

export type NoteInsertInput = {
  body: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
};

export type NoteMention = {
  __typename: 'NoteMention';
  mentionedPersonId: Scalars['String']['output'];
  noteId: Scalars['String']['output'];
};

export type NoteMentionFilters = {
  OR?: InputMaybe<Array<NoteMentionFiltersOr>>;
  mentionedPersonId?: InputMaybe<IdFilter>;
  noteId?: InputMaybe<IdFilter>;
};

export type NoteMentionFiltersOr = {
  mentionedPersonId?: InputMaybe<IdFilter>;
  noteId?: InputMaybe<IdFilter>;
};

export type NoteMentionInsertInput = {
  mentionedPersonId: Scalars['String']['input'];
  noteId: Scalars['String']['input'];
};

export type NoteMentionOrderBy = {
  mentionedPersonId?: InputMaybe<InnerOrder>;
  noteId?: InputMaybe<InnerOrder>;
};

export type NoteMentionUpdateInput = {
  mentionedPersonId?: InputMaybe<Scalars['String']['input']>;
  noteId?: InputMaybe<Scalars['String']['input']>;
};

export type NoteOrderBy = {
  body?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
};

export type NoteTag = {
  __typename: 'NoteTag';
  labelId: Scalars['String']['output'];
  noteId: Scalars['String']['output'];
};

export type NoteTagFilters = {
  OR?: InputMaybe<Array<NoteTagFiltersOr>>;
  labelId?: InputMaybe<IdFilter>;
  noteId?: InputMaybe<IdFilter>;
};

export type NoteTagFiltersOr = {
  labelId?: InputMaybe<IdFilter>;
  noteId?: InputMaybe<IdFilter>;
};

export type NoteTagInsertInput = {
  labelId: Scalars['String']['input'];
  noteId: Scalars['String']['input'];
};

export type NoteTagOrderBy = {
  labelId?: InputMaybe<InnerOrder>;
  noteId?: InputMaybe<InnerOrder>;
};

export type NoteTagUpdateInput = {
  labelId?: InputMaybe<Scalars['String']['input']>;
  noteId?: InputMaybe<Scalars['String']['input']>;
};

export type NoteUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
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
  activities: Array<Activity>;
  addresses: Array<Address>;
  avatarPath: Maybe<Scalars['String']['output']>;
  contactFrequency: Maybe<Scalars['String']['output']>;
  contactInfos: Array<ContactInfo>;
  /** DateTime */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstMetDate: Maybe<Scalars['Date']['output']>;
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
  /** DateTime */
  updatedAt: Scalars['DateTime']['output'];
};


export type PersonActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityOrderBy>;
  where?: InputMaybe<ActivityFilters>;
};


export type PersonAddressesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressOrderBy>;
  where?: InputMaybe<AddressFilters>;
};


export type PersonContactInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContactInfoOrderBy>;
  where?: InputMaybe<ContactInfoFilters>;
};


export type PersonImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDateOrderBy>;
  where?: InputMaybe<ImportantDateFilters>;
};


export type PersonInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionOrderBy>;
  where?: InputMaybe<InteractionFilters>;
};


export type PersonLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelOrderBy>;
  where?: InputMaybe<LabelFilters>;
};


export type PersonMentionedInNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteOrderBy>;
  where?: InputMaybe<NoteFilters>;
};


export type PersonNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteOrderBy>;
  where?: InputMaybe<NoteFilters>;
};


export type PersonRelationshipsFromArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipOrderBy>;
  where?: InputMaybe<PersonRelationshipFilters>;
};


export type PersonRelationshipsToArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipOrderBy>;
  where?: InputMaybe<PersonRelationshipFilters>;
};


export type PersonTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskOrderBy>;
  where?: InputMaybe<TaskFilters>;
};

export type PersonFilters = {
  OR?: InputMaybe<Array<PersonFiltersOr>>;
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

export type PersonFiltersOr = {
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

export type PersonInsertInput = {
  avatarPath?: InputMaybe<Scalars['String']['input']>;
  contactFrequency?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstMetDate?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  howWeMet?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  /** DateTime */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PersonLabel = {
  __typename: 'PersonLabel';
  labelId: Scalars['String']['output'];
  personId: Scalars['String']['output'];
};

export type PersonLabelFilters = {
  OR?: InputMaybe<Array<PersonLabelFiltersOr>>;
  labelId?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
};

export type PersonLabelFiltersOr = {
  labelId?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
};

export type PersonLabelInsertInput = {
  labelId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
};

export type PersonLabelOrderBy = {
  labelId?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
};

export type PersonLabelUpdateInput = {
  labelId?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
};

export type PersonOrderBy = {
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

export type PersonRelationship = {
  __typename: 'PersonRelationship';
  fromPerson: Maybe<Person>;
  fromPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  toPerson: Maybe<Person>;
  toPersonId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type PersonRelationshipFromPersonArgs = {
  where?: InputMaybe<PersonFilters>;
};


export type PersonRelationshipToPersonArgs = {
  where?: InputMaybe<PersonFilters>;
};

export type PersonRelationshipEntry = {
  __typename: 'PersonRelationshipEntry';
  id: Scalars['String']['output'];
  relatedPersonFirstName: Scalars['String']['output'];
  relatedPersonId: Scalars['String']['output'];
  relatedPersonLastName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PersonRelationshipFilters = {
  OR?: InputMaybe<Array<PersonRelationshipFiltersOr>>;
  fromPersonId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  toPersonId?: InputMaybe<IdFilter>;
  type?: InputMaybe<StringFilter>;
};

export type PersonRelationshipFiltersOr = {
  fromPersonId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  toPersonId?: InputMaybe<IdFilter>;
  type?: InputMaybe<StringFilter>;
};

export type PersonRelationshipInsertInput = {
  fromPersonId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  toPersonId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type PersonRelationshipOrderBy = {
  fromPersonId?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  toPersonId?: InputMaybe<InnerOrder>;
  type?: InputMaybe<InnerOrder>;
};

export type PersonRelationshipUpdateInput = {
  fromPersonId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  toPersonId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PersonUpdateInput = {
  avatarPath?: InputMaybe<Scalars['String']['input']>;
  contactFrequency?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstMetDate?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  howWeMet?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** DateTime */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Query = {
  __typename: 'Query';
  activities: Array<Activity>;
  activity: Maybe<Activity>;
  activityTag: Maybe<ActivityTag>;
  activityTags: Array<ActivityTag>;
  address: Maybe<Address>;
  addresses: Array<Address>;
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


export type QueryActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityOrderBy>;
  where?: InputMaybe<ActivityFilters>;
};


export type QueryActivityArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityOrderBy>;
  where?: InputMaybe<ActivityFilters>;
};


export type QueryActivityTagArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityTagOrderBy>;
  where?: InputMaybe<ActivityTagFilters>;
};


export type QueryActivityTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityTagOrderBy>;
  where?: InputMaybe<ActivityTagFilters>;
};


export type QueryAddressArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressOrderBy>;
  where?: InputMaybe<AddressFilters>;
};


export type QueryAddressesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddressOrderBy>;
  where?: InputMaybe<AddressFilters>;
};


export type QueryContactInfoArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContactInfoOrderBy>;
  where?: InputMaybe<ContactInfoFilters>;
};


export type QueryContactInfosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ContactInfoOrderBy>;
  where?: InputMaybe<ContactInfoFilters>;
};


export type QueryImportantDateArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDateOrderBy>;
  where?: InputMaybe<ImportantDateFilters>;
};


export type QueryImportantDateTagArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDateTagOrderBy>;
  where?: InputMaybe<ImportantDateTagFilters>;
};


export type QueryImportantDateTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDateTagOrderBy>;
  where?: InputMaybe<ImportantDateTagFilters>;
};


export type QueryImportantDatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImportantDateOrderBy>;
  where?: InputMaybe<ImportantDateFilters>;
};


export type QueryInteractionArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionOrderBy>;
  where?: InputMaybe<InteractionFilters>;
};


export type QueryInteractionTagArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionTagOrderBy>;
  where?: InputMaybe<InteractionTagFilters>;
};


export type QueryInteractionTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionTagOrderBy>;
  where?: InputMaybe<InteractionTagFilters>;
};


export type QueryInteractionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InteractionOrderBy>;
  where?: InputMaybe<InteractionFilters>;
};


export type QueryLabelArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelOrderBy>;
  where?: InputMaybe<LabelFilters>;
};


export type QueryLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LabelOrderBy>;
  where?: InputMaybe<LabelFilters>;
};


export type QueryNoteArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteOrderBy>;
  where?: InputMaybe<NoteFilters>;
};


export type QueryNoteMentionArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteMentionOrderBy>;
  where?: InputMaybe<NoteMentionFilters>;
};


export type QueryNoteMentionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteMentionOrderBy>;
  where?: InputMaybe<NoteMentionFilters>;
};


export type QueryNoteTagArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteTagOrderBy>;
  where?: InputMaybe<NoteTagFilters>;
};


export type QueryNoteTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteTagOrderBy>;
  where?: InputMaybe<NoteTagFilters>;
};


export type QueryNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NoteOrderBy>;
  where?: InputMaybe<NoteFilters>;
};


export type QueryPersonArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonOrderBy>;
  where?: InputMaybe<PersonFilters>;
};


export type QueryPersonLabelArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonLabelOrderBy>;
  where?: InputMaybe<PersonLabelFilters>;
};


export type QueryPersonLabelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonLabelOrderBy>;
  where?: InputMaybe<PersonLabelFilters>;
};


export type QueryPersonRelationshipArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipOrderBy>;
  where?: InputMaybe<PersonRelationshipFilters>;
};


export type QueryPersonRelationshipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonRelationshipOrderBy>;
  where?: InputMaybe<PersonRelationshipFilters>;
};


export type QueryPersonsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PersonOrderBy>;
  where?: InputMaybe<PersonFilters>;
};


export type QueryTaskArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskOrderBy>;
  where?: InputMaybe<TaskFilters>;
};


export type QueryTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskOrderBy>;
  where?: InputMaybe<TaskFilters>;
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
  __typename: 'Task';
  /** DateTime */
  completedAt: Maybe<Scalars['DateTime']['output']>;
  /** DateTime */
  createdAt: Scalars['DateTime']['output'];
  /** DateTime */
  dueAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  notes: Maybe<Scalars['String']['output']>;
  person: Maybe<Person>;
  personId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


export type TaskPersonArgs = {
  where?: InputMaybe<PersonFilters>;
};

export type TaskFilters = {
  OR?: InputMaybe<Array<TaskFiltersOr>>;
  completedAt?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  notes?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TaskFiltersOr = {
  completedAt?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  notes?: InputMaybe<StringFilter>;
  personId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TaskInsertInput = {
  /** DateTime */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  personId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type TaskOrderBy = {
  completedAt?: InputMaybe<InnerOrder>;
  createdAt?: InputMaybe<InnerOrder>;
  dueAt?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  notes?: InputMaybe<InnerOrder>;
  personId?: InputMaybe<InnerOrder>;
  title?: InputMaybe<InnerOrder>;
};

export type TaskUpdateInput = {
  /** DateTime */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** DateTime */
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpcomingDateEntry = {
  __typename: 'UpcomingDateEntry';
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

export type Person_ActivityListFragment = { __typename: 'Person', id: string, activities: Array<{ __typename: 'Activity', id: string, title: string, description: string | null, location: string | null, occurredAt: Date }> };

export type CreateActivityMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  occurredAt: Scalars['DateTime']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateActivityMutation = { createActivity: { __typename: 'Activity', id: string, personId: string, title: string, occurredAt: Date, location: string | null, description: string | null } | null };

export type DeleteActivityMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteActivityMutation = { deleteActivities: Array<{ __typename: 'Activity', id: string }> };

export type AddressListFragment = { __typename: 'Person', id: string, addresses: Array<{ __typename: 'Address', id: string, type: AddressesTypeEnum, label: string | null, line1: string, line2: string | null, city: string | null, state: string | null, postalCode: string | null, country: string | null, isPrimary: boolean }> };

export type CreateAddressesMutationVariables = Exact<{
  values: Array<AddressInsertInput> | AddressInsertInput;
}>;


export type CreateAddressesMutation = { createAddresses: Array<{ __typename: 'Address', id: string, type: AddressesTypeEnum, label: string | null, line1: string, line2: string | null, city: string | null, state: string | null, postalCode: string | null, country: string | null, isPrimary: boolean }> };

export type DeleteAddressesMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteAddressesMutation = { deleteAddresses: Array<{ __typename: 'Address', id: string }> };

export type ContactInfo_ListFragment = { __typename: 'Person', id: string, contactInfos: Array<{ __typename: 'ContactInfo', id: string, type: ContactInfosTypeEnum, value: string, label: string | null, isPrimary: boolean }> };

export type CreateContactInfoMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  type: ContactInfosTypeEnum;
  value: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateContactInfoMutation = { createContactInfo: { __typename: 'ContactInfo', id: string, personId: string, type: ContactInfosTypeEnum, value: string, label: string | null, isPrimary: boolean } | null };

export type DeleteContactInfoMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteContactInfoMutation = { deleteContactInfos: Array<{ __typename: 'ContactInfo', id: string }> };

export type GetPersonsWithFrequencyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonsWithFrequencyQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, contactFrequency: string | null, interactions: Array<{ __typename: 'Interaction', occurredAt: Date }> }> };

export type GetPersonInteractionsForWidgetQueryVariables = Exact<{
  personId: Scalars['String']['input'];
}>;


export type GetPersonInteractionsForWidgetQuery = { interactions: Array<{ __typename: 'Interaction', id: string, personId: string, channel: string, occurredAt: Date, sentiment: string | null, note: string | null, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }> };

export type GetAllLabelsForWidgetQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLabelsForWidgetQuery = { labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> };

export type DormantTiesPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type DormantTiesPersonsQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, avatarPath: string | null, createdAt: Date, interactions: Array<{ __typename: 'Interaction', occurredAt: Date }> }> };

export type GetRecentPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentPersonsQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, createdAt: Date }> };

export type GetUpcomingDatesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUpcomingDatesQuery = { upcomingDates: Array<{ __typename: 'UpcomingDateEntry', id: string, name: string, description: string | null, date: string, recurrence: string | null, daysUntil: number, nextDate: string, personId: string, personFirstName: string, personLastName: string }> };

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
  occurredAt: Scalars['DateTime']['input'];
  sentiment?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateInteractionMutation = { createInteraction: { __typename: 'Interaction', id: string, personId: string, channel: string, occurredAt: Date, sentiment: string | null, note: string | null } | null };

export type UpdateInteractionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  channel: Scalars['String']['input'];
  occurredAt: Scalars['DateTime']['input'];
  sentiment?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateInteractionMutation = { updateInteractions: Array<{ __typename: 'Interaction', id: string, channel: string, occurredAt: Date, sentiment: string | null, note: string | null }> };

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

export type Person_LabelsFragment = { __typename: 'Person', id: string, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> };

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

export type Person_ListFragment = { __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, createdAt: Date, updatedAt: Date, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, description: string | null, date: Date }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> };

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

export type Person_TasksFragment = { __typename: 'Person', id: string, tasks: Array<{ __typename: 'Task', id: string, title: string, notes: string | null, dueAt: Date | null, completedAt: Date | null, createdAt: Date }> };

export type CreateTaskMutationVariables = Exact<{
  personId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type CreateTaskMutation = { createTask: { __typename: 'Task', id: string, personId: string, title: string, notes: string | null, dueAt: Date | null, completedAt: Date | null, createdAt: Date } | null };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['String']['input'];
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type UpdateTaskMutation = { updateTasks: Array<{ __typename: 'Task', id: string, completedAt: Date | null }> };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteTaskMutation = { deleteTasks: Array<{ __typename: 'Task', id: string }> };

export type WeeklyReviewQueryVariables = Exact<{ [key: string]: never; }>;


export type WeeklyReviewQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, avatarPath: string | null, contactFrequency: string | null, createdAt: Date, importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, date: Date, recurrence: string | null }>, tasks: Array<{ __typename: 'Task', id: string, title: string, dueAt: Date | null, completedAt: Date | null, personId: string }>, interactions: Array<{ __typename: 'Interaction', occurredAt: Date }> }> };

export type GetNetworkDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNetworkDataQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }>, relationshipsFrom: Array<{ __typename: 'PersonRelationship', id: string, toPersonId: string, type: string }> }> };

export type GetImportantDateDetailQueryVariables = Exact<{
  dateId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
}>;


export type GetImportantDateDetailQuery = { importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, description: string | null, date: Date, recurrence: string | null, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }>, notes: Array<{ __typename: 'Note', id: string, body: string, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }> };

export type GetPersonDetailQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPersonDetailQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, contactFrequency: string | null, howWeMet: string | null, firstMetDate: Date | null, createdAt: Date, updatedAt: Date, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }>, importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, description: string | null, date: Date, recurrence: string | null, milestoneType: ImportantDatesMilestoneTypeEnum | null, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }>, notes: Array<{ __typename: 'Note', id: string, body: string, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }>, mentions: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string }> }>, mentionedInNotes: Array<{ __typename: 'Note', id: string, body: string, person: { __typename: 'Person', id: string, firstName: string, lastName: string } | null }>, interactions: Array<{ __typename: 'Interaction', id: string, personId: string, channel: string, occurredAt: Date, sentiment: string | null, note: string | null, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }>, activities: Array<{ __typename: 'Activity', id: string, title: string, description: string | null, location: string | null, occurredAt: Date }>, tasks: Array<{ __typename: 'Task', id: string, title: string, notes: string | null, dueAt: Date | null, completedAt: Date | null, createdAt: Date }>, contactInfos: Array<{ __typename: 'ContactInfo', id: string, type: ContactInfosTypeEnum, value: string, label: string | null, isPrimary: boolean }>, addresses: Array<{ __typename: 'Address', id: string, type: AddressesTypeEnum, label: string | null, line1: string, line2: string | null, city: string | null, state: string | null, postalCode: string | null, country: string | null, isPrimary: boolean }> }> };

export type GetAllPersonsForDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPersonsForDetailQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }> };

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
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
}>;


export type CreateImportantDateMutation = { createImportantDate: { __typename: 'ImportantDate', id: string, name: string, date: Date, description: string | null, recurrence: string | null, milestoneType: ImportantDatesMilestoneTypeEnum | null, personId: string } | null };

export type UpdateImportantDateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  recurrence?: InputMaybe<Scalars['String']['input']>;
  milestoneType?: InputMaybe<ImportantDatesMilestoneTypeEnum>;
}>;


export type UpdateImportantDateMutation = { updateImportantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, date: Date, description: string | null, recurrence: string | null, milestoneType: ImportantDatesMilestoneTypeEnum | null }> };

export type UpdatePersonMutationVariables = Exact<{
  id: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  contactFrequency?: InputMaybe<Scalars['String']['input']>;
  howWeMet?: InputMaybe<Scalars['String']['input']>;
  firstMetDate?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdatePersonMutation = { updatePersons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, contactFrequency: string | null, howWeMet: string | null, firstMetDate: Date | null }> };

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

export type DeletePersonMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePersonMutation = { deletePersons: Array<{ __typename: 'Person', id: string }> };

export type GetPersonTimelineQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPersonTimelineQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, interactions: Array<{ __typename: 'Interaction', id: string, channel: string, occurredAt: Date, sentiment: string | null, note: string | null, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }>, importantDates: Array<{ __typename: 'ImportantDate', id: string, date: Date, name: string, milestoneType: ImportantDatesMilestoneTypeEnum | null, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }>, activities: Array<{ __typename: 'Activity', id: string, occurredAt: Date, title: string, description: string | null }> }> };

export type GetPersonsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonFilters>;
  orderBy?: InputMaybe<PersonOrderBy>;
}>;


export type GetPersonsQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, avatarPath: string | null, createdAt: Date, updatedAt: Date, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }>, interactions: Array<{ __typename: 'Interaction', occurredAt: Date }>, importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, description: string | null, date: Date }>, relationships: Array<{ __typename: 'PersonRelationshipEntry', id: string, type: string, relatedPersonId: string, relatedPersonFirstName: string, relatedPersonLastName: string }> }> };

export type GetLabelsForPersonFormQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLabelsForPersonFormQuery = { labels: Array<{ __typename: 'Label', id: string, color: string, label: string }> };

export type CreatePersonMutationVariables = Exact<{
  values: PersonInsertInput;
}>;


export type CreatePersonMutation = { createPerson: { __typename: 'Person', id: string } | null };

export type ExportPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExportPersonsQuery = { persons: Array<{ __typename: 'Person', id: string, firstName: string, lastName: string, email: string, contactInfos: Array<{ __typename: 'ContactInfo', type: ContactInfosTypeEnum, label: string | null, value: string, isPrimary: boolean }>, addresses: Array<{ __typename: 'Address', type: AddressesTypeEnum, label: string | null, line1: string, line2: string | null, city: string | null, state: string | null, postalCode: string | null, country: string | null }>, importantDates: Array<{ __typename: 'ImportantDate', name: string, date: Date, recurrence: string | null }>, labels: Array<{ __typename: 'Label', id: string, label: string, color: string }> }> };

export type GetAllEventsForExportQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventsForExportQuery = { interactions: Array<{ __typename: 'Interaction', id: string, channel: string, occurredAt: Date, note: string | null, person: { __typename: 'Person', id: string, firstName: string, lastName: string } | null }>, importantDates: Array<{ __typename: 'ImportantDate', id: string, name: string, description: string | null, date: Date, recurrence: string | null, milestoneType: ImportantDatesMilestoneTypeEnum | null, person: { __typename: 'Person', id: string, firstName: string, lastName: string } | null }>, activities: Array<{ __typename: 'Activity', id: string, title: string, description: string | null, location: string | null, occurredAt: Date, person: { __typename: 'Person', id: string, firstName: string, lastName: string } | null }> };

export type ImportGoogleContactsMutationVariables = Exact<{
  csv: Scalars['String']['input'];
}>;


export type ImportGoogleContactsMutation = { importGoogleContacts: { __typename: 'ImportContactsResult', imported: number, merged: number, skipped: number, errors: Array<string> } };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { labels: Array<{ __typename: 'Label', id: string, color: string, label: string }> };

export type CreateTagMutationVariables = Exact<{
  values: LabelInsertInput;
}>;


export type CreateTagMutation = { createLabel: { __typename: 'Label', id: string, color: string, label: string } | null };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteTagMutation = { deleteLabels: Array<{ __typename: 'Label', id: string }> };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['String']['input'];
  label: Scalars['String']['input'];
  color: Scalars['String']['input'];
}>;


export type UpdateTagMutation = { updateLabels: Array<{ __typename: 'Label', id: string, label: string, color: string }> };

export type MergeLabelIntoMutationVariables = Exact<{
  keepId: Scalars['String']['input'];
  deleteId: Scalars['String']['input'];
}>;


export type MergeLabelIntoMutation = { mergeLabelInto: { __typename: 'Label', id: string, label: string, color: string } | null };

export const Person_ActivityListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_ActivityList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}}]}}]} as unknown as DocumentNode<Person_ActivityListFragment, unknown>;
export const AddressListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AddressList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"line2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}}]}}]} as unknown as DocumentNode<AddressListFragment, unknown>;
export const ContactInfo_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactInfo_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contactInfos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}}]}}]} as unknown as DocumentNode<ContactInfo_ListFragment, unknown>;
export const Label_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Label_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<Label_ListFragment, unknown>;
export const Person_LabelsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Labels"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<Person_LabelsFragment, unknown>;
export const Person_RelationshipsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}}]} as unknown as DocumentNode<Person_RelationshipsFragment, unknown>;
export const Person_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_Relationships"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}}]} as unknown as DocumentNode<Person_ListFragment, unknown>;
export const Tag_ListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tag_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<Tag_ListFragment, unknown>;
export const Person_TasksFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Tasks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<Person_TasksFragment, unknown>;
export const CreateActivityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createActivity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateActivityMutation, CreateActivityMutationVariables>;
export const DeleteActivityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteActivities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteActivityMutation, DeleteActivityMutationVariables>;
export const CreateAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAddresses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddressInsertInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAddresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"line2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}}]}}]} as unknown as DocumentNode<CreateAddressesMutation, CreateAddressesMutationVariables>;
export const DeleteAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAddresses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAddresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteAddressesMutation, DeleteAddressesMutationVariables>;
export const CreateContactInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateContactInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContactInfosTypeEnum"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"label"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPrimary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createContactInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"Variable","name":{"kind":"Name","value":"label"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isPrimary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPrimary"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}}]}}]} as unknown as DocumentNode<CreateContactInfoMutation, CreateContactInfoMutationVariables>;
export const DeleteContactInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteContactInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteContactInfos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteContactInfoMutation, DeleteContactInfoMutationVariables>;
export const GetPersonsWithFrequencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonsWithFrequency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"contactFrequency"}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonsWithFrequencyQuery, GetPersonsWithFrequencyQueryVariables>;
export const GetPersonInteractionsForWidgetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonInteractionsForWidget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonInteractionsForWidgetQuery, GetPersonInteractionsForWidgetQueryVariables>;
export const GetAllLabelsForWidgetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLabelsForWidget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetAllLabelsForWidgetQuery, GetAllLabelsForWidgetQueryVariables>;
export const DormantTiesPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DormantTiesPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}}]}}]}}]} as unknown as DocumentNode<DormantTiesPersonsQuery, DormantTiesPersonsQueryVariables>;
export const GetRecentPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecentPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetRecentPersonsQuery, GetRecentPersonsQueryVariables>;
export const GetUpcomingDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUpcomingDates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upcomingDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"daysUntil"}},{"kind":"Field","name":{"kind":"Name","value":"nextDate"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"personFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"personLastName"}}]}}]}}]} as unknown as DocumentNode<GetUpcomingDatesQuery, GetUpcomingDatesQueryVariables>;
export const AttachTagToImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachTagToImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImportantDateTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"importantDateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDateId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachTagToImportantDateMutation, AttachTagToImportantDateMutationVariables>;
export const DetachTagFromImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachTagFromImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteImportantDateTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"importantDateId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"importantDateId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDateId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachTagFromImportantDateMutation, DetachTagFromImportantDateMutationVariables>;
export const CreateInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInteraction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"channel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sentiment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]} as unknown as DocumentNode<CreateInteractionMutation, CreateInteractionMutationVariables>;
export const UpdateInteractionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInteraction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInteractions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"channel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channel"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"occurredAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sentiment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sentiment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]} as unknown as DocumentNode<UpdateInteractionMutation, UpdateInteractionMutationVariables>;
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
export const CreateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notes"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dueAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"notes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notes"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dueAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dueAt"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"completedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"completedAt"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const DeleteTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const WeeklyReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WeeklyReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"contactFrequency"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}}]}}]}}]} as unknown as DocumentNode<WeeklyReviewQuery, WeeklyReviewQueryVariables>;
export const GetNetworkDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNetworkData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsFrom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"toPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetNetworkDataQuery, GetNetworkDataQueryVariables>;
export const GetImportantDateDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetImportantDateDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<GetImportantDateDetailQuery, GetImportantDateDetailQueryVariables>;
export const GetPersonDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"contactFrequency"}},{"kind":"Field","name":{"kind":"Name","value":"howWeMet"}},{"kind":"Field","name":{"kind":"Name","value":"firstMetDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"milestoneType"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mentionedInNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_ActivityList"}},{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactInfos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"line2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_ActivityList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}}]}}]} as unknown as DocumentNode<GetPersonDetailQuery, GetPersonDetailQueryVariables>;
export const GetAllPersonsForDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPersonsForDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPersonsForDetailQuery, GetAllPersonsForDetailQueryVariables>;
export const GetAllLabelsForDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLabelsForDetail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetAllLabelsForDetailQuery, GetAllLabelsForDetailQueryVariables>;
export const DeleteImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteImportantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteImportantDateMutation, DeleteImportantDateMutationVariables>;
export const CreateImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"milestoneType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ImportantDatesMilestoneTypeEnum"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImportantDate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recurrence"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"milestoneType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"milestoneType"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"milestoneType"}},{"kind":"Field","name":{"kind":"Name","value":"personId"}}]}}]}}]} as unknown as DocumentNode<CreateImportantDateMutation, CreateImportantDateMutationVariables>;
export const UpdateImportantDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateImportantDate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"milestoneType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ImportantDatesMilestoneTypeEnum"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateImportantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"recurrence"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recurrence"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"milestoneType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"milestoneType"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"milestoneType"}}]}}]}}]} as unknown as DocumentNode<UpdateImportantDateMutation, UpdateImportantDateMutationVariables>;
export const UpdatePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contactFrequency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"howWeMet"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstMetDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"contactFrequency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contactFrequency"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"howWeMet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"howWeMet"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstMetDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstMetDate"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"contactFrequency"}},{"kind":"Field","name":{"kind":"Name","value":"howWeMet"}},{"kind":"Field","name":{"kind":"Name","value":"firstMetDate"}}]}}]}}]} as unknown as DocumentNode<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const AttachLabelToPersonEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AttachLabelToPersonEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<AttachLabelToPersonEditMutation, AttachLabelToPersonEditMutationVariables>;
export const DetachLabelFromPersonEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DetachLabelFromPersonEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersonLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"personId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"labelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"labelId"}}]}}]}}]} as unknown as DocumentNode<DetachLabelFromPersonEditMutation, DetachLabelFromPersonEditMutationVariables>;
export const DeletePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePersonMutation, DeletePersonMutationVariables>;
export const GetPersonTimelineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonTimeline"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentiment"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"milestoneType"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonTimelineQuery, GetPersonTimelineQueryVariables>;
export const GetPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonFilters"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonOrderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occurredAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_Relationships"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"relationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPersonLastName"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Person_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarPath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Person_Relationships"}}]}}]} as unknown as DocumentNode<GetPersonsQuery, GetPersonsQueryVariables>;
export const GetLabelsForPersonFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLabelsForPersonForm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<GetLabelsForPersonFormQuery, GetLabelsForPersonFormQueryVariables>;
export const CreatePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePersonMutation, CreatePersonMutationVariables>;
export const ExportPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExportPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"1"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"priority"},"value":{"kind":"IntValue","value":"2"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"contactInfos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"line2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Birthday","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}}]}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]} as unknown as DocumentNode<ExportPersonsQuery, ExportPersonsQueryVariables>;
export const GetAllEventsForExportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllEventsForExport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"importantDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"recurrence"}},{"kind":"Field","name":{"kind":"Name","value":"milestoneType"}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"person"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllEventsForExportQuery, GetAllEventsForExportQueryVariables>;
export const ImportGoogleContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ImportGoogleContacts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"csv"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importGoogleContacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"csv"},"value":{"kind":"Variable","name":{"kind":"Name","value":"csv"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imported"}},{"kind":"Field","name":{"kind":"Name","value":"merged"}},{"kind":"Field","name":{"kind":"Name","value":"skipped"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<ImportGoogleContactsMutation, ImportGoogleContactsMutationVariables>;
export const GetTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Label_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Label_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<GetTagsQuery, GetTagsQueryVariables>;
export const CreateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LabelInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLabel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Label_List"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Label_List"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]} as unknown as DocumentNode<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTagMutation, DeleteTagMutationVariables>;
export const UpdateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"label"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"Variable","name":{"kind":"Name","value":"label"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<UpdateTagMutation, UpdateTagMutationVariables>;
export const MergeLabelIntoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MergeLabelInto"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keepId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mergeLabelInto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keepId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keepId"}}},{"kind":"Argument","name":{"kind":"Name","value":"deleteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<MergeLabelIntoMutation, MergeLabelIntoMutationVariables>;