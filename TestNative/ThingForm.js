'use strict'

let React = require('react-native');
let { StyleSheet, Image, TextInput } = React;
var Dimensions = require('Dimensions');

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: this.props.text};
  }

  addThing() {
    e.preventDefault();
    let thing = {name: this.state.input, loved: 'false'}
    this.props.addThing(thing)

    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <TextInput
        style={styles.image}
        onChangeText={(text) => this.setState({text})}
        value={this.props.text}
      />
    )
  }
}

let screenHeight = Dimensions.get('window').height;

let styles = StyleSheet.create({
  image: {
    width: screenHeight * 0.35,
    height: screenHeight * 0.35,
    borderColor: 'gray', 
    borderWidth: 1
  }
})

module.exports = ThingForm;