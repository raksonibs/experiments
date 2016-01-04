import React from 'react';
import Thing from './Thing'

var ThingsList = React.createClass({
    render() {
      return (
        <div className="list">
         {this.props.things.map((thing, i) => {
            return <Thing delete={this.props.delete} thing={thing} key={i} />
          })}
       </div>
    );
  }
})

export default ThingsList;