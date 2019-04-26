import React from 'react';
import KeysPlayer2 from './KeysPlayer';

const Player2 = ({ pokemon, pokemonName }) => (
  <KeysPlayer2
    pokemon={pokemon}
    pokemonName={pokemonName}
    haut="z"
    gauche="q"
    bas="s"
    droite="d"
  />
);

export default Player2;
