import { ADD_TODO, ARCHIVE_TODO, COMPLETE_TODO, INCOMPLETE_TODO } from '../constants/ActionTypes';
import todos from '../dataContainers/dataContainers';

const initialState = todos.items;

export default function todo(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TODO:
            const { todo } = action;
            todos.add(todo);
            return todos.items;

        case ARCHIVE_TODO:
            todos.archive(action.key);
            return todos.items;

        case COMPLETE_TODO:
            todos.complete(action.key);
            return todos.items;

        case INCOMPLETE_TODO:
            todos.incomplete(action.key);
            return todos.items;

        default:
            return state;
    }
}
