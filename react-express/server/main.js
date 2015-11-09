var express = require('express');
var ApiController = require('./routes/items.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

if (process.env.HOME === '/Users/oskarniburski') {
  console.log("connecting to local db");
  var db = "mongodb://localhost/myapp";
  mongoose.connect(db);
} else {
  console.log("connecting to prod db");
  mongoose.connect(secrets.db);
}

mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

var router = express.Router();

var app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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




