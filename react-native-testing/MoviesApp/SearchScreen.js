'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
  View,
  StyleSheet,
} = React;

var SearchBar = require('./SearchBar.js');

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
      <View style={styles.container}>
        <Text>This nigga</Text>
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
