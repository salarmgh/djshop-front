import { combineReducers } from 'redux';
import CheckoutPrice from "./CheckoutPrice";
import LoginReducer from "./LoginReducer";

const Reducers = combineReducers({
  LoginReducer,
  CheckoutPrice
})

export default Reducers;
