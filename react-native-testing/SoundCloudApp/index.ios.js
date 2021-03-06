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
  NavigatorIOS,
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
        <NavigatorIOS style={styles.navContainer}
          barTintColor='#F5FCFF'
          initialRoute={{
            title: 'React Native Music',
            component: BrowseTracksView
          }} />
        <NowPlayingFooterView nowPlaying={this.props.nowPlaying}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  navContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('SoundCloudApp', () => SoundCloudApp);
