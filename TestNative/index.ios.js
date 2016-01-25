var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var Dimensions = require('Dimensions');

var Pizza              = require('./Pizza');
var CuttingInstruction = require('./CuttingInstruction');
var PeopleCountPicker  = require('./PeopleCountPicker');

class TestNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peopleCount: 4, text: "Input something here!"};
    this.setPeopleCount = this.setPeopleCount.bind(this);
    this.cuttingEdges = this.cuttingEdges.bind(this);
  }

  setPeopleCount(peopleCount) {
    this.setState({ peopleCount: peopleCount });
  }

  cuttingEdges() {
    return this.state.peopleCount * 2;
  }

  render() {
    return (
      <View style={styles.app}>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text> {this.state.text} </Text>
      </View>
    );
  }

  pizza() {
    return (
      <View style={styles.pizza}>
        <Pizza cuttingEdges={this.cuttingEdges()} />
      </View>
    );
  }

  cuttingInstruction() {
    return (
      <View style={styles.cuttingInstruction}>
        <CuttingInstruction
          cuttingEdges={this.cuttingEdges()}
          peopleCount={this.state.peopleCount}
        />
      </View>
    );
  }

  peoplePicker() {
    return (
      <View style={styles.peoplePickerWrapper}>
        <View style={styles.peoplePicker}>
          <PeopleCountPicker
            peopleCount={this.state.peopleCount}
            setPeopleCount={this.setPeopleCount}
          />
        </View>
      </View>
    );
  }
}

let screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#C41D47',
  },
  pizza: {
    alignSelf: 'center',
    marginTop: 40
  },
  inputText: {
    alignSelf: 'center',
    marginTop: 40,
    width: screenHeight * 0.35,
    height: screenHeight * 0.35,
    borderColor: 'gray', 
    borderWidth: 1
  },
  cuttingInstruction: {
    alignSelf: 'center',
    padding: 20,
    paddingTop: 0
  },
  peoplePickerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  peoplePicker: {
    height: 95,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  }
});

AppRegistry.registerComponent('TestNative', () => TestNative);