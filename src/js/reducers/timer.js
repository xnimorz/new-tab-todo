import { TICK_TIMER } from '../constants/ActionTypes'

var initialState = new Date();

export default function timer(state = initialState, action = {}) {
    switch (action.type) {
        case TICK_TIMER:
            return action.time;
        default:
            return state;
    }
}