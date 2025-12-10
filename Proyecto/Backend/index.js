import express from 'express';
import cors from 'cors';
import clienteRuta from './rutas/clienteRuta.js';
import pedidoRuta from './rutas/pedidoRutas.js';
import incluyeRutas from './rutas/incluyeRutas.js';
import productoRutas from "./rutas/productoRutas.js";
import carritoRutas from './rutas/carritoRutas.js';
import estadisticasRutas from './rutas/estadisticasRutas.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/cliente',clienteRuta);
app.use('/pedido',pedidoRuta);
app.use('/incluye', incluyeRutas);
app.use('/producto', productoRutas);
app.use('/carrito', carritoRutas);
app.use('/',estadisticasRutas);

const puerto =3001;
app.listen(puerto,()=>{console.log(`Servidor en http://localhost:${puerto}`);
});


