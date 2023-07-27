
import './App.css';
import ListContainer from './componentes/listaProductos/ListContainer';
import Navbar from './componentes/navbar/Navbar';
import Detalles from './componentes/verMas/Detalles';
import Contacto from './componentes/navbar/linksContacto/ContactoLink';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/footer/footer';
import Carrito from './componentes/navbar/linksContacto/carrito/Carrito';
import { CartProvider } from './context/CartContext';


function App() {

  return (

    <div className='mainBody' >
      <CartProvider>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<ListContainer />} />
            <Route path='/item/:id' element={<Detalles itemId={0} />} />
            <Route path='/contacto' element={<Contacto />}></Route>
            <Route path='/carrito' element={<Carrito />}></Route>
            <Route path='/producto' element={<ListContainer />} />
            <Route path='/producto/:categoria' element={<ListContainer />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div >

  );
}

export default App;
