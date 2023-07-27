import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoInicial)

    const numeritoCarro = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }


    const carritoTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])


    return (
        <CartContext.Provider value={{ carrito, numeritoCarro, carritoTotal, setCarrito }}>
            {children}
        </CartContext.Provider>
    )

}
