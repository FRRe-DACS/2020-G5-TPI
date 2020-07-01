import React, { useContext } from 'react';
import Paciente from './Paciente';
import pacienteContext from '../../context/pacientes/pacienteContext';

const ListadoPacientes = () => {
    const pacientesContext = useContext(pacienteContext);

    const { pacientes } = pacientesContext;

    return ( 
        <ul className="listado-proyectos">
            {pacientes.map(paciente => (
                <Paciente
                    paciente={paciente}
                />
            ))}
        </ul>
     );
}

export default ListadoPacientes;