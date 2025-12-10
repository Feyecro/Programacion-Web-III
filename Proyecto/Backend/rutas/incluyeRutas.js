import express from 'express';
import {obtenerTodo, insertarUno, actualizarUno, eliminarUno, obtenerUno} from '../controladores/incluyeControlador.js';

const rutas = express.Router();
rutas.get('/', obtenerTodo);
rutas.post('/', insertarUno);
rutas.put('/:id', actualizarUno);
rutas.delete('/:id', eliminarUno);
rutas.get('/:id', obtenerUno);

export default rutas;