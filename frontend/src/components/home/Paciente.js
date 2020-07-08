import React, { useContext } from 'react';
import pacienteContext from '../../context/pacientes/pacienteContext';
import testContext from '../../context/tests/testContext';

const Paciente = ({paciente}) => {
    // obtener el state 
    const pacientesContext = useContext(pacienteContext);
    const { pacienteActual, mostrarPaciente } = pacientesContext;

    const testsContext = useContext(testContext);
    const { ocultarTest } = testsContext;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => {
                    pacienteActual(paciente.id)
                    mostrarPaciente()
                    ocultarTest()
                }}
            >{paciente.nombre}</button>
        </li>
     );
}

export default Paciente;