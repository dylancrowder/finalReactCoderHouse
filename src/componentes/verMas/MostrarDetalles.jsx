
import './verMas.css';
import Contador from './Contador';
import SelectorPrendas from './SelectorTalles';
import { useCartLogic } from './logicaCarta';


const DetallesCarta = ({ item }) => {


    const { cantidad, restar, sumar, sumarCarrito } = useCartLogic(item);

    return (
        <div className="contenedor">
            <div className="contenedorImagen">
                <img className="imagenVerMas" src={item.img} alt="Imagen" />
            </div>
            <div className="contenedorDerecha">
                <p className='parrafoCantidad'>PLEYADIAN</p>
                <h1>{item.categoria}</h1>
                <h3>$ {item.precio}</h3>
                <div className="tamanio">
                    <p className='parrafoCantidad'>Tamaño</p>
                    <SelectorPrendas />
                </div>
                <Contador cantidad={cantidad} sumar={sumar} restar={restar} sumarCarrito={sumarCarrito} />

            </div>
        </div>
    );
};

export default DetallesCarta;