import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { commonStyles, primaryColorBrown, primaryColorRed } from '../styles'
import {addOrder} from '../actions'
import { connect } from 'react-redux'

class DishItem extends Component {
    state = {}

    addToCart = () => {
        this.props.addOrder(this.props.item)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: this.props.item.image }}
                    style={styles.image}
                />
                <Text style={styles.name} numberOfLines={1}>{this.props.item.name}</Text>
                <Text style={styles.price} numberOfLines={1}>{`${this.props.item.price}$`}</Text>
                <TouchableOpacity
                    style={[commonStyles.button, { backgroundColor: primaryColorRed, marginTop: 10 }]}
                    onPress={this.addToCart}
                >
                    <Text style={{ color: 'white' }}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '50%',
        marginVertical: 15,
        padding: 5,
        alignItems: 'center'
    },
    image: {
        borderRadius: 75,
        height: 150,
        width: 150
    },
    name: {
        marginTop: 5,
        color: primaryColorBrown,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    price: {
        marginTop: 5,
        color: primaryColorBrown,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default connect(null,{addOrder})(DishItem);