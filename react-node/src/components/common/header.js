"use strict";

var React = require('react');
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1> Header </h1>
        <ul>
          <li><Link to="app"> react</Link> </li>
          <li><Link to="about"> about</Link> </li>
          <li><Link to="authors"> authors</Link> </li>
        </ul>
      </div>
    );
  }
});

module.exports = Header;