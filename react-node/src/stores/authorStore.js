'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi')
var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter;
// object assign nativ in es6
var assign = require('object-assign')
var _authors = []
var _ = require('lodash')
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
  },

  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {
    return _.find(_authors, {id: id})
  }
  // need to register store with dispatcher to when know action occurs

})
// how diff then pub/sub
Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.CREATE_AUTHOR:
    // action.author is from payload of authorActions
      _authors.push(action.author)
      AuthorStore.emitChange();
      break;
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
    // action.author is from payload of authorActions
      var existingAuthor = _.find(_authors, {id: action.author.id})
      var existingAuthorIndex = _.indexOf(_authors, existingAuthor)
      // replace author with new updated author
      _.authors.splice(existingAuthorIndex, 1, action.author)
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author) {
        return action.id === author.id
      })
      AuthorStore.emitChange();
      break;
    default:

      // react componenets need to be aware of store
  }
})

module.exports = AuthorStore;