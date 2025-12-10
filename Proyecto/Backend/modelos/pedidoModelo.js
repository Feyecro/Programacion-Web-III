import { db } from '../config/db.js';

export const obtener = async () => {
    const [rows] = await db.query('SELECT * FROM pedidos');
    return rows;
};

export const obtenerPorId = async (id) => {
    const [rows] = await db.query('SELECT * FROM pedidos WHERE id = ?', [id]);
    return rows[0];
};

export const crear = async (pedido) => {
    const { cliente_id, fecha, total } = pedido;
    const [result] = await db.query(
        'INSERT INTO pedidos (cliente_id, fecha, total) VALUES (?, ?, ?)',
        [cliente_id, fecha, total]
    );
    return { id: result.insertId, ...pedido };
};

export const actualizar = async (id, pedido) => {
    const { cliente_id, fecha, total } = pedido;
    await db.query(
        'UPDATE pedidos SET cliente_id = ?, fecha = ?, total = ? WHERE id = ?',
        [cliente_id, fecha, total, id]
    );
    return { id, ...pedido };
};

export const eliminar = async (id) => {
    await db.query('DELETE FROM pedidos WHERE id = ?', [id]);
    return { mensaje: 'Pedido eliminado correctamente' };
};

