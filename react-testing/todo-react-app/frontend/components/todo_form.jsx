var React = require('react');
var TodoStore = require('../stores/todo_store.js');

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

  handleSubmit: function(e) {
    e.preventDefault();
    TodoStore.create({title: this.state.title, body: this.state.body});
    this.setState({title: "", body: ""});
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
        <div className="form-group">
          <input
            className="form-control"
            value={this.state.body}
            placeholder="Insert Body"
            onChange={this.updateBody}/>
        </div>
        <button>Create Todo!</button>
      </form>
    )
  }
});

module.exports = TodoForm;
