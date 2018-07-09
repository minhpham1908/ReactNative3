import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ColorButton from './ColorButton';

class App extends Component {
  state = {
    backgroundColor: 'white',
    flex: 1,
  }
  changeBackground = c => this.setState({ backgroundColor: c });
  render() {
    return (
      <View style={{ backgroundColor: this.state.backgroundColor, flex:1}}>
        <ColorButton color='yellow' name='Yellow' onPress={this.changeBackground} />
        <ColorButton color='red' name='Red' onPress={this.changeBackground} />
        <ColorButton color='cyan' name='Cyan' onPress={this.changeBackground} />
        <ColorButton color='blue' name='Blue' onPress={this.changeBackground} />
        {/* <Button title='Pressme' onPress={() =>this.setState({backgroundColor: 'red'})} /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
})

export default App;