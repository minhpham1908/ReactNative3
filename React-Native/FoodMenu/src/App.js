import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SectionList,
  Dimensions
} from 'react-native';
import { menu } from './sectionlist-db.json'
import ItemDetail from './ItemDetail';
class App extends Component {
  state = {
  }
  renderItem = ({ item }) => <ItemDetail image={item.image} title={item.title} rate={item.rate} />
  renderSectionHeader = ({ section: { category } }) => <Text style={{fontSize: 20}}>{category} </Text>
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.menuText}>Menu</Text>
        <SectionList
          sections={menu}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 10,
    paddingEnd: 10,
    backgroundColor:'#DCDCDC'

  },
  picture: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menuText: {
    fontWeight: 'bold',
    fontSize: 26 ,
    textAlign: 'center',
    color:'black'
  }
})

export default App;