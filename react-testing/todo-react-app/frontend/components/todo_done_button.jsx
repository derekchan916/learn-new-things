var React = require('react');
var TodoStore = require('../stores/todo_store.jsx');

var TodoDoneButton = React.createClass({
  handleDone: function(e) {

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
        className={classname}
        onClick={this.handleDone}>{text}</button>
    )
  }

});

module.exports = TodoDoneButton;
