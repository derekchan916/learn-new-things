var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return { input: "" };
  },
  matches: function() {
    return this.props.name
  },
  render: function() {
    var results = this.matches();

    return (
      <div>
        <input value={this.state.input}></input>
        <ul>
          {
            results.map(function(result) {
              return <li>result</li>
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = AutoComplete;
