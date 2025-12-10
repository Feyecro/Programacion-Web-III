import express from "express";
import { addCarrito, getCarrito, deleteCarrito } from "../controladores/carritoControlador.js";

const rutas = express.Router();

rutas.post("/", addCarrito);        // Añadir producto al carrito
rutas.get("/", getCarrito);         // Obtener todos los productos del carrito
rutas.delete("/:id", deleteCarrito); // Eliminar producto del carrito por ID

export default rutas;
