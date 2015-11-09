var express = require('express');
var router = express.Router();
var GroceryItem = require('../models/GroceryItem');

module.exports = function(app) {

app.route('/api/items')
.get(function(req,res) {
    console.log('using this route')
    GroceryItem.find({}, function(err, items) {
    if (err) return next(err)
    
    res.send(items);  
  });
  })
.post(function(req, res) {
  var gitem = new GroceryItem({
    name: req.body.name,
    purchased: false
  })

  gitem.save(function(err) {
    if (err) return next(err)

    res.status(300).send()
  })
})

}