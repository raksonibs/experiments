"use strict";

var React = require('react');
// smart level, passing data down to dumb data
var AuthorForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" name="firstName" placeholder="firstname" ref="firstName" value="" /><br />
        <input type="text"  placeholder="lastname" name="lastName" ref="firstName" value="" /><br />
        <br />
        <input type="submit" value="save" />
      </form>
    )
  }
})

module.exports = AuthorForm