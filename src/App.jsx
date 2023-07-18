
import './App.css';
import ListContainer from './componentes/listaProductos/ListContainer';
import Navbar from './componentes/navbar/Navbar';
import Detalles from './componentes/verMas/Detalles';
import Contacto from './componentes/navbar/linksContacto/ContactoLink';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/footer/footer';
import Cardwidget from './componentes/navbar/Cardwidget';


function App() {
  return (

    <div className='mainBody' >
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<ListContainer />} />
          <Route path='/item/:id' element={<Detalles itemId={2} />} />
          <Route path='/contacto' element={<Contacto />}></Route>
          <Route path='/carrito' element={<Cardwidget />}></Route>
          <Route path='/producto' element={<ListContainer />} />
          <Route path='/producto/:categoria' element={<ListContainer />} />

        </Routes>


        <Footer></Footer>
      </BrowserRouter>

    </div>

  );
}

export default App;
