import { agregarAlCarrito, obtenerCarrito, eliminarDelCarrito } from "../modelos/carritoModelo.js";

export const addCarrito = async (req, res) => {
    try {
        const producto = req.body; // { id, nombre, precio }
        if (!producto.id || !producto.nombre || !producto.precio) {
            return res.status(400).json({ error: "Faltan datos del producto" });
        }

        const resultado = await agregarAlCarrito(producto);
        res.status(201).json({ mensaje: "Producto agregado al carrito", id: resultado.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCarrito = async (req, res) => {
    try {
        const carrito = await obtenerCarrito();
        res.json(carrito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCarrito = async (req, res) => {
    try {
        const id = req.params.id;
        await eliminarDelCarrito(id);
        res.json({ mensaje: "Producto eliminado del carrito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
