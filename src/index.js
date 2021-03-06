import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";
import { SessionContainer } from "./containers";
import client from "./config/Apollo";

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
