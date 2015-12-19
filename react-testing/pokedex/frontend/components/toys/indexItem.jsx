var React = require('react');
var History = require('react-router').History;

Module.exports = function() {
  mixins: [History],

  showDetail: function() {
    var url = '/pokemon/' + this.props.toys.pokemon_id + '/toys/' + this.props.toys.id;
    this.history.pushState(null, url, {});
  },

  render: function() {
    var attrs = ['name', 'happiness', 'price'].map(function (attr) {
      return <p key={attr}>{attr}: {this.props.toy[attr]}</p>;
    }.bind(this));

    return (
      <li onClick={this.showDetail} className="toy-list-itme">
        {attrs}
      </li>
    );
  }
}
