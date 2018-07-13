import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import List from './List';
import Header from './Header';

class App extends Component {
  state = {  }
  render() {
    return (
      <View>
      <Header/>
    <List/>
    </View>
    );
  }
}

export default App;