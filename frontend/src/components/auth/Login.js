import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
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
        await axios.post('https://grupo5-tpi-backend.herokuapp.com/medico/autenticar/',{
            apynombre: this.state.apynombre,password:this.state.password
        })

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