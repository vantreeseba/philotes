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
    "\n  fragment Contact_List on Contact {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n  }\n": typeof types.Contact_ListFragmentDoc,
    "\n  query GetContacts {\n    contacts {\n      id\n      ...Contact_List\n    }\n  }\n": typeof types.GetContactsDocument,
    "\n  mutation CreateContact($values: CreateContactInput!) {\n    createContact(values: $values) {\n      id\n      ...Contact_List\n    }\n  }\n": typeof types.CreateContactDocument,
    "\n  mutation DeleteContact($id: String!) {\n    deleteContacts(where: { id: {eq: $id }}) {\n      id\n    }\n  }\n": typeof types.DeleteContactDocument,
};
const documents: Documents = {
    "\n  fragment Contact_List on Contact {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n  }\n": types.Contact_ListFragmentDoc,
    "\n  query GetContacts {\n    contacts {\n      id\n      ...Contact_List\n    }\n  }\n": types.GetContactsDocument,
    "\n  mutation CreateContact($values: CreateContactInput!) {\n    createContact(values: $values) {\n      id\n      ...Contact_List\n    }\n  }\n": types.CreateContactDocument,
    "\n  mutation DeleteContact($id: String!) {\n    deleteContacts(where: { id: {eq: $id }}) {\n      id\n    }\n  }\n": types.DeleteContactDocument,
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
export function graphql(source: "\n  fragment Contact_List on Contact {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment Contact_List on Contact {\n    id\n    firstName\n    lastName\n    email\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetContacts {\n    contacts {\n      id\n      ...Contact_List\n    }\n  }\n"): (typeof documents)["\n  query GetContacts {\n    contacts {\n      id\n      ...Contact_List\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateContact($values: CreateContactInput!) {\n    createContact(values: $values) {\n      id\n      ...Contact_List\n    }\n  }\n"): (typeof documents)["\n  mutation CreateContact($values: CreateContactInput!) {\n    createContact(values: $values) {\n      id\n      ...Contact_List\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteContact($id: String!) {\n    deleteContacts(where: { id: {eq: $id }}) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteContact($id: String!) {\n    deleteContacts(where: { id: {eq: $id }}) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;