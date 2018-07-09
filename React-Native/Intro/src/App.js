import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import MathBlock from './MatchBlock';

class App extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 5, alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.textTop}> Schedule </Text>
          <Image
            source={require('../res/ball.png')}
            style={{ width: 160, height: 160, marginRight: '3%' }}
          />
          <Text style={styles.textWC}> FIFA WORLD CUP 2018 </Text>
        </View>

        <View style={styles.matchesBLock}>
          <MathBlock
            team1Name='Uruguay'
            team2Name='France'
            time='Jul 6 2018 - 21:00'
            team1Image={require('../res/uruguay-flag-icon-32.png')}
            team2Image={require('../res/france-flag-icon-32.png')}
          />
          <MathBlock
            team1Name='Brazil'
            team2Name='Belgium'
            time='Jul 7 2018 - 01:00'
            team1Image={require('../res/brazil-flag-icon-32.png')}
            team2Image={require('../res/belgium-flag-icon-32.png')}
          />
          <MathBlock
            team1Name='Russia'
            team2Name='Croatia'
            time='Jul 8 2018 - 01:00'
            team1Image={require('../res/russia-flag-icon-32.png')}
            team2Image={require('../res/croatia-flag-icon-32.png')}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282F37',
    flex: 1,
    // alignItems: 'center',
  },
  matchesBLock: {
    flex: 6,
    marginTop: '5%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10%'
  },
  textWC: {
    color: 'white',
    fontSize: 18
  },
  textTop: {
    color: 'white',
    fontSize: 25
  },
})

export default App;