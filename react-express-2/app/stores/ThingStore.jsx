var dispatcher = require('./../dispatcher/appDispatcher.js');
var helper = require('./../helpers/APIHelper.js');
import _ from 'lodash';

function ThingStore() {
  var things = []
  helper.get("api/things")
  .then(function(data) {
    things = data;
    triggerListeners();
  })
  
  var listeners = []

  function getThings() {
    return things;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function deleteThing(thing) {
    var index 
    things.filter(function(_thing, _index){
      if (_thing.name == thing.name) {
        index = _index
      }
    })

    things.splice(index, 1);
    triggerListeners();

    // confirmation before the server 

    helper.delete("api/things/" + thing._id);

  }

  function addThing(thing) {
    things.push(thing)
    triggerListeners()

    helper.post('api/things', thing)
      .then(function(data) {
      console.log(data)      
    })
  }

  function setThingTruth(thing, isLoved) {
    var _thing = things.filter(function(a) {return a.name == thing.name})[0]
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
  }

  function changeThing(thing) {
    var _thing = things.filter(function(a) {return a.name == thing.name})[0]
    thing.loved = isLoved || false;
  }

  function triggerListeners() {
    listeners.forEach(function(listener) {
      listener(things)
    })
  }

  function login(user) {
    this.setState({user: user});
  }

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
        case "login":
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