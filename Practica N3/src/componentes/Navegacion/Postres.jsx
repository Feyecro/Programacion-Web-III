const Postres = () => {
  const postres = [
    { id: 11, nombre: "Arroz con Leche", imagen: "/img/Postres/ArrozconLeche.jpg" },
    { id: 12, nombre: "Durazno en Almibar", imagen: "/img/Postres/DuraznoenAlmibar.jpg" },
    { id: 13, nombre: "Gelatina con Crema", imagen: "/img/Postres/GelatinaconCrema.jpg" },
    { id: 14, nombre: "Helado de Canela", imagen: "/img/Postres/HeladodeCanela.jpg" },
    { id: 15, nombre: "Leche Asada", imagen: "/img/Postres/LecheAsada.jpg" },
    { id: 16, nombre: "Mazamorra de Quinua", imagen: "/img/Postres/MazamorradeQuinua.jpg" },
    { id: 17, nombre: "Pie de Limon", imagen: "/img/Postres/piedeLimon.jpg" },
    { id: 18, nombre: "Queso Helado", imagen: "/img/Postres/QuesoHelado.jpg" },
    { id: 19, nombre: "Suspiro Limeño", imagen: "/img/Postres/SuspiroLimeño.jpg" },
    { id: 20, nombre: "Tawa Tawa", imagen: "/img/Postres/Tawa Tawa.jpg" }
  ];

  const agregarAlCarrito = (postre) => {
    console.log(`Añadido al carrito: ${postre.nombre}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 pt-28">
      {/* Header con margen inferior suficiente */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
          Postres
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Disfruta de nuestros deliciosos postres tradicionales bolivianos
        </p>
      </div>
      
      {/* Grid de postres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {postres.map((postre) => (
          <div 
            key={postre.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 hover:border-pink-300"
          >
            {/* Imagen */}
            <div className="relative overflow-hidden">
              <img 
                src={postre.imagen} 
                alt={postre.nombre}
                className="w-full h-48 md:h-56 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 text-center">
                {postre.nombre}
              </h3>
              
              <div className="mt-auto">
                <button 
                  onClick={() => agregarAlCarrito(postre)}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default Postres;
