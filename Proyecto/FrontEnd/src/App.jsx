import {BrowserRouter} from 'react-router-dom';
import Header from './componentes/Principal/Header';
import Rutas from './componentes/Principal/Rutas';
import Footer from './componentes/Principal/Footer';

function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="flex-row ">
        <Header/>
      </div>
      <div>
        <Rutas/>
      </div>
      <div className="flex-row ">
        <Footer/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
