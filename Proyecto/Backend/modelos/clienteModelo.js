import { db } from '../config/db.js';

//Validar si el cliente existe por ID
const existeClientePorID = async (id) => {
    const [resultado] = await db.query('SELECT COUNT(*) AS existe FROM cliente WHERE id = ?', [id]);
    return resultado[0].existe === 1;  // Devuelve true si el cliente existe
};

//Obtener todos los clientes
const obtenerCliente = async () => {
    const [resultado] = await db.query('SELECT * FROM cliente');
    return resultado;  // Devuelve todos los clientes
};

//Obtener un cliente
const clienteID = async (id) => {
    const [resultado] = await db.query('SELECT * FROM cliente WHERE id=?',[id]);
    return resultado;  // Devuelve un cliente
};

//Crear un nuevo cliente
const crearCliente = async (nombre, email) => {
    const [resultado] = await db.query('INSERT INTO cliente (nombre, email) VALUES (?, ?)', [nombre, email]);
    return resultado.insertId;  // Devuelve el ID del cliente insertado
};

//Actualizar un cliente existente
const actualizarCliente = async (id, nombre, email) => {
    const [resultado] = await db.query('UPDATE cliente SET nombre = ?, email = ? WHERE id = ?', [nombre, email, id]);
    return resultado.affectedRows > 0;  // Devuelve true si se actualizó algún registro
};

//Eliminar un cliente por ID
const eliminarCliente = async (id) => {
    const [resultado] = await db.query('DELETE FROM cliente WHERE id = ?', [id]);
    return resultado.affectedRows > 0;  // Devuelve true si se eliminó algún registro
};

export {
    existeClientePorID,
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
    clienteID
}
