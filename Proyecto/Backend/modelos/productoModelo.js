import {db} from '../config/db.js';

export const obtTodo = async () => {
    const [resultado] = await db.query('SELECT * FROM producto');
    return resultado;  // Devuelve todos los productos
};

export const obtProducto = async (id) => {
    const [resultado] = await db.query('SELECT * FROM producto WHERE id = ?', [id]);
    return resultado[0];  // Devuelve el primer producto encontrado
};

export const insertar = async (nombre, categoria, descripcion, precio, stock) => {
    const [resultado] = await db.query(
        'INSERT INTO productos (nombre, categoria, descripcion, precio, stock) VALUES (?, ?, ?, ?, ?)',
        [nombre, categoria, descripcion, precio, stock]
    );
    return resultado.insertId;  // Devuelve el ID del producto insertado
};

export const actualizar = async (id, nombre, categoria, descripcion, precio, stock) => {
    const [resultado] = await db.query(
        'UPDATE productos SET nombre = ?, categoria = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?',
        [nombre, categoria, descripcion, precio, stock, id]
    );
    return resultado;  // Devuelve el resultado de la actualización
};

export const eliminar = async (id) => {
    const [resultado] = await db.query('DELETE FROM productos WHERE id = ?', [id]);
    return resultado;  // Devuelve el resultado de la eliminación
};