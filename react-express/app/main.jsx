var React = require('react/addons');

console.log("hello world");


var GroceryItemList = require('./components/GroceryItemList.jsx');
// app refers to global scope
React.render(<GroceryItemList />, app)