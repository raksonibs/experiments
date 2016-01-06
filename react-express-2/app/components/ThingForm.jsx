import React from 'react';
import APIHelper from '../helpers/APIHelper'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

module.exports = React.createClass({
  getInitialState: function() {
    return {input: ""};
  },
  handleInputName: function(e) {
    this.setState({input : e.target.value})
  },
  addThing: function(e) {
    e.preventDefault();
    let thing = {name: this.state.input, loved: 'false'}
    this.props.addThing(thing)

    this.setState({
      input: ''
    })
  },
  render: function() {
    return (
      <div className='things--add'>
          <TextField hintText={this.state.input || "Add a new One"} onChange={this.handleInputName}/>
          <RaisedButton secondary={true} onClick={this.addThing} label="Add Thing"/>
      </div>
    )
  }
})