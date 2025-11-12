import { registrar, mostrProdCat, mostrProdID, actuDatosProd, increStock } from '../Modelos/productoModelo.js'
//---Ejer6---
export const registraProducto=async (req,res)=>{
    try {
        const resultado=await registrar(req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//----Ejer7---
export const mostrarProductosCategorias=async(req,res)=>{
    try {
        const resultado=await mostrProdCat(req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//---Ejer8---
export const mostrarProductosID=async(req,res)=>{
    try{
        const resultado=await mostrProdID(req.params.id);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//---Ejer9---
export const actualizarProd=async(req,res)=>{
    try {
        const resultado=await actuDatosProd(req.params.id, req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//---Ejer10---
export const incrementaStock=async(req,res)=>{
    try {
        const resultado=await increStock(req.params.id, req.body.stock);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
