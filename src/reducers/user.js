import { RENAME_USER } from "../actions/user";

export default (state = "user", action = {}) => {
  switch (action.type) {
    case RENAME_USER: {
      return action.payload.name;
    }

    default: {
      return state;
    }
  }
};
