import { CHANGE_VIEW } from '../constants/ActionTypes'
import * as states  from '../constants/States'

var initialState = localStorage.getItem('view') || states.ALL;

export default function view(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_VIEW:
            localStorage.set('view', action.view);
            return action.view;
        default:
            return state;
    }
}