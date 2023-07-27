import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import youtube from "../imagens/social.png";
import instagram from "../imagens/social(1).png";
function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="row1">
                    <img className='logotipo' src={youtube} alt='youtube' />
                    <img className='logotipo' src={instagram} alt='instagram' />
                </div>

                <div className="row">
                    <ul>

                        <li><Link to="/contacto">Contactanos</Link></li>
                    </ul>
                </div>

                <div className="row1">
                    PLEYADIAN Copyright © 2023 - Todos los derechos reservados ||
                    Desing By: Dylan Rojo
                </div>
            </div>
        </footer>
    );
}

export default Footer;