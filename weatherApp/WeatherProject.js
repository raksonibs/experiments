var React = require('react-native'); var {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;


var WeatherProject = React.createClass({
  getInitialState() {
    return ({ 
      zip: ''
    });
  },

  _handleTextChange(event) {
    this.setState({
      zip: event.nativeEvent.text
    }); 
  },

  render() { 
    return (
      <View style={styles.container}> 
        <Text style={styles.welcome}> You input {this.state.zip}.</Text>
        <TextInput
        style={styles.input}
        onSubmitEditing={this._handleTextChange}/> 
      </View>
      ); 
    }
});

var styles = StyleSheet.create({ container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
}, welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
}, input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
    }
});
module.exports = WeatherProject;