import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    YellowBox
} from 'react-native';
import {createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import SpashScreen from './SplashScreen';
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabHistory from './TabHistory';
import TabInfo from './TabInfo';
import LoginScreen from './LoginScreen';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
const BottomNavigation = createBottomTabNavigator({
    Menu: TabMenu,
    Order: TabOrder,
    History: TabHistory,
    Info: TabInfo
})

const SwitchNavigation = createSwitchNavigator({
    LoginScreen: LoginScreen,
    HomeScreen: BottomNavigation,
    SplashScreen: SpashScreen,
    
    
})
class App extends Component {
    state = {}
    render() {
        return (
            <SwitchNavigation />
        );
    }
}
const styles = StyleSheet.create({

})

export default App;