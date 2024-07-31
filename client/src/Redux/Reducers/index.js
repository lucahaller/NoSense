import { combineReducers } from "redux";
import reducer from "./reducer.js";
import carritoReducer from "./cartreducer.js";

// Combina todos los reducers en un rootReducer
const rootReducer = combineReducers({
  shirts: reducer,
  carrito: carritoReducer,
});

export default rootReducer;
