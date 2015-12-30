"use strict";

var React = require('react');
// smart level, passing data down to dumb data
var AuthorForm = require('./authorForm')
var Router = require('react-router')
var AuthorApi = require('../../api/authorApi')
var toastr = require('toastr')

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  getInitialState: function() {
    return (
      { 
        author: { id: '', firstName: '', lastName: ''}, 
        errors: {} 
      }
    ) 
  },

  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};
    // since defined state should initailize it in intial state
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = "Blah blah"
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = "Blah blah lastname"
      formIsValid =  false
    }

    this.setState({errors: this.state.errors})

    return formIsValid
  },

  saveAuthor: function(event) {
    event.preventDefault();
    // don't want form to actually submit

    if (!this.authorFormIsValid()) {
      return;
    }

    AuthorApi.saveAuthor(this.state.author);
    toastr.success('Author saved!')
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
        <AuthorForm author={this.state.author} 
        onChange={this.setAuthorState} 
        onSave={this.saveAuthor}
        errors={this.state.errors}
        />
      </div>
    )
  }
})

module.exports = ManageAuthorPage