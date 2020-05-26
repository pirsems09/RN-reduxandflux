import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/navigate/Router';
import reducers from './src/reducers';
import { load } from './src/assets/icons/Color'

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCchg3ef0s9TxMkzRVIfvlVYepjFA1dGRs",
  authDomain: "kirala-b6f05.firebaseapp.com",
  databaseURL: "https://kirala-b6f05.firebaseio.com",
  projectId: "kirala-b6f05",
  storageBucket: "kirala-b6f05.appspot.com",
  messagingSenderId: "893829114205",
  appId: "1:893829114205:web:4fbcdeff2ae836c932a0b4",
  measurementId: "G-T1TBNPJT4Y"
};

firebase.initializeApp(firebaseConfig);

export default class App extends Component {

  render() {

    load()

    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    )
  }

}
