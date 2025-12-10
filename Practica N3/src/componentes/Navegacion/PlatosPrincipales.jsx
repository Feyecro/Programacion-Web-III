const PlatosPrincipales = () => {
  const platos = [
    { id: 1, nombre: "Ají de Fideo", imagen: "/img/Platos/AjideFideo.png.jpg" },
    { id: 2, nombre: "Bistec", imagen: "/img/Platos/Biste.png.jpg" },
    { id: 3, nombre: "Charquekan", imagen: "/img/Platos/Charquekan.png.jpg" },
    { id: 4, nombre: "Fricase", imagen: "/img/Platos/Fricase.png.jpg" },
    { id: 5, nombre: "Majadito", imagen: "/img/Platos/Majadito.png.jpg" },
    { id: 6, nombre: "Plato Paceño", imagen: "/img/Platos/PlatoPaceño.png.jpg" },
    { id: 7, nombre: "Pollo a la Broaster", imagen: "/img/Platos/PolloBroaster.png.jpg" },
    { id: 8, nombre: "Saice", imagen: "/img/Platos/Saice.png.jpg" },
    { id: 9, nombre: "Sopa de Maní", imagen: "/img/Platos/SopadeMani.png.jpg" },
    { id: 10, nombre: "Tallarín", imagen: "/img/Platos/Tallarin.png.jpg" }
  ];

  const agregarAlCarrito = (plato) => {
    console.log(`Añadido al carrito: ${plato.nombre}`);
    // addToCart(plato);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-4 md:p-6">
      {/* Encabezado con temática de comida */}
      <div className="text-center mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 mb-3">
          Platos Principales
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Deliciosos platos tradicionales bolivianos preparados con los mejores ingredientes
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {platos.map((plato) => (
          <div 
            key={plato.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-amber-100 hover:border-amber-300"
          >
            {/* Contenedor de imagen con efecto de calor/comida */}
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent z-10"></div>
              <img 
                src={plato.imagen} 
                alt={plato.nombre}
                className="w-full h-48 md:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badge para platos */}
              <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold py-1 px-2 rounded-full">
                PLATO
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
                {plato.nombre}
              </h3>
              
              {/* Indicador de tipo de plato */}
              <div className="flex items-center justify-center mb-3">
                <span className="inline-flex items-center text-amber-600 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Especialidad
                </span>
              </div>
              
              <div className="mt-auto">
                <button 
                  onClick={() => agregarAlCarrito(plato)}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>
    </div>
  );
};

export default PlatosPrincipales;