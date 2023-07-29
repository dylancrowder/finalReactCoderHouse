import "./carrito.css";
import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const Carrito = () => {
    const { carrito, carritoTotal, setCarrito } = useContext(CartContext);

    const eliminarCarrito = () => {
        localStorage.removeItem("carrito");
        setCarrito([]);
    };

    const modificarCantidad = (prodId, cantidad) => {
        const productoEnCarrito = carrito.find((prod) => prod.id === prodId);
        if (!productoEnCarrito) return;

        const nuevaCantidad = productoEnCarrito.cantidad + cantidad;
        if (nuevaCantidad > 0) {
            const nuevoCarrito = carrito.map((prod) =>
                prod.id === prodId ? { ...prod, cantidad: nuevaCantidad } : prod
            );
            setCarrito(nuevoCarrito);
        } else {
            const nuevoCarrito = carrito.filter((prod) => prod.id !== prodId);
            setCarrito(nuevoCarrito);
        }
    };

    return (
        <div>
            <h1>Tu carro</h1>

            {carrito.map((prod) => (
                <div className="padreCarrito" key={prod.id}>
                    {console.log(prod.precio)}
                    <div className="columnas">
                        <div className="contenedorImgen">
                            <img className="carritoImagen" src={prod.img} alt={prod.categoria} />
                            <div className="contenedorInformacion">
                                <h2>{prod.categoria}</h2>
                                <p>${prod.precio}</p>
                            </div>
                        </div>

                        <div className="cantidad">
                            <button className="sumarRestar" onClick={() => modificarCantidad(prod.id, -1)}>
                                -
                            </button>
                            <p className="parrafoCantidad">{prod.cantidad}</p>
                            <button className="sumarRestar" onClick={() => modificarCantidad(prod.id, 1)}>
                                +
                            </button>
                        </div>
                        <div>
                            <p>total</p>
                        </div>
                    </div>
                </div>
            ))}
            <h2>precio total: {carritoTotal()}</h2>
            <button onClick={eliminarCarrito}>Eliminar carrito</button>
        </div>
    );
};

export default Carrito;