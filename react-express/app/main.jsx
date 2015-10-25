var React = require('react/addons');

console.log("hello world");

var GroceryItemList = require('./components/GroceryItemList.jsx');
// app refers to global scope

var groceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = groceryItemStore.getItems();

function render() {
  React.render(<GroceryItemList items={initial}/>, app)
}

groceryItemStore.onChange(function(items) {
  initial= items;
  render()
})

render()