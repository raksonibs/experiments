var express = require('express');
var router = express.Router();

module.exports = function(app) {
  var items = [{
    name: 'Iceream'
  },
  {
    name: 'Apple',
    purchased: true
  },
  {
    name: 'Snarks'
}];

app.route('/api/items')
.get(function(req,res) {
    res.send(items)
  })

}