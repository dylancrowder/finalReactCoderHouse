import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../imagens/logotipo.png';
import lupa from '../imagens/lupa.png'
import logoCarrito from '../imagens/bolsa-de-la-compra.png'
import logoContacto from '../imagens/envio-al-mundo-entero(1).png'
import { Link } from 'react-router-dom';
import SelectorPrendas from "./SelectorPrendas/SelectorPrendas"


function App() {
    return (

        <div className="App">
            <Navbar expand="lg" variant="dark">
                <Navbar.Brand>
                    <Link to="/" >
                        <img width="350" height="80" src={logo} alt="Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end tiendaContacto" id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar>
            <div className='contenedorSelector'>
                <div className='lupa'>  <Link className='contctoLink' to="/carrito"><img width="22" height="22" src={lupa} alt="Logo" /></Link></div>

                <div className='centrar'>

                </div>
                <div className='padreSelector'>
                    <SelectorPrendas />
                </div>
                <div className='centrar'>

                </div>
                <div className='linksNav'>
                    <Link className='contctoLink' to="/contacto"><img width="34" height="34" src={logoContacto} alt="Logo" /></Link>
                    <Link className='contctoLink' to="/carrito"><img width="34" height="34" src={logoCarrito} alt="Logo" /></Link>
                </div>
            </div>

        </div>
    );
}

export default App;