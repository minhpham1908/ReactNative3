import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import RoundCheckbox from 'rn-round-checkbox';
import { chooseColorByCategory } from '../utils'
import { gray, categoryBirthday, white, calendarHighlight } from '../styles'
import { toggleTask, deleteTask } from '../actions'
import { connect } from 'react-redux'
class ItemTask extends Component {
    state = {
        taskDone: this.props.task.completed
    }


    toggleTask = newValue => {
        this.setState({ taskDone: newValue })
        this.props.toggleTask({
            timeId: this.props.task.id,
            dayId: this.props.dayId
        })
    }

    deleteTask = () => {
        this.props.deleteTask({
            timeId: this.props.task.id,
            id: this.props.dayId
        })
    }

    render() {
        return (
            <View style={style.container}>
                <RoundCheckbox
                    checked={this.state.taskDone}
                    onValueChange={this.toggleTask}
                    backgroundColor={calendarHighlight}
                />
                <Text style={style.time}>{this.props.task.time}</Text>
                <TouchableOpacity
                    style={[style.task, { backgroundColor: chooseColorByCategory(this.props.task.category) }]}
                    onLongPress={this.deleteTask}>
                    <Text style={style.content}>{this.props.task.content}</Text>
                <Text style={style.category}>{this.props.task.category}</Text>
                </TouchableOpacity>
            </View >
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

export default connect(null, { toggleTask, deleteTask })(ItemTask);