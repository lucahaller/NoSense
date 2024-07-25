import { combineReducers } from "redux";
import reducer from "./reducer.js";

// Combina todos los reducers en un rootReducer
const rootReducer = combineReducers({
  shirts: reducer,
});

export default rootReducer;
