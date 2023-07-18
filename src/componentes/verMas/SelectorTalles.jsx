import React, { useState } from "react";

const SelectorPrendas = () => {
    const [talleSeleccionado, setTalleSeleccionado] = useState(null);

    const handleTalleSeleccionado = (talle) => {
        setTalleSeleccionado(talle);
    };

    return (
        <div className="contenedorTalle">
            <button
                className={`botonTalle ${talleSeleccionado === 'S' ? 'activo' : ''}`}
                onClick={() => handleTalleSeleccionado('S')}
            >
                S 
            </button>
            <button
                className={`botonTalle ${talleSeleccionado === 'M' ? 'activo' : ''}`}
                onClick={() => handleTalleSeleccionado('M')}
            >
                M 
            </button>
            <button
                className={`botonTalle ${talleSeleccionado === 'L' ? 'activo' : ''}`}
                onClick={() => handleTalleSeleccionado('L')}
            >
                L 
            </button>
            <button
                className={`botonTalle ${talleSeleccionado === 'XL' ? 'activo' : ''}`}
                onClick={() => handleTalleSeleccionado('XL')}
            >
                XL
            </button>
        </div>
    );
};

export default SelectorPrendas;