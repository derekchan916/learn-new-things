var React = require('react');
var ReactDOM = require('react-dom');
var AutoComplete = require('./auto.jsx');

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>
        <AutoComplete names={names} />
      </div>
    );
  }
});

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

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});