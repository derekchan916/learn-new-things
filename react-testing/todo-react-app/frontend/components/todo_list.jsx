var React = require('react');
var TodoStore = require('../stores/todo_store.js')

var TodoList = React.createClass({
  getInitialState: function() {
    return ({ todos: TodoStore.all() });
  },

  render: function() {
    var todos = this.state.todos;
    return (
      <div>
        <ul>
          {
            todos.map(function(todo) {
              return (<li> { todo.title }</li>)
            })
          }
        </ul>
      </div>
    )
  }
})
