var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return { input: "" };
  },
  handleInput: function(e) {
    this.setState({ input: e.currentTarget.value });
  },
  matches: function() {
    var matches = []
    var names = this.props.names

    if (this.state.input.length === 0) {
      return names
    }

    return matches
  },
  render: function() {
    var results = this.matches();

    return (
      <div>
        <input onChange={this.handleInput} value={this.state.input}></input>
        <ul>
          {
            results.map(function(result) {
              return <li>{result}</li>
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = AutoComplete;
