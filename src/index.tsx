import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import './index.css';
import App from './App';

const httpLink = createHttpLink({
  uri: 'https://blessed-bear-22.hasura.app/v1/graphql',
});

// Use context to give hasura secret to all apollo requests as auth header
// Assumes hasura admin secret exists in localStorage to supplement real authentication
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": localStorage.getItem("secret"),
    }

  }
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
