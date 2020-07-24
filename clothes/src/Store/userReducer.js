import { SET_CURRENT_USER } from "./ActionTypes";
const InitialState = { currentUser: null };

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
