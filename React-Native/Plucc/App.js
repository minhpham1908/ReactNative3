import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './src/reducers'

const store = createStore(rootReducer)

class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Main />
                </View>
                </Provider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;