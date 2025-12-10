import '../../CSS/ExperienciaStyle.css';
import {Link} from 'react-router-dom';
const Experiencia=()=>{
    return(
        <div>
            <header className="content header">
                <h2 className="title">EXPERIENCIA DEL CLIENTE</h2>
            </header>
            <section className="content about0">
            <h3 className="title">COMIDAS</h3>
            <p>
               <b>1.</b> Atención rápida y amable, con personal capacitado que hace que cada visita sea agradable. Sistemas de pedidos digitales o pantallas que agilizan el servicio.  
               <br/><b>2.</b> Ambiente limpio, moderno y acogedor, con música suave que acompaña perfectamente tu experiencia.  
               <br/><b>3.</b> Gran variedad de opciones gastronómicas: desde comidas rápidas hasta platos más elaborados para todos los gustos.  
               <br/><br/>
               <i>"Cada plato es una experiencia, con sabores increíbles que siempre me hacen volver."</i> - Cliente satisfecho  
               <br/><i>"La calidad de la comida es excepcional, y cada visita es un verdadero placer."</i> - Visitante frecuente  
               <br/><i>"Platos frescos, bien presentados y llenos de sabor. ¡Recomendadísimo!"</i> - Fan de la gastronomía
            </p>
            </section>

            <section className="content price">
                <article className="container">
                    <h2 className="title"></h2>
                    <p></p>
                </article>
            </section>

            <section className="content about1">
            <h3 className="title">BEBIDAS</h3>
            <p>
                <b>1.</b> Atención rápida y cordial, con personal capacitado que hace que cada pedido sea ágil y agradable.  
                <br/><b>2.</b> Ambiente limpio y moderno, con música suave que acompaña perfectamente tu experiencia.  
                <br/><b>3.</b> Gran variedad de bebidas: jugos naturales, cafés, tés y refrescos para todos los gustos.  
                <br/><br/>
                <i>"Sus cafés son simplemente espectaculares, ¡el mejor lugar para disfrutar una buena bebida!"</i> - Cliente satisfecho  
                <br/><i>"Siempre encuentro algo nuevo para probar, y cada bebida tiene un sabor único."</i> - Visitante frecuente  
                <br/><i>"Jugos frescos y refrescantes, preparados con ingredientes de calidad. ¡Me encanta!"</i> - Fan de las bebidas
            </p> 
            </section>

            <section className="content price">
                <article className="container">
                    <h2 className="title"></h2>
                    <p></p>
                </article>
            </section>
            <section className="content about2">
            <h3 className="title">POSTRES</h3>
            <p>
                <b>1.</b> Atención rápida y cordial, con personal capacitado que hace que tu experiencia sea agradable.  
                <br/><b>2.</b> Ambiente limpio y acogedor, con música suave que acompaña perfectamente tu visita.  
                <br/><b>3.</b> Gran variedad de postres: pasteles, helados, tartas y dulces para todos los gustos.  
                <br/><br/>
                <i>"Los postres son simplemente irresistibles, cada bocado es un placer."</i> - Cliente satisfecho  
                <br/><i>"Me encanta probar los diferentes pasteles, todos son frescos y deliciosos."</i> - Visitante frecuente  
                <br/><i>"Cada postre tiene un sabor único, ¡sin duda mi lugar favorito para consentirme!"</i> - Fan de los postres
            </p>
            </section>

        </div>
    );
};
export default Experiencia;