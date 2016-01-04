import React from 'react';
import APIHelper from '../helpers/APIHelper'

module.exports = React.createClass({
  makeLoved: function(e) {
    e.preventDefault()
    let thingId = this.props.thing._id
    let url = 'api/things/' + thingId
    APIHelper.update(url)
    .then(function(data) {
      console.log('completed Call!')      
    })
    if (this.props.thing.loved === 'false') {
      this.props.thing.loved = 'true'
    } else {      
      this.props.thing.loved = 'false'
    }

    console.log(this.props.thing.loved)
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