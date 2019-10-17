import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { CLIENT, UID, ACCESS_TOKEN } from "../variables/localStrageKey";
import { SERVER_ENDPOINT } from "../variables/endpoint";

const httpLink = createHttpLink({
  uri: SERVER_ENDPOINT
});

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      CLIENT: localStorage.getItem(CLIENT) || null,
      UID: localStorage.getItem(UID) || null,
      ACCESS_TOKEN: localStorage.getItem(ACCESS_TOKEN) || null
    }
  });
  return forward(operation);
});

const errorLink = onError(({ networkError }) => {
  if (networkError.statusCode === 401) {
    console.log("hi");
  }
});

const link = errorLink.concat(middlewareLink.concat(httpLink));

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
