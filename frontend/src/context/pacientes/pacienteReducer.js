import { PACIENTE_ACTUAL, PACIENTE_TEST, AGREGAR_PACIENTE, MOSTRAR_PACIENTE, OCULTAR_PACIENTE } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case PACIENTE_ACTUAL:
            return {
                ...state,
                paciente: state.pacientes.filter(paciente => paciente.id === action.payload)
            }
        case PACIENTE_TEST:
            return {
                ...state,
                pacientetest: state.pacientes.filter(paciente => paciente.testId === action.payload)
            }
        case AGREGAR_PACIENTE:
            return {
                ...state,
                pacientes: [...state.pacientes, action.payload]
            }
        case MOSTRAR_PACIENTE:
            return {
                ...state,
                showPaciente: true
            }
        case OCULTAR_PACIENTE:
            return {
                ...state,
                showPaciente: false
            }
        default:
            return state;
    }
}