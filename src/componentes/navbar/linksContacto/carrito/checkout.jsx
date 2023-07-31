import { useContext, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../../firebases/baseDeDatos";


const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")
    const { carrito, carritoTotal, setCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();


    const eliminarCarrito = () => {
        localStorage.removeItem("carrito");
        setCarrito([]);
    };



    const enviar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: carritoTotal()
        }

        const pedidosRef = collection(db, "pedidos")


        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)

            })
        eliminarCarrito()
    }



    if (pedidoId) {
        return (
            <div className="contenedorMensaje">
                <h1>muchas gracias por su compra</h1>
                <p>tu numero de pedido es:{pedidoId}</p>
            </div>
        )

    }


    return (
        <div className="contenedorMensaje">

            <form className="formulario" onSubmit={handleSubmit(enviar)}>

                <input name="nombre" type="text" placeholder="Nombre" maxlength="30" pattern="[a-zA-Z0-9]+" required autofocus {...register("nombre")} />
                <input name="email" type="email" placeholder="Correo electrónico"  {...register("email")} />
                <button id="enviar" name="enviar" type="submit" className="botonContacto">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout;