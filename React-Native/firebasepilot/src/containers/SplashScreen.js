import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import firebase from 'react-native-firebase';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'


class SpashScreen extends Component {
    state = {}
    componentDidMount() {
        
        firebase.auth().onAuthStateChanged(res => res !== null
            ? setTimeout(() => this.props.navigation.navigate('HomeScreen'), 2000)
            : setTimeout(() => this.props.navigation.navigate('LoginScreen'), 2000))
    }
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