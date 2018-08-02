import React, { Component } from 'react';
import {
  Text,
  View,
  YellowBox,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import ScheduleScreen from './ScheduleScreen';
import AddTaskScreen from './AddTaskScreen';
import { gray, white, calendarHighlight } from '../styles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(rootReducer)
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
const Navigation = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({ navigation }) => (
      {
        title: 'Schedule',
        headerRight:
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTask')}
          >
            <Image
              style={{ width: 30, height: 30, marginEnd: 10 }}
              source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADPSURBVGhD7dZBCsIwEIXhgFtFvIDgAVx5GO8jXsWFQ8pE6UaT6KJdCq48iQfQCqmoFEppq1N5H8wqocwPpVQBAABIRES9OE5G+RiTDsJRtzDvp5Hxt3y08Uk46haESIMQaRAiDUKkQYg0CGnL4y+W+TCrOprt/D3EnYvulc16s5uEVeohssPXhb4/bhVWqQchjU1jIcd+9n6fqk7E/vKx0LXoXtlkz1mGVX4Dn19pECINQqRBiDQIkQYh0vxNCG3tWLOn5xi3CEcAAADQDqXu1SdrzcOGeTsAAAAASUVORK5CYII=' }} />
          </TouchableOpacity>,
        headerTitleStyle: {
          color: gray,
          flex: 1
        },
        headerStyle: {
          backgroundColor: white,
          elevation: 0
        },
      }
    )
  },
  AddTask: {
    screen: AddTaskScreen,
    navigationOptions: ({ navigation }) => (
      {
        title: 'Add New Task',
        headerLeft:
          <TouchableOpacity
            onPress={() => navigation.navigate('Schedule')}
          >
            <Image
              style={{ width: 20, height: 20, marginEnd: 10 }}
              source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVGhD7dMxagJBFMbxVbHyBhZpLTyFEMhF0tva7QkCaSwk2CQ2WUd2tDPu8wS5QBrrXECw0cksvkJlTev35PvBwLLzivmzswlRtTRN6/poUwihNsvlxeWyc15+Pr10dMuOY0QxnnkJJ+tDt224EhHiV3nTEXzl/1AVEa/Yxvuvto5h+y8iW6wedAwbI1AwAgUjUDACBSNQMAIFI1DcRUQpHvjVfMT7ctmKB9+fRrhcfk1FlLIsa5QHPw8pDvGqPeuIHc4XvRizvZOY1SNjEDEGFWNQMQYVY1AxBhVjUDEG1bUYl6+fdMSO6hiZ6LYtlzHOy0C37JnOpet8MYyrPxp9N/U10e0lyR+GznmkkPcJ3wAAAABJRU5ErkJggg==' }} />
          </TouchableOpacity>,
        headerRight:
        
          <TouchableOpacity
            onPress={() => navigation.getParam('addTask')}>
            <Text style={{ marginEnd: 10, fontSize: 18, color: calendarHighlight }}> Done </Text>
          </TouchableOpacity>,
        headerTitleStyle: {
          fontSize: 20,
          color: gray,
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: white
        },
      }
    )
  }
})
class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;