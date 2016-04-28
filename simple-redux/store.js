import { createStore } from 'redux'

var defaultState = {
  todo: {
    items: []
  }
}

function todoApp(state, action) {}

var store = redux.createStore(todoApp, defaultState)
