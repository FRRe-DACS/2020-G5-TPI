import React, { Fragment, useContext } from 'react';
import Datos from './InfoPersonal';
import Historia from './HistoriaClinica';
import pacienteContext from '../../context/pacientes/pacienteContext';

const DatosPaciente = () => {
    const pacientesContext = useContext(pacienteContext);

    const { paciente } = pacientesContext;

    if(!paciente) return <h2>Selecciona un paciente</h2>

    const [pacienteActual] = paciente;

    return ( 
        <Fragment>
            <h2>Paciente: {pacienteActual.nombre}</h2>

            <ul className="listado-tareas">
                <Datos/>
                
                <Historia/>

                <button 
                type="button"
                className="btn btn-primario"
                >Dar de alta</button>
            </ul>
        </Fragment>
     );
}

export default DatosPaciente;