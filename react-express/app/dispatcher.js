var guid = require('guid');
var listeners = {};

// register passed a callback
module.exports = {

  register: function(cb) {
    var id = guid.raw();
    listeners[id] = callback;
    return id;
  },
  dispatch: function(payload) {
    console.info("Dispatching...", paylod);
    for (var id in listeners) {
      var listener = listeners[id];
      listener(payload)
    }
  }
}