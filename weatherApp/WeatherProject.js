var React = require('react-native'); var {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

var Forecast = require('./Forecast');

var styles = StyleSheet.create({ bold: {
      fontWeight: "bold"
  },
  italic: {
      fontStyle: "italic"
} });

var Strong = React.createClass({ 
  render: function() {
    return (
      <Text style={styles.bold}>
        {this.props.children} 
      </Text>
    );
  } 
});

var Em = React.createClass({ 
  render: function() {
    return (
      <Text style={styles.italic}>
        {this.props.children} 
      </Text>
    );
  } 
});

// <Text>
//   The quick <Em>brown</Em> fox jumped
//   over the lazy <Strong>dog</Strong>.
// </Text>
// <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
//            style={{width: 400, height: 400}} />



var WeatherProject = React.createClass({
  getInitialState() {
    return ({ 
      zip: '',
      forecast: null
    });
  },

  _handleTextChange(event) {
    let zip =  event.nativeEvent.text
    this.setState({
      zip: zip
    }); 

    let string = 'http://api.openweathermap.org/data/2.5/weather?q='+zip+'&APPID=5cc3c4d3c6d5565b53abb4ba17ba595c'

    console.log(string)

    fetch(string)
    .then((response) => response.json())
    .then((responseJSON) => {
      this.setState({
        forecast: {
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.main.temp,
        }
      })
    })
    .catch((error) => {
      console.warn(error)
    })
  },

  render() { 
    var content = null;

    if (this.state.forecast !== null) {
      content = <Forecast
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp} />
    }
    return (
      <View style={styles.container}>
         <Image source={require('./img/flowers.jpg')}
             resizeMode='cover'
             style={styles.backdrop}>
           <View style={styles.overlay}>
             <View style={styles.row}>
               <Text style={styles.mainText}>
                   Current weather for 
                </Text>

               <View style={styles.zipContainer}>
                 <TextInput
                  style={[styles.zipCode, styles.mainText]} 
                  returnKeyType='go' 
                  onSubmitEditing={this._handleTextChange}/>
               </View>
             </View>
         {content}
        </View>
      </Image>
    </View>
    ); 
  }
});

var baseFontSize = 16

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  }, row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  }, 
  zipCode: {
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});


module.exports = WeatherProject;