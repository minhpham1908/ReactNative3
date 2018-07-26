import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

class ItemDetail extends Component {
    state = {
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pictureFrame}>
                    <Image source={{ uri: this.props.image }} style={styles.picture} resizeMode='cover' />
                    <View style={styles.invertedBorderRadiusTopRight}></View>
                    <View style={styles.invertedBorderRadiusBottomRight}></View>
                </View>
                <View style={styles.textFrame}>
                    <Text style={{ color: 'black' }}> {this.props.title} </Text>
                    <View style={{flexDirection:'row'}}>
                        {Array.from(new Array(this.props.rate)).map(item => <View style={styles.rate} />)}
                    </View>
                    <View style={styles.invertedBorderRadiusBottomLeft}></View>
                    <View style={styles.invertedBorderRadiusTopLeft}></View>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,

    },
    picture: {
        width: 100,
        height: 100,
    },
    pictureFrame: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFrame: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginStart: 2,
        height: 110,
        paddingStart: 10
    },
    invertedBorderRadiusTopRight: {
        width: 5,
        height: 5,
        backgroundColor: '#DCDCDC',
        position: "absolute",
        top: 0,
        right: 0,
        borderBottomLeftRadius: 100
    },
    invertedBorderRadiusTopLeft: {
        width: 5,
        height: 5,
        backgroundColor: '#DCDCDC',
        position: "absolute",
        top: 0,
        left: 0,
        borderBottomRightRadius: 100
    },
    invertedBorderRadiusBottomRight: {
        width: 5,
        height: 5,
        backgroundColor: '#DCDCDC',
        position: "absolute",
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 100
    },
    invertedBorderRadiusBottomLeft: {
        width: 5,
        height: 5,
        backgroundColor: '#DCDCDC',
        position: "absolute",
        bottom: 0,
        left: 0,
        borderTopRightRadius: 100
    },
    rate: {
        backgroundColor: 'green',
        height: 5,
        width: 10,
        marginEnd: 2,
        marginTop: 10

    },
})

export default ItemDetail;