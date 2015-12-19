var React = require('react');
var PokemonIndex = require('./pokemons/index.jsx');

module.exports = React.createClass({
  render: function() {
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonIndex />
        </div>
      </div>
    )
  }
})
