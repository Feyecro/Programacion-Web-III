import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function EditarProd({ id }) {
  console.log(id);
  const [producto, guardarProducto] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: 0,
    stock: 0,
  });

  function leerProducto(e) {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  }

  async function actualizaProducto() {
    await axios.put(`http://localhost:3001/producto/${id}`);
  }

  async function consultaProducto() {
    const resultado = await axios.post(`http://localhost:3001/producto/${id}`);
    guardarProducto(resultado.data);
  }
 
  useEffect(() => {
    consulta();       
  }, []);


  return (
    <>
      <h2>Editar Producto</h2>
      <form onSubmit={actualizaProducto}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre Producto"
            value={producto.nombre}
            onChange={leerProducto}
          />
        </div>
        <div>
          <label>Categoria:</label>
          <input
            type="text"
            name="categoria"
            placeholder="Categoria"
            value={producto.categoria}
            onChange={leerProducto}
          />
        </div>
        <div>
          <label>Descripcion:</label>
          <input
            type="text"
            name="descripcion"
            placeholder="Descripcion"
            value={producto.descripcion}
            onChange={leerProducto}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            min="0.00"
            value={producto.precio}
            onChange={leerProducto}
          />
        </div>
        <div>
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            min="0.00"
            value={producto.stock}
            onChange={leerProducto}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
}
export default EditarProd;
