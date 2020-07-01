import React, { useReducer } from 'react';
import pacienteContext from './pacienteContext';
import pacienteReducer from './pacienteReducer'
import { PACIENTE_ACTUAL } from '../../types';

const PacienteState = props => {
    const initialState = {
        pacientes : [
            {id: 1, nombre: 'Paciente 1'},
            {id: 2, nombre: 'Paciente 2'},
            {id: 3, nombre: 'Paciente 3'},
            {id: 4, nombre: 'Paciente 4'}
        ],
        paciente: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(pacienteReducer, initialState)

    //Selecciona el paciente que el medio dio click
    const pacienteActual = pacienteID => {
        dispatch({
            type: PACIENTE_ACTUAL,
            payload: pacienteID
        })
    }

    return (
        <pacienteContext.Provider
            value={{
                pacientes: state.pacientes,
                paciente: state.paciente,
                pacienteActual
            }}
        >
            {props.children}
        </pacienteContext.Provider>
    )
}

export default PacienteState;