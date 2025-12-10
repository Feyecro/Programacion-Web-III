import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import NuevoProducto from '../Productos/NuevoProd';
import EditarProducto from '../Productos/EditarProd';
function Organizacion() {
  const [producto, guardarProductos] = useState([]);//mostrar
  const [id, setID] = useState(0);//jala el ID
  const [nuevo, setNuevo] = useState(false);///nuevo
  const[editar, setEditar]=useState(false);///editar

  const consulta = useCallback(async() => {
    try {
      const resultado = await axios.get("http://localhost:3001/producto/");
      guardarProductos(resultado.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  }, []);  //mostrar productos

  useEffect(() => {
    consulta();       
  }, []);

    async function eliminaProducto(id) {
    try {
    await axios.delete(`http://localhost:3001/producto/${id}`);
    consulta();  // Actualizar la lista después de eliminar
    }catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  }
  
if (nuevo){
  return <NuevoProducto/>
}
if (editar){
  return <EditarProducto id={id}/>
}
  return (
    <main className="caja-contenido col-9">
      <h2>Lista de Productos</h2>
      <button
        type="submit" className="btn-nuevo" onClick={()=>{
          setNuevo(true)
        }
        }>
        Nuevo Producto
      </button>
      <table className="min-w-full border-collapse border border-gray-300 shadow-md">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ID</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Nombre</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Categoria</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Descripcion</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Precio en Bs</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Stock</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {producto.map((product) => (
            <tr key={product.idProducto} className="hover:bg-orange-50">
              <td className="border border-gray-300 px-4 py-2">{product.idProducto}</td>
              <td className="border border-gray-300 px-4 py-2">{product.nombre}</td>
              <td className="border border-gray-300 px-4 py-2">{product.categoria}</td>
              <td className="border border-gray-300 px-4 py-2">{product.descripcion}</td>
              <td className="border border-gray-300 px-4 py-2 font-bold">{product.precio}</td>
              <td className="border border-gray-300 px-4 py-2">{product.stock}</td>

              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                  onClick={()=>{
                    setEditar(true);
                    setID(product.idProducto);
                  }}
                >
                  Editar
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={()=>{
                  eliminaProducto(product.idProducto)
                }}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
export default Organizacion;