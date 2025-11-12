import express from 'express';
import { actualizaCat, eliDatosCatProd, mostrarCategorias, mostrarProductosCategorias, registrarCategoria } from '../Controladores/catControladores.js';
const rutas = express.Router();
rutas.post('/categorias',registrarCategoria);
rutas.get('/categorias',mostrarCategorias);
rutas.get('/categorias/:id',mostrarProductosCategorias);
rutas.put('/categorias/:id',actualizaCat);
rutas.delete('/categorias/:id',eliDatosCatProd);
export default rutas;