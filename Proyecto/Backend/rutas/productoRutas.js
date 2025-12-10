import express from 'express';

import {obtenerProducto, insertarProducto, actualizarProducto, eliminarProducto, obtenerProductoPorId } from '../controladores/productoControlador.js';

const rutas = express.Router();
rutas.get('/', obtenerProducto);
rutas.post('/', insertarProducto);
rutas.put('/:id', actualizarProducto);
rutas.delete('/:id', eliminarProducto);
rutas.get('/:id', obtenerProductoPorId);

export default rutas;