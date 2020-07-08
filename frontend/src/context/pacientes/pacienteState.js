import React, { useReducer, useEffect, useState } from 'react';
import pacienteContext from './pacienteContext';
import pacienteReducer from './pacienteReducer';
import axios from 'axios'
import { 
    PACIENTE_ACTUAL,
    PACIENTE_TEST,
    AGREGAR_PACIENTE,
    MOSTRAR_PACIENTE,
    OCULTAR_PACIENTE,
} from '../../types';

const PacienteState = props => {

    // const Listapacientes = () => {
    //     const [pacientes, setPacientes] = useState([]);
        
    //     useEffect(() => {
    //         axios.get("https://backendtpi-g5.herokuapp.com/api/paciente")
    //         .then(result => {
    //             pacientes = result.data.data.paciente;
    //             setPacientes(pacientes);
    //         })
    //     })
    // }

    const initialState = {
        pacientes : [
            {id: 1, nombre: 'Maximiliano', apellido : 'Zurlo', dni : 372648, localidad : 'Resistencia', telefono : '+54326488922', email : 'maxiazurlo@gmail.com'},
            {id: 2, nombre: 'Roberto', apellido : 'Perez', dni : 368821, localidad : 'Resistencia', telefono : '+54326488922', email : 'maxiazurlo@gmail.com'},
            {id: 3, nombre: 'Juan', apellido : 'Fernandez', dni : 388821, localidad : 'Resistencia', telefono : '+54326488922', email : 'maxiazurlo@gmail.com'},
            {id: 4, nombre: 'Emilio', apellido : 'Ramirez', dni : 3669662, localidad : 'Resistencia', telefono : '+54326488922', email : 'maxiazurlo@gmail.com'},
        ],
        pacientetest: null,
        showPaciente: false,
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(pacienteReducer, initialState)

    const obtenerPaciente = testId => {
        dispatch({
            type: PACIENTE_TEST,
            payload: testId
        })
    }

    const agregarPaciente = pacientes => {
        dispatch({
            type: AGREGAR_PACIENTE,
            payload: pacientes
        })
    }

    //Selecciona el paciente que el medico dio click
    const pacienteActual = pacienteID => {
        dispatch({
            type: PACIENTE_ACTUAL,
            payload: pacienteID
        })
    }

    const mostrarPaciente = () => {
        dispatch({
            type: MOSTRAR_PACIENTE,
        })
    }

    const ocultarPaciente = () => {
        dispatch({
            type: OCULTAR_PACIENTE
        })
    }

    return (
        <pacienteContext.Provider
            value={{
                pacientes: state.pacientes,
                paciente: state.paciente,
                pacientetest: state.pacientetest,
                showPaciente: state.showPaciente,
                pacienteActual,
                obtenerPaciente,
                agregarPaciente,
                mostrarPaciente,
                ocultarPaciente
            }}
        >
        {props.children}
        </pacienteContext.Provider>
    )
}

export default PacienteState;