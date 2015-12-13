var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoDoneButton = React.createClass({
  handleDone: function(e) {
    e.stopPropagation();
    TodoStore.toggleDone(this.props.todo.id);
  },

  render: function() {
    // if(this.props.done) {
    //   text = "Undo!";
    // } else {
    //   text = "Im done!";
    // }
    var text = this.props.todo.done ? "Undo" : "Done";
    return (
      <button
        onClick={this.handleDone}>{text}</button>
    )
  }

});

module.exports = TodoDoneButton;
