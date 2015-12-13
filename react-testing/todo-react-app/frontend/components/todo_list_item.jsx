var React = require('react');
var TodoStore = require('../stores/todo_store.js')

var TodoListItem = React.createClass({
  getInitialState: function(){
    return {showDetail: false};
  }
  handleDestroy: function(e) {
    // e.stopPropagation();
    // TodoStore.destroy(e.currentTarget.id);
  },

  render: function() {
    var todo = this.props.todo
    return (
      <div>
        {todo.title} {todo.body}
        <button onClick={this.handleDestroy}>Destroy!</button>
      </div>
    )
  }
});

module.exports = TodoListItem;
