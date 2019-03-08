import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-client-preset';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import clientStore from './clientStore';

// Set up Cache
const cache = new InMemoryCache();

// Set up Local State
const stateLink = clientStore(cache);

const BASE_URL_GRAPHQL = 'https://countries.trevorblades.com/';
const httpLink = new HttpLink({
  uri: BASE_URL_GRAPHQL,
});

// Initialize the Apollo Client
const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache,
});

export default client;
