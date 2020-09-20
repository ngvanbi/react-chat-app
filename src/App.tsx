import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import Login from 'views/Login/Login';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
    <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
