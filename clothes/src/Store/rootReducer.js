import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cart/card.reducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
