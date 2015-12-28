var React = require('react-native');

var {
  View,
  Text,
} = React;


var NowPlayingFooterView = React.createClass({
  render: function() {
    if (!this.props.nowPlaying) {
      return (
        <View style={styles.nowPlayingFooter}
      )
    }
  }
});

var styles = StyleSheet.create({
  
})

module.exports = NowPlayingFooterView;
