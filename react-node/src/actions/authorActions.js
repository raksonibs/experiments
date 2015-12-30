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
  }
}

module.exports = AuthorActions;