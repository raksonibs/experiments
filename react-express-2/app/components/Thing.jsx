import React from 'react';

module.exports = React.createClass({
  makeLoved: function(e) {
    e.preventDefault()
    this.props.update(this.props.thing)
  },
  delete: function(e) {
    e.preventDefault()
    this.props.delete(this.props.thing)
  },
  render: function() {
        return (
          <div className="list-item">
            {this.props.thing.name}: {this.props.thing._id} is loved ({this.props.thing.loved})
            <button onClick={this.makeLoved}> Make Un/Loved</button>
            <button onClick={this.delete}> Delete</button>
          </div>
        );
    }
})