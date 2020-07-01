import React from 'react';

const Paciente = ({paciente}) => {
    return ( 
        <li className="tarea sombra">
            <p>{paciente.nombre}</p>

            <div className="estado">
                {paciente.estado
                ?
                    (
                        <button
                            type="button"
                            className="completo"
                        >Recuperado</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Enfermo</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-eliminar"
                >Dar de alta</button>
            </div>
        </li>
     );
}

export default Paciente;