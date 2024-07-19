import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NoSense from "./Components/NoSense";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NoSense />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
