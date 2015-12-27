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

var BrowseTracksView = require('./BrowseTracks.jsx');
var NowPlayingFooterView = require('./NowPlayingFooter.jsx');

var SoundCloudApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <BrowseTracksView />
        <NowPlayingFooterView />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

AppRegistry.registerComponent('SoundCloudApp', () => SoundCloudApp);
