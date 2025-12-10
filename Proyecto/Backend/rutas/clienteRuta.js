import express from 'express';
import { mostraCliente,mostrarClienteId,insertarCliente,actualizaCliente,eliminaCliente } from '../controladores/clienteControlador.js';
const rutas = express.Router();

rutas.get('/',mostraCliente);  
rutas.get('/:id',mostrarClienteId); 
rutas.post('/adi',insertarCliente); 
rutas.put('/:id',actualizaCliente); 
rutas.delete('/:id',eliminaCliente); 
export default rutas;