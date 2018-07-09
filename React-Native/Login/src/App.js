import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  Dimensions
} from 'react-native';
import Login from './Login';

class App extends Component {
  state = {
  }
  render() {
    return (
      <ImageBackground source={require('../res/background.jpeg')} style={styles.background} resizeMode='cover'
      >
      <Login/>
      </ImageBackground>
      
    );
  }
}
const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
})

export default App;