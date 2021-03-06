var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');

module.exports = React.createClass({
  getInitialState: function() {
    console.log('hit')
    return this.getStateFromStore();
  },

  getStateFromStore: function() {
    var pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    var toy;
    pokemon && pokemon.toys && pokemon.toys.forEach(function(t) {
      if (t.id === parseInt(this.props.params.toyId)) { toy = t }
    }.bind(this))
    return {toy: toy}
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function() {
    this.pokemonListener = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.pokemonListener.remove();
  },

  componentWillReceiveProps: function() {
    this._onChange();
  },

  render: function() {
    if(this.state.toy === undefined) { return <div></div>; }

    return(
      <div className="toy-detail-pane">
        <div className="detail">
          <img src={this.state.toy.image_url} />
          {['name', 'happiness', 'price'].map(function (attr) {
            return <p key={attr}>{attr}: {this.state.toy[attr]}</p>;
          }.bind(this))}
        </div>
      </div>
    );
  }
})
