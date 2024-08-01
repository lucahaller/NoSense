// Rutas.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NoSense from "../Components/NoSense";
import Layout from "./Layout";
import Catálogo from "../Components/Catálogo/Catálogo";
import DetailClothe from "../Components/Catálogo/DetailClothe";
import Contact from "../Components/Contact";

const Rutas = () => {
  // Estado para controlar la visibilidad del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para alternar la visibilidad del carrito
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoSense />} />
        <Route
          element={<Layout isCartOpen={isCartOpen} toggleCart={toggleCart} />}
        >
          <Route path="/catálogo" element={<Catálogo />}>
            {/* <Route path="*" element={<Page404 />} /> */}
          </Route>
          <Route path="/contacto" element={<Contact />}>
            {/* <Route path="*" element={<Page404 />} /> */}
          </Route>
          <Route
            path="/detail/:id"
            element={<DetailClothe toggleCart={toggleCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
