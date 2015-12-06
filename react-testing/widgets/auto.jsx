var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return { input: "" };
  },
  render: function() {
    result = ["fag", "nigger"];

    return (
      <input>
        value={this.state.input}
      </input>
      <ul>
        {
          results.map(function(result) {
            return <li>result</li>
          })
        }
      </ul>
    )
  }
});

module.exports = AutoComplete;
