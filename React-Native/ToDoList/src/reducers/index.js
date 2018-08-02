import { combineReducers } from 'redux'
import chooseCategoryReducer from './chooseCategoryReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    tasks: taskReducer,
    category: chooseCategoryReducer
})