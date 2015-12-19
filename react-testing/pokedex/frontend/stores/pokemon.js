var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var PokemonStore = new Store(Dispatcher);

var _pokemons = {};

var resetPokemons = function(pokemon) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECIEVED:
      resetPokemons(payload.pokemons);
      break;
  }

  PokemonStore.__emitChange();
}


module.exports = PokemonStore;
