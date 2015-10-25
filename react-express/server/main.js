var express = require('express');
var ApiController = require('./routes/items.js');

var router = express.Router();

var app = new express();

var parser = require('body-parser');

app.get('/', function(req, res) {
  res.render('./../app/index.ejs', {})
})

var items = [{
    name: 'Iceream'
  },
  {
    name: 'Apple',
    purchased: true
  },
  {
    name: 'Snarks'
}];

app.use(express.static(__dirname + "/../.tmp"))
app.listen(7777);

// require('./route/items.js')(app);

app.route('/api/items')
.get(function(req,res) {
    res.send(items)
  })

app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})

app.get('/test', function(req, res) {
  res.send('Hello World!');
})
// function call which grabs the app
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));




