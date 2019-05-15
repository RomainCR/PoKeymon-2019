import React, { Component } from 'react';
import './App.css';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './pages/Home';
import Solo from './pages/Solo';
import Duo from './pages/Duo';
import Pokedex from './pages/Pokedex';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div className="App">
        <HashRouter>
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/solo-mode" component={Solo} />
              <Route path="/dual-mode" component={Duo} />
              <Route path="/pokedex" component={Pokedex} />
              <Route path="/Login" component={Login} />
            </Switch>
          </header>
        </HashRouter>
      </div>
    );
  }
}

export default App;
