import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

class ComicListItem extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://api.techkids.vn/reactnative/media/comic/lokcomic1giaingochungkhoanp1/Copy_of_1.jpg' }}
                    style ={styles.image} />
                <Text style={styles.text}>LOK Comic #1: Giải ngố chứng khoán (P.1)</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create( {
    container: {
        height: 200,
        width: Dimensions.get('window').width/2,
        flexDirection: 'column',
        alignItems: 'center'
    },
    image: {
        height: 180,
        width: Dimensions.get('window').width/2,

    },
    text: {
        fontWeight: 'bold'
    }
})
export default ComicListItem;