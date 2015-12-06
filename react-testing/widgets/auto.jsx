var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return { input: "" };
  },
  render: function() {
    return (
      <input>
        {this.state.input}
      </input>
    )
  }
});

module.exports = AutoComplete;
