var express = require('express');
var router = express.Router();
var User = require('../models/User');

module.exports = function(app, passport) {
app.get('/login', function(req, res) {
})
app.get('/signup', function(req, res) {
})

app.route('/api/users')
.get(function(req,res) {
    console.log('using this route')
    User.find({}, function(err, users) {
    if (err) return next(err)
    
    res.send(users);  
  });
  })
.post(function(req, res) {
  var user = new User({
    name: req.body.name,
    loved: false
  })

  user.save(function(err) {
    if (err) return next(err)

    res.status(300).send()
  })
})

app.route('/api/users/:id')
  .delete(function(req, res) {
    User.findOne({
      _id: req.params.id
    }).remove(function(x) {
      
    });
  })
  .patch(function(req, res) {
    console.log('test')
    User.findOne({
      _id: req.params.id
    }, function(error, user) {
      if (error || user === undefined) {
         res.status(500).send()
      } else {

        if (user.loved === 'true') {        
          user.loved = false 
        } else {
          user.loved = true
        }


        user.save()
        res.status(200).send()
      }
    })
  })

}