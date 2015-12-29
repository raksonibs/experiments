"use strict";

var React = require('react');
// smart level, passing data down to dumb data
var AuthorForm = require('./authorForm')

var ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return (
      { author: { id: '', firstName: '', lastName: ''} }
    ) 
  },

  setAuthorState: function(event) {
    // called for every keypress
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author})
  },
  render: function() {
    return (
      <div>
        <h1> test</h1>
        <AuthorForm author={this.state.author} onChange={this.setAuthorState}/>
      </div>
    )
  }
})

module.exports = ManageAuthorPage