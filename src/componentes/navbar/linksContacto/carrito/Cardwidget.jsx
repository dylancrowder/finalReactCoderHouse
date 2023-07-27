
import { Link } from 'react-router-dom';
import logoCarrito from '../../../imagens/bolsa-de-la-compra.png'
import React, { useContext } from "react";
import { CartContext } from '../../../../context/CartContext';

const Cardwidget = () => {
    const { numeritoCarro } = useContext(CartContext)
    return (
        <Link className='contctoLink' to="/carrito"><img width="34" height="34" src={logoCarrito} alt="Logo" />
            <span className='numerito'>{numeritoCarro()}</span>
        </Link>
    )
}
export default Cardwidget;