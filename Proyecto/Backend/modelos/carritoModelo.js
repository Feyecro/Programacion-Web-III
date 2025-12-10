import { db } from '../config/db.js';

export const agregarAlCarrito = async (producto) => {
    const { id, nombre, precio } = producto;
    const [resultado] = await db.query(
        'INSERT INTO carrito (producto_id, nombre, precio) VALUES (?, ?, ?)',
        [id, nombre, precio]
    );
    return resultado;
};

export const obtenerCarrito = async () => {
    const [resultado] = await db.query('SELECT * FROM carrito');
    return resultado;
};

export const eliminarDelCarrito = async (id) => {
    const [resultado] = await db.query('DELETE FROM carrito WHERE id = ?', [id]);
    return resultado;
};
