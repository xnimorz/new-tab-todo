import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { ALL } from "../constants/view";

import localstorageMiddleware, {
  getInitialStateFromLocalStorage
} from "../middlewares/localstorage";
import todos from "../reducers/todos";
import user from "../reducers/user";
import view from "../reducers/view";

const middlewares = [localstorageMiddleware()];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default function configureStore() {
  const store = createStore(
    combineReducers({
      todos,
      user,
      view
    }),
    getInitialStateFromLocalStorage({ todos: [], user: "user", view: ALL }),
    applyMiddleware(...middlewares)
  );
  return store;
}
