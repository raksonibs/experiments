var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

var Dimensions = require('Dimensions');

var ThingForm             = require('./ThingForm');
var ThingList             = require('./ThingList');
var APIHelper = require('./APIHelper')

var REQUEST_URL = 'http://localhost:3000/api/v1/today';

class TestNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = { things: [], text: "Input new thing here!"};
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
        this.setState({
            things: responseData.events
        });
    })
    .done();
  }

  render() {
    return (
      <View style={styles.app}>
        <Image source={require('image!pizza')} style={styles.image} />
        {this.thingform()}        
        {this.things()}
      </View>
    );
  }

  addThing(thing) {

  }

  things() {
    return  (
      <View style={styles.things}>
        <ThingList things={this.state.things} />
      </View>
    )
  }

  thingform() {
    return (
      <View style={styles.thingform}>
        <ThingForm text={this.state.text} addThing={this.addThing}/>
      </View>
    )
  }
}

let screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#C41D47'
  },
  inputText: {
    alignSelf: 'center',
    marginTop: 40,
    width: screenHeight * 0.05,
    height: screenHeight * 0.05,
    borderColor: 'gray', 
    borderWidth: 1
  },
  image: {
    width: screenHeight * 0.2,
    height: screenHeight * 0.2,
    alignSelf: 'center',
  },
  thingform: {
    alignSelf: 'center',
    marginTop: 40
  },
  things: {
    alignSelf: 'center',
    padding: 20,
    paddingTop: 0
  },
});

AppRegistry.registerComponent('TestNative', () => TestNative);