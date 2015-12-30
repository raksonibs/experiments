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

  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange)
  },

  componentWillUnMount: function() {
    AuthorStore.removeChangeListener(this._onChange)
  },
  // not done on manague author page because page transitions to new page gettinga  fresh state from initial state

  _onChange: function() {
    // called whenever store componenet changes
    this.setState({ authors: AuthorStore.getAllAuthors()})
  },

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