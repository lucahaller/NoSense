import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";
import Footer from "../Components/Footer";

const Layout = ({ isCartOpen, toggleCart }) => {
  return (
    <div className="bg-white">
      <Navbar toggleCart={toggleCart} />
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
