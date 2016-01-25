var React = require('react-native');
import Thing from './Thing'

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

export default ThingList;