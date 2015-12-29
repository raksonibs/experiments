"use strict";

var React = require('react');
// smart level, passing data down to dumb data
var AuthorForm = require('./authorForm')

var ManageAuthorPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1> test</h1>
        <AuthorForm />
      </div>
    )
  }
})

module.exports = ManageAuthorPage