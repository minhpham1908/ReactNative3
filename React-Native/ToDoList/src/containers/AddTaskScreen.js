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
    time: new Date().toTimeString().substring(0, 5),
    dayId: Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24)),
    timeId: new Date().getTime(),
  }
  componentDidMount() {
    this.props.navigation.setParams({ addTask: this.handleAddTask })
  }
  handleAddTask = () => {
    this.props.addTask({
      id: this.state.dayId,
      date: this.state.selectedDate,
      task: {
        id: this.state.timeId,
        category: this.props.category,
        content: this.state.content,
        time: this.state.time,
        completed: false
      }
    })
    this.props.navigation.navigate('Schedule')
  }
  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleDatePicked = (time) => {
    this.setState({
      time: time.toTimeString().substring(0, 5),
      timeId: time.getTime()
    });
    this._hideTimePicker();
  };

  onDateSelected = (date) => {
    this.setState({
      selectedDate: getDateStringFromDate(date._d),
      dayId: Math.floor(date._d.getTime() / (1000 * 60 * 60 * 24)),
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

const mapStateToProps = ({ category }) => ({ category })
export default connect(mapStateToProps, { addTask })(AddTaskScreen);