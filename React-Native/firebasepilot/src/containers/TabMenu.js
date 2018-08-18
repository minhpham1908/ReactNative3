import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';
import DishItem from '../components/DishItem';

import { commonStyles, primaryColorRed, primaryColorGreen } from '../styles';
import firebase from 'react-native-firebase';

class TabMenu extends Component {
    state = {
        currentCategory: 'Hamburger',
        dishes: []
    }

    componentDidMount() {
        this.loadDishesByCategory();
    }

    loadDishesByCategory = () => {
        firebase.database().ref(`dishes/${this.state.currentCategory}`)
        .once('value', res => this.setState({dishes: res._value}))
    }
    onChooseCategory = (item) => {
        this.setState({ currentCategory: item }, () => this.loadDishesByCategory())
    }

    renderCategory = ({ item }) => <TouchableWithoutFeedback
        onPress={() => this.onChooseCategory(item)}>
        <View>
            <Text style={
                {
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginHorizontal: 7,
                    marginVertical: 10,
                    color: this.state.currentCategory === item ? primaryColorRed : primaryColorGreen
                }
            }>{item}</Text>
        </View>
    </TouchableWithoutFeedback>

    renderDish = ({ item }) => <DishItem name={item.name} price={item.price} image={item.image} />
    render() {
        return (
            <View style={commonStyles.container}>
                <FlatList
                    data={['Hamburger', 'Pizza', 'Spaghetti', 'Salad', 'Drink', 'Snack']}
                    keyExtractor={(index) => index.toString()}
                    renderItem={this.renderCategory}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flexGrow: 0 }}
                />
                <FlatList
                    data={this.state.dishes}
                    keyExtractor={(item) => item.key}
                    renderItem={this.renderDish}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

})

export default TabMenu;