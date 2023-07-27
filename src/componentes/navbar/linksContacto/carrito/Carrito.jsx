import "./carrito.css";
import { useCartLogic } from "../../../verMas/logicaCarta";
import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

import Contador from "../../../verMas/Contador";

const Carrito = ({ item }) => {
    const { cantidad, restar, sumar, sumarCarrito } = useCartLogic(item);
    const { carrito, carritoTotal, setCarrito } = useContext(CartContext);

    const eliminarCarrito = () => {
        localStorage.removeItem("carrito");
        setCarrito([]);
    };
    console.log(item);
    return (
        <div>
            <h1>Tu carro</h1>

            {carrito.map((prod) => (
                <div className="padreCarrito" key={prod.id}>
                    <div className="columnas">

                        <div className="contenedorImgen">

                            <img src={prod.img} alt={prod.categoria} />
                        </div>
                        <div className="contenedorInformacion">
                            <h2>{prod.categoria}</h2>
                            <p>${prod.precio}</p>
                        </div>

                        <Contador cantidad={cantidad} sumar={sumar} restar={restar} sumarCarrito={sumarCarrito} />
                    </div>
                </div>
            ))}
            <h2>precio total: {carritoTotal()}</h2>
            <button onClick={eliminarCarrito}>Eliminar carrito</button>

        </div>
    );

};

export default Carrito;