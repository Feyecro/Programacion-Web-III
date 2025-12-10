const Bebidas = () => {
  const bebidas = [
    { id: 21, nombre: "Api Morado", imagen: "/img/Bebidas/ApiMorado.jpg" },
    { id: 22, nombre: "Chicha de Maiz", imagen: "/img/Bebidas/ChichadeMaiz.jpg" },
    { id: 23, nombre: "Chocolatada caliente Batido", imagen: "/img/Bebidas/ChocolatadacalienteBatido.jpg" },
    { id: 24, nombre: "Frape", imagen: "/img/Bebidas/Frape.jpg" },
    { id: 25, nombre: "Fresco de Linaza", imagen: "/img/Bebidas/FrescodeLinaza.jpg" },
    { id: 26, nombre: "Jugo de Maracuya", imagen: "/img/Bebidas/JugodeMaracuya.jpg" },
    { id: 27, nombre: "Leche con Platano", imagen: "/img/Bebidas/LecheconPlatano.jpg" },
    { id: 28, nombre: "Mocochinchi", imagen: "/img/Bebidas/Quiza.jpg" },
    { id: 29, nombre: "Té con canela", imagen: "/img/Bebidas/Teconte.jpg" },
    { id: 30, nombre: "Te de Coca", imagen: "/img/Bebidas/TedeCoca.jpg" }
  ];

  const agregarAlCarrito = (bebida) => {
    console.log(`Añadido al carrito: ${bebida.nombre}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 pt-28">
      {/* Header con margen inferior suficiente */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Bebidas
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Refresca tu día con nuestras deliciosas bebidas tradicionales
        </p>
      </div>

      {/* Grid de bebidas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {bebidas.map((bebida) => (
          <div
            key={bebida.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 hover:border-blue-300"
          >
            {/* Imagen */}
            <div className="relative overflow-hidden">
              <img
                src={bebida.imagen}
                alt={bebida.nombre}
                className="w-full h-48 md:h-56 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 text-center">
                {bebida.nombre}
              </h3>

              <div className="mt-auto">
                <button
                  onClick={() => agregarAlCarrito(bebida)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
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
      <br />
    </div>
  );
};

export default Bebidas;
