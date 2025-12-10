import {obtTodo, insertar, actualiza, eliminar, obtUno} from '../modelos/incluyeModelo.js';

export const obtenerTodo = async (req, res) => {
    try {
        const resultado = await obtTodo();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los datos'});
    }
};

export const insertarUno = async (req, res) => {
    try {
        const nuevoDato = req.body;
        const resultado = await insertar(nuevoDato);
        res.status(201).json({mensaje: 'Dato creado', id: resultado.insertId});
    } catch (error) {
        res.status(500).json({error: 'Error al crear el dato'});
    }
};

export const actualizarUno = async (req, res) => {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const resultado = await actualiza(id, datosActualizados);
        if (resultado.affectedRows > 0) {
            res.json({mensaje: 'Dato actualizado'});
        } else {
            res.status(404).json({error: 'Dato no encontrado'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error al actualizar el dato'});
    }
};

export const eliminarUno = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminar(id);
        if (resultado.affectedRows > 0) {
            res.json({mensaje: 'Dato eliminado'});
        } else {
            res.status(404).json({error: 'Dato no encontrado'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar el dato'});
    }
};

export const obtenerUno = async (req, res) => {
    try {
        const id = req.params.id;
        const dato = await obtUno(id);
        if (dato) {
            res.json(dato);
        } else {
            res.status(404).json({error: 'Dato no encontrado'});
        } 
        } catch (error) {
        res.status(500).json({error: 'Error al obtener el dato'});
    }
};
