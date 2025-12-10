import { obtener, crear, actualizar, eliminar, obtenerPorId } from "../modelos/pedidoModelo.js";

export const mostrarPedido = async (req,res) => {
    try {
        const resultado = await obtener();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const PedidoId = async (req, res) => {
    try {
        const id = req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({ mensaje: "ID inválido" });
        }

        const resultado = await obtenerPorId(id);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const insertarPedido = async (req, res) => {
    try {
        const { idCliente, estado, total } = req.body;

        if (!idCliente || !estado || total === undefined) {
            return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        }

        const resultado = await crear(idCliente, estado, total);
        res.json({ mensaje: "Insertado correctamente", id: resultado.insertId });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarPedido = async (req, res) => {
    try {
        const id = req.params.id;
        const { idCliente, estado, total } = req.body;

        if (isNaN(id)) {
            return res.status(400).json({ mensaje: "ID inválido" });
        }

        if (!idCliente || !estado || total === undefined) {
            return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        }

        const resultado = await actualizar(id, idCliente, estado, total);
        res.json({ mensaje: "Actualizado correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarPedido = async (req, res) => {
    try {
        const id = req.params.id;

        if (isNaN(id)) {
            return res.status(400).json({ mensaje: "ID inválido" });
        }

        const resultado = await eliminar(id);
        res.json({ mensaje: "Eliminado correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
