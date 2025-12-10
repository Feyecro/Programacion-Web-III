// CarritoContext.jsx
import React, { createContext, useState, useContext, } from 'react';

const ContCarrito = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const adiCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
      
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { 
          ...producto, 
          cantidad: 1
          // No necesitamos agregar precio porque ya viene en el producto
        }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
  const totalPrecio = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);

  return (
    <ContCarrito.Provider value={{
      carrito,
      adiCarrito,
      eliminarDelCarrito,
      limpiarCarrito,
      totalItems,
      totalPrecio
    }}>
      {children}
    </ContCarrito.Provider>
  );
};

export const useCarrito = () => useContext(ContCarrito);
