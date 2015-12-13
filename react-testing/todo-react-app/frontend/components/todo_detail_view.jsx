var React = require('react');
var StepStore = require('../stores/step_store');
var StepList = require('./step_list');
var StepForm = require('./step_form');

var TodoDetailView = React.createClass({
  getInitialState: function(){
    return { steps: StepStore.all(this.props.todo.id) };
  },
  render: function() {
    return (
      <div>
        <p className="todo-body">{this.props.todo.body}</p>
        <button
          onClick={this.props.handleDestroy}>Delete</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
