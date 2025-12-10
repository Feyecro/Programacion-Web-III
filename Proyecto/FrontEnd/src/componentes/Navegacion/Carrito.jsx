import React from 'react'

const Carrito = () => {
  const [carrito] = React.useState([]);

  const styles = {
    carritoContenedor: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    titulo: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    itemCarrito: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: '#fff',
      border: '1px solid #eee',
      borderRadius: '6px',
      gap: '15px',
    },
    imagenProducto: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '4px',
    },
    detalleItem: {
      flex: 1,
    },
    nombreItem: {
      fontWeight: 'bold',
      color: '#333',
      margin: '0 0 5px 0',
    },
    cantidadItem: {
      color: '#666',
      margin: '5px 0',
    },
    precioItem: {
      fontWeight: 'bold',
      color: '#27ae60',
      margin: '5px 0',
    },
    botonEliminar: {
      padding: '8px 12px',
      backgroundColor: '#e74c3c',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    resumenCarrito: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#ecf0f1',
      borderRadius: '6px',
      textAlign: 'right',
    },
  };

  return (
    <div style={styles.carritoContenedor}>
      <h3 style={styles.titulo}>Carrito</h3>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map(item => (
          <div key={item.id} style={styles.itemCarrito}>
            <img 
              src={item.imagenUrl}
              alt={item.nombre}
              style={styles.imagenProducto}
            />
            <div style={styles.detalleItem}>
              <p style={styles.nombreItem}>{item.nombre}</p>
              <p style={styles.cantidadItem}>Cantidad: {item.cantidad}</p>
              <p style={styles.precioItem}>${(item.precio * item.cantidad).toFixed(2)}</p>
            </div>
            <button 
              style={styles.botonEliminar}
              onClick={() => alert(`Eliminar ${item.nombre}`)}
            >
              X 
            </button>
          </div>
        ))
      )}
      <div style={styles.resumenCarrito}>
        {/* Total a pagar, etc. */}
      </div>
    </div>
  );
}

export default Carrito
