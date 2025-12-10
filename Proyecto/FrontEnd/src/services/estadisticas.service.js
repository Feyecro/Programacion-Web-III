import axios from 'axios'

export const ObtenerCantidadPro=async()=>{
    const resultado = await axios.get('http://localhost:3001/estadisticas')
    return resultado.data;
}