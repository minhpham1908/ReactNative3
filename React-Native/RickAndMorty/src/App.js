import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';
import InformationTag from './InformationTag';

class App extends Component {
  state = {}
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground
          source={{ uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" }}
          style={styles.picture}
          resizeMode='contain'
        >
          <View style={styles.insidePicture}>
            <Text style={styles.characterNameText}>Rick Sanchez</Text>

          </View>
        </ImageBackground>
        <View style={styles.infoContainer}>
          <InformationTag info='STATUS' description='Alive' />
          <InformationTag info='SPECIES' description='Human'/>
          <InformationTag info='GENDER' description='Male'/>
          <InformationTag info='ORIGIN' description='Earth (C-137)'/>
          <InformationTag info='LAST LOCATION' description='Earth (Replacement Dimension)' end='true'/>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#202329',
    flex: 1,
    paddingTop: 20
  },
  picture: {
    height: 300,
    width: 300,
    justifyContent: 'flex-end'
  },
  insidePicture: {
    backgroundColor: 'rgba(32,35,41,.8)',
    height: 'auto',
    width: '100%',
    padding: 10
  },
  characterNameText: {
    color: 'white',
    fontSize: 22
  },
  infoContainer: {
    width: 300,
    backgroundColor: '#333',
    padding: 20,
  },

})

export default App;
