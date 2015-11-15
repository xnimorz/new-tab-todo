import { combineReducers } from 'redux'
import todo from './todo'
import user from './user'
import timer from './timer'
import view from './view'

const rootReducer = combineReducers({
    todo, user, timer, view
});

export default rootReducer;
