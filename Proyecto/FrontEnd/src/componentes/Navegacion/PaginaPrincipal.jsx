import {Link} from 'react-router-dom';

const PaginaPrincipal=()=>{
    return (
      <div className='bg-red-100'>
        <section id="about" className="py-16">
                <div className="">
                  <img 
                    src="/img/principal/fondo.png" 
                    alt="The Food House" 
                    className="w-full h-210 "
                  />
                </div>    
        </section>
        <br/>
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">SERVICIOS</h2>
              </div>
            </div>
            <br/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-green-200 text-white text-center rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <br/>
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/img/comodidad.png" 
                      alt="Comodidad" 
                      className="w-64 h-64 object-cover rounded-lg"
                    />
                  </div>
                  <br/>
                  <Link 
                    to="/ver" 
                    className="inline-block px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Acceso
                  </Link>
                </div>
                  <br/>
              </div>
              <div className="bg-green-200 text-white text-center rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <br/>
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/img/experiencia-de-cliente-1.jpg" 
                      alt="Experiencia" 
                      className="w-64 h-64 object-cover rounded-lg"
                    />
                  </div>
                  <br/>
                  <Link 
                    to="/experiencia" 
                    className="inline-block px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Experiencia
                  </Link>
                </div>
                  <br/>
              </div>
              <div className="bg-green-200 text-white text-center rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <br/>
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/img/protocolo de higiene.jpg" 
                      alt="Higiene y Seguridad" 
                      className="w-64 h-64 object-cover rounded-lg"
                    />
                  </div>
                  <br/>
                  <Link 
                    to="/hys" 
                    className="inline-block px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Higiene y Seguridad
                  </Link>
                </div>
                  <br/>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <section className="contenedor" id="servicio">
            <h2 className="subtitulo">Servicio de Información</h2>
            <div className="flex justify-center items-center">
              <img src="/img/checklist.svg.svg" alt="Información" className='h-100 w-100'/>
            </div>
        
            <div className="service">
              <h3 className="n-service">
                <span className="number">1.-</span> CONCEPTO GENERAL
              </h3>
              <p>
            Un patio de comidas es un espacio donde distintos establecimientos ofrecen comidas, bebidas y postres, compartiendo una zona de mesas y sillas para que los clientes disfruten de su experiencia gastronómica en el lugar.
              </p>
            </div>

            <div className="service">
                <h3 className="n-service">
                <span className="number">2.-</span> ELEMENTOS IMPORTANTES
                </h3>
              <p>
                  <b>a. Ubicación y Diseño:</b> Espacio amplio, ventilado y buena iluminación, ideal para disfrutar en un comodo ambiente comidas, bebidas y postres.  
                  <br/><b>b. Locales y Gastronomía:</b> Diversidad de opciones: comida rápida, saludable, internacional, bebidas refrescantes y postres irresistibles. Espacios para franquicias y negocios locales, con áreas de cocina y atención al cliente bien delimitadas.  
                  <br/><b>c. Zona de Comensales:</b> Mesas y sillas resistentes y fáciles de limpiar, con suficiente espacio entre ellas. Zonas accesibles para personas con discapacidad. Opcional: estaciones de reciclaje y bandejas.  
                  <br/><b>d. Servicios:</b> Limpieza constante, seguridad y cámaras de vigilancia, WiFi gratuito, música ambiental y pantallas informativas o de entretenimiento mientras disfrutas de comidas, bebidas y postres.
              </p>
            </div>

            <div className="service">
                <h3 className="n-service">
                <span className="number">3.-</span> REQUISITOS TÉCNICOS
                </h3>
                <p>
                    Salidas eléctricas adecuadas para cada local de comidas, bebidas y postres.  
                    <br/>Sistema de extracción de humo y ventilación.  
                    <br/>Red de agua potable y desagüe.  
                    <br/>Licencias sanitarias y comerciales actualizadas.
                </p>
            </div>

            <div className="service">
              <h3 className="n-service">
              <span className="number">4.-</span> ESTRATEGIA COMERCIAL
                </h3>
                <p>
                  Contrato de arriendo para locales de comidas, bebidas y postres.  
                  <br/>Promociones conjuntas entre locales para atraer clientes.  
                  <br/>Eventos gastronómicos o ferias de degustación.  
                  <br/>Presencia en redes sociales y apps de delivery para todos los productos.
                </p>
              </div>
        </section>
      </div>
    );
};

export default PaginaPrincipal;