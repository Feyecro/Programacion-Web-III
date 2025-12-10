import axios from 'axios'

export const ObtenerProductos =async()=>{
    const resultado = await axios.get('http://localhost:3001/producto/')
    return resultado.data;
}
export const EnviarProducto=async(producto)=>{
    const resultado = await axios.post('http://localhost:3001/producto/adi',producto)
    return resultado.data;
}
export const ActualizarProducto=async(id,producto)=>{
    const resultado = await axios.put(`http://localhost:3001/producto/${id}`,producto)
    return resultado.data;
}
export const EliminarProducto=async(id)=>{
    const resultado = await axios.delete(`http://localhost:3001/producto/${id}`)
    return resultado.data
}

