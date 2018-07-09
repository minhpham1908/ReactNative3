import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class ColorButton extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={{
                width: 100,
                height: 100,
                backgroundColor: this.props.color,
                alignItems: 'center',
                justifyContent: 'center',

            }}
            onPress={ () => this.props.onPress(this.props.color)}>
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

export default ColorButton;