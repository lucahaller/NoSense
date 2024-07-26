import React, { useState } from "react"; // Importa useState
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

export default function DetailClothe() {
  const { id } = useParams(); // Obtén el id de los parámetros de la URL
  const shirts = useSelector((state) => state.shirts.shirts);
  const shirt = shirts.find((e) => e.id == id);

  // Estado para la imagen principal
  const [mainImage, setMainImage] = useState(shirt?.images[0]);

  return (
    <div className="h-full w-full">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Imagen Principal y Miniaturas */}
            <div className="flex lg:w-2/3 w-full flex-col-reverse  md:flex-row">
              {/* Miniaturas */}
              <div className="flex flex-col md:items-center  md:justify-between mr-4">
                <div className="grid md:grid-rows-4 grid-cols-4 md:grid-cols-none gap-2">
                  {shirt?.images.slice(0, 4).map((image, index) => (
                    <img
                      key={index}
                      alt={`thumbnail-${index}`}
                      className={`h-24 w-24 object-cover rounded cursor-pointer ${
                        mainImage === image
                          ? "border-2 border-indigo-500" // Marcar la imagen seleccionada
                          : "border-2 border-transparent"
                      }`}
                      src={image}
                      onClick={() => setMainImage(image)} // Cambiar la imagen principal al hacer clic
                    />
                  ))}
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="w-full h-[600px] flex items-center  justify-center md:justify-normal ">
                <img
                  alt="ecommerce"
                  className="md:w-auto w-full h-full rounded sm:object-scale-down"
                  src={mainImage}
                />
              </div>
            </div>

            {/* Detalles de la Camiseta */}
            <div className="lg:w-1/3 w-full lg:pl-0 lg:py-6 mt-6 lg:mt-0 flex justify-center flex-col">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {shirt?.title}
              </h1>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Colores */}
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {shirt.color.map((color, index) => (
                    <button
                      key={index}
                      className={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none`}
                      style={{ backgroundColor: color }}
                    >
                      {/* Puedes poner un texto o un icono dentro del botón si es necesario */}
                    </button>
                  ))}
                </div>

                {/* Tamaños */}
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border bg-white appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {shirt.tales &&
                        shirt?.tales.map((tale, index) => (
                          <option key={index}>{tale.toUpperCase()}</option>
                        ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Precio y Botón de Carrito */}
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${shirt.price}
                </span>
                <button className="flex text-lg font-semibold items-center justify-center gap-3 ml-auto text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Agregar al carrito
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
