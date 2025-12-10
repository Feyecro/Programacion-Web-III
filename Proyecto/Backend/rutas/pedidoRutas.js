import express  from "express";
import { mostrarPedido, PedidoId, insertarPedido, actualizarPedido, eliminarPedido } from '../controladores/PedidoControlador.js';

const rutas = express.Router();
rutas.get('/', mostrarPedido);
rutas.get('/:id', PedidoId);
rutas.post('/', insertarPedido);
rutas.put('/:id', actualizarPedido);
rutas.delete('/:id', eliminarPedido);

export default rutas;
