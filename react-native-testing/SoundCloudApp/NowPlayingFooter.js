var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
} = React;


var NowPlayingFooterView = React.createClass({
  render: function() {
    if (!this.props.nowPlaying) {
      return (
        <View style={styles.nowPlayingFooter}>
          <Text style={styles.trackTitle}>Welcome!</Text>
          <Text style={styles.trackArtist}>No Track Right Now</Text>
        </View>
      );
    }

    return (
      <View style={styles.nowPlayingFooter}>
        <Text style={styles.trackTitle}>{this.props.nowPlaying.title}</Text>
        <Text style={styles.trackArtist}>{this.props.nowPlaying.user.username}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  nowPlayingFooter: {
    flex: 0,
    borderTopWidth: 1,
  },
  trackTitle: {

  },
  trackArtist: {

  },
})

module.exports = NowPlayingFooterView;
