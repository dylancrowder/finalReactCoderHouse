
import React, { useEffect, useState } from "react";
import { pedirItemPorId } from "../helpers/pedirDatos";
import DetallesCarta from "./MostrarDetalles";
import { useParams } from "react-router-dom";
import Carrito from "../navbar/linksContacto/carrito/Carrito";



const Detalles = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res)
            }, [id])
    })

    return (
        <div>
            {item && < DetallesCarta item={item} />}
            {item && < Carrito item={item} />}

        </div>


    )
}

export default Detalles;