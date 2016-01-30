'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;


class SearchPage extends Component {
  render() {
    return (
      <View style={styles.flowRight}>
        <TextInput
        style={styles.searchInput}
        placeholder='Search via name or postcode'/>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Go</Text>
        </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button}
        underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
      </View
    );
  }
}

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

module.exports = SearchPage;
