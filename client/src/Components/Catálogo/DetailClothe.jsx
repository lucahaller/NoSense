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
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
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
            <div className="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex justify-center flex-col">
              <h1 className="text-gray-900 font-bebas text-5xl  font-medium mb-1">
                {shirt?.title}
              </h1>
              <span className="title-font font-medium text-2xl text-gray-900">
                ${shirt.price}
              </span>
              <div className="flex text-2xl  mt-6 items-center   border-gray-100 mb-5">
                {/* Colores */}
                <div className="flex flex-col">
                  <span className="mr-3 font-bebas text-xl">Color</span>
                  <div className="mt-3">
                    {shirt.color.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)} // Cambiar el color seleccionado
                        className={`border-2 ml-1 rounded-full w-8 h-8 focus:outline-none transition-all duration-200 ease-in-out ${
                          selectedColor === color
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color }}
                      >
                        {/* Puedes poner un texto o un icono dentro del botón si es necesario */}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tamaños como Botones */}
              </div>
              <div className="flex flex-col text-xl">
                <span className="mr-3">Size</span>
                <div className="relative">
                  {shirt?.tales &&
                    shirt?.tales.map((tale, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(tale)} // Cambiar el tamaño seleccionado
                        className={`border-2 rounded-sm mr-2 px-4 py-2 transition-all duration-200 ease-in-out ${
                          selectedSize === tale
                            ? "bg-black text-white border-red-500"
                            : "bg-white text-black border-black hover:bg-slate-400 hover:text-white"
                        }`}
                      >
                        {tale.toUpperCase()}
                      </button>
                    ))}
                </div>
              </div>
              {/* Precio y Botón de Carrito */}
              <div className="flex mt-4">
                <button className="flex text-lg font-semibold items-center w-full justify-center gap-3 ml-auto text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
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
