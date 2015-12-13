var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoDetailView = React.createClass({
  // getInitialState: function() {
  //
  // },

  render: function() {
    render (
      <div>
        <p className="todo-body">{this.props.todo.body}</p>
      </div>
    );
  }
});

module.exports = TodoDetailView;
