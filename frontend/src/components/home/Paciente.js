import React, { useContext } from 'react';
import pacienteContext from '../../context/pacientes/pacienteContext';

const Paciente = ({paciente}) => {
    // obtener el state 
    const pacientesContext = useContext(pacienteContext);

    const { pacienteActual } = pacientesContext;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => pacienteActual(paciente.id)}
            >{paciente.nombre}</button>
        </li>
     );
}

export default Paciente;