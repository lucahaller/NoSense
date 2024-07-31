// Estado inicial del carrito
const initialState = {
  carrito: [],
};

// Tipos de acciones
export const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
export const ELIMINAR_PRODUCTO = "ELIMINAR_PRODUCTO";
export const LIMPIAR_CARRITO = "LIMPIAR_CARRITO";

// Reducer del carrito
const carritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO: {
      const productoExistente = state.carrito.find(
        (item) =>
          item.id == action.payload.id &&
          item.size == action.payload.size &&
          item.color == action.payload.color
      );

      if (productoExistente) {
        // Incrementar la cantidad si el producto ya existe
        return {
          ...state,
          carrito: state.carrito.map((item) =>
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        };
      } else {
        // Agregar el nuevo producto al carrito
        return {
          ...state,
          carrito: [...state.carrito, { ...action.payload, cantidad: 1 }],
        };
      }
    }

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        carrito: state.carrito.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.size !== action.payload.size ||
            item.color !== action.payload.color
        ),
      };

    case LIMPIAR_CARRITO:
      return {
        ...state,
        carrito: [],
      };

    default:
      return state;
  }
};

export default carritoReducer;
