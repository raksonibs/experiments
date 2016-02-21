var React = require('react-native'); var {
  StyleSheet,
  Text,
  View,
} = React;
var Switch = require('./Switch');
// React automatically picks switch.ios or switch.android based on implementation
var CrossPlatform = React.createClass({ 
  getInitialState() {
    return {val: false}; 
  },
  _onValueChange(val) { 
    this.setState({val: val});
  },
render: function() {
    var colorClass = this.state.val ? styles.blueContainer : styles.redContainer; 
    // color switch to declare mutliple styles
    return (
      <View style={[styles.container, colorClass]}>
        <Text style={styles.welcome}>
          Make me blue!
        </Text>
      <Switch onValueChange={this._onValueChange}/> 
    </View>
  ); 
  }
});
// conditional styling if button touched
// [styles.button, this.state.touching && styles.highlight]
// this.props.sryle override default props if necessary
// <Text style={[myStyles.text, this.props.style]}>
var styles = StyleSheet.create({ container: {
  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueContainer: {
    backgroundColor: '#5555FF'
  },
  redContainer: {
    backgroundColor: '#FF5555'
}, welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
} });
module.exports = CrossPlatform;