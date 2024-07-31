import {
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LIMPIAR_CARRITO,
} from "../Reducers/cartreducer.js";

// Acción para agregar un producto al carrito
export const agregarProducto = (producto) => ({
  type: AGREGAR_PRODUCTO,
  payload: producto,
});

// Acción para eliminar un producto del carrito
export const eliminarProducto = (id, size, color) => ({
  type: ELIMINAR_PRODUCTO,
  payload: { id, size, color },
});

// Acción para limpiar el carrito
export const limpiarCarrito = () => ({
  type: LIMPIAR_CARRITO,
});
