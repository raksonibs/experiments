/**
 * first render -> getDefaultProps -> getInitalState -> componenetQillMount -> render ->CompnentDidmount. get intial state substited by this.state in constructor
 */
 const NUM_WALLPAPERS = 5;
const DOUBLE_TAP_DELAY = 300; // milliseconds
const DOUBLE_TAP_RADIUS = 20;

 import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
  Dimensions,
  PanResponder
} from 'react-native';

import Utils, {
  distance,
  isDoubleTap
} from './Utils';

import Swiper from 'react-native-swiper';
import NetworkImage from 'react-native-image-progress';
import Progress from 'react-native-progress';

import RandManager from './RandManager.js';

var {width, height} = React.Dimensions.get('window');

class SpashWalls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wallsJson: [],
      isLoading: true
    }

    this.imagePanResponder = {};
    this.prevTouchInfo = {
      prevTouchX: 0,
      prevTouchY: 0,
      prevTouchTimeStamp: 0
    };
    // bind inside spashwall class not panresponder
    this.handlePanResponderGrant = this.handlePanResponderGrant.bind(this);
  }

  componentDidMount() {
    this.fetchWallsJSON();
  }

  handleStartShouldSetPanResponder(e, gestureState) {
    return true;
}

handlePanResponderGrant(e, gestureState) {
  console.log('Finger touched the image');
  var currentTouchTimeStamp = Date.now();

  if( this.isDoubleTap(currentTouchTimeStamp, gestureState) ) 
    this.saveCurrentWallpaperToCameraRoll();

  this.prevTouchInfo = {
    prevTouchX: gestureState.x0,
    prevTouchY: gestureState.y0,
    prevTouchTimeStamp: currentTouchTimeStamp
  };
}

handlePanResponderEnd(e, gestureState) {
  console.log('Finger pulled up from the image');
}

  componentWillMount() {
    this.imagePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
  }

  fetchWallsJSON() {
   var url = 'http://unsplash.it/list';
   fetch(url)
   .then( response => response.json() )
   .then( jsonData => {
    console.log(jsonData);
    var randomIds = RandManager.uniqueRandomNumbers(NUM_WALLPAPERS, 0, jsonData.length);
    var walls = [];
    randomIds.forEach(randomId => {
      walls.push(jsonData[randomId]);
    });

    this.setState({
      isLoading: false,
      wallsJSON: [].concat(walls)
    });
  })
   .catch( error => console.log('Fetch error ' + error) );
 }

 renderLoadingMessage() {
  return (

   <View style={styles.loadingContainer}>
   <ActivityIndicatorIOS
   animating={true}
   color={'#fff'}
   size={'small'} 
   style={{margin: 15}} />
   <Text style={{color: '#fff'}}>Contacting Unsplash</Text>

   </View>
   );
}

renderResults() {
  return (

    var {wallsJSON, isLoading} = this.state;
    if( !isLoading ) {
      return (
        <Swiper ... >
          {wallsJSON.map((wallpaper, index) => {
            return(
              <View key={index}>
                <NetworkImage
                  source={{uri: `https://unsplash.it/${wallpaper.width}/${wallpaper.height}?image=${wallpaper.id}`}}
                  indicator={Progress.Circle}
                  style={styles.wallpaperImage}>
                  <Text style={styles.label}>Photo by</Text>
                  <Text style={styles.label_authorName}>{wallpaper.author}</Text>
                  {...this.imagePanResponder.panHandlers}
                </NetworkImage>
              </View>            
            );
          })}
        </Swiper>
        );
    }

    render() {
      var {isLoading} = this.state;
      if(isLoading)
        return this.renderLoadingMessage();
      else
        return this.renderResults();
    }
  }

  const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000'
    },
    wallpaperImage: {
      flex: 1,
      width: width,
      height: height,
      backgroundColor: ‘#000’
    },
    label: {
  position: 'absolute',
  color: '#fff',
  fontSize: 13,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: 2,
  paddingLeft: 5,
  top: 20,
  left: 20,
  width: width/2
},
label_authorName: {
  position: 'absolute',
  color: '#fff',
  fontSize: 15,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: 2,
  paddingLeft: 5,
  top: 41,
  left: 20,
  fontWeight: 'bold',
  width: width/2
}
  });

  AppRegistry.registerComponent('SpashWalls', () => SpashWalls);
