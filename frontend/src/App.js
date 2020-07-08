import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import PacienteState from './context/pacientes/pacienteState';
import TestState from './context/tests/testState';
import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alertas/alertasState';

function App() {
  return (
    <PacienteState>
      <TestState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                
                <Route exact path="/home" component={Home} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TestState>
    </PacienteState>
  );
}

export default App;
