var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler 
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated())
    return next();
  // if the user is not authenticated then redirect him to the login page
  res.redirect('/');
}

module.exports = function(app, passport){

  /* GET login page. */
  router.get('/', function(req, res) {
      // Display the Login page with any flash message, if any
    res.status(200).send()
  });

  /* Handle Login POST */
  router.post('/login', passport.authenticate('login', {
   
  })

  // res.status(200).send()

  );

  /* GET Registration Page */
  router.get('/signup', function(req, res){
    
  });

  /* Handle Registration POST */
  router.post('/signup', passport.authenticate('signup', { 
  })
    // res.status(200).send()
  );

  /* GET Home Page */

  /* Handle Logout */
  router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
}