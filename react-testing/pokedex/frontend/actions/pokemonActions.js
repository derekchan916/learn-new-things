var Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  receiveAllPokemons: function(pokemons) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};
