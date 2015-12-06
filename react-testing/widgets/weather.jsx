var React = require('react');

var clock = React.createClass({
  getInitialState : function() {
    return { time: new Date() };
  },

  render: function() {
    return (
      <div className="clock">
        <p>Time: { this.state.time.toTimeString() }</p>
        <p>Date: { this.state.time.toDateString() }</p>
      </div>
    )
  }
});

module.export = {
  Clock: clock
}
