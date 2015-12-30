'use strict'

var React = require('react');
var Link = require('react-router').Link;

var AuthorList = React.createClass({

  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName}</td>
        </tr>
      )
    };
    return(
      <div>
        <h1> Authors </h1>
        <table className="table">
          <thead>
          <th> Id </th>
          <th> Name </th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = AuthorList;