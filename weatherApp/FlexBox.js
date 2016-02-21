var React = require('react-native'); var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var styles = StyleSheet.create({ parent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30,
        alignItems: 'flex-end'
}, child: {
        flex: 1,
        borderColor: '#AA0099',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
} });

var FlexBox = React.createClass({ 
render: function() { 
  return (
    <View style={styles.parent}>
      <Text style={styles.child}> Child One </Text>
      <Text style={styles.child}> Child Two </Text>
      <Text style={styles.child}> Child Three </Text>
    </View>    
  ); 
}
});
module.exports = FlexBox;