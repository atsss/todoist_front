import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { SERVER_ENDPOINT } from './constants'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SessionContainer } from './containers'

const httpLink = createHttpLink({
  uri: SERVER_ENDPOINT
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <SessionContainer.Provider>
        <App />
      </SessionContainer.Provider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
