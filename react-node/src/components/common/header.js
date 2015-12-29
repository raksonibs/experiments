"use strict";

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1> Header </h1>
        <ul>
          <li><a href="/"> react</a> </li>
          <li><a href="/#about"> flux</a> </li>
          <li><a href="/#authors"> authors</a> </li>
        </ul>
      </div>
    );
  }
});

module.exports = Header;