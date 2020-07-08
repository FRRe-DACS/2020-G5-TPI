import React, { useReducer} from 'react';
// import { v4 as uuid } from 'uuid';
import testContext from './testContext';
import testReducer from './testReducer';
import clienteAxios from '../../config/axios';
import { TEST_ACTUAL, MOSTRAR_TEST, OCULTAR_TEST, OBTENER_TEST} from '../../types';

const TestState = props => {
    const initialState = {
        tests : [
            {id: 1, nombre: 'Jorge Perez', fechacreacion:'', fecha1ersintoma: '', sintomas:'', diarrea:true, vomito:true,  dolorgarganta:false, rechazoalimento:true,
            perdidadelolfato:false, obesidad:false},
        ],
        test: null,
        showTest: false,
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(testReducer, initialState)

    //Selecciona el test que el medio dio click
    const testActual = testID => {
        dispatch({
            type: TEST_ACTUAL,
            payload: testID
        })
    }

    const mostrarTest = () => {
        dispatch({
            type: MOSTRAR_TEST,
        })
    }

    const ocultarTest = () => {
        dispatch({
            type: OCULTAR_TEST,
        })
    }

    const obtenerTest = async () => {
        try {
            const respuesta = await clienteAxios.get('/api/test');
            dispatch({
                type: OBTENER_TEST,
                payload: respuesta.data.data.test
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <testContext.Provider
            value={{
                tests: state.tests,
                test: state.test,
                showTest: state.showTest,
                testActual,
                mostrarTest,
                ocultarTest,
                obtenerTest
            }}
        >
        {props.children}
        </testContext.Provider>
    )
}

export default TestState;