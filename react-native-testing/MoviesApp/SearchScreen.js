'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
  View,
  StyleSheet,
} = React;

var SearchBar = require('./SearchBar.js');

var resultsCache = {
  dataForQuery: {},
  nextPageNumberForQuery: {},
  totalForQuery: {},
};

var SearchScreen = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
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
      <View style={styles.container}>
        <SearchBar
          isLoading={this.state.isLoading} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

module.exports = SearchScreen;
