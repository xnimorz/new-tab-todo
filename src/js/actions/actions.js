import * as types from '../constants/ActionTypes'

export function addTodo(todo) {
    return {
        type: types.ADD_TODO,
        todo
    }
}

export function archiveTodo(key) {
    return {
        type: types.ARCHIVE_TODO,
        key
    }
}

export function completeTodo(key) {
    return {
        type: types.COMPLETE_TODO,
        key
    }
}

export function changeNameTodo(key, name) {
    return {
        type: types.CHANGE_NAME_USER,
        key,
        name
    }
}

export function moveTodo(key, groupId) {
    return {
        type: types.MOVE_TODO,
        key,
        groupId
    }
}

export function incompleteTodo(key) {
    return {
        type: types.INCOMPLETE_TODO,
        key
    }
}

export function changeNameUser(name) {
    return {
        type: types.CHANGE_NAME_USER,
        name
    }
}

export function changeView(view) {
    return {
        type: types.CHANGE_VIEW,
        view
    }
}
