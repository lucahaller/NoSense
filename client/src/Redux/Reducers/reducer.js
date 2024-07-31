// src/reducers/shirtsReducer.js
import brie1 from "../../Images/Clothes/Born/bornagaindelante.webp";
import brie2 from "../../Images/Clothes/Born/borndetras.webp";
import vibes1 from "../../Images/Clothes/Vibes/remvibesdelante.jpg";
import vibes2 from "../../Images/Clothes/Vibes/vibesdetras.webp";
import vision1 from "../../Images/Clothes/Vision/visiondaviddelante.webp";
import vision2 from "../../Images/Clothes/Vision/visiondetras.webp";
import dfantasy1 from "../../Images/Clothes/DFantasy/DFadelante.jpeg";
import dfantasy2 from "../../Images/Clothes/DFantasy/DFatras.jpeg";
import owdelante1 from "../../Images/Clothes/OffWhite/Owdelante.jpeg";
import owatras2 from "../../Images/Clothes/OffWhite/Owatras.jpeg";
import o1 from "../../Images/Clothes/Unrestricted/o1.jpeg";
import o2 from "../../Images/Clothes/Unrestricted/o2.jpeg";
import s1 from "../../Images/Clothes/Ssense/s1.jpeg";
import s2 from "../../Images/Clothes/Ssense/s2.jpeg";
import se1 from "../../Images/Clothes/Severything/se1.jpeg";
import se2 from "../../Images/Clothes/Severything/se2.jpeg";
import d1 from "../../Images/Clothes/Distortion/d1.jpeg";
import d2 from "../../Images/Clothes/Distortion/d2.jpeg";
// Estado inicial con datos de las remeras
const initialState = {
  shirts: [
    {
      id: 1,
      color: ["black"],
      title: "Born Again T-Shirt",
      price: 11250,
      images: [brie1, brie2],
      tales: ["l"],
    },
    {
      id: 2,
      color: ["black"],
      title: "Vibes T-Shirt",
      price: 11250,
      images: [vibes1, vibes2],
      tales: ["l", "xl"],
    },
    {
      id: 3,
      color: ["black"],
      title: "Visión David T-Shirt",
      price: 11250,
      images: [vision1, vision2],
      tales: ["l"],
    },
    {
      id: 4,
      color: ["brown"],
      title: "Double Fantasy T-Shirt",
      price: 11250,
      images: [dfantasy1, dfantasy2],
      tales: ["l", "m"],
    },
    {
      id: 5,
      color: ["black"],
      title: "OffWhite London T-Shirt",
      price: 12500,
      images: [owdelante1, owatras2],
      tales: ["m"],
    },
    {
      id: 6,
      color: ["white"],
      title: "Unrestricted T-Shirt",
      price: 12500,
      images: [o1, o2],
      tales: ["m"],
    },
    {
      id: 7,
      color: ["pink"],
      title: "Strange Sense T-Shirt",
      price: 12500,
      images: [s1, s2],
      tales: ["m"],
    },
    {
      id: 8,
      color: ["white"],
      title: "Sacrifice Everything T-Shirt",
      price: 12500,
      images: [se1, se2],
      tales: ["l"],
    },
    {
      id: 9,
      color: ["white"],
      title: "Distortion T-Shirt",
      price: 12500,
      images: [d1, d2],
      tales: ["l"],
    },
  ],
};

// Reducer para manejar el estado de las remeras
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state; // Retorna el estado sin cambios si la acción no es reconocida
  }
};

export default reducer;
