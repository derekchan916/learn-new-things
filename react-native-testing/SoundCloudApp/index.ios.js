/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var BrowseTracksView = require('./BrowseTracks.js');
var NowPlayingFooterView = require('./NowPlayingFooter.js')


var SoundCloudApp = React.createClass({
  getInitialState: function() {
    return {
      nowPlaying: null
    }
  },

  render: function() {
    return (
      <View style={styles.appContainer}>
        <BrowseTracksView />
        <NowPlayingFooterView nowPlaying={this.state.nowPlaying}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
  },
});

AppRegistry.registerComponent('SoundCloudApp', () => SoundCloudApp);
