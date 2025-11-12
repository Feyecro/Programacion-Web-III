import express from 'express';
import productoRutas from './Rutas/productoRutas.js';
import categoriaRutas from './Rutas/categoriaRutas.js';

const app = express ();
app.use(express.json());

app.use('/',productoRutas);
app.use('/',categoriaRutas);

const puerto= 3001;
app.listen(puerto,
    ()=>{console.log(`Servidor en http://localhost:${puerto}`);
});