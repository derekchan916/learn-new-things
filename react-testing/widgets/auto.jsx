var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return { input: "" };
  },
  render: function() {
    var results = ["whoa", "guy"];

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
