import { gql } from "@apollo/client";

export const GET_CONTACTS = gql`
  query GetContacts {
    contacts {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const GET_CONTACT = gql`
  query GetContact($id: Int!) {
    contact(id: $id) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CONTACT = gql`
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CONTACT = gql`
  mutation UpdateContact($id: Int!, $input: UpdateContactInput!) {
    updateContact(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation DeleteContact($id: Int!) {
    deleteContact(id: $id)
  }
`;
