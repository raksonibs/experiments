var React = require('react-native')
var {Image, CameraRoll} = React 
// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'http://posttestserver.com/post.php');
// var formdata = new FormData();
// formdata.append('image', {...this.state.photo, name: 'image.jpg'}); xhr.send(formdata);
// basic posting of image
var Photo = React.createCLass({
  getInitialState() {
    return {
      photoSource: null
    }
  },

  componentDidMount() {
    CameraRoll.getPhotos(
      {first: 5},
      (data) => {
        this.setState({
          photoSource: {uri: data.edges[3].node.image.uri}
        })
      },
      (error) => {
        console.warn(error)
      }
    )
  },

  render() {
    return (
      <Image
        source={this.state.photoSource}
        resizeMode='cover'>
        {this.props.children}
      </Image>
      
    )
  }
})

module.exports = PhotoBackdrop;