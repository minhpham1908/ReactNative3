import {ADD_ORDER, DELETE_ORDER, CLEAR_ALL_ORDER} from './type'

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: order
})

export const deleteOrder =(key) => ({
    type: DELETE_ORDER,
    payload: key
})

export const clearAllOrder = () => ({
    type: CLEAR_ALL_ORDER 
})