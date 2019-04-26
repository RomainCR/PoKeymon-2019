import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import ArrowKeysReact from 'arrow-keys-react';
import Nav from 'react-bootstrap/Nav';
import Player from '../components/Player';
import Player2 from '../components/Player2';
import PokemonACapturer from '../components/PokemonACapturer';


class Duo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <NavLink to="/">Accueil</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/solo-mode">Solo Mode</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/dual-mode" activeClassName="selected">Dual Mode</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/pokedex">PoKeydex</NavLink>
          </Nav.Item>
        </Nav>
        <div className="fullPage">
          <Player />
          <PokemonACapturer getPokemon={this.pokemonRandom} />
          <Player2 />
        </div>
      </div>
    );
  }
}

export default Duo;
