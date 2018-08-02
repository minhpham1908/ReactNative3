import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import CalendarStrip from '../../node_modules/react-native-calendar-strip/src/CalendarStrip';
import { getDateStringFromDate } from '../utils'
import ItemDate from '../components/itemDate';
import TimePicker from 'react-native-modal-datetime-picker';
import { white, calendarBackground, calendarHighlight, gray } from '../styles';
import CategoryPicker from '../components/CategoryPicker';
import { addTask } from '../actions';
import { connect } from 'react-redux'
class AddTaskScreen extends Component {
  state = {
    selectedDate: getDateStringFromDate(new Date()),
    isTimePickerVisible: false,
    time: new Date().toTimeString().substring(0, 5)

  }
  componentDidMount() {
    this.props.navigation.setParams({ addTask: this.handleAddTask })
  }
  handleAddTask = () => {
    this.props.addTask({
      id: 1234,
      date: 'Junvu2vn',
      task: {
        id: 12345,
        category: 'To do',
        content: 'abc',
        time: '09:00',
        completed: false
      }
    })
    this.props.navigation.navigatte('Schedule')
  }
  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleDatePicked = (time) => {
    this.setState({
      time: time.toTimeString().substring(0, 5)
    });
    this._hideTimePicker();
  };

  onDateSelected = (date) => {
    this.setState({
      selectedDate: getDateStringFromDate(date._d)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <CalendarStrip
          style={st.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
          onDateSelected={this.onDateSelected}
        />
        <ItemDate date={this.state.selectedDate} />
        <Text style={st.title}>Content</Text>
        <TextInput style={st.input} underlineColorAndroid={'rgba(0,0,0,0)'}
          onChangeText={(content) => this.setState({ content })} />
        <Text style={st.title}>Time</Text>
        <TouchableOpacity onPress={this._showTimePicker}>
          <Text style={st.time}>{this.state.time}</Text>
        </TouchableOpacity>
        <TimePicker
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideTimePicker}
          mode='time'
        />
        <Text style={st.title}>Category</Text>
        <CategoryPicker />
      </View>
    );
  }
}
const st = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 20,
    color: gray,
    marginTop: 10,
  },
  input: {
    fontSize: 18,
    backgroundColor: white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: gray,
    elevation: 5
  },
  time: {
    fontSize: 20,
    color: calendarHighlight,
    fontWeight: 'bold',
    marginStart: 20,
    marginVertical: 10
  },
  calendar: {
    height: 100,
    paddingTop: 10
  },
})


export default connect(null, { addTask })(AddTaskScreen);