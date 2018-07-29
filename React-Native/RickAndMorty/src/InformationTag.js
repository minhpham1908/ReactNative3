import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class InformationTag extends Component {
    state = {}
    render() {
        return (
            <View>
                <View style={styles.info}>
                    <Text style={{ color: '#ffffff', width: 60, fontSize:11 }}>{this.props.info}</Text>
                    <Text style={{ color: '#ff9800', textAlign:'right',fontSize:14 }}>{this.props.description}</Text>
                </View>
                {(this.props.end == undefined) ? <View style={styles.spaceBetween} />: <View/>}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    info: {
        width: '100%',
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        
    },
    spaceBetween: {
        height: 1,
        marginBottom: 12,
        backgroundColor: 'rgb(68, 68, 68)'
    }
})

export default InformationTag;