import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NoSense from "./Components/NoSense";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Rutas from "./Routes/Rutas";

function App() {
  return (
    <div className="">
      <Rutas />
    </div>
  );
}

export default App;
