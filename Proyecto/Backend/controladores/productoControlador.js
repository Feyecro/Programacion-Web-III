import {obtTodo, insertar, actualizar, eliminar, obtProducto} from "../modelos/productoModelo.js";

export const obtenerProducto = async (req, res) => {
    try {
        const productos = await obtTodo();  // Llamada al modelo para obtener todos los productos
        res.json(productos);  // Enviar la lista de productos como respuesta JSON
    } catch (error) {  // Manejo de errores
        res.status(500).json({ mensaje: "Error al obtener productos", error: error.message });
    }
};  // Obtener todos los productos


export const insertarProducto = async (req, res) => {
    try {
        const datosProducto = req.body;
        const nuevoProducto = await insertar(datosProducto);
        res.status(201).json({ mensaje: "Producto agregado exitosamente", producto: nuevoProducto });
    } catch (error) {  // Manejo de errores
        res.status(500).json({ mensaje: "Error al agregar producto", error: error.message });
    }
};  // Insertar un nuevo producto

export const actualizarProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;
        const resultado = await actualizar(id, datosActualizados);
        res.json({ mensaje: "Producto actualizado exitosamente", producto: resultado });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar producto", error: error.message });
    }
};  // Actualizar un producto existente

export const eliminarProducto = async (req, res) => {
    try {
        const id = req.params.id;
        await eliminar(id);
        res.json({ mensaje: "Producto eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar producto", error: error.message });
    }
};  // Eliminar un producto

export const obtenerProductoPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await obtProducto(id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener producto", error: error.message });
    }
};  // Obtener un producto por ID