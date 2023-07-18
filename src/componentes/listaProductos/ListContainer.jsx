import { pedirDatos } from "../helpers/pedirDatos";
import { useState, useEffect } from "react"
import ItemsCarta from "./ItemsCarta";
import { useParams } from "react-router-dom";



function ListContainer() {
    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria
    const [titulo, setTitulo] = useState("productos")

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    console.log(categoria);
                    setTitulo(categoria)

                } else {
                    setProductos(res);
                    setTitulo("productos")
                }

            })
    }, [categoria])


    return (
        <div>

            <ItemsCarta productos={productos} titulo={titulo} />

        </div>
    )

}

export default ListContainer