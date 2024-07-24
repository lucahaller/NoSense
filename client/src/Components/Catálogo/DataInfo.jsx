// src/Components/Catálogo/Data.jsx
import brie1 from "../../Images/Clothes/Born/bornagaindelante.webp";
import brie2 from "../../Images/Clothes/Born/borndetras.webp";
import vibes1 from "../../Images/Clothes/Vibes/remvibesdelante.jpg";
import vibes2 from "../../Images/Clothes/Vibes/vibesdetras.webp";
import vision1 from "../../Images/Clothes/Vision/visiondaviddelante.webp";
import vision2 from "../../Images/Clothes/Vision/visiondetras.webp";
const DataInfo = [
  {
    id: 1,
    title: "Born Again T-Shirt",
    price: "$25000",
    images: [brie1, brie2],
    tales: ["m", "l", "xl"],
  },
  {
    id: 2,
    title: "Vibes T-Shirt",
    price: "$25000",
    images: [vibes1, vibes2],
    tales: ["m", "l", "xl"],
  },
  {
    id: 3,
    title: "Visión David T-Shirt",
    price: "$25000",
    images: [vision1, vision2],
    tales: ["m", "l", "xl"],
  },
];
export default DataInfo;
