import { TEST_ACTUAL, MOSTRAR_TEST, OCULTAR_TEST, OBTENER_TEST } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case TEST_ACTUAL:
            return {
                ...state,
                test: state.tests.filter(test => test.id === action.payload)
            }
        case OBTENER_TEST:
            return {
                ...state,
                tests: action.payload
            }
        case MOSTRAR_TEST:
            return {
                ...state,
                showTest: true
            }
        case OCULTAR_TEST:
            return {
                ...state,
                showTest: false
            }
        default:
            return state;
    }
}