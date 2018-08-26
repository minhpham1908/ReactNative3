import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import { iconSize, primaryColorGreen, primaryColorBrown } from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'
class InfoItem extends Component {
    state = {
        content: this.props.content
    }

    onPushUserDataToFireBase() {
        firebase.database().ref('/users').child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .set(this.state.content)
    }

    componentWillReceiveProps(newProps) {
        this.setState({ content: newProps.content})
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent:'center', alignItems:'center' }}>
                <Icon name={this.props.iconName} size={iconSize} color={primaryColorGreen} style={{ marginLeft: 7 }} />
                <TextInput
                    underlineColorAndroid= 'transparent'
                    placeholder='Enter your information...'
                    style={{ flex: 1, color: primaryColorBrown, marginLeft: 16, justifyContent:'center', alignItems:'center' }}
                    defaultValue={this.state.content}
                    onSubmitEditing={(event) => this.setState({ content: event.nativeEvent.text }, () => this.onPushUserDataToFireBase())} />
            </View>
        );
    }
}
const styles = StyleSheet.create({

})

export default InfoItem;