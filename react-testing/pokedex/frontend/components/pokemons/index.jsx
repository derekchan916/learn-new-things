var React = require('react')
var PokemonStore = require('../../stores/pokemon.js');
var ApiUtil = require('../../util/apiUtil.js');
var PokemonIndexItem = require('./indexItem.jsx');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return { pokemons: PokemonStore.all() }
  },

  _onChange: function() {
    this.setState({ pokemons: PokemonStore.all() });
  },

  componentDidMount: function() {
    this.pokemonListener = PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemon();
  },

  componentWillUnmount: function() {
    this.pokemonListener.remove();
  },

  render: function() {
    return(
      <ul>
        { this.state.pokemons.map(function( pokemon) {
          return < PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>;
        })}
      </ul>
    )
  }
});

module.exports = PokemonsIndex;
