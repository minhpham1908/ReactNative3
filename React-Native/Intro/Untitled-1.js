import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, Dimensions } from 'react-native';
class App extends Component {
  state = {}
  render() {
    return (
      <View style={styles.Container}>
        <View style={{ flex: 5, alignItems: 'center' }}>
          <Text style={styles.HeaderText}>Schedule</Text>
          <Image
            source={{ uri: 'https://i.pinimg.com/originals/bd/6b/49/bd6b49482d53bbc4e770c8adec28344e.png' }}
            style={{ width: 100, height: 100, marginTop: '7%' }} />
          <Text style={styles.BelowImageText} >FIFA WORLDCUP 2018</Text>
        </View>
        <View style={styles.MatchesContainer}>
          <View style={styles.Matches}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '2%', flex: 1 }}>
              <Text style={{ color: 'white' }}>Jul 6 2018 - 21:00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 3, marginHorizontal: '5%' }}>
              <View style={{ flex: 3, alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Uruguay</Text>
              </View>
              <Image source={{ uri: 'http://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_48x48.png' }} style={{ width: 30, height: 20, flex: 1.5 }} resizeMode="contain" />
              <Image source={{ uri: 'http://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_48x48.png' }} style={{ width: 30, height: 20, flex: 1.5 }} resizeMode="contain" />
              <View style={{ flex: 3, alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>France</Text>
              </View>
            </View>
          </View>

          <View style={styles.Matches}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '2%', flex: 1 }}>
              <Text style={{ color: 'white' }}>Jul 7 2018 - 01:00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 3, marginHorizontal: '5%' }}>
              <View style={{ flex: 3, alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Brazil</Text>
              </View>
              <Image source={{ uri: 'http://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png' }} style={{ width: 30, height: 20, flex: 1.5 }} resizeMode="contain" />
              <Image source={{ uri: 'http://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png' }} style={{ width: 30, height: 20, flex: 1.5 }} resizeMode="contain" />
              <View style={{ flex: 3, alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Belgium</Text>
              </View>
            </View>
          </View>
          <View style={styles.Matches}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '2%', flex: 1 }}>
              <Text style={{ color: 'white' }}>Jul 8 2018 - 01:00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 3, marginHorizontal: '5%' }}>
              <View style={{ flex: 3, alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Russia</Text>
              </View>
              <Image source={{ uri: 'http://ssl.gstatic.com/onebox/media/sports/logos/5Y6kOqiOIv2C1sP9C_BWtA_48x48.png' }} style={{ width: 30, height: 20, flex: 1.5 }} resizeMode="contain" />
              <Image source={{ uri: 'http://ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_48x48.png' }} style={{ width: 30, height: 20, flex: 1.5 }} resizeMode="contain" />
              <View style={{ flex: 3, alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Croatia</Text>
              </View>
            </View>
          </View>
        </View>
      </View >
    );
  }
}
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  Container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#282F37',
    flex: 1,
    // alignItems: 'center'
  },
  HeaderText: {
    marginTop: '10%',
    color: 'white',
    fontSize: 30
  },
  BelowImageText: {
    fontSize: 18,
    color: 'white'
  },
  MatchesContainer: {
    flex: 6,
    marginTop: '5%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10%'
  },
  Matches: {
    borderRadius: 10,
    height: height / 8,
    backgroundColor: '#3E465D',
    width: width / 6 * 5,
    flexDirection: 'column'
  }
});

export default App;