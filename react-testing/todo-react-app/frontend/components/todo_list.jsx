var React = require('react');
var TodoStore = require('../stores/todo_store.js')

var TodoList = React.createClass({
  getInitialState: function() {
    return ({ todos: TodoStore.all() });
  }
})
