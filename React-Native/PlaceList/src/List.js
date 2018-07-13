import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';

import { data } from './data.json';
import Item from './Item';

class List extends Component {
    state = {}
    renderItem = ({ item }) => <Item item ={item} />

    render() {
        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

export default List;