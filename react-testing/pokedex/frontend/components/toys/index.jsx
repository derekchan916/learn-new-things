var React = require('react');
var ToyItem = require('./indexItem.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.toys && this.props.toys.map(function(toy) {
          return <ToyItem key={toy.id} toy={toy})/>
        })}
      </ul>
    );
  }
});
