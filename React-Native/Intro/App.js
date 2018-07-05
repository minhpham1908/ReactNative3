import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

class App extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 5, alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.textTop}> Schedule </Text>
          <Image source={require('./res/ball.png')} style={{ width: 160, height: 160, marginRight: '3%' }} />
          <Text style={styles.textWC}> FIFA WORLD CUP 2018 </Text>
        </View>
        <View style={styles.matchesBLock}>
          <View style={styles.matchBlock}>
            <View style={{ flexDirection: 'row', marginTop: '1%', alignItems: 'center' }}>
              <Text style={styles.text}> Jul 6 2018 - 21:00 </Text>
            </View>
            <View style={styles.teamBlock}>
              <View style={styles.teamNameBlock}>
                <Text style={styles.teamText}> Uruguay </Text>
              </View>
              <Image source={require('./res/uruguay-flag-icon-32.png')} style={{ width: 19, height: 10, flex: 1.5 }} resizeMode="contain" />
              <Image source={require('./res/france-flag-icon-32.png')} style={{ width: 19, height: 10, flex: 1.5 }} resizeMode="contain" />
              <View style={styles.teamNameBlock}>
                <Text style={styles.teamText}> France </Text>
              </View>
            </View>
          </View>
          <View style={styles.matchBlock}>
            <View style={{ flexDirection: 'row', marginTop: '1%', alignItems: 'center' }}>
              <Text style={styles.text}> Jul 7 2018 - 01:00 </Text>
            </View>
            <View style={styles.teamBlock}>
              <View style={styles.teamNameBlock}>
                <Text style={styles.teamText}> Brazil </Text>
              </View>
              <Image source={require('./res/brazil-flag-icon-32.png')} style={{ width: 19, height: 10, flex: 1.5 }} resizeMode="contain" />
              <Image source={require('./res/belgium-flag-icon-32.png')} style={{ width: 19, height: 10, flex: 1.5 }} resizeMode="contain" />
              <View style={styles.teamNameBlock}>
                <Text style={styles.teamText}> Belgium </Text>
              </View>
            </View>
          </View>
          <View style={styles.matchBlock}>
            <View style={{ flexDirection: 'row', marginTop: '1%', alignItems: 'center' }}>
              <Text style={styles.text}> Jul 8 2018 - 01:00 </Text>
            </View>
            <View style={styles.teamBlock}>
              <View style={styles.teamNameBlock}>
                <Text style={styles.teamText}> Russia </Text>
              </View>
              <Image source={require('./res/russia-flag-icon-32.png')} style={{ width: 19, height: 10, flex: 1.5 }} resizeMode="contain" />
              <Image source={require('./res/croatia-flag-icon-32.png')} style={{ width: 19, height: 10, flex: 1.5 }} resizeMode="contain" />
              <View style={styles.teamNameBlock}>
                <Text style={styles.teamText}> Croatia </Text>
              </View>
            </View>
          </View>
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
  matchBlock: {
    marginTop: 10,
    flexDirection: 'column',
    backgroundColor: '#3E4659',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 300,
    height: 70
  },

  teamBlock: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20
  },
  teamNameBlock: {
    flex: 3,
    alignItems: 'center'
  },

  text: {
    color: 'white',
    fontSize: 11
  },
  textWC: {
    color: 'white',
    fontSize: 18
  },
  textTop: {
    color: 'white',
    fontSize: 25
  },
  teamText: {
    color: 'white',
  },

})

export default App;