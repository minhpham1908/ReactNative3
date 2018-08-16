import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'

class SpashScreen extends Component {
    state = {}
    render() {
        return (

            <View style={styles.container}>
                <Image
                    source={require('../../res/logo_app.jpg')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        padding: 30
    },
})

export default SpashScreen;