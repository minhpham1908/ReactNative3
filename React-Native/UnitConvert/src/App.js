import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    YellowBox
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ConvertScreen from './ConvertScreen';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Navigation = createStackNavigator({
    Home: {

        screen: ConvertScreen
        
    },

})

class App extends Component {

    state = {}
    render() {
        return (

            <Navigation />

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

export default App;