var express = require('express');
var ApiController = require('./routes/items.js');

var app = new express();

var parser = require('body-parser');

app.get('/', function(req, res) {
  res.render('./../app/index.ejs', {})
});

// function call which grabs the app
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

app.use('/api', ApiController);

app.use(express.static(__dirname + "/../.tmp"))
app.listen(7777);

module.exports = app;