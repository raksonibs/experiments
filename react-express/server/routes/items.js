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

app.route('/api/items/:id')
  .delete(function(req, res) {
    GroceryItem.findOne({
      _id: req.params.id
    }).remove(function(x) {
      
    });
  })
  .patch(function(req, res) {
    GroceryItem.findOne({
      _id: req.body._id
    }, function(error, item) {
      for (var key in req.body) {
        item[key] = req.body[key]
      }

      item.save()
      res.status(200).send()
    })
  })

}