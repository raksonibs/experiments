"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!confirm("Are you sure you want this page")) {
        transition.about();
      } else {
        // allows transition to occur
        callback()
      }
    },
    willTransitionFrom: function(transition, component) {
      if (!confirm("Are you sure you want leave this page")) {
        transition.about();
      }
    }
  },
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