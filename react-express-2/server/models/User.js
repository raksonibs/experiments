var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  id: String
});

module.exports = mongoose.model('User', userSchema, "Users");
