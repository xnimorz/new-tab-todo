import { combineReducers } from 'redux'
import todo from './todo'
import user from './user'
import view from './view'

const rootReducer = combineReducers({
    todo, user, view
});

export default rootReducer;
