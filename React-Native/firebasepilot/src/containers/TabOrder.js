import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { commonStyles, primaryColorBrown, primaryColorRed } from '../styles'
import OrderItem from '../components/OrderItem';

class TabOrder extends Component {
    state = {}
    render() {
        return (
            <View style={commonStyles.container}>
                <Text style={commonStyles.fontTitleScreen}>Order</Text>
                <OrderItem />
                <View style={{ marginHorizontal: 7, borderColor: primaryColorBrown, borderBottomWidth: 1, marginVertical: 16 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 7 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: primaryColorRed, flex: 1 }}>Total</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: primaryColorRed }}>100$</Text>
                </View>
                <TouchableOpacity style={ [commonStyles.button, { backgroundColor: primaryColorRed }]}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({

})

export default TabOrder;