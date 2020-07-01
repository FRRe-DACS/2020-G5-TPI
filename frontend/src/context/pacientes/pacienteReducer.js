import { PACIENTE_ACTUAL } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case PACIENTE_ACTUAL:
            return {
                ...state,
                paciente: state.pacientes.filter(paciente => paciente.id === action.payload)
            }
        default:
            return state;
    }
}