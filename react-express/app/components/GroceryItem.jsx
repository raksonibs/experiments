var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
  delete: function(e) {
// prevents page from refreshing
    e.preventDefault()
    action.delete(this.props.item);
  },
  render: function() {
    return (
      <div>
      <form className="three columns" onSubmit={this.delete}>
        <button>&times;</button>
      </form>
        <div className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</div>      
      </div>
    )
    
  }
})