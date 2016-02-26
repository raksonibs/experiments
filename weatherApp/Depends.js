var React = require('react-native'); var {
  StyleSheet,
  Text,
  View
} = React;

var Video = require('react-native-video').default;

class Depends extends React.Component {
  render() {
    return (
        <Video 
          source={{uri: "cat"}}
          rate={1.0}
          volume={1.0}
          muted={false}
          paused={false} 
          resizeMode="cover"
          repeat={true} 
          style={styles.backgroundVideo} />
    )
  }
}

var styles = StyleSheet.create({ 
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

module.exports = Depends;
