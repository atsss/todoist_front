import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SERVER_ENDPOINT } from "./variables/endpoint";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SessionContainer } from "./containers";
import { CLIENT, UID, ACCESS_TOKEN } from "./variables/localStrageKey";

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

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <SessionContainer.Provider>
        <App />
      </SessionContainer.Provider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
