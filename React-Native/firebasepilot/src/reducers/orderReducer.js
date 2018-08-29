import { ADD_ORDER, DELETE_ORDER, CLEAR_ALL_ORDER } from '../actions/type'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_ORDER:
        const orderByKey = state.filter(order => order.key === action.payload.key)
        if (orderByKey.length===0) {
            return[...state, {
                key: action.payload.key,
                name: action.payload.name,
                unitPrice: action.payload.price
                , amount:1}]
        } else {
            return state.map(order => order.key === action.payload.key
            ? {
                ...order,
                amount: order.amount + 1
            }
            : order)
        }

        case DELETE_ORDER:
        return state.filter(order => order.key !== action.payload)

        case CLEAR_ALL_ORDER:
        return []
        default:
            return state
    }
}