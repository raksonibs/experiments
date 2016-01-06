var express = require('express');
var router = express.Router();
var Thing = require('../models/Thing');

module.exports = function(app) {

app.route('/api/things')
.get(function(req,res) {
    console.log('using this route')
    Thing.find({}, function(err, things) {
    if (err) return next(err)
    
    res.send(things);  
  });
  })
.post(function(req, res) {
  var thing = new Thing({
    name: req.body.name,
    loved: false
  })

  thing.save(function(err) {
    if (err) return next(err)

    res.status(300).send()
  })
})

app.route('/api/things/:id')
  .delete(function(req, res) {
    Thing.findOne({
      _id: req.params.id
    }).remove(function(x) {
      
    });
  })
  .patch(function(req, res) {
    console.log('test')
    Thing.findOne({
      _id: req.params.id
    }, function(error, thing) {
      if (error || thing === undefined) {
         res.status(500).send()
      } else {

        if (thing.loved === 'true') {        
          thing.loved = false 
        } else {
          thing.loved = true
        }


        thing.save()
        res.status(200).send()
      }
    })
  })

}