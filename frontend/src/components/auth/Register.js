

import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import MedicoContext from "../../context/MedicoContext";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [apynombre, setApynombre] = useState();
    const [matricula, setMatricula] = useState();
    const [especialidad, setEspecialidad] = useState();
    const [experiencia, setExperiencia] = useState();
    const [telefono, setTelefono] = useState();
    const [error,setError]= useState();

    const{setMedicoData} = useContext(MedicoContext);
    const history = useHistory();

    const submit = async (e) => {

        e.preventDefault();
        try{
            const newMedico = {email, password, passwordCheck, apynombre, matricula, especialidad, experiencia, telefono};


         await Axios.post("https://backendtpi-g5.herokuapp.com/api/medico/register",newMedico);
        const loginRes = await Axios.post("https://backendtpi-g5.herokuapp.com/api/medico/login",{
            email,
            password,
        });
        setMedicoData({
            token: loginRes.data.token,
            medico: loginRes.data.medico,
        });
       localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/");
    } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
    }
    };

    return(
        <div className="page">
        <h2>Registrar</h2>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
        <form className = "form" onSubmit={submit}>
            <label htmlFor="register-email">Email</label>
            <input
                id="register-email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="register-password">Password</label>
            <input
                id="register-password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Verify password"
                onChange={(e) => setPasswordCheck(e.target.value)}
            />

            <label htmlFor="register-apynombre">Apellido y Nombre</label>
            <input
                id="register-apynombre"
                type="text"
                onChange={(e) => setApynombre(e.target.value)}
            />
            <label htmlFor="register-matricula">Matricula</label>
            <input
                id="register-matricula"
                type="number"
                onChange={(e) => setMatricula(e.target.value)}
            />
            <label htmlFor="register-especialidad">Especialidad</label>
            <input
                id="register-especialidad"
                type="text"
                onChange={(e) => setEspecialidad(e.target.value)}
            />
            <label htmlFor="register-experiencia">Experiencia</label>
            <input
                id="register-experiencia"
                type="text"
                onChange={(e) => setExperiencia(e.target.value)}
            />
            <label htmlFor="register-telefono">Telefono</label>
            <input
                id="register-telefono"
                type="number"
                onChange={(e) => setTelefono(e.target.value)}
            />

            <input type="submit" value="Register" />
        </form>

    </div>
    );
}

/*
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newUser = { email, password, passwordCheck, displayName };
            await Axios.post("http://localhost:5000/users/register", newUser);
            const loginRes = await Axios.post("http://localhost:5000/users/login", {
                email,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <div className="page">
            <h2>Register</h2>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <form className="form" onSubmit={submit}>
                <label htmlFor="register-email">Email</label>
                <input
                    id="register-email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="register-password">Password</label>
                <input
                    id="register-password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Verify password"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                />

                <label htmlFor="register-display-name">Display name</label>
                <input
                    id="register-display-name"
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                />

                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

 */