'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ListView,
  NavigatorIOS,
  StyleSheet,
  View,
  Text,
} = React;

var mockedData = var mockedData = [
  {
    genre: "Deep House",
    title: "Coffee (Manhattoes Remix)",
    user:  { username: "manhattoes" },
    artwork_url: "https://i1.sndcdn.com/artworks-000107004661-v4xg0d-large.jpg",
    stream_url: "https://api.soundcloud.com/tracks/191554493/stream"
  },
  {
    genre: "Bass",
    title: "Threadsafe",
    user: { username: "manhattoes" },
    artwork_url: "https://i1.sndcdn.com/artworks-000104588970-5kyi09-large.jpg",
    stream_url: "https://api.soundcloud.com/tracks/187885871/stream"
  }
];

var BrowseTracksView = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2.
      }).cloneWithRows(mockedData)
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData : function() {
    this.setData({
      dataSource: this.state.dataSource.cloneWithRows(MockData)
    })
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTrack}
        style={style.ListView} />
    );
  }
});

module.exports = BrowseTracksView;
