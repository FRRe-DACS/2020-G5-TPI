import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import PacienteState from './context/pacientes/pacienteState'

function App() {
  return (
    <PacienteState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </PacienteState>
  );
}

export default App;
