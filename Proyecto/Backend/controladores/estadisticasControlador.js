import {ObtenerCantidadCategoria} from '../modelos/estadisticasModelo.js'

export const ObtenerCantidadProductos=async(req,res)=>{
    try{
        const resultado = await ObtenerCantidadCategoria();
        res.status(200).json(resultado);
    }catch(error){
        console.error(error)
    }
}