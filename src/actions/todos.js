export const ADD_TODO = "todos/add";
export const ARCHIVE_TODO = "todos/archive";
export const REMOVE_TODO = "todos/remove";
export const COMPLETE_TODO = "todos/complete";
export const INCOMPLETE_TODO = "todos/incomplete";

export const complete = id => ({
  type: COMPLETE_TODO,
  payload: { id }
});

export const incomplete = id => ({
  type: INCOMPLETE_TODO,
  payload: { id }
});

export const add = ({ text, status, isArchive }) => ({
  type: ADD_TODO,
  payload: { text, status, isArchive }
});

export const remove = id => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const archive = id => ({
  type: ARCHIVE_TODO,
  payload: { id }
});
