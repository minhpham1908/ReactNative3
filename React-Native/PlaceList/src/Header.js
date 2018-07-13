import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class Header extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../res/back.png')} style={styles.icon} />
                <Text style={styles.text}> Places </Text>
                <Image source={require('../res/menu.png')} style={styles.icon} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        height: 50,
        width: 50
    },
    text: {
        fontSize: 20,
        color:'black'
    }
})
export default Header;