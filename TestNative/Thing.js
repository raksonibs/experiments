var React = require('react-native');

var {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Text,
  TouchableElement
} = React;

class Thing extends React.Component {
  makeLoved() {
    this.props.update(this.props.thing)
  }
  delete() {
    this.props.delete(this.props.thing)
  }
  render() {
        return (
          <View className="list-item">
            <Text>
              {this.props.thing.name}
            </Text>
          </View>
        );
    }
}

module.exports = Thing;

