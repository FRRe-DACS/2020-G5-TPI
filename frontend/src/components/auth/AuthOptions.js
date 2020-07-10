import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import MedicoContext from "../../context/MedicoContext";

export default function AuthOptions() {
    const {medicoData, setMedicoData} = useContext(MedicoContext);

    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {setMedicoData({
        token:undefined,
        medico:undefined
    });
      localStorage.setItem("auth-token","");
    };

    return(
        <nav className= "auth-options">
            {
                medicoData.medico ? (
                    <button onClick={logout}>Log out</button>
                    ):(
                    <>
                    <button onClick={register}>Register </button>
                    <button onClick={login}>Log in</button>
                    </>
                )}
        </nav>
    );
}