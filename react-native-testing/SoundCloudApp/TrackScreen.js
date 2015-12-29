var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} = React;

var TrackScreen = React.createClass({
  render: function() {
    var largeImageUrl = this.props.track.artwork_url ? this.props.track.artwork_url.replace('-large', '-t300x300') : '';
    return (
      <View style={styles.trackScreen}>
        <Image
          style={styles.largeArtwork}
          source={{uri: largeImageUrl}}>
        </Image>
        <Text style={styles.trackTitle}>{this.props.track.title}</Text>
        <Text style={styles.trackArtist}>{this.props.track.user.username}</Text>
        <View style={styles.buttonRow}>
          <TouchableHighlight style={styles.playButton}>
            <Text style={styles.playButtonText}>Play Track</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  trackScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  largeArtwork: {
    width: 300,
    height: 300,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  playButton: {
    backgroundColor: '#4472B9',
    margin: 4,
    padding: 4,
    borderRadius: 4,
    flex: 1,
  },
  playButtonText: {
    color: 'white',
    fontSize: 20,
  },
})

module.exports = TrackScreen;
