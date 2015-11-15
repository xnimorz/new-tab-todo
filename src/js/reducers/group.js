import { ADD_TODO, ARCHIVE_TODO, COMPLETE_TODO, UNCOMPLETE_TODO } from '../constants/ActionTypes';
import { INCOMPLETE, COMPLETE } from '../constants/States'
import loadFromLocalStorage from '../helpers/todoLocalStorage'

const initialState = loadFromLocalStorage();

export default function todo(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TODO:
            const { todo } = action;
            var id = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
            var result = [
                {
                    key: `${todo.groupId}.${todo.id}`,
                    id: id,
                    groupId: todo.groupId,
                    name: todo.name,
                    status: todo.status,
                    isArchive: todo.isArchive,
                    dueTime: todo.dueTime
                },
                ...state
            ];
            localStorage.set('todo', JSON.stringify(result));
            return result;

        case ARCHIVE_TODO:
            var result = state.map(todo => {
                return todo.key === action.key ?
                    Object.assign({}, todo, {isArchive: true}) :
                    todo;
            });
            localStorage.set('todo', JSON.stringify(result));
            return result;

        case COMPLETE_TODO:
            var result = state.map(todo => {
                return todo.key === todo.key ?
                    Object.assign({}, todo, {status: COMPLETE}) :
                    moment;
            });
            localStorage.set('todo', JSON.stringify(result));
            return result;

        case UNCOMPLETE_TODO:
            var result = state.map(todo => {
                return todo.key === todo.key ?
                    Object.assign({}, todo, {status: INCOMPLETE}) :
                    moment;
            });
            localStorage.set('todo', JSON.stringify(result));
            return result;

        default:
            return state
    }
}
