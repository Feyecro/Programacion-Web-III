import { useEffect, useState } from 'react'
import {ObtenerProductos} from '../../services/producto.service'
import { Document, PDFViewer,Page,Text,StyleSheet} from '@react-pdf/renderer'
import { View } from 'lucide-react'

const styles = StyleSheet.create({
    page:{
        padding:30
    },
    titulo:{
        fontSize:24,
        textAlign:'center',
        marginBottom:10
    },
    fecha:{
        fontSize:16,
        marginBottom:20,
        textAlign:'center',
        color:'#666'
    },
    categoria:{
        fontSize:16,
        backgroundColor:'#dbeafe',
        padding:8,
        marginTop:15,
        marginBottom:5
    },
    tabla:{
        marginBottom:10
    },
    filaEncabezado:{
        flexDirection:'row',
        backgroundColor:'#e5e7eb',
        padding:8,
        fontWeight:'bold'
    }
    ,
    fila:{
        flexDirection:'row',
        borderBottom:'1 solid #e5e7eb',
        padding:8
    },
    col1:{
        width:'50%'
    },
    col2:{
        width:'25%'
    },
    col3:{
        width:'25%'
    }
})
const reporte=()=>{
    const [producto,SetProductos]=useState([])

    const CargarDatos=async()=>{
        const data = await ObtenerProductos();
        SetProductos(data)
    }
    useEffect(()=>{
        CargarDatos()
    },[])

    const agruparPorCategoria=()=>{
        return producto.reduce((acc,prod)=>{
            if(!acc[prod.categoria_nombre]){
                acc[prod.categoria_nombre]=[]
            }
            acc[prod.categoria_nombre].push(prod)
            return acc
        },{})
    }
    const ProductoAgrupados=agruparPorCategoria();

    const MiDocumentopdf=()=>(
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.titulo}>Reporte de productos por categoria</Text>
                <Text style={styles.fecha}>Generado el:{new Date().toLocaleDateString()}</Text>
                {
                    Object.keys(ProductoAgrupados).map((categoria)=>(
                        <View key={categoria}>
                            <Text style={styles.categoria}>{categoria}</Text>
                            <View style={styles.tabla}>
                                <View style={styles.filaEncabezado}>
                                    <Text style={styles.col1}>Producto</Text>
                                    <Text style={styles.col2}>Precio</Text>
                                    <Text style={styles.col3}>Stock</Text>
                                </View>
                                {
                                    ProductoAgrupados[categoria].map((prod,index)=>(
                                        <View key={index} style={styles.fila}>
                                            <Text style={styles.col1}>{prod.nombre}</Text>
                                            <Text style={styles.col2}>{prod.precio}</Text>
                                            <Text style={styles.col3}>{prod.stock}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    ))
                }
            </Page>

        </Document>
    )
    return (
      <PDFViewer width="100%" height="600">
        {MiDocumentopdf()}
      </PDFViewer>
    )
}
export default reporte