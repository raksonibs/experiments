var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session  = require('express-session');
var User = require('./models/User.js');
var Thing = require('./models/Thing.js');
var ReactDOMServer = require('react-dom/server')
require('babel-core/register');

var React = require("react")

var routes = require('./routes/index');
var users = require('./routes/users');

var app = new express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + "/../.tmp"))
app.listen(7777);

app.use(session({
    secret: 'cookie_secret',
    name: 'cookie_name',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

var initPassport = require('./passport/init');
initPassport(passport);

require('./routes/users.js')(app, passport);

require('./routes/things.js')(app);

app.get('/', function(req, res) {
    // virtual instance and serialize it
    GLOBAL.navigator = {
        userAgent: req.headers['user-agent']
    }
    var application = React.createFactory(require("../app/components/App.jsx"));
    var markup = ReactDOMServer.renderToString(application({}));
    res.render('./../app/index.ejs', {markup: markup})
})

if (app.get('env') === 'development') {
    console.log("connecting to local db");
    var db = "mongodb://localhost/myapp";
    mongoose.connect(db, function() {
        console.log("dropping local db to renew");
        mongoose.connection.db.dropDatabase();
        var users = [{
            email: "oskar",
            password: '123'
          }, { 
            email: "kacper", 
            password: '456' 
          }]

        var things = [{
          name: 'cat',
          loved: true
        }, {
          name: 'dogs', 
          loved: true
        },
        {
          name: 'ants',
          loved: false
        }]
      
        users.forEach(function(user) {
          new User(user).save()
        })

        console.log("Created Users")

        things.forEach(function(thing) {
          new Thing(thing).save()
        })

        console.log("Created Things")
    })   
} else {
    console.log("connecting to prod db");
    mongoose.connect(secrets.db);
}

mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});


app.set('port', process.env.PORT || 3005);

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port' + process.env.PORT)
  console.log('Express server listening on port ' + server.address().port);
});

