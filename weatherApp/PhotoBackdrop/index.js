var React = require('react-native'); var {
Image,
ImagePickerIOS,
CameraRoll
} = React;
var styles = require('./styles.js');
var Button = require('./../Button');
var PhotoBackdrop = React.createClass({ 
  getInitialState() {
    return {
      photoSource: require('../img/flowers.jpg')
    } 
  },
  _pickImage() {
    ImagePickerIOS.openCameraDialog(
      {},
      (data) => {
        this.setState({ 
          photoSource: {uri: data}
        }) 
      },
      ()=>{
        console.log('User canceled the action');
      }
    ) 
  },

  render() { 
    return ( 
      <Image
        style={styles.backdrop}
        source={ this.state.photoSource } 
        resizeMode='cover'> 
        {this.props.children}
        <Button
          style={styles.button} 
          label="Load Image" 
          onPress={this._pickImage}
        />
      </Image>
    )
  }
});

module.exports = PhotoBackdrop;