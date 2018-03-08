import {
  ADD_TODO,
  ARCHIVE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  INCOMPLETE_TODO
} from "../actions/todos";

import { COMPLETE, ACTIVE } from "../constants/view";

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_TODO: {
      const maxId = Math.max(...state.map(todo => todo.id), 0) + 1;
      return [
        ...state,
        {
          id: maxId,
          ...action.payload
        }
      ];
    }

    case ARCHIVE_TODO: {
      return state.map(
        todo =>
          todo.id === action.payload.id ? { ...todo, isArchive: true } : todo
      );
    }

    case REMOVE_TODO: {
      return state.filter(todo => todo.id !== action.payload.id);
    }

    case COMPLETE_TODO: {
      return state.map(
        todo =>
          todo.id === action.payload.id ? { ...todo, status: COMPLETE } : todo
      );
    }

    case INCOMPLETE_TODO: {
      return state.map(
        todo =>
          todo.id === action.payload.id ? { ...todo, status: ACTIVE } : todo
      );
    }

    default: {
      return state;
    }
  }
};
