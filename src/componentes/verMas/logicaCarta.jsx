import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export const useCartLogic = (item) => {
    const { carrito, setCarrito, carritoTotal } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);


    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };



    const sumar = () => {

        setCantidad(cantidad + 1);
    };



    const sumarCarrito = () => {

        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);


        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
            
            setCarrito(nuevoCarrito);
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    
    };


    return {
        cantidad, restar, sumar, sumarCarrito, carritoTotal
    };
};

