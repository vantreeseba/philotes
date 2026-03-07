/* eslint-disable */
import * as types from './graphql.ts';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetRecentPersons {\n    persons(orderBy: { createdAt: { direction: desc, priority: 1 } }) {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n    }\n  }\n": typeof types.GetRecentPersonsDocument,
    "\n  query GetUpcomingDates {\n    importantDates {\n      id\n      name\n      description\n      date\n      recurrence\n      person {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": typeof types.GetUpcomingDatesDocument,
    "\n  fragment Label_List on Label {\n    id\n    color\n    label\n  }\n": typeof types.Label_ListFragmentDoc,
    "\n  mutation AttachTagToImportantDate($importantDateId: String!, $labelId: String!) {\n    createImportantDateTag(\n      values: { importantDateId: $importantDateId, labelId: $labelId }\n    ) {\n      importantDateId\n      labelId\n    }\n  }\n": typeof types.AttachTagToImportantDateDocument,
    "\n  mutation DetachTagFromImportantDate($importantDateId: String!, $labelId: String!) {\n    deleteImportantDateTags(\n      where: {\n        importantDateId: { eq: $importantDateId }\n        labelId: { eq: $labelId }\n      }\n    ) {\n      importantDateId\n      labelId\n    }\n  }\n": typeof types.DetachTagFromImportantDateDocument,
    "\n  fragment Person_Labels on Person {\n    id\n    labels {\n      id\n      label\n      color\n    }\n  }\n": typeof types.Person_LabelsFragmentDoc,
    "\n  mutation AttachLabelToPerson($personId: String!, $labelId: String!) {\n    createPersonLabel(values: { personId: $personId, labelId: $labelId }) {\n      personId\n      labelId\n    }\n  }\n": typeof types.AttachLabelToPersonDocument,
    "\n  mutation DetachLabelFromPerson($personId: String!, $labelId: String!) {\n    deletePersonLabels(\n      where: { personId: { eq: $personId }, labelId: { eq: $labelId } }\n    ) {\n      personId\n      labelId\n    }\n  }\n": typeof types.DetachLabelFromPersonDocument,
    "\n  fragment Person_List on Person {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n    labels {\n      id\n      label\n      color\n    }\n    importantDates {\n      id\n      name\n      description\n      date\n    }\n    ...Person_Relationships\n  }\n": typeof types.Person_ListFragmentDoc,
    "\n  mutation CreateNote($body: String!, $personId: String!) {\n    createNote(values: { body: $body, personId: $personId }) {\n      id\n      body\n      personId\n    }\n  }\n": typeof types.CreateNoteDocument,
    "\n  mutation UpdateNote($id: String!, $body: String!) {\n    updateNotes(set: { body: $body }, where: { id: { eq: $id } }) {\n      id\n      body\n    }\n  }\n": typeof types.UpdateNoteDocument,
    "\n  mutation DeleteNote($id: String!) {\n    deleteNotes(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": typeof types.DeleteNoteDocument,
    "\n  mutation AttachTagToNote($noteId: String!, $labelId: String!) {\n    createNoteTag(values: { noteId: $noteId, labelId: $labelId }) {\n      noteId\n      labelId\n    }\n  }\n": typeof types.AttachTagToNoteDocument,
    "\n  mutation DetachTagFromNote($noteId: String!, $labelId: String!) {\n    deleteNoteTags(\n      where: { noteId: { eq: $noteId }, labelId: { eq: $labelId } }\n    ) {\n      noteId\n      labelId\n    }\n  }\n": typeof types.DetachTagFromNoteDocument,
    "\n  fragment Person_Relationships on Person {\n    id\n    relationships {\n      id\n      type\n      relatedPersonId\n      relatedPersonFirstName\n      relatedPersonLastName\n    }\n  }\n": typeof types.Person_RelationshipsFragmentDoc,
    "\n  mutation CreatePersonRelationship(\n    $fromPersonId: String!\n    $toPersonId: String!\n    $type: String!\n  ) {\n    createPersonRelationship(\n      values: {\n        fromPersonId: $fromPersonId\n        toPersonId: $toPersonId\n        type: $type\n      }\n    ) {\n      id\n      fromPersonId\n      toPersonId\n      type\n    }\n  }\n": typeof types.CreatePersonRelationshipDocument,
    "\n  mutation UpdatePersonRelationship($id: String!, $type: String!) {\n    updatePersonRelationships(\n      set: { type: $type }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      fromPersonId\n      toPersonId\n      type\n    }\n  }\n": typeof types.UpdatePersonRelationshipDocument,
    "\n  mutation DeletePersonRelationship($id: String!) {\n    deletePersonRelationships(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": typeof types.DeletePersonRelationshipDocument,
    "\n  fragment Tag_List on Label {\n    id\n    color\n    label\n  }\n": typeof types.Tag_ListFragmentDoc,
    "\n  query GetImportantDateDetail($dateId: String!, $personId: String!) {\n    importantDates(where: { id: { eq: $dateId } }) {\n      id\n      name\n      description\n      date\n      recurrence\n      labels {\n        id\n        label\n        color\n      }\n    }\n    notes(where: { personId: { eq: $personId } }) {\n      id\n      body\n      labels {\n        id\n        label\n        color\n      }\n    }\n  }\n": typeof types.GetImportantDateDetailDocument,
    "\n  query GetPersonDetail($id: String!) {\n    persons(where: { id: { eq: $id } }) {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n      updatedAt\n      labels {\n        id\n        label\n        color\n      }\n      importantDates {\n        id\n        name\n        description\n        date\n        recurrence\n        labels {\n          id\n          label\n          color\n        }\n      }\n      notes {\n        id\n        body\n        labels {\n          id\n          label\n          color\n        }\n      }\n      relationships {\n        id\n        type\n        relatedPersonId\n        relatedPersonFirstName\n        relatedPersonLastName\n      }\n    }\n  }\n": typeof types.GetPersonDetailDocument,
    "\n  query GetAllPersonsForDetail {\n    persons {\n      id\n      firstName\n      lastName\n    }\n  }\n": typeof types.GetAllPersonsForDetailDocument,
    "\n  query GetAllLabelsForDetail {\n    labels {\n      id\n      label\n      color\n    }\n  }\n": typeof types.GetAllLabelsForDetailDocument,
    "\n  mutation DeleteImportantDate($id: String!) {\n    deleteImportantDates(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": typeof types.DeleteImportantDateDocument,
    "\n  mutation CreateImportantDate(\n    $name: String!\n    $date: String!\n    $personId: String!\n    $description: String\n    $recurrence: String\n  ) {\n    createImportantDate(\n      values: {\n        name: $name\n        date: $date\n        personId: $personId\n        description: $description\n        recurrence: $recurrence\n      }\n    ) {\n      id\n      name\n      date\n      description\n      recurrence\n      personId\n    }\n  }\n": typeof types.CreateImportantDateDocument,
    "\n  mutation UpdateImportantDate(\n    $id: String!\n    $name: String!\n    $date: String!\n    $description: String\n    $recurrence: String\n  ) {\n    updateImportantDates(\n      set: {\n        name: $name\n        date: $date\n        description: $description\n        recurrence: $recurrence\n      }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      name\n      date\n      description\n      recurrence\n    }\n  }\n": typeof types.UpdateImportantDateDocument,
    "\n  mutation UpdatePerson(\n    $id: String!\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n  ) {\n    updatePersons(\n      set: { firstName: $firstName, lastName: $lastName, email: $email }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n": typeof types.UpdatePersonDocument,
    "\n  mutation AttachLabelToPersonEdit($personId: String!, $labelId: String!) {\n    createPersonLabel(values: { personId: $personId, labelId: $labelId }) {\n      personId\n      labelId\n    }\n  }\n": typeof types.AttachLabelToPersonEditDocument,
    "\n  mutation DetachLabelFromPersonEdit($personId: String!, $labelId: String!) {\n    deletePersonLabels(\n      where: { personId: { eq: $personId }, labelId: { eq: $labelId } }\n    ) {\n      personId\n      labelId\n    }\n  }\n": typeof types.DetachLabelFromPersonEditDocument,
    "\n  query GetPersons {\n    persons {\n      id\n      ...Person_List\n    }\n  }\n": typeof types.GetPersonsDocument,
    "\n  query GetLabelsForPersonForm {\n    labels {\n      id\n      ...Label_List\n    }\n  }\n": typeof types.GetLabelsForPersonFormDocument,
    "\n  mutation CreatePerson($values: CreatePersonInput!) {\n    createPerson(values: $values) {\n      id\n      ...Person_List\n    }\n  }\n": typeof types.CreatePersonDocument,
    "\n  mutation DeletePerson($id: String!) {\n    deletePersons(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": typeof types.DeletePersonDocument,
    "\n  query GetTags {\n    labels {\n      id\n      ...Tag_List\n    }\n  }\n": typeof types.GetTagsDocument,
    "\n  mutation CreateTag($values: CreateLabelInput!) {\n    createLabel(values: $values) {\n      id\n      ...Tag_List\n    }\n  }\n": typeof types.CreateTagDocument,
    "\n  mutation DeleteTag($id: String!) {\n    deleteLabels(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": typeof types.DeleteTagDocument,
};
const documents: Documents = {
    "\n  query GetRecentPersons {\n    persons(orderBy: { createdAt: { direction: desc, priority: 1 } }) {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n    }\n  }\n": types.GetRecentPersonsDocument,
    "\n  query GetUpcomingDates {\n    importantDates {\n      id\n      name\n      description\n      date\n      recurrence\n      person {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.GetUpcomingDatesDocument,
    "\n  fragment Label_List on Label {\n    id\n    color\n    label\n  }\n": types.Label_ListFragmentDoc,
    "\n  mutation AttachTagToImportantDate($importantDateId: String!, $labelId: String!) {\n    createImportantDateTag(\n      values: { importantDateId: $importantDateId, labelId: $labelId }\n    ) {\n      importantDateId\n      labelId\n    }\n  }\n": types.AttachTagToImportantDateDocument,
    "\n  mutation DetachTagFromImportantDate($importantDateId: String!, $labelId: String!) {\n    deleteImportantDateTags(\n      where: {\n        importantDateId: { eq: $importantDateId }\n        labelId: { eq: $labelId }\n      }\n    ) {\n      importantDateId\n      labelId\n    }\n  }\n": types.DetachTagFromImportantDateDocument,
    "\n  fragment Person_Labels on Person {\n    id\n    labels {\n      id\n      label\n      color\n    }\n  }\n": types.Person_LabelsFragmentDoc,
    "\n  mutation AttachLabelToPerson($personId: String!, $labelId: String!) {\n    createPersonLabel(values: { personId: $personId, labelId: $labelId }) {\n      personId\n      labelId\n    }\n  }\n": types.AttachLabelToPersonDocument,
    "\n  mutation DetachLabelFromPerson($personId: String!, $labelId: String!) {\n    deletePersonLabels(\n      where: { personId: { eq: $personId }, labelId: { eq: $labelId } }\n    ) {\n      personId\n      labelId\n    }\n  }\n": types.DetachLabelFromPersonDocument,
    "\n  fragment Person_List on Person {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n    labels {\n      id\n      label\n      color\n    }\n    importantDates {\n      id\n      name\n      description\n      date\n    }\n    ...Person_Relationships\n  }\n": types.Person_ListFragmentDoc,
    "\n  mutation CreateNote($body: String!, $personId: String!) {\n    createNote(values: { body: $body, personId: $personId }) {\n      id\n      body\n      personId\n    }\n  }\n": types.CreateNoteDocument,
    "\n  mutation UpdateNote($id: String!, $body: String!) {\n    updateNotes(set: { body: $body }, where: { id: { eq: $id } }) {\n      id\n      body\n    }\n  }\n": types.UpdateNoteDocument,
    "\n  mutation DeleteNote($id: String!) {\n    deleteNotes(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": types.DeleteNoteDocument,
    "\n  mutation AttachTagToNote($noteId: String!, $labelId: String!) {\n    createNoteTag(values: { noteId: $noteId, labelId: $labelId }) {\n      noteId\n      labelId\n    }\n  }\n": types.AttachTagToNoteDocument,
    "\n  mutation DetachTagFromNote($noteId: String!, $labelId: String!) {\n    deleteNoteTags(\n      where: { noteId: { eq: $noteId }, labelId: { eq: $labelId } }\n    ) {\n      noteId\n      labelId\n    }\n  }\n": types.DetachTagFromNoteDocument,
    "\n  fragment Person_Relationships on Person {\n    id\n    relationships {\n      id\n      type\n      relatedPersonId\n      relatedPersonFirstName\n      relatedPersonLastName\n    }\n  }\n": types.Person_RelationshipsFragmentDoc,
    "\n  mutation CreatePersonRelationship(\n    $fromPersonId: String!\n    $toPersonId: String!\n    $type: String!\n  ) {\n    createPersonRelationship(\n      values: {\n        fromPersonId: $fromPersonId\n        toPersonId: $toPersonId\n        type: $type\n      }\n    ) {\n      id\n      fromPersonId\n      toPersonId\n      type\n    }\n  }\n": types.CreatePersonRelationshipDocument,
    "\n  mutation UpdatePersonRelationship($id: String!, $type: String!) {\n    updatePersonRelationships(\n      set: { type: $type }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      fromPersonId\n      toPersonId\n      type\n    }\n  }\n": types.UpdatePersonRelationshipDocument,
    "\n  mutation DeletePersonRelationship($id: String!) {\n    deletePersonRelationships(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": types.DeletePersonRelationshipDocument,
    "\n  fragment Tag_List on Label {\n    id\n    color\n    label\n  }\n": types.Tag_ListFragmentDoc,
    "\n  query GetImportantDateDetail($dateId: String!, $personId: String!) {\n    importantDates(where: { id: { eq: $dateId } }) {\n      id\n      name\n      description\n      date\n      recurrence\n      labels {\n        id\n        label\n        color\n      }\n    }\n    notes(where: { personId: { eq: $personId } }) {\n      id\n      body\n      labels {\n        id\n        label\n        color\n      }\n    }\n  }\n": types.GetImportantDateDetailDocument,
    "\n  query GetPersonDetail($id: String!) {\n    persons(where: { id: { eq: $id } }) {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n      updatedAt\n      labels {\n        id\n        label\n        color\n      }\n      importantDates {\n        id\n        name\n        description\n        date\n        recurrence\n        labels {\n          id\n          label\n          color\n        }\n      }\n      notes {\n        id\n        body\n        labels {\n          id\n          label\n          color\n        }\n      }\n      relationships {\n        id\n        type\n        relatedPersonId\n        relatedPersonFirstName\n        relatedPersonLastName\n      }\n    }\n  }\n": types.GetPersonDetailDocument,
    "\n  query GetAllPersonsForDetail {\n    persons {\n      id\n      firstName\n      lastName\n    }\n  }\n": types.GetAllPersonsForDetailDocument,
    "\n  query GetAllLabelsForDetail {\n    labels {\n      id\n      label\n      color\n    }\n  }\n": types.GetAllLabelsForDetailDocument,
    "\n  mutation DeleteImportantDate($id: String!) {\n    deleteImportantDates(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": types.DeleteImportantDateDocument,
    "\n  mutation CreateImportantDate(\n    $name: String!\n    $date: String!\n    $personId: String!\n    $description: String\n    $recurrence: String\n  ) {\n    createImportantDate(\n      values: {\n        name: $name\n        date: $date\n        personId: $personId\n        description: $description\n        recurrence: $recurrence\n      }\n    ) {\n      id\n      name\n      date\n      description\n      recurrence\n      personId\n    }\n  }\n": types.CreateImportantDateDocument,
    "\n  mutation UpdateImportantDate(\n    $id: String!\n    $name: String!\n    $date: String!\n    $description: String\n    $recurrence: String\n  ) {\n    updateImportantDates(\n      set: {\n        name: $name\n        date: $date\n        description: $description\n        recurrence: $recurrence\n      }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      name\n      date\n      description\n      recurrence\n    }\n  }\n": types.UpdateImportantDateDocument,
    "\n  mutation UpdatePerson(\n    $id: String!\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n  ) {\n    updatePersons(\n      set: { firstName: $firstName, lastName: $lastName, email: $email }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n": types.UpdatePersonDocument,
    "\n  mutation AttachLabelToPersonEdit($personId: String!, $labelId: String!) {\n    createPersonLabel(values: { personId: $personId, labelId: $labelId }) {\n      personId\n      labelId\n    }\n  }\n": types.AttachLabelToPersonEditDocument,
    "\n  mutation DetachLabelFromPersonEdit($personId: String!, $labelId: String!) {\n    deletePersonLabels(\n      where: { personId: { eq: $personId }, labelId: { eq: $labelId } }\n    ) {\n      personId\n      labelId\n    }\n  }\n": types.DetachLabelFromPersonEditDocument,
    "\n  query GetPersons {\n    persons {\n      id\n      ...Person_List\n    }\n  }\n": types.GetPersonsDocument,
    "\n  query GetLabelsForPersonForm {\n    labels {\n      id\n      ...Label_List\n    }\n  }\n": types.GetLabelsForPersonFormDocument,
    "\n  mutation CreatePerson($values: CreatePersonInput!) {\n    createPerson(values: $values) {\n      id\n      ...Person_List\n    }\n  }\n": types.CreatePersonDocument,
    "\n  mutation DeletePerson($id: String!) {\n    deletePersons(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": types.DeletePersonDocument,
    "\n  query GetTags {\n    labels {\n      id\n      ...Tag_List\n    }\n  }\n": types.GetTagsDocument,
    "\n  mutation CreateTag($values: CreateLabelInput!) {\n    createLabel(values: $values) {\n      id\n      ...Tag_List\n    }\n  }\n": types.CreateTagDocument,
    "\n  mutation DeleteTag($id: String!) {\n    deleteLabels(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n": types.DeleteTagDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecentPersons {\n    persons(orderBy: { createdAt: { direction: desc, priority: 1 } }) {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetRecentPersons {\n    persons(orderBy: { createdAt: { direction: desc, priority: 1 } }) {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUpcomingDates {\n    importantDates {\n      id\n      name\n      description\n      date\n      recurrence\n      person {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUpcomingDates {\n    importantDates {\n      id\n      name\n      description\n      date\n      recurrence\n      person {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Label_List on Label {\n    id\n    color\n    label\n  }\n"): (typeof documents)["\n  fragment Label_List on Label {\n    id\n    color\n    label\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AttachTagToImportantDate($importantDateId: String!, $labelId: String!) {\n    createImportantDateTag(\n      values: { importantDateId: $importantDateId, labelId: $labelId }\n    ) {\n      importantDateId\n      labelId\n    }\n  }\n"): (typeof documents)["\n  mutation AttachTagToImportantDate($importantDateId: String!, $labelId: String!) {\n    createImportantDateTag(\n      values: { importantDateId: $importantDateId, labelId: $labelId }\n    ) {\n      importantDateId\n      labelId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DetachTagFromImportantDate($importantDateId: String!, $labelId: String!) {\n    deleteImportantDateTags(\n      where: {\n        importantDateId: { eq: $importantDateId }\n        labelId: { eq: $labelId }\n      }\n    ) {\n      importantDateId\n      labelId\n    }\n  }\n"): (typeof documents)["\n  mutation DetachTagFromImportantDate($importantDateId: String!, $labelId: String!) {\n    deleteImportantDateTags(\n      where: {\n        importantDateId: { eq: $importantDateId }\n        labelId: { eq: $labelId }\n      }\n    ) {\n      importantDateId\n      labelId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Person_Labels on Person {\n    id\n    labels {\n      id\n      label\n      color\n    }\n  }\n"): (typeof documents)["\n  fragment Person_Labels on Person {\n    id\n    labels {\n      id\n      label\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AttachLabelToPerson($personId: String!, $labelId: String!) {\n    createPersonLabel(values: { personId: $personId, labelId: $labelId }) {\n      personId\n      labelId\n    }\n  }\n"): (typeof documents)["\n  mutation AttachLabelToPerson($personId: String!, $labelId: String!) {\n    createPersonLabel(values: { personId: $personId, labelId: $labelId }) {\n      personId\n      labelId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DetachLabelFromPerson($personId: String!, $labelId: String!) {\n    deletePersonLabels(\n      where: { personId: { eq: $personId }, labelId: { eq: $labelId } }\n    ) {\n      personId\n      labelId\n    }\n  }\n"): (typeof documents)["\n  mutation DetachLabelFromPerson($personId: String!, $labelId: String!) {\n    deletePersonLabels(\n      where: { personId: { eq: $personId }, labelId: { eq: $labelId } }\n    ) {\n      personId\n      labelId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Person_List on Person {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n    labels {\n      id\n      label\n      color\n    }\n    importantDates {\n      id\n      name\n      description\n      date\n    }\n    ...Person_Relationships\n  }\n"): (typeof documents)["\n  fragment Person_List on Person {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n    labels {\n      id\n      label\n      color\n    }\n    importantDates {\n      id\n      name\n      description\n      date\n    }\n    ...Person_Relationships\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateNote($body: String!, $personId: String!) {\n    createNote(values: { body: $body, personId: $personId }) {\n      id\n      body\n      personId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNote($body: String!, $personId: String!) {\n    createNote(values: { body: $body, personId: $personId }) {\n      id\n      body\n      personId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateNote($id: String!, $body: String!) {\n    updateNotes(set: { body: $body }, where: { id: { eq: $id } }) {\n      id\n      body\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateNote($id: String!, $body: String!) {\n    updateNotes(set: { body: $body }, where: { id: { eq: $id } }) {\n      id\n      body\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteNote($id: String!) {\n    deleteNotes(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteNote($id: String!) {\n    deleteNotes(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AttachTagToNote($noteId: String!, $labelId: String!) {\n    createNoteTag(values: { noteId: $noteId, labelId: $labelId }) {\n      noteId\n      labelId\n    }\n  }\n"): (typeof documents)["\n  mutation AttachTagToNote($noteId: String!, $labelId: String!) {\n    createNoteTag(values: { noteId: $noteId, labelId: $labelId }) {\n      noteId\n      labelId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DetachTagFromNote($noteId: String!, $labelId: String!) {\n    deleteNoteTags(\n      where: { noteId: { eq: $noteId }, labelId: { eq: $labelId } }\n    ) {\n      noteId\n      labelId\n    }\n  }\n"): (typeof documents)["\n  mutation DetachTagFromNote($noteId: String!, $labelId: String!) {\n    deleteNoteTags(\n      where: { noteId: { eq: $noteId }, labelId: { eq: $labelId } }\n    ) {\n      noteId\n      labelId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Person_Relationships on Person {\n    id\n    relationships {\n      id\n      type\n      relatedPersonId\n      relatedPersonFirstName\n      relatedPersonLastName\n    }\n  }\n"): (typeof documents)["\n  fragment Person_Relationships on Person {\n    id\n    relationships {\n      id\n      type\n      relatedPersonId\n      relatedPersonFirstName\n      relatedPersonLastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePersonRelationship(\n    $fromPersonId: String!\n    $toPersonId: String!\n    $type: String!\n  ) {\n    createPersonRelationship(\n      values: {\n        fromPersonId: $fromPersonId\n        toPersonId: $toPersonId\n        type: $type\n      }\n    ) {\n      id\n      fromPersonId\n      toPersonId\n      type\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePersonRelationship(\n    $fromPersonId: String!\n    $toPersonId: String!\n    $type: String!\n  ) {\n    createPersonRelationship(\n      values: {\n        fromPersonId: $fromPersonId\n        toPersonId: $toPersonId\n        type: $type\n      }\n    ) {\n      id\n      fromPersonId\n      toPersonId\n      type\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePersonRelationship($id: String!, $type: String!) {\n    updatePersonRelationships(\n      set: { type: $type }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      fromPersonId\n      toPersonId\n      type\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePersonRelationship($id: String!, $type: String!) {\n    updatePersonRelationships(\n      set: { type: $type }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      fromPersonId\n      toPersonId\n      type\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePersonRelationship($id: String!) {\n    deletePersonRelationships(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeletePersonRelationship($id: String!) {\n    deletePersonRelationships(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Tag_List on Label {\n    id\n    color\n    label\n  }\n"): (typeof documents)["\n  fragment Tag_List on Label {\n    id\n    color\n    label\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetImportantDateDetail($dateId: String!, $personId: String!) {\n    importantDates(where: { id: { eq: $dateId } }) {\n      id\n      name\n      description\n      date\n      recurrence\n      labels {\n        id\n        label\n        color\n      }\n    }\n    notes(where: { personId: { eq: $personId } }) {\n      id\n      body\n      labels {\n        id\n        label\n        color\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetImportantDateDetail($dateId: String!, $personId: String!) {\n    importantDates(where: { id: { eq: $dateId } }) {\n      id\n      name\n      description\n      date\n      recurrence\n      labels {\n        id\n        label\n        color\n      }\n    }\n    notes(where: { personId: { eq: $personId } }) {\n      id\n      body\n      labels {\n        id\n        label\n        color\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPersonDetail($id: String!) {\n    persons(where: { id: { eq: $id } }) {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n      updatedAt\n      labels {\n        id\n        label\n        color\n      }\n      importantDates {\n        id\n        name\n        description\n        date\n        recurrence\n        labels {\n          id\n          label\n          color\n        }\n      }\n      notes {\n        id\n        body\n        labels {\n          id\n          label\n          color\n        }\n      }\n      relationships {\n        id\n        type\n        relatedPersonId\n        relatedPersonFirstName\n        relatedPersonLastName\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPersonDetail($id: String!) {\n    persons(where: { id: { eq: $id } }) {\n      id\n      firstName\n      lastName\n      email\n      createdAt\n      updatedAt\n      labels {\n        id\n        label\n        color\n      }\n      importantDates {\n        id\n        name\n        description\n        date\n        recurrence\n        labels {\n          id\n          label\n          color\n        }\n      }\n      notes {\n        id\n        body\n        labels {\n          id\n          label\n          color\n        }\n      }\n      relationships {\n        id\n        type\n        relatedPersonId\n        relatedPersonFirstName\n        relatedPersonLastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPersonsForDetail {\n    persons {\n      id\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query GetAllPersonsForDetail {\n    persons {\n      id\n      firstName\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllLabelsForDetail {\n    labels {\n      id\n      label\n      color\n    }\n  }\n"): (typeof documents)["\n  query GetAllLabelsForDetail {\n    labels {\n      id\n      label\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteImportantDate($id: String!) {\n    deleteImportantDates(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteImportantDate($id: String!) {\n    deleteImportantDates(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateImportantDate(\n    $name: String!\n    $date: String!\n    $personId: String!\n    $description: String\n    $recurrence: String\n  ) {\n    createImportantDate(\n      values: {\n        name: $name\n        date: $date\n        personId: $personId\n        description: $description\n        recurrence: $recurrence\n      }\n    ) {\n      id\n      name\n      date\n      description\n      recurrence\n      personId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateImportantDate(\n    $name: String!\n    $date: String!\n    $personId: String!\n    $description: String\n    $recurrence: String\n  ) {\n    createImportantDate(\n      values: {\n        name: $name\n        date: $date\n        personId: $personId\n        description: $description\n        recurrence: $recurrence\n      }\n    ) {\n      id\n      name\n      date\n      description\n      recurrence\n      personId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateImportantDate(\n    $id: String!\n    $name: String!\n    $date: String!\n    $description: String\n    $recurrence: String\n  ) {\n    updateImportantDates(\n      set: {\n        name: $name\n        date: $date\n        description: $description\n        recurrence: $recurrence\n      }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      name\n      date\n      description\n      recurrence\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateImportantDate(\n    $id: String!\n    $name: String!\n    $date: String!\n    $description: String\n    $recurrence: String\n  ) {\n    updateImportantDates(\n      set: {\n        name: $name\n        date: $date\n        description: $description\n        recurrence: $recurrence\n      }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      name\n      date\n      description\n      recurrence\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePerson(\n    $id: String!\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n  ) {\n    updatePersons(\n      set: { firstName: $firstName, lastName: $lastName, email: $email }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePerson(\n    $id: String!\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n  ) {\n    updatePersons(\n      set: { firstName: $firstName, lastName: $lastName, email: $email }\n      where: { id: { eq: $id } }\n    ) {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AttachLabelToPersonEdit($personId: String!, $labelId: String!) {\n    createPersonLabel(values: { personId: $personId, labelId: $labelId }) {\n      personId\n      labelId\n    }\n  }\n"): (typeof documents)["\n  mutation AttachLabelToPersonEdit($personId: String!, $labelId: String!) {\n    createPersonLabel(values: { personId: $personId, labelId: $labelId }) {\n      personId\n      labelId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DetachLabelFromPersonEdit($personId: String!, $labelId: String!) {\n    deletePersonLabels(\n      where: { personId: { eq: $personId }, labelId: { eq: $labelId } }\n    ) {\n      personId\n      labelId\n    }\n  }\n"): (typeof documents)["\n  mutation DetachLabelFromPersonEdit($personId: String!, $labelId: String!) {\n    deletePersonLabels(\n      where: { personId: { eq: $personId }, labelId: { eq: $labelId } }\n    ) {\n      personId\n      labelId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPersons {\n    persons {\n      id\n      ...Person_List\n    }\n  }\n"): (typeof documents)["\n  query GetPersons {\n    persons {\n      id\n      ...Person_List\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLabelsForPersonForm {\n    labels {\n      id\n      ...Label_List\n    }\n  }\n"): (typeof documents)["\n  query GetLabelsForPersonForm {\n    labels {\n      id\n      ...Label_List\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePerson($values: CreatePersonInput!) {\n    createPerson(values: $values) {\n      id\n      ...Person_List\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePerson($values: CreatePersonInput!) {\n    createPerson(values: $values) {\n      id\n      ...Person_List\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePerson($id: String!) {\n    deletePersons(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeletePerson($id: String!) {\n    deletePersons(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTags {\n    labels {\n      id\n      ...Tag_List\n    }\n  }\n"): (typeof documents)["\n  query GetTags {\n    labels {\n      id\n      ...Tag_List\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTag($values: CreateLabelInput!) {\n    createLabel(values: $values) {\n      id\n      ...Tag_List\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTag($values: CreateLabelInput!) {\n    createLabel(values: $values) {\n      id\n      ...Tag_List\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTag($id: String!) {\n    deleteLabels(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTag($id: String!) {\n    deleteLabels(where: { id: { eq: $id } }) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;