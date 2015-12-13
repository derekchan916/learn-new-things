var React = require('react');
// var TodoStore = require('../stores/todo_store.js')

var TodoListItem = React.createClass({
  render: function() {
    var todo = this.props.todo
    return (
      <div>
        {todo.title} {todo.body}
      </div>
    )
  }
});

module.exports = TodoListItem;
