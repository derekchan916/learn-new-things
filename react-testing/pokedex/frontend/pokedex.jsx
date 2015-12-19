var React = require('react');
var ReactDOM = require('react-dom');
var AllPokemon = require('./components/pokemons/index.jsx')

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(< AllPokemon/>, document.getElementById('root'));
})
