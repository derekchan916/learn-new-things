'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ListView,
  NavigatorIOS,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} = React;

var TimerMixin = require('react-timer-mixin')

var SOUNDCLOUD_CLIENT_ID = 'df29e29195ea771102e4aa8d6c20b23d';
var SOUNDCLOUD_CLIENT_SECRET = 'f1917164abef1002f7f1a8b6005bf438';

var BrowseTracksView = React.createClass({
  mixins: [TimerMixin],
  timeoutID: (null: any),

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function(query) {
    var queryString = '';
    if (query) {
      queryString = '&q=' + query
    }
    fetch(this.fetchEndpoint + queryString)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        })
      })
      .catch((error) => {
        console.warn(error);
      })
      .done();
  },

  fetchEndpoint: 'http://api.soundcloud.com/tracks.json?client_id=' + SOUNDCLOUD_CLIENT_ID,

  onSearchChange: function(event) {
    var q = event.nativeEvent.text.toLowerCase();
    this.clearTimeout(this.timeoutID);
    this.timeoutID = this.setTimeout(() => this.fetchData(q), 100)
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTrack}
        renderHeader={this.renderSearchBar}
        style={styles.listView} />
    );
  },

  renderTrack: function(track) {
    return (
      <TrackCell track={track} />
    )
  },

  renderSearchBar: function() {
    return (
      <View style={styles.searchCell}>
        <TextInput
          onChange={this.onSearchChange}
          placeholder={'Search Here'}
          style={styles.searchContainer} />
      </View>
    )
  }
});

var TrackCell = React.createClass({
  render: function() {
    return (
      <View style={styles.trackCell}>
        <Image
          source={{uri: this.props.track.artwork_url}}
          style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.trackTitle}>
            {this.props.track.title}
          </Text>
          <Text style={styles.trackArtist}>
            {this.props.track.user.username}
          </Text>
        </View>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  listView: {
    backgroundColor: '#F5FCFF',
  },
  trackCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 4,
    padding: 4,
    borderBottomWidth: .5,
    borderColor: 'lightgray',
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  rightContainer: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  trackArtist: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: 'center',
  },
  searchCell: {
    flex: 1,
    flexDirection: 'row',
  },
  searchContainer: {
    height: 40,
    width: 100,
    flex: 1,
    margin: 4,
    padding: 4,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1
  },
})

module.exports = BrowseTracksView;
