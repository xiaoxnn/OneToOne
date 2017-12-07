/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  StackNavigatorHome from './src/components/StackNavigatorHome'
import  {Provider} from 'react-redux'
import  configureStore from './src/store/configureStore'
const store=configureStore();
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
      return (
          <Provider store={store}>
            <StackNavigatorHome/>
          </Provider>
      );
  }
}

