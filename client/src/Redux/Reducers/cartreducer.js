// Estado inicial del carrito
const initialState = {
  carrito: JSON.parse(localStorage.getItem("carrito")) || [],
};

// Tipos de acciones
export const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
export const ELIMINAR_PRODUCTO = "ELIMINAR_PRODUCTO";
export const LIMPIAR_CARRITO = "LIMPIAR_CARRITO";
export const INCREMENTAR_CANTIDAD = "INCREMENTAR_CANTIDAD";
export const DECREMENTAR_CANTIDAD = "DECREMENTAR_CANTIDAD";

// Función auxiliar para guardar el carrito en localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("carrito", JSON.stringify(cart));
};

// Reducer del carrito
const carritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO: {
      const productoExistente = state.carrito.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      let nuevoCarrito;

      if (productoExistente) {
        // Incrementar la cantidad si el producto ya existe
        nuevoCarrito = state.carrito.map((item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Agregar el nuevo producto al carrito
        nuevoCarrito = [...state.carrito, { ...action.payload, cantidad: 1 }];
      }

      // Guarda el nuevo estado del carrito en localStorage
      saveCartToLocalStorage(nuevoCarrito);

      return {
        ...state,
        carrito: nuevoCarrito,
      };
    }

    case ELIMINAR_PRODUCTO: {
      const nuevoCarrito = state.carrito.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.size !== action.payload.size ||
          item.color !== action.payload.color
      );

      // Guarda el nuevo estado del carrito en localStorage
      saveCartToLocalStorage(nuevoCarrito);

      return {
        ...state,
        carrito: nuevoCarrito,
      };
    }

    case LIMPIAR_CARRITO:
      // Limpia el carrito y también el localStorage
      saveCartToLocalStorage([]);

      return {
        ...state,
        carrito: [],
      };

    case INCREMENTAR_CANTIDAD: {
      const nuevoCarrito = state.carrito.map((item) =>
        item.id === action.payload.id &&
        item.size === action.payload.size &&
        item.color === action.payload.color
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );

      // Guarda el nuevo estado del carrito en localStorage
      saveCartToLocalStorage(nuevoCarrito);

      return {
        ...state,
        carrito: nuevoCarrito,
      };
    }

    case DECREMENTAR_CANTIDAD: {
      const nuevoCarrito = state.carrito.map((item) =>
        item.id === action.payload.id &&
        item.size === action.payload.size &&
        item.color === action.payload.color &&
        item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );

      // Guarda el nuevo estado del carrito en localStorage
      saveCartToLocalStorage(nuevoCarrito);

      return {
        ...state,
        carrito: nuevoCarrito,
      };
    }

    default:
      return state;
  }
};

export default carritoReducer;
