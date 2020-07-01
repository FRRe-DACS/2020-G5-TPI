import React, { Fragment } from 'react';
import Paciente from './Paciente'

const ListadoPacientes = () => {

    const pacientes = [
        {nombre: 'Zurlo Maximiliano', estado: true},
        {nombre: 'alguien mas', estado: true},
        {nombre: 'otro nombre', estado: false},
        {nombre: 'este otro', estado: true},
    ]

    return ( 
        <Fragment>
            <h2>Pacientes</h2>

            <ul className="listado-tareas">
                {pacientes.length === 0
                    ? (<li className="tarea"><p>No hay pacientes</p></li>)
                    : pacientes.map(paciente => (
                        <Paciente
                            paciente={paciente}
                        />
                    ))
                }
            </ul>
        </Fragment>
     );
}

export default ListadoPacientes;