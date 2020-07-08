import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';
import {
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            dispatch({
                type:LOGIN_ERROR
            })
        }
    }

    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type:LOGIN_EXITOSO,
                payload: respuesta.data
            })
            usuarioAutenticado();
        } catch (error) {
            const alerta = {
                //msg:error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type:LOGIN_ERROR,
                payload: alerta
            })
        }
    }
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                iniciarSesion,
                usuarioAutenticado
            }}
        >
        {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;