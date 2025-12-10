import React from 'react'
import Reporte from '../Productos/Reporte';
import Grafico from '../Productos/Grafico';
const Informe = () => {
  return (
    <div>
    <div>
        <Reporte/>
      </div>
    <div className="flex justify-between">
      
      <div className="w-170 h-170">
        <Grafico/>
      </div>
    </div>
    </div>
  )
}

export default Informe
