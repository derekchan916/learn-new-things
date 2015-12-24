'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
} = React;

var SearchScreen = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      isLoadingTail: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      filter: '',
      queryNumber: 0,
    };
  },

  render: function() {
    return (
      <Text>
        Are yoiu serious
      </Text>
    );
  }
});

module.exports = SearchScreen;
