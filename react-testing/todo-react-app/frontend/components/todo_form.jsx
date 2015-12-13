var React = require('react');

var TodoForm = React.createClass({
  getInitialState: function() {
    return { title: "", body: "" };
  },

  updateTitle: function(e) {
    this.setState({ title: e.currentTarget.value });
  },

  updateBody: function(e) {
    this.setState({ body: e.currentTarget.value });
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={this.state.title}
            placeholder="Insert Title"
            onChange={this.updateTitle}/>
        </div>
      </form>
    )
  }
});

module.exports = TodoForm;
