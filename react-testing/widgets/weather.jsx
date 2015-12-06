var React = require('react');

var Clock = React.createClass({
  getInitialState: function () {
    return { time: new Date() };
  },

  componentDidMount: function() {
    this.intervalId = setInterval(this.tick, 1000);
  },

  tick: function() {
    this.setState({ time: new Date() });
  },

  render: function () {
    return (
      <div className='clock'>
        <p>Time: { this.state.time.toTimeString() }</p>
        <p>Date: { this.state.time.toDateString() }</p>
      </div>
    );
  }
});

var Weather = React.createClass({
  getInitialState: function() {
    return { weather: null }
  },

  render: function() {
    var content = "";

    return (
      <div className="weather">
        {content}
      </div>
    )
  }
})

module.exports = {
  Clock: Clock,
  Weather: Weather
}
