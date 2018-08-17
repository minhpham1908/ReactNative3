import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import firebase from 'react-native-firebase';



class App extends Component {
  state = {}
  componentDidMount() {
    console.log(firebase)
  }
  render() {
    return (

      <View>
        <Text>hello!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

})

export default App;