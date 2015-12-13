var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');

var TodoList = React.createClass({
  getInitialState: function() {
    return ({ todos: TodoStore.all() });
  },

  _todoChanged: function() {
    this.setState({ todos: TodoStore.all() })
  },

  componentDidMount: function() {
    TodoStore.addChangedHandler(this._todoChanged);
    TodoStore.fetch();
  },

  render: function() {
    var todos = this.state.todos;
    return (
      <div>
        <ul>
          {
            todos.map(function(todo) {
              return (<TodoListItem key={todo.id} todo={todo}/>);
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;
