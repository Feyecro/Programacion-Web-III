import {db} from '../config/db.js';

export const obtTodo = async () => {
    const [resultado] = await db.query('SELECT * FROM incluye');
    return resultado;  // Devuelve todas las filas obtenidas
};

export const insertar = async (idPedido, idProducto, cantidad, precioUnit) => {
    const [resultado] = await db.query('INSERT INTO incluye (idPedido, idProducto, cantidad, precioUnit) VALUES (?, ?, ?, ?)',
        [idPedido, idProducto, cantidad, precioUnit]
    );
    return resultado;  // Devuelve el resultado de la inserción
};

export const actualiza = async (id, idPedido, idProducto, cantidad, precioUnit) => {
    const [resultado] = await db.query(
        'UPDATE incluye SET idPedido = ?, idProducto = ?, cantidad = ?, precioUnit = ? WHERE id = ?',
        [idPedido, idProducto, cantidad, precioUnit, id]
    );
    return resultado;  // Devuelve el resultado de la actualización
};

export const eliminar = async (id) => {
    const [resultado] = await db.query('DELETE FROM incluye WHERE id = ?', [id]);
    return resultado;  // Devuelve el resultado de la eliminación
};

export const obtUno = async (id) => {
    const [filas] = await db.query('SELECT * FROM incluye WHERE id = ?', [id]);
    return filas[0];  // Devuelve la primera fila encontrada
};