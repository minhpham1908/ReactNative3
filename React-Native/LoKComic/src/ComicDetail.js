import React, { Component } from 'react';
import {
  Text,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

import ScaledImage from './ScaledImage';
class ComicDetail extends Component {
  state = {}

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.comic.title
    }
  }
  render() {
    return (
      <FlatList
        data={this.props.navigation.state.params.comic.photos}
        renderItem={({ item }) => <ScaledImage
          uri={item}
          width={Dimensions.get('window').width} />}
        keyExtractor={(item) => item} />
    );
  }
}

export default ComicDetail;