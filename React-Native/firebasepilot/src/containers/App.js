import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    YellowBox
} from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import SpashScreen from './SplashScreen';
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabHistory from './TabHistory';
import TabInfo from './TabInfo';
import LoginScreen from './LoginScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { primaryColorGreen } from '../styles';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
const BottomNavigation = createBottomTabNavigator(
    {
        Menu: TabMenu,
        Order: TabOrder,
        History: TabHistory,
        Info: TabInfo
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Menu') {
                    iconName = `cutlery`;
                } else if (routeName === 'Order') {
                    iconName = `shopping-cart`;
                } else if (routeName === 'History') {
                    iconName = `history`;
                } else if (routeName === 'Info') {
                    iconName = `info-circle`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: primaryColorGreen,
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: 'white'
            }
        },
    }
)

const SwitchNavigation = createSwitchNavigator({
    SplashScreen: SpashScreen,
    HomeScreen: BottomNavigation,
    LoginScreen: LoginScreen,
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