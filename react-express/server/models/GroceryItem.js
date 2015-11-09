var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  name: String,
  purchased: String
});

module.exports = mongoose.model('GroceryItem', taskSchema);
