import axios from "axios";
import { useState } from "react";
function NuevoProd() {
  const [producto, guardarProducto] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: 0,
    stock: 0,
  });
  function leeProducto(e) { 
      guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,   //esto indica donde ira los nuevos datos
    });
  };
  console.log(producto);
  async function insertaProducto() {
    await axios.post("http://localhost:3001/producto/",producto);
  }
  return (
    <><h1></h1>
      <h2>Nuevo Producto</h2>
      <form onSubmit={insertaProducto}>
        <h3>Llena todos los campos</h3>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre Producto"
            onChange={leeProducto}
          />
        </div>
         <div>
          <label>Categoria:</label>
          <input
            type="text"
            name="categoria"
            placeholder="Categoria Producto"
            onChange={leeProducto}
          />
        </div>
         <div>
          <label>Descripcion:</label>
          <input
            type="text"
            name="descripcion" 
            placeholder="Descripcion Producto"
            onChange={leeProducto}
          />
        </div>
        <div>   
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            min="0.00"
            step="0.10"
            onChange={leeProducto}
          />
        </div>
        <div>    
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            min="0.00"
            step="1"
            onChange={leeProducto}
          />
        </div>
        <input type="submit" class="btn btn-azul" value="Agregar Producto"/>
        <input type="button" class="btn btn-naranja" value="Cancelar" />
        
      </form>
    </>
  );
}
export default NuevoProd;
