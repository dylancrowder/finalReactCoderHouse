import React from "react";

const Contador = ({ cantidad, restar, sumar, sumarCarrito }) => {
    return (
        <div className="contenedorCantidad">
            <p className="parrafoCantidad">Cantidad</p>
            <div className="cantidad">
                <button className="sumarRestar" onClick={restar}>
                    -
                </button>
                <p className="parrafoCantidad">{cantidad}</p>
                <button className="sumarRestar" onClick={sumar}>
                    +
                </button>
            </div>


            <div className="contenedorBoton">
                <button className="botonSumar" onClick={sumarCarrito}>Sumar al carro</button>
            </div>
        </div>
    );
};

export default Contador;