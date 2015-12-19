var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;

var App = require('./components/app.jsx');
var PokemonDetail = require('./components/pokemons/detail.jsx');

var Routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>

    </Route>
  </Route>
)

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router>{Routes}</Router>, document.getElementById('root'));
})
