var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(app, passport) {
app.post('/login', function(req, res) {
  console.log(req.body.email)
  console.log(req.body.user)
  console.log(req.body)
  User.findOne({ 'email' :  req.body.email }, 
    function(err, user) {
        // In case of any error, return using the done method
        if (err)
            res.status(400).send()
        // email does not exist, log the error and redirect back
        if (!user){
            console.log('User Not Found with email '+req.body.email);
            res.status(400).send()               
        }
        // User exists but wrong password, log the error 
        if (!isValidPassword(user, req.body.password)){
            console.log('Invalid Password');
            res.status(400).send()
        }
        // User and password both match, return user from done method
        // which will be treated like success
        res.status(200).send()
    }
);
})
app.post('/signup', function(req, res) {
})

  var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }

}