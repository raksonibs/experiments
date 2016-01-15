var dispatcher = require('./../dispatcher/appDispatcher.js');

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