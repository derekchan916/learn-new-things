var React = require('react');
var TodoStore = require('../stores/todo_store.js');
// var TodoDetailView = require('./todo_detail_view.jsx');

var TodoListItem = React.createClass({
  getInitialState: function(){
    return ({detail: false});
  },
  handleDestroy: function(e) {
    e.stopPropagation();
    TodoStore.destroy(e.currentTarget.id);
  },

  toggleDetail: function(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  },

  render: function() {
    var detail;
    if(this.state.detail){
      detail = (
        <TodoDetailView todo={this.props.todo} />
      );
      className = "list-item";
    } else {
      className = "list-item min";
    }
    return (
      <div className={className}>
        { detail }
      </div>
    )
  }
});

module.exports = TodoListItem;
