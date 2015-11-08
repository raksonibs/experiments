var express = require('express');
var router = express.Router();

module.exports = function(app) {
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

app.route('/api/items')
.get(function(req,res) {
    console.log('using this route')
    res.send(items)
  })
.post(function(req, res) {
  var gitem = new GroceryItem({
    name: req.body.name,
    purchased: false
  })

  gitem.save(function(err) {
    if (err) return next(err)

    res.json(gitem)
  })
})

}