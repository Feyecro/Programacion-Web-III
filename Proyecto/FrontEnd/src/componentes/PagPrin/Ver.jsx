import {Link} from 'react-router-dom';
import '../../CSS/verstyle.css';
const Ver=()=>{
    return (
    <div>
        <header className="content header">
            <h2 className="title">COMODIDAD Y ACCESIBILIDAD</h2>
        </header>
        <section className="content about0">
        <h4 className="title">COMODIDAD</h4>
        <p>
            Mesas y sillas cómodas y resistentes, pensadas para grupos o personas individuales. Espacios amplios y ventilados, con luz natural y cálida iluminación artificial para un ambiente acogedor. Zonas de descanso cómodas para esperar o relajarse mientras disfrutas de tu bebida o postre. Música suave, decoración atractiva y detalles que hacen tu experiencia más agradable. WiFi gratuito y enchufes disponibles para mantenerte conectado.
        </p>
        </section>

        <section className="content price">
            <article className="container">
                <h2 className="title">UN LUGAR  PARA TI</h2>
                <p>
                    "Ven y vive una experiencia única: deliciosas comidas, refrescantes bebidas y postres que no querrás perderte, todo en un ambiente cómodo y agradable."
                </p>
            </article>

        </section>
        <section className="content about1">
        <h2 className="title">ACCESIBILIDAD</h2>
        <p>
            Espacios amplios y cómodos, pensados para que todos disfruten de manera segura y agradable.  
            <br/>Mesas y baños adaptados, con señalización clara para facilitar la movilidad.  
            <br/>Rampa de acceso, ascensores y estacionamientos reservados para una experiencia sin barreras.
        </p>
        </section>
    </div>
    );
};
export default Ver;