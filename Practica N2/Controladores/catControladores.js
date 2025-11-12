import { actuDatosCat, eliDatCatProd, mostrar, mostrProdCat, registrar } from "../Modelos/categoriaModelo.js";
//---Ejer1---
export const registrarCategoria=async(req,res)=>{
    try{
        const resultado=await registrar(req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//---Ejer2---
export const mostrarCategorias=async(req,res)=>{
    try{
        const resultado=await mostrar(req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//---Ejer3---
export const mostrarProductosCategorias=async(req,res)=>{
    try{
        const resultado=await mostrProdCat(req.params.id);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//---Ejer4---
export const actualizaCat=async(req,res)=>{
    try{
        const resultado=await actuDatosCat(req.params.id, req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//---Ejer5---
export const eliDatosCatProd=async(req,res)=>{
    try{
        const resultado=await eliDatCatProd(req.params.id);
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};