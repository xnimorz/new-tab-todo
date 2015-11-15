import { CHANGE_NAME_USER, CHANGE_TYPE_USER } from '../constants/ActionTypes'

var initialState = localStorage.getItem('user') || 'user';

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_NAME_USER:
            localStorage.setItem('user', action.name);
            return action.name;
        default:
            return state;
    }
}