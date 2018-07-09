import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

class MathBlock extends Component {
    state = {}
    render() {

        return (
            <View style={styles.matchBlock}>
                <View style={{ flexDirection: 'row', marginTop: '1%', alignItems: 'center' }}>
                    <Text style={styles.text}> {this.props.time} </Text>
                </View>
                <View style={styles.teamBlock}>
                    <View style={styles.teamNameBlock}>
                        <Text style={styles.teamText}> {this.props.team1Name} </Text>
                    </View> 
                    <Image source={this.props.team1Image} style={{ width: 19, height: 10, flex: 1.5 }} resizeMode="contain" />
                    <Image source={this.props.team2Image} style={{ width: 19, height: 10, flex: 1.5 }} resizeMode="contain" />
                    <View style={styles.teamNameBlock}>
                        <Text style={styles.teamText}> {this.props.team2Name} </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282F37',
        flex: 1,
        // alignItems: 'center',
    },
    matchesBLock: {
        flex: 6,
        marginTop: '5%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '10%'

    },
    matchBlock: {
        marginTop: 10,
        flexDirection: 'column',
        backgroundColor: '#3E4659',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 300,
        height: 70
    },

    teamBlock: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 20
    },
    teamNameBlock: {
        flex: 3,
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontSize: 11
    },
    textWC: {
        color: 'white',
        fontSize: 18
    },
    textTop: {
        color: 'white',
        fontSize: 25
    },
    teamText: {
        color: 'white',
    },

})

export default MathBlock;