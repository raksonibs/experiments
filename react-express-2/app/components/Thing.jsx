import React from 'react';

class Thing extends React.Component {
    render() {
        return (
          <div className="list-item">
            {this.props.thing.name}: {this.props.thing.id} is loved ({this.props.thing.loved})
            <button onClick={this.props.onClick(this.props.thing.id)}> Make Un/Loved</button>
          </div>
        );
    }
}

export default Thing;