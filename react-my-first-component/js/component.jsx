var React = require('react');
var ReactDOM = require('react-dom');

var ClickCounter = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },

  click: function(event){
    event.preventDefault();
    this.setState({count: this.state.count + 1});
  },

  render: function(){
    return (
      <div>
        <button onClick={this.click}>CLICK ME</button>
        <span>{this.state.count}</span>
      </div>

    // ex-JSX
    // React.createElement('div', {},
    //   React.createElement(
    //     'button',
    //     { onClick: this.click },
    //     "CLICK ME"
    //   ),
    //   React.createElement('span', {}, this.state.count)
    // )
   );
  }
});

ReactDOM.render(
  React.createElement(ClickCounter, {}, ""),
  document.getElementById('my-component')
);
//
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );
