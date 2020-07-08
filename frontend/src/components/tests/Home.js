import React, { Fragment, useContext} from 'react';
import InfoTest from './InfoTest';
import testContext from '../../context/tests/testContext';
import pacienteContext from '../../context/pacientes/pacienteContext';

const DatosTest = () => {
    const testsContext = useContext(testContext);
    const { test } = testsContext;

    const pacientesContext = useContext(pacienteContext);
    const { pacientes, agregarPaciente} = pacientesContext;

    if(!test) return <h2>Bienvenido</h2>

    const [testActual] = test;

    const onSubmit = e => {
        e.preventDefault();

        pacientes.id = testActual.id;
        pacientes.nombre = testActual.nombre;
        pacientes.apellido = '';
        pacientes.dni = 0;
        pacientes.localidad = '';
        pacientes.telefono = '';
        pacientes.email = '';

        agregarPaciente(pacientes);
    }

    return ( 
        <Fragment>
            <h2>Test: {testActual.nombre}</h2>

            <form className="listado-tareas" onSubmit={onSubmit}>
                <InfoTest/>

                <input 
                type="submit"
                className="btn btn-primario"
                value="Marcar Positivo"
                />

                <input
                type="submit"
                className="btn btn-primario"
                value="Marcar Negativo"
                />
            </form>
        </Fragment>
     );
}

export default DatosTest;
