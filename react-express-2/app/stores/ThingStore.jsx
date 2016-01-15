var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/APIHelper.js');
import _ from 'lodash';

class ThingStore {
  constructor() {
    this.state = {
      user: null,
      things: [],
      listeners: []
    };
  }

  function getThings() {
    helper.get("api/things")
    .then(function(data) {
      this.state.things = data;
      triggerListeners();
    })
    return this.state.things;
  },

  onChange: function(listener) {
    this.state.listeners.push(listener);
  },

  deleteThing: function(thing) {
    var index 
    this.state.things.filter(function(_thing, _index){
      if (_thing.name == thing.name) {
        index = _index
      }
    })

    this.state.things.splice(index, 1);
    triggerListeners();

    // confirmation before the server 

    helper.delete("api/things/" + thing._id);

  },

  addThing: function(thing) {
    this.state.things.push(thing)
    triggerListeners()

    helper.post('api/things', thing)
      .then(function(data) {
      console.log(data)      
    })
  },

  setThingTruth: function(thing, isLoved) {
    var _thing = this.state.things.filter(function(a) {return a.name == thing.name})[0]
    console.log(thing)
    console.log(thing.loved)
    if (thing.loved === 'true') {        
      thing.loved = false 
    } else {
      thing.loved = true
    }
    console.log(thing.loved)

    triggerListeners()

    helper.patch("api/things/", thing._id, thing);
  },

  changeThing: function(thing) {
    var _thing = this.state.things.filter(function(a) {return a.name == thing.name})[0]
    thing.loved = isLoved || false;
  },

  triggerListeners: function() {
    this.state.listeners.forEach(function(listener) {
      listener(this.state.things)
    })
  },

  login: function(user) {
    this.setState({user: user});
  },

  dispatcher.register(function(event) {
    var split = event.type.split(':');
    if (split[0] == 'thing') {
      switch(split[1]) {
        case "add":
          addThing(event.payload);
          break;
        case "delete":
          deleteThing(event.payload);
          break;
        case "love":
          setThingTruth(event.payload, true);
          break;
        case "unlove":
          setThingTruth(event.payload, false);
          break;
        case "update":
          changeThing(event.payload, false);
          break;
      }
    } else {
      switch(split[1]) {
        case "login"
          login(event.payload);
          break;
      }
    }
  })

  return {
    getThings: getThings,
    onChange: onChange
  }
}

module.exports = new ThingStore();