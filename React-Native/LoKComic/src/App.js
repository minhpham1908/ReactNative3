/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import ComicListScreen from './ComicListScreen';
import ComicListItem from './ComicListItem';

class App extends Component {
  state = {}
  render() {
    return (
      <View>
        <ComicListScreen/>
      </View>
    );
  }
}

export default App;