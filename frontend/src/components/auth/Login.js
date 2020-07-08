import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertasContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion } = authContext;

    useEffect(() => {
        // if (autenticado) {
        //     props.history.push('/home')
        // }
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history]);

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        apynombre: '',
        password: ''
    });

    //extraer de usuario
    const { apynombre, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario hace click en iniciar sesion
    const onSubmit = async e => {
        e.preventDefault();
        //Validar que no haya campos vacios
        if(apynombre.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        iniciarSesion({apynombre, password});
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="apynombre">Nombre</label>

                        <input 
                            type="text"
                            id="apynombre"
                            name="apynombre"
                            placeholder="Tu nombre"
                            value={apynombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    {alerta 
                        ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) 
                        : null 
                    }                    
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesion" />
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Login;