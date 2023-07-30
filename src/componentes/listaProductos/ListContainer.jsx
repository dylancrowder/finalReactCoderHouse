import { useState, useEffect } from "react"
import ItemsCarta from "./ItemsCarta";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebases/baseDeDatos";

function ListContainer() {
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo] = useState("productos");

    useEffect(() => {
        const productosRef = collection(db, "productos");

        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                );
            })
            .catch((error) => {
               
                console.error("Error al obtener los documentos:", error);
            });
    }, [categoria]);

    return (
        <div>
            <ItemsCarta productos={productos} titulo={titulo} />
        </div>
    );
}

export default ListContainer;