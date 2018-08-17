import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Platform,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'
import firebase from 'react-native-firebase';

class LoginScreen extends Component {
    state = {
        isSigningIn: false,
        isSigningUp: false,
        phone: '+84'
    }

    onSignUp = () => {
        this.setState({ isSigningUp: true })
        const email = this.state.email
        const password = this.state.password
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(res => this.setState({ isSigningUp: false }))
            .catch(err => this.setState({
                error: err.toString(),
                email: '',
                password: '',
                isSigningUp: false
            }))
    }

    onSignIn = () => {
        this.setState({ isSigningIn: true })
        const email = this.state.email
        const password = this.state.password
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then(res => this.setState({ isSigningIn: false }))
            .catch(err => this.setState({
                error: err.toString(),
                email: '',
                isSigningIn: false
            }))
    }

    onSignInbyPhone = () => {
        this.setState({ isSigningIn: true })
        const phone = this.state.phone
        firebase.auth().signInWithPhoneNumber(phone)
            .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!', isSigningIn: false }))
            .catch(error => this.setState({ isSigningIn: false, message: `Sign In With Phone Number Error: ${error.message}`, }))
    }

    
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <Image
                    source={require('../../res/logo_app.jpg')}
                    style={{ width: '100%', height: 200 }}
                    resizeMode='contain'
                />
                <View style={styles.row}>
                    <Image
                        style={styles.icon}
                        source={require('../../res/ic_phone_number.png')}
                    />
                    <Text style={styles.title}>Phone?</Text>
                </View>
                <TextInput
                    style={styles.inputField}
                    onChangeText={(phone) => this.setState({ phone })}
                    value={this.state.phone}
                    autoCorrect={false}
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
                <Text style={{ padding: 5, color: '#fff' }}>{this.state.message}</Text>
                <Text style={styles.textError}>{this.state.error}</Text>

                <TouchableOpacity style={[styles.button, { backgroundColor: primaryColorRed, justifyContent: 'center', alignSelf:'center' }]}
                    onPress={this.onSignInbyPhone}>
                    {this.state.isSigningIn === true
                        ? <ActivityIndicator
                            size='small'
                            color='white' />
                        : <Text style={{ color: 'white' }}>Sign In</Text>}
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    icon: {
        width: 25,
        height: 25
    },
    title: {
        marginLeft: 5,
        color: primaryColorBrown
    },
    inputField: {
        borderBottomWidth: 1,
        borderColor: primaryColorBrown,
        paddingVertical: Platform.OS === 'ios' ? 5 : 0
    },
    textError: {
        color: primaryColorRed,

    },
    button: {
        borderRadius: 20,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    }
})

export default LoginScreen;