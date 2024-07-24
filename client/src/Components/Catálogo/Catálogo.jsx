// src/Components/Catalog.jsx
import React from "react";
import data from "./DataInfo"; // Ajusta la ruta según tu estructura de carpetas
import Card from "./Card";

export default function Catálogo() {
  return (
    <div className="bg-white flex justify-center mx-auto h-screen w-full">
      <div className="p-6 gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {data?.map((product) => (
          <Card
            key={product.id}
            img1={product?.images[0]}
            img2={product?.images[1]}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
