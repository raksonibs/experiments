var React = require('react-native'); var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var styles = require('./style');


var Mondrain = React.createClass({ 
render: function() { 
  return (
    <View style={styles.parent}>
      <View style={styles.topBlock}>
        <View style={styles.leftCol}>
          <View style={[styles.cellOne, styles.base]} />
          <View style={[styles.base, styles.cellTwo]} />
        </View>
        <View style={[styles.cellThree, styles.base]} />
      </View>
      <View style={styles.bottomBlock}>
        <View style={[styles.cellFour, styles.base]}/>
        <View style={[styles.cellFive, styles.base]}/>
        <View style={styles.bottomRight}>
      </View>
    </View>    
  ); 
}
});
module.exports = Mondrain;