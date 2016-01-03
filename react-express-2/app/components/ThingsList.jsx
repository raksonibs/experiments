import React from 'react';
import Thing from './Thing'

class ThingsList extends React.Component {
    render() {
      return (
        <div className="list">
         {this.props.things.map((thing, i) => {
            return <Thing thing={thing} key={i} onClick={this.props.makeLoved}/>
          })}
       </div>
    );
  }
}

export default ThingsList;