import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { commonStyles } from '../styles'
import InfoItem from '../components/InfoItem';
import firebase, { Firebase } from 'react-native-firebase';
class TabInfo extends Component {
    state = {}

    componentDidMount() {
        firebase.database().ref('/users')
        .child(firebase.auth().currentUser.uid)
        .once('value', res => this.setState({
            address: res._value.address,
            displayname: res._value.displayname,
            phoneNumber: res._value.phoneNumber
        }))
    }
    render() {
        return (

            <View style={commonStyles.container}>
                <Text style={commonStyles.fontTitleScreen}>Information</Text>
                <InfoItem iconName='location-arrow' content={this.state.address} type='address'/>
                <InfoItem iconName='user' content={this.state.displayname} type='displayname'/>
                <InfoItem iconName='phone' content={this.state.phoneNumber} type='phoneNumber'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({

})

export default TabInfo;