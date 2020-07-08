import React, { useContext } from 'react';
import testContext from '../../context/tests/testContext';
import pacienteContext from '../../context/pacientes/pacienteContext';

const Test = ({test}) => {
    // obtener el state 
    const testsContext = useContext(testContext);
    const { testActual, mostrarTest } = testsContext;

    const pacientesContext = useContext(pacienteContext);
    const { obtenerPaciente, ocultarPaciente } = pacientesContext;

    const seleccionarTest = id => {
        testActual(id);
        obtenerPaciente(id);
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => {
                    seleccionarTest(test.id)
                    mostrarTest()
                    ocultarPaciente()
                }}
            >{test.nombre}</button>
        </li>
     );
}

export default Test;