import React from 'react';
import APIHelper from '../helpers/APIHelper'

module.exports = React.createClass({
  getInitialState: function() {
    return {input: ""};
  },
  handleInputName: function(e) {
    this.setState({input : e.target.value})
  },
  addThing: function(e) {
    e.preventDefault();
    let thing = {name: this.state.input}
    APIHelper.post('api/things', thing)
      .then(function(data) {
      console.log(data)      
    })

    this.setState({
      input: ''
    })
  },
  render: function() {
    return (
      <div className='things--add'>
        <form onSubmit={this.props.addThing}.bind(this) >
          <input value={this.state.input} onChange={this.handleInputName}/>
          <button onClick={this.addThing}> Add Thing </button>
        </form>
      </div>
    )
  }
})