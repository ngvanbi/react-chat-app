import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import SignIn from 'views/SignIn/SignIn';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
    <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
      </Switch>
    </>
  );
}

export default App;
