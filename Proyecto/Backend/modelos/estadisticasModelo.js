import {db} from '../config/db.js'

export const ObtenerCantidadCategoria=async()=>{
     const [resultado]=await db.query(`SELECT 
    c.nombre,
    COUNT(p.idPedido) AS total_pedidos
FROM Cliente c
LEFT JOIN Pedido p ON c.idCliente = p.idCliente
GROUP BY c.nombre
ORDER BY total_pedidos DESC;`);

    return resultado
}