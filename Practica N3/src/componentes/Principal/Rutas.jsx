import {Routes, Route, Navigate} from 'react-router-dom';
import PaginaPrincipal from '../Navegacion/PaginaPrincipal';
import PlatosPrincipales from '../Navegacion/PlatosPrincipales';
import Postres from '../Navegacion/Postres';
import Bebidas from '../Navegacion/Bebidas';
import Organizacion from '../Navegacion/Organizacion';
import Informe from '../Navegacion/Informe';

import Experiencia from '../PagPrin/Experiencia';
import HyS from '../PagPrin/HyS';
import Ver from '../PagPrin/Ver';

import Formulario from '../Foot/Formulario';
import PdP from '../Foot/PdP';
import TyC from '../Foot/TyC';
import Carrito from '../Navegacion/Carrito';
import Usuario from '../Navegacion/Usuario';

import NuevoProd from '../Productos/NuevoProd';
import EditarProd from '../Productos/EditarProd';
const Rutas=()=>{
    return(
        <Routes>

            <Route path="/" element={<PaginaPrincipal/>}/>
            <Route path="/paginaPrincipal" element={<PaginaPrincipal/>}/>
            <Route path="/platosPrincipales" element={<PlatosPrincipales/>}/>
            <Route path="/postres" element={<Postres/>}/>
            <Route path="/bebidas" element={<Bebidas/>}/>
            <Route path="/organizacion" element={<Organizacion/>}/>
            <Route path="/informe" element={<Informe/>}/>

            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/usuario" element={<Usuario/>}/>

            <Route path="/experiencia" element={<Experiencia/>}/>
            <Route path="/hys" element={<HyS/>}/>
            <Route path="/ver" element={<Ver/>}/>

            <Route path="/formulario" element={<Formulario/>}/>
            <Route path="/pdp" element={<PdP/>}/>
            <Route path="/tyc" element={<TyC/>}/>

            <Route path="/nuevo" element={<NuevoProd/>}/>
            <Route path="/editar" element={<EditarProd/>}/>

        </Routes>
    );
};

export default Rutas;