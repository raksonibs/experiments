"use strict";

var React = require('react');
// smart level, passing data down to dumb data
var AuthorForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" name="firstName" placeholder="firstname" ref="firstName" value={this.props.author.firstName} onChange={this.props.onChange} /><br />
        <input type="text"  placeholder="lastname" name="lastName" ref="lastName" value={this.props.author.lastName} onChange={this.props.onChange} /><br />
        <br />
        <input type="submit" value="save" />
      </form>
    )
  }
})

module.exports = AuthorForm