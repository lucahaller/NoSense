import {
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LIMPIAR_CARRITO,
  INCREMENTAR_CANTIDAD,
  DECREMENTAR_CANTIDAD,
} from "../Reducers/cartreducer";

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

// Acción para incrementar la cantidad de un producto
export const incrementarCantidad = (id, size, color) => ({
  type: INCREMENTAR_CANTIDAD,
  payload: { id, size, color },
});

// Acción para decrementar la cantidad de un producto
export const decrementarCantidad = (id, size, color) => ({
  type: DECREMENTAR_CANTIDAD,
  payload: { id, size, color },
});
