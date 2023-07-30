import React, { useEffect, useState } from "react";
import DetallesCarta from "./MostrarDetalles";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebases/baseDeDatos";

const Detalles = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setItem({
                        ...resp.data(),
                        id: resp.id
                    });
                } else {

                    console.log("Document not found!");
                }
            })
            .catch((error) => {

                console.error("Error fetching document:", error);
            });
    }, [id]);

    return (
        <div>
            {item && <DetallesCarta item={item} />}
        </div>
    );
};

export default Detalles;