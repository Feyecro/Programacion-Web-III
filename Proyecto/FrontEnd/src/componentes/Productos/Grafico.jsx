import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {ObtenerCantidadPro} from '../../services/estadisticas.service';
ChartJS.register(ArcElement, Tooltip, Legend);
const Grafico=()=>{
    const [data,SetData]= useState(null);

    const cargarDatos=async()=>{
        try{
            const respuesta = await ObtenerCantidadPro();
            const nombres= respuesta.map(item=>item.nombre);
            const cantidades = respuesta.map(item=>item.cantidad);

            const datosGrafica={
                labels:nombres,
                datasets:[{
                    data:cantidades,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                }]

            }
            SetData(datosGrafica)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        cargarDatos();
    },[])
    return data&&<Doughnut data={data}/>
}
export default Grafico