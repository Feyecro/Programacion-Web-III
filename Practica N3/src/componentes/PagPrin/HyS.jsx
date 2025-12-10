import '../../CSS/Higienestyle.css';
import {Link} from 'react-router-dom';
const HyS=()=>{
    return(
        <div className='flex justify-between '>
        <div className="hero">
            <div className="container">
                <h1>HIGIENE Y SEGURIDAD</h1>
                <p>Comprometidos con un ambiente limpio y seguro para todos</p>
            </div>
        </div>
        <div className="container">
            <h2 className="section-title text-center"><b>Normas de Higiene</b></h2>
            <div className="row">
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="/img/higiene.jpg" className="card-img-top" alt="Limpieza"/>
                    <div className="card-body">
                        <h5 className="card-title">Limpieza frecuente</h5>
                        <p className="card-text">Se realiza limpieza y desinfección constante de todas las áreas comunes.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="/img/higienepersonal.jpg" className="card-img-top" alt="Higiene personal"/>
                    <div className="card-body">
                        <h5 className="card-title">Higiene personal</h5>
                        <p className="card-text">El personal debe lavarse las manos frecuentemente y usar desinfectante.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src="/img/uso-personaljpg.jpg" className="card-img-top" alt="Protección"/>
                    <div className="card-body">
                        <h5 className="card-title">Uso de protección</h5>
                        <p className="card-text">Se requiere el uso de guantes y mascarillas en áreas de manipulación de alimentos.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <h2 className="section-title text-center">Medidas de Seguridad</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                    <img src="/img/salidaemer.jpg" className="card-img-top" alt="Salida de emergencia"/>
                        <div className="card-body">
                            <h5 className="card-title">Salidas de emergencia</h5>
                            <p className="card-text">Las salidas de emergencia están claramente señalizadas y libres de obstáculos.</p>
                        </div>
                    </div>
                </div>
            <div className="col-md-4">
                <div className="card mb-4">
                <img src="/img/extintor.png" className="card-img-top" alt="Extintores"/>
                    <div className="card-body">
                        <h5 className="card-title">Extintores disponibles</h5>
                        <p className="card-text">Extintores ubicados estratégicamente en todas las áreas críticas.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                <img src="/img/capacitacion-personal-cocina.jpg" className="card-img-top" alt="Capacitación"/>
                    <div className="card-body">
                        <h5 className="card-title">Capacitación del personal</h5>
                        <p className="card-text">El personal recibe capacitación continua en primeros auxilios y manejo de emergencias.</p>
                    </div>
                </div>
            </div>      
            </div>
        </div>
        
        </div>
    );
};
export default HyS;
  