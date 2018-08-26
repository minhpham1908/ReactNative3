import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { commonStyles } from '../styles'

class TabHistory extends Component {
    state = {}
    render() {
        return (
            <View style={commonStyles.container}>
                <Text style={commonStyles.fontTitleScreen}>History</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

})

export default TabHistory;