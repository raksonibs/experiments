var mongoose = require('mongoose');

var groceryItemSchema = new mongoose.Schema({
  name: String,
  purchased: String,
  id: String
});

module.exports = mongoose.model('GroceryItem', groceryItemSchema, "groceryItems");
