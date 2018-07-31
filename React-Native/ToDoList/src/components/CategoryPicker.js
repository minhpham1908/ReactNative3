import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { chooseColorByCategory } from '../utils';
import {white} from '../styles'

const categories = ['To do', 'Personal', 'Birthday', 'Event', 'Shopping'];

// const categories = [{ key: 'To do' }, { key: 'Personal' }, { key: 'Birthday' }, { key: 'Event' }, { key: 'Shopping' }];
class CategoryPicker extends Component {
    state = {
        category:'To do'
    }
    onPickCategory = (item) => this.setState({category:item})

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.onPickCategory(item)} >
        <View style={{ backgroundColor: chooseColorByCategory(item), width: 80, height: 80, marginEnd: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
            <Text style={styles.textItemCategory}>{item}</Text>
        </View>
        </TouchableOpacity>
    )
    render() {
        return (
            <View>
                <FlatList
                    renderItem={this.renderItem}
                    data={categories}
                    horizontal={true}
                    style={{ marginStart: 20, marginVertical: 10 }}
                    keyExtractor={(index) => index}
                />
                <Text style={[styles.textCurrentCategory, {color: chooseColorByCategory(this.state.category)}]}> This task belong to {this.state.category} category</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textCurrentCategory: {
        fontSize: 18,
        fontWeight: 'bold',
        marginStart: 20
    },
    textItemCategory: {
        fontWeight: 'bold',
        
        fontSize: 14,
    }
})

export default CategoryPicker;