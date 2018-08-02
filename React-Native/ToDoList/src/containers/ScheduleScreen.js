import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList
} from 'react-native';
import { white, calendarBackground, calendarHighlight } from '../styles';
import CalendarStrip from 'react-native-calendar-strip'
import ItemDate from '../components/itemDate';
import ItemTask from '../components/ItemTask';
import { data } from '../database.json'

import { connect } from 'react-redux'

class ScheduleScreen extends Component {
  state = {}
  renderItem = ({ item }) => <ItemTask task={item} />

  renderSectionHeader = ({ section: { date } }) => <ItemDate date={date} />
  render() {
    return (
      <View>
        <CalendarStrip
          style={st.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
        />
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.props.task}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
const st = StyleSheet.create({
  calendar: {
    height: 100,
    paddingTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: white
  }
})

const mapStateToProps = ({ tasks }) => ({ tasks })
export default connect(mapStateToProps)(ScheduleScreen);