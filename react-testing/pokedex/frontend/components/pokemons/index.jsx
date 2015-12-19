var React = require('react')
var PokemonStore = require('../../stores/pokemon.js');
var ApiUtil = require('../../util/apiUtil.js');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return { pokemons: PokemonStore.all() }
  },

  _onChange: function() {
    this.setState({ pokemons: PokemonStore.all() });
  },

  componentDidMount: function() {
    this.pokemonListener = PokemonStore.addListener(this.onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillMount: function() {
    this.pokemonListener.remove();
  },

  render: function() {
    return(
      <ul>
        {this.state.pokemons.length};
      </ul>
    )
  }
});

module.exports = PokemonsIndex;
