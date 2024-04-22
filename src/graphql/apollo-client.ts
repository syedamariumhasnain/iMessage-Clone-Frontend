// HttpLink -- GraphQL link allow us to make HTTP requests to our server
// For Subscriptions to get Real time data, we also need -- Websocket Link

// The key difference between 'REST APIs' and 'GraphQL' is that
// REST API -- have multiple endpoints and you make request to a specific 
// endpoint to get specific data; where as with
// GraphQL -- Every single request that is made to the server is sent to 
// this one graphql endpoint and at this endpoint we will define our 
// resolvers for queries and mutations

// Credentials -- used to tell the server whether or not to include the 
// cookies in the request

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: "include",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
