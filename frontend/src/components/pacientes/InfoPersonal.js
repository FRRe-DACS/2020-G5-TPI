import React from 'react';

const InfoPersonal = () => {
    return ( 
        <li className="tarea sombra">
            <p>Informacion Personal</p>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-eliminar"
                >Ver</button>
            </div>
        </li>
     );
}

export default InfoPersonal;