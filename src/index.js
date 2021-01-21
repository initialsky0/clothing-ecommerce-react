import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { default as App } from './App-container';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

// GraphQL libraries
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

// GraphQL resolvers
import { typeDefs, resolvers } from './graphql/resolvers';

const httpLink =createHttpLink({
  uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers
});

// Initial states
client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    cartTotal: 0,
    itemCount: 0,
    currentUser: null
  }
});

// Example on requesting query from graphql
// client.query({
//   query: gql`
//     {
//       getCollectionsByTitle(title: "Hats") {
//         items {
//           id
//           name
//           price
//           imageUrl
//         }
//       }
//     }
//   `
// }).then(res => console.log(res));

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
