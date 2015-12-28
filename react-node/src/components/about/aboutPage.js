"use strict";

var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1> About </h1>
        <ul>
          <li> react </li>
          <li> flux </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;