'use strict'

var React = require('react');
var AuthorActions = require('../../actions/authorActions')
var AuthorStore = require('../../stores/authorStore')
var AuthorList = require('./authorList')
var Link = require('react-router').Link

var AuthorPage = React.createClass({
  getInitialState:function() {
    return {
      authors: AuthorStore.getAllAuthors()
    }
  },
  // no longer need didmount because store gives empty array or authors which are stored

  render: function() {
    return (
      <div>
        <AuthorList authors={this.state.authors} />
        <Link to="addAuthor">Add</Link>
      </div>
    )
  }
})

module.exports = AuthorPage;