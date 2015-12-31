var mongoose = require('mongoose');

var thingSchema = new mongoose.Schema({
  name: String,
  loved: String,
  id: String
});

module.exports = mongoose.model('Thing', thingSchema, "Things");
