/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';

import { createStackNavigator } from 'react-navigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

import ComicListScreen from './ComicListScreen';
import ComicDetail from './ComicDetail';

const Navigation = createStackNavigator({
  ComicList: {
    screen: ComicListScreen,
    navigationOptions: ({ navigation }) => (
      { title: 'Comics' })
  },
ComicDetail: {
  screen: ComicDetail
}
})
class App extends Component {
  state = {}

  render() {
    return (
      <Navigation />
    );
  }
}

export default App;