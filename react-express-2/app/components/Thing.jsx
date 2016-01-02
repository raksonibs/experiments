import React from 'react';

class Thing extends React.Component {
    render() {
        return (
          <div className="list-item">
            {this.props.thing.name}: {this.props.thing.id}
          </div>
        );
    }
}

export default Thing;