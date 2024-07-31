export default function Card({ img1, img2, title, price }) {
  return (
    <div className="product-card w-[350px] h-[500px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 bg-white transition-all duration-300 group">
      {/* Imagen Frontal */}
      <img
        src={img1}
        alt="Brie Front"
        className="w-full h-full object-cover absolute transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
      />

      {/* Imagen Trasera (aparece al hacer hover) */}
      <img
        src={img2}
        alt="Brie Back"
        className="w-full h-full object-cover absolute transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
      />

      {/* Información del Producto */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-md">${price}</p>
      </div>
    </div>
  );
}
