'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi')
var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter;
// object assign nativ in es6
var assign = require('object-assign')
// take empty new object, extend to use event emitter protype, and degiend rest of store so gets mixed in as well
var AuthorStore = assign({}, Event.EventEmitter.prototype, {
  // want three functiona dd change listenr remove
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback)
  },

  emitChange: function() {
    this.emit('change')
  }
  // need to register store with dispatcher to when know action occurs
})
// how diff then pub/sub
Dispatcher.register(function(action) {
  switch(action.actionType) {
    
  }
})

module.exports = AuthorStore;