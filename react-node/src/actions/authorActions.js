'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi')
var ActionTypes = require('../constants/actionTypes')

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author)
    // probably need promisses and callbacks for success when async
    // go tell all stores that author is created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    })
  },

  deleteAuthor: function(id) {
    AuthorApi.deleteAuthor(id)
    // preloader have a separate dlete action, so can fire outt delete author action and once async deleted, can call author did actually delete author and hide preloaders
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    })
  },

  updateAuthor: function(author) {
    var updatedAuthor = AuthorApi.saveAuthor(author)
    
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    })
  }
}

module.exports = AuthorActions;