// src/reducers/shirtsReducer.js
import brie1 from "../../Images/Clothes/Born/bornagaindelante.webp";
import brie2 from "../../Images/Clothes/Born/borndetras.webp";
import vibes1 from "../../Images/Clothes/Vibes/remvibesdelante.jpg";
import vibes2 from "../../Images/Clothes/Vibes/vibesdetras.webp";
import vision1 from "../../Images/Clothes/Vision/visiondaviddelante.webp";
import vision2 from "../../Images/Clothes/Vision/visiondetras.webp";

// Estado inicial con datos de las remeras
const initialState = {
  shirts: [
    {
      id: 1,
      color: ["black"],
      title: "Born Again T-Shirt",
      price: 25000,
      images: [brie1, brie2],
      tales: ["l", "xl"],
    },
    {
      id: 2,
      color: ["black"],
      title: "Vibes T-Shirt",
      price: 25000,
      images: [vibes1, vibes2],
      tales: ["l", "xl"],
    },
    {
      id: 3,
      color: ["black"],
      title: "Visión David T-Shirt",
      price: 25000,
      images: [vision1, vision2],
      tales: ["l", "xl"],
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
