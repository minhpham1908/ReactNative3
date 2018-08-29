import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { iconSize, primaryColorGreen, primaryColorBrown } from '../styles';

import {connect} from 'react-redux'

import {deleteOrder} from '../actions'
 
class OrderItem extends Component {
    state = {}
    
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 7 }}>
                <TouchableOpacity
                onPress={() =>this.props.deleteOrder(this.props.item.key)}>
                    <Icon name='trash' size={iconSize} color={primaryColorGreen} />
                </TouchableOpacity>
                <Text style={{
                    fontWeight: 'bold',
                    color: primaryColorBrown,
                    fontSize: 18,
                    marginHorizontal: 16
                }}>{this.props.item.amount}</Text>
                <Text style={{ color: primaryColorBrown, marginHorizontal: 16, flex: 1 }}>{this.props.item.name}</Text>
                <Text style={{fontWeight:'bold', color: primaryColorGreen, fontSize: 18, marginLeft:8}}>{`${this.props.item.unitPrice * this.props.item.amount}$`}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

})

export default connect(null, {deleteOrder})(OrderItem);