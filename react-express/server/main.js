var express = require('express');
var ApiController = require('./routes/items.js');

var router = express.Router();

var app = new express();

var parser = require('body-parser');
require('./routes/items.js')(app);

app.get('/', function(req, res) {
  res.render('./../app/index.ejs', {})
})

app.use(express.static(__dirname + "/../.tmp"))
app.listen(7777);

app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})

// function call which grabs the app
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));




