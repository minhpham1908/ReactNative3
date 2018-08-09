import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';
var convert = require('convert-units')
const buttons = convert().possibilities('mass')

class ConvertScreen extends Component {

    static navigationOptions = {
        title: 'Convertable',
        headerTitleStyle: {
            fontWeight: 'bold'
        },

    }
    state = {
        text: '',
        leftText: '',
        rightText: '',
        leftUint: buttons[0],
        rightUint: buttons[0],

    }

    handleChangeLeftText = (text) => {
        let afterConvert = convert(text).from(this.state.leftUint).to(this.state.rightUint)
        
        this.setState({
            leftText: text,
            rightText: afterConvert.toString()
        })
    }

    handleChangeRightText = (text) => {
        let afterConvert = convert(text).from(this.state.rightUint).to(this.state.leftUint)
        
        this.setState({
            rightText: text,
            leftText: afterConvert.toString()
        })
    }

    _onpress = (title) => {

        this.setState({ rightUint: title })
        console.log(rightUint)
    }


    render() {

        return (

            <View style={styles.container}>
                <View style={styles.unitColumn}>
                    <TextInput
                        onChangeText={this.handleChangeLeftText}
                        value={this.state.leftText}
                    />
                    <Text>From</Text>
                    <FlatList
                        data={buttons}
                        renderItem={({ item }) => <TouchableOpacity
                            onPress={() => {
                                this.setState({ leftUint: item })
                            }}
                            style={styles.button}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>}
                        keyExtractor={(item) => item}
                    />
                </View>
                <View style={styles.unitColumn}>
                    <TextInput
                        onChangeText={this.handleChangeRightText}
                        value={this.state.rightText}
                    />
                    <Text>To</Text>
                    <FlatList
                        data={buttons}
                        renderItem={({ item }) => <TouchableOpacity
                            onPress={() => {
                                this.setState({ rightUint: item })
                            }}
                            style={styles.button}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>}
                        keyExtractor={(item) => item}
                    />

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    unitColumn: {
        flex: 1,
        flexDirection: 'column',

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '90%',
        marginEnd: 5,
        backgroundColor: '#e9f7fd'
    }
})

export default ConvertScreen;