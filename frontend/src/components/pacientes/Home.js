import React, { Fragment, useContext } from 'react';
import Datos from './InfoPersonal';
import Historia from './HistoriaClinica';
import InfoTest from '../tests/InfoTest';
import pacienteContext from '../../context/pacientes/pacienteContext';
import testContext from '../../context/tests/testContext';

const DatosPaciente = () => {
    const pacientesContext = useContext(pacienteContext);
    const { paciente } = pacientesContext;

    const testsContext = useContext(testContext);
    const { test } = testsContext;

    if(!paciente) return <h2>Bienvenido</h2>

    const [pacienteActual] = paciente;

    return ( 
        <Fragment>
            <h2>Paciente: {pacienteActual.nombre}</h2>

            <ul className="listado-tareas">
                <Datos/>
                
                <Historia/>

                <div className="tarea sombra">
                    <p>Test</p>
                    {test
                        ? (<InfoTest test={test}/>)
                        : null
                    }
                </div>

                <button 
                type="button"
                className="btn btn-primario"
                >Dar de alta</button>        
            </ul>
        </Fragment>
     );
}

export default DatosPaciente;
