var React = require('react');

var TodoList = React.createClass({
  getInitialState: function() {
    return ({ todos: TodoStore.all() });
  }
})
