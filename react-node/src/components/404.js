"use strict";
var React = require('react');
var Link = require('react-router').Link

var notFound = React.createClass({
  render: function() {
    return (
      <div>
        <h1> Not Found </h1>
        <Link to="app">Go back </Link>
      </div>
    )
  }
})

module.exports = notFound;