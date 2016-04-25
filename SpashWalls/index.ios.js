/**
 * first render -> getDefaultProps -> getInitalState -> componenetQillMount -> render ->CompnentDidmount. get intial state substited by this.state in constructor
 But something odd is happening here: we are jumping back to the first image after the double-tap. This is because we’re modifying a state variable (isHudVisible) inside saveWallpaperToCameraRoll using this.setState(), which results in rerendering, and causes the swiper to reload data and start from the very first image.

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
  PanResponder,
  CameraRoll, 
  AlertIOS 
} from 'react-native';

import Utils, {
  distance,
  isDoubleTap
} from './Utils';

import Swiper from 'react-native-swiper';
import NetworkImage from 'react-native-image-progress';
import Progress from 'react-native-progress';
import ProgressHUD from './ProgressHud.js';
import RandManager from './RandManager.js';
var ShakeEvent = require('react-native-shake-event-ios');

var {width, height} = React.Dimensions.get('window');

class SpashWalls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wallsJson: [],
      isLoading: true,
      isHudVisible: false
    }

    this.imagePanResponder = {};
    this.prevTouchInfo = {
      prevTouchX: 0,
      prevTouchY: 0,
      prevTouchTimeStamp: 0
    };
    this.currentWallIndex = 0;
    // bind inside spashwall class not panresponder
    this.handlePanResponderGrant = this.handlePanResponderGrant.bind(this);
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
  }

  onMomentumScrollEnd(e, state, context) {
    this.currentWallIndex = state.index;
  }

  saveCurrentWallpaperToCameraRoll() {
   this.setState({isHudVisible: true});
   var {wallsJSON} = this.state;
   var currentWall = wallsJSON[this.currentWallIndex];
  var currentWallURL = `http://unsplash.it/${currentWall.width}/${currentWall.height}?image=${currentWall.id}`;

  CameraRoll.saveImageWithTag(currentWallURL, (data) => {
   this.setState({isHudVisible: false});
   AlertIOS.alert(
    'Saved',
    'Wallpaper successfully saved to Camera Roll',
    [
    {text: 'High 5!', onPress: () => console.log('OK Pressed!')}
    ]
    );
 },(err) =>{
  console.log('Error saving to camera roll', err);
});

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

initialize() {
  this.setState({
    wallsJSON: [],
    isLoading: true,
    isHudVisible: false
  });

  this.currentWallIndex = 0;
}

componentWillMount() {
  this.imagePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
    onPanResponderGrant: this.handlePanResponderGrant,
    onPanResponderRelease: this.handlePanResponderEnd,
    onPanResponderTerminate: this.handlePanResponderEnd
  });

  ShakeEvent.addEventListener('shake', () => {
    this.initialize();
    this.fetchWallsJSON();
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
        <View>
        <Swiper ...  index={this.currentWallIndex}> >
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
        <ProgressHUD width={width} height={height} isVisible={isHudVisible}/>
        </View>
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
