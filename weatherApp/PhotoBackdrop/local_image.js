var React = require('react-native'); var { Image } = React;
var styles = require('./styles.js');
var PhotoBackdrop = React.createClass({ render() {
return (
  <Image
style={styles.backdrop} source={require('../img/flowers.jpg')} resizeMode='cover'> {this.props.children}
</Image> );
} });

module.exports = PhotoBackdrop;