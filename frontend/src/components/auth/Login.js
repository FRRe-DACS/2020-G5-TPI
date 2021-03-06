import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import MedicoContext from "../../context/MedicoContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setMedicoData } = useContext(MedicoContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginMedico = { email, password };
            const loginRes = await Axios.post(
                "https://backendtpi-g5.herokuapp.com/api/medico/login",
                loginMedico
            );
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
    return (
        <div className="page">
            <h2>Log in</h2>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <form className="form" onSubmit={submit}>
                <label htmlFor="login-email">Email</label>
                <input
                    id="login-email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="login-password">Password</label>
                <input
                    id="login-password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input type="submit" value="Log in" />
            </form>
        </div>
    );
}