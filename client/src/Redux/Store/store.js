// src/Redux/Store/store.js

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Middleware para manejar acciones asincrónicas
import { composeWithDevTools } from "redux-devtools-extension"; // Habilita Redux DevTools
import rootReducer from "../Reducers"; // Asegúrate de que el camino es correcto

// Crea el store de Redux
const store = createStore(
  rootReducer, // Tu rootReducer combinado
  composeWithDevTools(applyMiddleware(thunk)) // Aplica middleware y habilita DevTools
);

export default store;
