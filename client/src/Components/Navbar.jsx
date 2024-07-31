import { useEffect, useState } from "react";
import logo from "../Images/NoSenseLogo.png";
import { useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart"; // Importa el componente del carrito

export default function Navbar({ toggleCart }) {
  const location = useLocation();
  const [bgColor, setBgColor] = useState("bg-gray-800"); // Color de fondo por defecto
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para la visibilidad del carrito

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBgColor("");
        break;
      case "/catálogo":
        setBgColor("bg-gray-100");
        break;
      default:
        setBgColor("");
    }
  }, [location.pathname]);

  // Función para alternar la visibilidad del carrito

  return (
    <nav className={`${bgColor}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-sans items-center font-semibold text-2xl flex flex-col pt-10 md:p-0 mt-10 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black  hover:text-red-600 rounded md:bg-transparent  md:p-0 da"
                aria-current="page"
              >
                SOBRE NOSOTROS
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-red-600  md:p-0   "
              >
                CONTACTO
              </a>
            </li>

            <li>
              <a
                href="/catálogo"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-red-600  md:p-0  "
              >
                CATÁLOGO
              </a>
            </li>
            <li>
              <button
                onClick={toggleCart} // Cambia la visibilidad del carrito
                className="flex text-black hover:text-red-600 cursor-pointer"
              >
                <FaShoppingCart />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />{" "}
      {/* Agrega el carrito */}
    </nav>
  );
}
