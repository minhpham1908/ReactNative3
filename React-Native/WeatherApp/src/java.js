import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

class test extends Component {
    state = {
        error: true,
        loading: true
    }
    render() {
        return (
            this.state.error == true) ? (
                (this.state.loading === true) ? (<View style={st.container}>
                    <Text>sfasf</Text>
                </View>) : (<View style={st.container}>
                    <Text>sfasf</Text>
                </View>)
            ) : (<View style={st.container}>
                <Text>sfasf</Text>
            </View>)
            ;
    }
}

export default test;