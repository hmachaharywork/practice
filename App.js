'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './js/Routes/Router';
import configureStore from './js/store/configureStore';
import { Provider } from 'react-redux';


export default class App extends Component {
  constructor() {
      super();
      this.state = {
          isLoading: false,
          store: configureStore(),
      };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Root />
      </Provider>
    );
  }
}
