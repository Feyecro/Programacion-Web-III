import { obtenerCliente, clienteID, crearCliente, actualizarCliente, eliminarCliente } from "../modelos/clienteModelo.js";

export const mostraCliente = async (req, res) => {
    try {
        const resultado = await obtenerCliente();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const mostrarClienteId = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const resultado = await clienteID(id);
        if (resultado.length === 0) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const insertarCliente = async (req, res) => {
    try {
        const { nombre, email, telefono, contraseña } = req.body;

        if (!nombre || !email || !telefono || !contraseña) {
            return res.status(400).json({ error: "Obligatorio llenar" });
        }

        if (telefono.length < 9) {
            return res.status(400).json({ error: "Teléfono incorrecto" });
        }

        const resultado = await crearCliente(nombre, email, telefono, contraseña);

        res.status(201).json({idCliente: resultado.insertId,nombre,email,telefono});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizaCliente = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "ID incorrecto" });
        }

        const resultado = await actualizarCliente(id, req.body);

        res.json({ mensaje: "Cliente actualizado", resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminaCliente = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "ID incorrecto" });
        }

        const resultado = await eliminarCliente(id);

        res.json({ mensaje: "Cliente eliminado", resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
