"use strict";

var React = require('react');
var Input = require('../common/textInput')
// smart level, passing data down to dumb data
var AuthorForm = React.createClass({
  render: function() {
    return (
      <form>
        <Input name="firstName" label="First Name" value={this.props.author.firstName} onChange={this.props.onChange} errors={this.props.errors.firstName}/><br />
        <Input name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} errors={this.props.errors.lastName}/>
        <br />
        <input type="submit" value="save" onClick={this.props.onSave} />
      </form>
    )
  }
})

module.exports = AuthorForm