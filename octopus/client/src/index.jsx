import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from 'react-redux';
import store from './store/store';

import './index.scss';
import App from './App';

import * as serviceWorker from './serviceWorker';
const client = new ApolloClient({ uri: process.env.REACT_APP_API_URL });

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
