import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import ComicDetail from './ComicDetail';

class ComicListItem extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => this.props.navigation.navigate('ComicDetail', { comic: this.props.comic })}>
                <Image
                    source={{ uri: this.props.comic.photos[0] }}
                    style={styles.image} />
                <Text
                    style={styles.text}
                    numberOfLines={2}>
                    {this.props.comic.title}
                </Text>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: Dimensions.get('window').width / 2,
        padding: 5

    },
    image: {
        height: 200,
        width: Dimensions.get('window').width / 2,

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default ComicListItem;