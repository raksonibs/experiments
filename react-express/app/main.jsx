var React = require('react/addons');

console.log("hello world");

var GroceryItemList = require('./components/GroceryItemList.jsx');
// app refers to global scope

var initial =[{
  name: 'Iceream'
},
{
  name: 'Apple',
  purchased: true
},
{
  name: 'Snarks'
}];


React.render(<GroceryItemList items={initial}/>, app)