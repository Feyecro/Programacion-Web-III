import {db} from '../config/db.js';
//---ejer6---
export const registrar=async(producto)=>{
    const {nombre, precio, stock, categoria_id}=producto
    const [resultado]=await db.query('INSERT INTO productos(nombre, precio, stock, categoria_id) VALUES (?,?,?,?)',[nombre, precio, stock, categoria_id]);
    return resultado;
};
//---ejer7---
export const mostrProdCat=async()=>{
    const [resultado]=await db.query('SELECT P.*, C.nombre as categoria_nombre FROM productos P  LEFT JOIN categorias C ON P.categoria_id = C.id');
    return resultado;
};
//---ejer8---
export const mostrProdID=async(id)=>{
    const [resultado] = await db.query('SELECT P.*, C.nombre as categoria_nombre FROM productos P LEFT JOIN categorias C ON P.categoria_id = C.id WHERE P.id = ?', [id]);
    return resultado;
};
//---ejer9---
export const actuDatosProd=async(id, producto)=>{
    const {nombre, precio, stock, categoria_id}=producto
    const [resultado]=await db.query('UPDATE productos SET nombre=?, precio=?, stock=?, categoria_id=? WHERE id=?', [nombre,precio,stock,categoria_id,id]);
    return resultado;
};
//---ejer10---
export const increStock=async(id, stock)=>{
    const [resultado]=await db.query('UPDATE productos SET stock=stock+? WHERE id=?', [stock, id]);
    return resultado;
};