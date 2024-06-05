// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginAdmin } from './components/LoginAdmin';
import { LoginUser } from './components/LoginUser';
// import Home from './components/Home'; // Ejemplo de otro componente

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login-admin" component={LoginAdmin} />
        <Route path="/login" component={LoginUser} />
      </Switch>
    </Router>
  );
};

export default App;
