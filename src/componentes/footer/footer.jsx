import React from 'react';
import "./footer.css"
import youtube from "../imagens/social.png"
import instagram from "../imagens/social(1).png"

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
                        <li><a href="./contacto">Contactanos</a></li>

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