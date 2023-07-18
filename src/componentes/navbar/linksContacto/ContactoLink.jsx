import React from "react";
import "./contacto.css"
import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();
    const enviar = (datos) => {
        console.log(datos)
    }

    return (

        <div>
            <h1 className="tituloContacto"> Contactanos</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input name="nombre" type="text" placeholder="Nombre" maxlength="30" pattern="[a-zA-Z0-9]+" required autofocus {...register("nombre")} />
                <input name="email" type="email" placeholder="Correo electrónico"  {...register("email")} />
                <textarea name="consulta" placeholder="¿Cuál es el motivo de tu consulta?" rows="6" {...register("mensaje")}></textarea>
                <button id="enviar" name="enviar" type="submit" className="botonContacto">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto;