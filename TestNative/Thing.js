var React = require('react-native');

var {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback 
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
               Could be loved. Right now it is {this.props.thing.loved}
            </Text>
            <View>
              <TouchableElement              
                onPress={this.makeLoved.bind(this)}>
                <View>
                  <Text>Make Loved!</Text>
                </View>
              </TouchableElement>
              <TouchableElement              
                onPress={this.delete.bind(this)}>
                <View>
                  <Text>Delete!</Text>
                </View>
              </TouchableElement>                
            </View>
          </View>
        );
    }
}

export default Thing;

