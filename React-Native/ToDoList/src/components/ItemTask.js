import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import RoundCheckbox from 'rn-round-checkbox';

import { gray, categoryBirthday, white } from '../styles'
class ItemTask extends Component {
    state = {}
    render() {
        return (
            <View style={style.container}>
                <RoundCheckbox />
                <Text style={style.time}>{this.props.task.time}</Text>
                <TouchableOpacity style={style.task}>
                    <Text style={style.content}>{this.props.task.content}</Text>
                    <Text style={style.category}>{this.props.task.category}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20
    },
    time: {
        color: gray,
        marginStart: 10,
        width: 40
    },
    task: {
        backgroundColor: categoryBirthday,
        borderRadius: 10,
        marginStart: 20,
        padding: 15,
        flex: 1
    },
    content: {
        fontWeight: 'bold',
        color: white,
        fontSize: 16
    },
    category: {
        color: white,
        marginTop: 5,
        fontSize: 12,
        opacity: 0.8
    }
})
export default ItemTask;