var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoDetailView = React.createClass({
  render: function() {
    return (
      <div>
        <p className="todo-body">{this.props.todo.body}</p>
        <button
          onClick={this.props.handleDestroy}>Delete</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
