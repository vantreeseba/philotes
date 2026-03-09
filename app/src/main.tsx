import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { scalarTypePolicies } from './__generated__/type-policies.js';
import { routeTree } from './routeTree.gen';
import './index.css';

const client = new ApolloClient({
  cache: new InMemoryCache({ typePolicies: scalarTypePolicies }),
  dataMasking: true,
  link: new HttpLink({ uri: '/graphql' }),
});

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
