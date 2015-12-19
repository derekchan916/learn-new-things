var React = require('react');
var PokemonIndex = require('./pokemons/index.jsx');
var PokemonForm = require('./pokemons/form.jsx');

module.exports = React.createClass({
  render: function() {
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonForm />
          <PokemonIndex />
        </div>

        {this.props.children}
      </div>
    )
  }
})
