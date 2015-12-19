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

PokemonStore.all = function() {
  var pokemons = [];
  Object.keys(_pokemons).forEach(function(id) {
    pokemons.push(_pokemons[id]);
  });//if we use for in loop we would need to use hasOwnProperty
  return pokemons;
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECIEVED:
      resetPokemons(payload.pokemons);
      break;
  }

  PokemonStore.__emitChange();
};


module.exports = PokemonStore;
