import  express  from 'express';
import {   registraProducto, mostrarProductosCategorias, mostrarProductosID, actualizarProd, incrementaStock } from '../Controladores/prodControladores.js';
const rutas = express.Router();
rutas.post('/productos',registraProducto);
rutas.get('/productos',mostrarProductosCategorias);
rutas.get('/productos/:id',mostrarProductosID);
rutas.put('/productos/:id',actualizarProd);
rutas.patch('/productos/:id/stock',incrementaStock);

export default rutas;