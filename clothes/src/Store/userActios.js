import { SET_CURRENT_USER } from "./ActionTypes";

export const userAction = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
