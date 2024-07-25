// src/index.js

import React from "react";
import ReactDOM from "react-dom/client"; // Usa react-dom/client para React 18
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom"; // Usa BrowserRouter para React Router
import { Provider } from "react-redux"; // Importa el Provider de react-redux
import store from "./Redux/Store/store"; // Asegúrate de que el store está configurado correctamente

// Crea el root para React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {" "}
    {/* Envuelve tu aplicación con el Provider de Redux */}{" "}
    {/* Usa BrowserRouter para manejar el routing */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
