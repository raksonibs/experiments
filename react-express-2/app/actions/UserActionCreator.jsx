var dispatcher = require('./../dispatcher/dispatcher.js');

module.exports = {
  login:function(user) {
    dispatcher.dispatch({
      payload: user,
      type:"user:login"
    })
  },
  signup: function(user) {
    dispatcher.dispatch({
      payload: user,
      type:"user:signup"
    })
  }
}