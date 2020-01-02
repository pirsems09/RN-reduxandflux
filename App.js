import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/navigate/Router';
import reducers from './src/reducers';

export default class App extends Component {

  render() {
      return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
        </Provider>
      )
    } 

}
