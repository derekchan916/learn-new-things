var React = require('react');
var ReactDOM = require('react-dom');
var AutoComplete = require('./auto.jsx');
var Clock = require('./weather.jsx').Clock;
var Weather = require('./clock.jsx').Weather;

var names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>
        <AutoComplete names={names} />
        <Clock />
        <Weather />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
