import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  eliminarProducto,
  limpiarCarrito,
} from "../Redux/Actions/carritoActions";
import { FaTrash, FaWhatsapp } from "react-icons/fa";

export default function Cart({ isOpen, toggleCart }) {
  const carrito = useSelector((state) => state.carrito.carrito);
  const dispatch = useDispatch();

  const handleEliminarProducto = (id, size, color) => {
    dispatch(eliminarProducto(id, size, color));
  };

  const handleLimpiarCarrito = () => {
    dispatch(limpiarCarrito());
  };

  const handleCompraPorWhatsApp = () => {
    const numeroTelefono = "+5492604625513"; // Reemplaza esto por el número de WhatsApp deseado
    let mensaje = "Hola! Quiero comprar las siguientes remeras:\n\n";

    carrito.forEach((producto) => {
      mensaje += `- ${producto.title} - Color: ${producto.color} - Talla: ${producto.size} - Cantidad: ${producto.cantidad}\n`;
    });

    const mensajeCodificado = encodeURIComponent(mensaje);

    // Detectar si el usuario está en un dispositivo móvil o en una computadora
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    let url;

    if (isMobile) {
      // Abre la aplicación de WhatsApp en dispositivos móviles
      url = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
    } else {
      // Abre WhatsApp Web en computadoras
      url = `https://web.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeCodificado}`;
    }

    // Abre el enlace en una nueva pestaña
    window.open(url, "_blank");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Tu Carrito</h2>
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={toggleCart}
        >
          X
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
        {carrito.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío</p>
        ) : (
          <ul>
            {carrito.map((producto, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-200"
              >
                <div>
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="h-12 w-12 object-cover rounded mr-4"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {producto.title}
                    </span>
                    <span className="text-xs text-gray-500">
                      {producto.size} - {producto.color}
                    </span>
                    <span className="text-xs text-gray-500">
                      Cantidad: {producto.cantidad}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">
                    ${producto.price * producto.cantidad}
                  </span>
                  <button
                    onClick={() =>
                      handleEliminarProducto(
                        producto.id,
                        producto.size,
                        producto.color
                      )
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {carrito.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleCompraPorWhatsApp}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 flex items-center justify-center space-x-2"
          >
            <FaWhatsapp />
            <span>Comprar por WhatsApp</span>
          </button>
          <button
            onClick={handleLimpiarCarrito}
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-2"
          >
            Limpiar Carrito
          </button>
        </div>
      )}
    </div>
  );
}
