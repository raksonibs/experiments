var express = require('express');
var router = express.Router();


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

router.get('/items', function(req,res) {
    res.send(items)
  })

module.exports = router;