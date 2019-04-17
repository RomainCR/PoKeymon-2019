import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Solo from './pages/Solo';
import Duo from './pages/Duo';
import Pokedex from './pages/Pokedex';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/solo-mode" component={Solo} />
              <Route path="/dual-mode" component={Duo} />
              <Route path="/pokedex" component={Pokedex} />
              <Route path="/Login" component={Login} />
              <Route path="/Login/:user" component={Home} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
