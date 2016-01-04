import React from 'react';

module.exports = React.createClass({
  makeLoved: function(e) {
    e.preventDefault()
    console.log('cloicked?')
    debugger

  },
  render: function() {
        return (
          <div className="list-item">
            {this.props.thing.name}: {this.props.thing.id} is loved ({this.props.thing.loved})
            <button onClick={this.makeLoved}> Make Un/Loved</button>
          </div>
        );
    }
})