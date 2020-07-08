import React, {useContext}  from 'react';
import Barra from './Barra';
import Sidebar from './Sidebar';
import HomePacientes from '../pacientes/Home';
import HomeTests from '../tests/Home'
import testContext from '../../context/tests/testContext';
import pacienteContext from '../../context/pacientes/pacienteContext';


const Hospitales = () => {
    const testsContext = useContext(testContext);
    const { showTest } = testsContext;

    const pacientesContext = useContext(pacienteContext);
    const { showPaciente } = pacientesContext;

    return ( 
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">
                <Barra/>

                <main>
                    <div className="contenedor-tareas">
                        {!showTest && !showPaciente
                            ? (<h2>Bienvenido</h2>)
                            : null
                        }
                        {showTest && !showPaciente
                            ? (<HomeTests/>)
                            : null
                        }
                        {showPaciente && !showTest
                            ? (<HomePacientes/>)
                            : null
                        }
                    </div>
                </main>
            </div>
        </div>
     );
}

export default Hospitales;