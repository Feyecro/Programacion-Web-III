import React from "react";
import { Link } from "react-router-dom";
import '../../CSS/Header.css';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-orange-200 header-fixed">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src="/img/principal/logo.png"
            alt="TheFoodHouse"
            className="h-25 w-60"
          />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-orange-600 transition-colors duration-300">
          Principal
        </Link>
        <Link to="/platosPrincipales" className="hover:text-orange-600 transition-colors duration-300">
          Platos
        </Link>
        <Link to="/postres" className="hover:text-orange-600 transition-colors duration-300">
          Postres
        </Link>
        <Link to="/bebidas" className="hover:text-orange-600 transition-colors duration-300">
          Bebidas
        </Link>
        <Link to="/organizacion" className="hover:text-orange-600 transition-colors duration-300">
          Organizacion
        </Link>
        <Link to="/informe" className="hover:text-orange-600 transition-colors duration-300">
          Informe
        </Link>
      </div>

      <div>
        <Link to="/carrito">Carrito</Link>
      </div>

      <div className="flex items-center">
        <Link to="/usuario">Usuario</Link>
      </div>
    </div>
  );
};

export default Header;
