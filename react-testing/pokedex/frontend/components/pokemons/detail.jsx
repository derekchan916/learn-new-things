var React = require('React');
var PokemonStore = require('../../stores/pokemon.js');
var ApiUtil = require('../../util/apiUtil.js');

module.exports = React.creatClass({
  getInitialState: function() {
    this.getStateFromStore();
  },

  getStateFromStore: function() {
    return {
      pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function() {
    this.pokemonListener = PokemonStore.addListener(this._onChange);
    ApiUtil.fetchSinglePokemon(parseInt(this.props.params.pokemonId));
  },

  componentWillUnmount: function() {
    this.pokemonListner.remove();
  }
})
