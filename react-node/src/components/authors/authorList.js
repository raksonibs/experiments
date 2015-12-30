'use strict'

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr')
var AuthorActions = require('../../actions/authorActions')

var AuthorList = React.createClass({

  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  // should delete author be in parent to this. depends on reusability to pass down via props
  deleteAuthor: function(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id)
    toastr.success('Author Deleted')
  },

  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
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
          <th></th>
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