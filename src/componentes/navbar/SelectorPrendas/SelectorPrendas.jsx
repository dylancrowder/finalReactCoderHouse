
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SelectorPrendas() {
  const [opcionActiva, setOpcionActiva] = useState(null);

  const handleSeleccionarOpcion = (opcion) => {
    setOpcionActiva(opcion);
  };

  return (
    <div className='PadreSelectorPrendas'>
      <ul className='ulSelector'>
        <li>
          <Link
            className={`link ${opcionActiva === null ? 'active' : ''}`}
            to="/"
            onClick={() => handleSeleccionarOpcion(null)}
          >
            PRODUCTOS
          </Link>
        </li>
        <li>
          <Link
            className={`link ${opcionActiva === 'buzo' ? 'active' : ''}`}
            to="/producto/buzo"
            onClick={() => handleSeleccionarOpcion('buzo')}
          >
            BUZOS
          </Link>
        </li>
        <li>
          <Link
            className={`link ${opcionActiva === 'remera' ? 'active' : ''}`}
            to="/producto/remera"
            onClick={() => handleSeleccionarOpcion('remera')}
          >
            REMERAS
          </Link>
        </li>
        <li>
          <Link
            className={`link ${opcionActiva === 'pantalon' ? 'active' : ''}`}
            to="/producto/pantalon"
            onClick={() => handleSeleccionarOpcion('pantalon')}
          >
            PANTALONES
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SelectorPrendas;