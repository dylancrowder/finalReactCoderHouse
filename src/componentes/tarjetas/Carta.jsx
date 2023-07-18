import './carta.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Carta({ producto }) {
    return (
        <div className='padreCartas'>
            <Card className='contenedorCarta ' style={{ width: '22rem' }}>
                <Link className='zoomEfecto' to={`/item/${producto.id}`}>
                    <Card.Img variant="top" src={producto.img} />
                </Link>
                <Card.Body>
                    <Card.Title className='tituloCarta hoverCarta'>{producto.categoria}</Card.Title>
                    <Card.Title className='tituloCarta '>${producto.precio}</Card.Title>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Carta;