import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

class InputBlock extends Component {
  state = { 
      text: ''
   }
  render() {
    return (
        <TextInput
        style={{ height: 40, width: 200, color: 'black' }}
        placeholder={this.props.placeholder}
        placeholderTextColor='black'
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
        
      />
    );
  }
}

export default InputBlock;