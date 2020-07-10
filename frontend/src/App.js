import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Axios from 'axios';
 import Login from './components/auth/Login';

import Home from './components/home/Home';
import Register from './components/auth/Register';
import Header from './components/layout/Header';
import MedicoContext from "./context/MedicoContext";
import PacienteState from './context/pacientes/pacienteState';
import TestState from './context/tests/testState';
import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alertas/alertasState';

import "./style.css";


function App() {
  const [medicoData, setMedicoData] = useState({
    token: undefined,
    medico: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
          "https://backendtpi-g5.herokuapp.com/api/medico/tokenIsValid",
          null,
          { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const medicoRes = await Axios.get("https://backendtpi-g5.herokuapp.com/api/medico/", {
          headers: { "x-auth-token": token },
        });
        setMedicoData({
          token,
          medico: medicoRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <PacienteState>
      <TestState>
        <AlertaState>
          <AuthState>
            <Router>
              <MedicoContext.Provider value={{medicoData, setMedicoData}}>
              <Header />
              <Switch>
                <Route  path="/login" component={Login} />
                <Route  path="/register" component={Register} />
                <Route exact path="/" component={Home} />
              </Switch>
              </MedicoContext.Provider>
            </Router>
          </AuthState>
        </AlertaState>
      </TestState>
    </PacienteState>
  );
}

export default App;
