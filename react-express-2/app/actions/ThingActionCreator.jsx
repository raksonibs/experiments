var dispatcher = require('./../dispatcher/dispatcher.js');

module.exports = {
  add:function(thing) {
    dispatcher.dispatch({
      payload: thing,
      type:"thing:add"
    })
  },
  love: function(thing) {
    dispatcher.dispatch({
      payload: thing,
      type:"thing:love"
    })
  },
  unlove: function(thing) {
    dispatcher.dispatch({
      payload: thing,
      type:"thing:unlove"
    })
  },
  delete:function(thing) {
    dispatcher.dispatch({
      payload: thing,
      type:"thing:delete"
    })
  }
}