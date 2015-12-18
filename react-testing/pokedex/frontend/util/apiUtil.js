var $ = require('jquery');
var ApiActions = require('../actions/pokemonActions.js');

module.exports = {
  fetchAllPokemon: function() {
    $.ajax({
      url: 'api/pokemon',
      type: 'GET',
      success: function(response) {
        ApiActions.receiveAllPokemons(response);
      }
    });
  }
};
