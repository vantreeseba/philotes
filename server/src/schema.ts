export const typeDefs = `#graphql
  type Contact {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateContactInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  input UpdateContactInput {
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    contacts: [Contact!]!
    contact(id: Int!): Contact
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact!
    updateContact(id: Int!, input: UpdateContactInput!): Contact!
    deleteContact(id: Int!): Boolean!
  }
`;
