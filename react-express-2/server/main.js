var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('../routes/index');
var users = require('../routes/users');

var app = new express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + "/../dist"))

require('../routes/things.js')(app);

app.get('/', function(req, res) {
  // res.render('./../app/index.ejs', {})
  // virtual instance and serialize it
  
    res.render('./../app/index.ejs',{})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

if (app.get('env') === 'development') {
    console.log("connecting to local db");
    var db = "mongodb://localhost/myapp";
    mongoose.connect(db, function() {
        // console.log("dropping local db to renew");
        // mongoose.connection.db.dropDatabase();
    })   
} else {
    console.log("connecting to prod db");
    mongoose.connect(secrets.db);
}

mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});
