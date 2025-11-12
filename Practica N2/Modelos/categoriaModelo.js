import {db} from '../config/db.js';
//---ejer1---
export const registrar = async(categoria)=>{
    const {nombre,descripcion}= categoria
    const [resultado]= await db.query('INSERT INTO categorias(nombre,descripcion) VALUES (?,?)', [nombre, descripcion]);
    return resultado;
};
//---ejer2---
export const mostrar = async()=>{
    const [resultado] =await db.query('SELECT * FROM categorias');
    return resultado;
};
//---ejer3---
export const mostrProdCat = async(id)=>{
    const [resultado] = await db.query('SELECT id, nombre, descripcion FROM Categorias C WHERE C.id=?', [id]);
    const [productos] = await db.query('SELECT id, nombre, precio FROM productos WHERE categoria_id=?', [id]); 
    return {
        resultado, productos
    };
};
//---ejer4---
export const actuDatosCat = async(id, categoria)=>{
    const {nombre, descripcion}=categoria
    const [resultado]= await db.query('UPDATE categorias SET nombre=?, descripcion=? WHERE id=?', [nombre, descripcion, id]);
    return resultado;
};
//---ejer5---
export const eliDatCatProd = async(id)=>{
    const [resultado]= await db.query('DELETE FROM categorias WHERE id=?', [id]);
    return resultado;
};