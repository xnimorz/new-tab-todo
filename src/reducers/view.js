import { ALL } from "../constants/view";
import { CHANGE_VIEW } from "../actions/view";

export default (state = ALL, action = {}) => {
  switch (action.type) {
    case CHANGE_VIEW: {
      return action.payload.type;
    }

    default: {
      return state;
    }
  }
};
