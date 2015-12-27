'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
  View,
  StyleSheet,
} = React;

var SearchBar = require('./SearchBar.js');
var TimerMixin = require('react-timer-mixin');

var resultsCache = {
  dataForQuery: {},
  nextPageNumberForQuery: {},
  totalForQuery: {},
};

var SearchScreen = React.createClass({
  mixins: [TimerMixin],
  timeoutID: (null: any),

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

  onSearchChange: function(event: Object) {
    var filter = event.nativeEvent.text.toLowerCase();

    this.clearTimeout(this.timeoutID);
    this.timeoutID = this.setTimeout(() => this.searchMovies(filter), 100)
  },

  searchMovies: function(filter) {
    this.timeoutID = null;

    console.log("awww snap")
  },

  render: function() {
    return (
      <View style={styles.container}>
        <SearchBar
          onSearchChange={this.onSearchChange}
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
