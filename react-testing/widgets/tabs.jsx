var React = require('react');

var Headers = React.createClass({
  render: function() {
    var selected = this.props.selectedPane;
    var that = this;
    var headers = this.props.panes.map(function (pane, index) {
      var title = pane.title;
      var klass = ""
      if (index === selected) {
        klass = "active"
      }

      return (
        <span
          key={ index }
          className={klass}
          onClick={that.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </span>
      );
    })
  }
});

module.exports = Tabs;
