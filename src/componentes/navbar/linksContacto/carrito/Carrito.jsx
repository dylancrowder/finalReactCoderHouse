import "./carrito.css";
import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const CarritoItem = ({ prod, onIncrement, onDecrement }) => {
    return (
        <div className="padreCarrito" key={prod.id}>
            <div className="columnas">
                <div className="contenedorImgen">
                    <img className="carritoImagen" src={prod.img} alt={prod.categoria} />
                    <div className="contenedorInformacion">
                        <h2>{prod.categoria}</h2>
                        <p>${prod.precio}</p>
                    </div>
                </div>
                <div className="cantidad">
                    <button className="sumarRestar" onClick={() => onDecrement(prod.id)}>
                        -
                    </button>
                    <p className="parrafoCantidad">{prod.cantidad}</p>
                    <button className="sumarRestar" onClick={() => onIncrement(prod.id)}>
                        +
                    </button>
                </div>
                <div className="totalColumna">
                    <p>total: ${prod.precio * prod.cantidad}</p>
                </div>
            </div>
        </div>
    );
};

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
        <div className="padreTotal">
            <h1 className="tituloCarro">Tu carro</h1>

            {carrito.map((prod) => (
                <CarritoItem
                    key={prod.id}
                    prod={prod}
                    onIncrement={(prodId) => modificarCantidad(prodId, 1)}
                    onDecrement={(prodId) => modificarCantidad(prodId, -1)}
                />
            ))}
            <div className="borderr">
                <div className="totalCarrito">
                    <h2 className="tituloCarrito">precio total: ${carritoTotal()}</h2>
                    <button className="botonCarritoCompras" onClick={eliminarCarrito}>
                        Eliminar carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carrito;