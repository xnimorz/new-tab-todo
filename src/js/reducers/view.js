import { CHANGE_VIEW, ADD_TODO, COMPLETE_TODO, INCOMPLETE_TODO, ARCHIVE_TODO } from '../constants/ActionTypes'
import * as states  from '../constants/States'
import todos from '../dataContainers/dataContainers'

var state = localStorage.getItem('view') || states.ALL;
var initialState = {
    view: state,
    todos: state === states.ARCHIVE ? todos.getArchive() : todos.getByState(state)
};

export default function view(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_VIEW:
            localStorage.setItem('view', action.view);
            return {
                view: action.view,
                todos: action.view === states.ARCHIVE ? todos.getArchive() : todos.getByState(action.view)
            };
        case ADD_TODO:
        case COMPLETE_TODO:
        case INCOMPLETE_TODO:
        case ARCHIVE_TODO:
            return {
                view: state.view,
                todos: state.view === states.ARCHIVE ? todos.getArchive() : todos.getByState(state.view)
            };
        default:
            return state;
    }
}