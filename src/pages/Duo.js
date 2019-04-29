import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import PokemonRareACapturer from '../components/PokemonRareACapturer';


class Duo extends Component {
  constructor() {
    super();
    this.state = {
      index: '',
    };
  }

  pokemonRandom = (indexPlayedPokemon, playedPokemonName) => {
    this.setState({
      index: indexPlayedPokemon,
      name: playedPokemonName,
    });
  }

  render() {
    const { index, name } = this.state;
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
          <Player2 pokemonRare={index} pokemonName={name} />
          <PokemonRareACapturer getPokemon={this.pokemonRareRandom} />
          <Player1 pokemonRare={index} pokemonName={name} />
        </div>
      </div>
    );
  }
}

export default Duo;
