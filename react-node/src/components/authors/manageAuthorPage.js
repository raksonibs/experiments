"use strict";

var React = require('react');
// smart level, passing data down to dumb data
var AuthorForm = require('./authorForm')
var Router = require('react-router')
var AuthorApi = require('../../api/authorApi')

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  getInitialState: function() {
    return (
      { author: { id: '', firstName: '', lastName: ''} }
    ) 
  },

  saveAuthor: function(event) {
    event.preventDefault();
    // don't want form to actually submit
    AuthorApi.saveAuthor(this.state.author);
    // mixin makes this possible
    this.transitionTo('authors')
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
        <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor}/>
      </div>
    )
  }
})

module.exports = ManageAuthorPage