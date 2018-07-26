import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

class Item extends Component {
    state = {}

    render() {

        return (
            <View>
                <View style={styles.itemBlock}>
                    <Image
                        source={{ uri: this.props.item.image }}
                        style={styles.image}

                    />

                    <View style={{ flexDirection: 'column', flex: 3 }}>
                        <Text style={styles.text}> {this.props.item.title}</Text>
                        <Text style={{ color: 'black', marginTop: 5 }}> {this.props.item.address}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 2 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                {Array.from(new Array(this.props.item.rating)).map(item => <View style={styles.rate} />)}
                                {Array.from(new Array(5 - this.props.item.rating)).map(item => <View style={styles.unrate} />)}
                                <Text style={{ flex: 2 }}> {this.props.item.category} </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ textAlign: 'right' }}> {this.props.item.distance} miles </Text>
                            </View>
                        </View>
                    </View>


                </View>
                <View style={styles.space} />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    itemBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        width: '100%'
    },
    image: {

        borderRadius: 100,
        height: 50,
        width: 50,
        marginLeft: 2,
        marginRight: 2

    },
    text: {
        // height: '50%',
        color: 'black',
        fontWeight: 'bold'
        // alignSelf: 'center'
    },
    space: {
        backgroundColor: '#e6e6e6',
        height: 2,
        width: '100%'
    },
    rate: {
        backgroundColor: 'green',
        height: 5,
        width: 10,
        alignSelf: 'center',
        marginLeft: 2
    },
    unrate: {
        backgroundColor: '#e6e6e6',
        height: 5,
        width: 10,
        alignSelf: 'center',
        marginRight: 2
    }
})
export default Item;