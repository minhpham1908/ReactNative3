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
import { connect } from 'react-redux';
import { getDateStringFromDate } from '../utils';

const listRef = 'listRef'

class ScheduleScreen extends Component {
  state = {}
  renderItem = ({ item, section }) => <ItemTask task={item} dayId={section.id}/>

  renderSectionHeader = ({ section: { date } }) => section.data.length!==0 && <ItemDate date={date} />

  onDateSelected = (date) => {
    const index = this.props.tasks.map(dayTasks=> dayTasks.date).indexOf(getDateStringFromDate(date._d))
    console.log(index)
    index !== -1 && this.scrollSeclectionList(index)
  }

  scrollSeclectionList = (index) => {
    this.refs.listRef.scrollToLocation({
      secttionIndex: index,
      itemIndex: 0,
      viewOffset: 40
    })
  }
  render() {
    // console.log(this.props.tasks)
    return (
      <View style={{flex:1}}>
        <CalendarStrip
          style={st.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
          onDateSelected={this.onDateSelected}
        />
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.props.tasks}
          keyExtractor={(item) => item.id}
          ref={listRef}
          style={{marginTop:10}}
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
export default connect(mapStateToProps, null)(ScheduleScreen);