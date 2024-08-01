import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  eliminarProducto,
  limpiarCarrito,
  incrementarCantidad,
  decrementarCantidad,
} from "../Redux/Actions/carritoActions";
import { FaTrash, FaWhatsapp, FaPlus, FaMinus } from "react-icons/fa";

export default function Cart({ isOpen, toggleCart }) {
  const carrito = useSelector((state) => state.carrito.carrito);
  const dispatch = useDispatch();

  // Calcula el subtotal del carrito
  const calcularSubtotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.price * producto.cantidad,
      0
    );
  };

  const handleEliminarProducto = (id, size, color) => {
    dispatch(eliminarProducto(id, size, color));
  };

  const handleLimpiarCarrito = () => {
    dispatch(limpiarCarrito());
  };

  const handleIncrementarCantidad = (id, size, color) => {
    dispatch(incrementarCantidad(id, size, color));
  };

  const handleDecrementarCantidad = (id, size, color) => {
    dispatch(decrementarCantidad(id, size, color));
  };

  const handleCompraPorWhatsApp = () => {
    const numeroTelefono = "+5492604625513"; // Reemplaza esto por el número de WhatsApp deseado
    let mensaje = "Hola! Quiero comprar las siguientes remeras:\n\n";

    carrito.forEach((producto) => {
      mensaje += `- ${producto.title} - Color: ${producto.color} - Talla: ${producto.size} - Cantidad: ${producto.cantidad} }\n`;
    });

    const mensajeCodificado =
      encodeURIComponent(mensaje) + `Subtotal: ${calcularSubtotal()}`;

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
    <>
      {isOpen && (
        // Fondo oscuro semitransparente
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 "
          onClick={toggleCart}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md pb-10 bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Tu Carrito</h2>
          <button
            className="text-gray-600 text-xl hover:text-gray-900"
            onClick={toggleCart}
          >
            X
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-4/5">
          {carrito.length === 0 ? (
            <p className="text-gray-600">Tu carrito está vacío</p>
          ) : (
            <ul>
              {carrito.map((producto, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-200"
                >
                  <div className="flex flex-row">
                    <img
                      src={producto.image}
                      alt={producto.title}
                      className="h-24 w-20 object-cover rounded mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="text-md font-medium">
                        {producto.title}
                      </span>
                      <span className="text-sm text-gray-500">
                        Talle : {producto.size.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">
                        Color: {producto.color.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        Cantidad: {producto.cantidad}
                        <button
                          onClick={() =>
                            handleIncrementarCantidad(
                              producto.id,
                              producto.size,
                              producto.color
                            )
                          }
                          className="text-black-500 hover:text-gray-700 ml-2"
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() =>
                            handleDecrementarCantidad(
                              producto.id,
                              producto.size,
                              producto.color
                            )
                          }
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <FaMinus />
                        </button>
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
                      className="text-gray-500 hover:text-gray-700"
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
          <div className="p-4 border-t flex flex-col  border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Subtotal:</span>
              <span className="text-lg font-semibold">
                ${calcularSubtotal()}
              </span>
            </div>
            <button
              onClick={handleCompraPorWhatsApp}
              className="w-full flex flex-row bg-black text-lg text-white py-2 px-4 rounded hover:bg-gray-600 flex items-center justify-center space-x-2"
            >
              <span>Hacer pedido</span>
              <FaWhatsapp />
            </button>
            <button
              onClick={handleLimpiarCarrito}
              className="w-full  bg-white hover:text-white border-black border-2 text-black py-2 px-4 rounded hover:bg-red-600 mt-2"
            >
              Limpiar Carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
