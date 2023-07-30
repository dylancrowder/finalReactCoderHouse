import React from "react";
import Carta from "../tarjetas/Carta";
import "./itemsCarta.css";

const ItemsCarta = ({ productos, titulo }) => {
  return (
    <div>
      {/*  <h2>{titulo}</h2>  */}

      <div className="contenedor">
        {productos.map((prod) => (
          <div className="columna" key={prod.id}>
            <Carta producto={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsCarta;