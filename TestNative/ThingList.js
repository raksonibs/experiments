var React = require('react-native');
import Thing from './Thing'
var {
  View
} = React;

class ThingList extends React.Component {
    render() {
      return (
        <View className="list">
         {this.props.things.map((thing, i) => {
            return <Thing delete={this.props.delete} update={this.props.update} thing={thing} key={i} />
          })}
       </View>
    );
  }
}

module.exports = ThingList;