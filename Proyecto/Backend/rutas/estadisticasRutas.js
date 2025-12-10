import {ObtenerCantidadProductos} from '../controladores/estadisticasControlador.js'
import express from 'express'

const rutas = express.Router();

rutas.get('/estadisticas',ObtenerCantidadProductos)


export default rutas