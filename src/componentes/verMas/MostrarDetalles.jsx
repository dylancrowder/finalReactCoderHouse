import React from 'react';
import './verMas.css';
import Contador from './Contador';
import { useState } from 'react';
import SelectorPrendas from './SelectorTalles';

const DetallesCarta = ({ item }) => {


    const [cantidad, setCantidad] = useState(1);
    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const sumar = () => {
        setCantidad(cantidad + 1)
    }

    const sumarCarrito = () => {
        console.log({ ...item, cantidad });
    }
    return (
        <div className="contenedor">
            <div className="contenedorImagen">
                <img className="imagenVerMas" src={item.img} alt="Imagen" />
            </div>
            <div className="contenedorDerecha">
                <p className='parrafoCantidad'>PLEYADIAN</p>
                <h1>{item.categoria}</h1>
                <h3>$ {item.precio}</h3>
                <div className="tamanio">
                    <p className='parrafoCantidad'>Tamaño</p>
                    <SelectorPrendas></SelectorPrendas>
                </div>

                <Contador cantidad={cantidad} sumar={sumar} restar={restar} sumarCarrito={sumarCarrito} />


            </div>
        </div>
    );
};

export default DetallesCarta;