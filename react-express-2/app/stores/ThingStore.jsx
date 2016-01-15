var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/APIHelper.js')

function ThingStore() {

  var things = [];

  helper.get("api/things")
  .then(function(data) {
    things = data;
    triggerListeners();
  })

  var listeners = [];

  function getThings() {
    return things;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function deleteThing(item) {
    var index 
    things.filter(function(_item, _index){
      if (_item.name == item.name) {
        index = _index
      }
    })

    things.splice(index, 1);
    triggerListeners();

    // confirmation before the server 

    helper.del("api/things/" + item._id);

  }

  function addThing(item) {
    things.push(item)
    triggerListeners()

    helper.post('api/things', item)
      .then(function(data) {
      console.log(data)      
    })
  }

  function setThingTruth(item, isLoved) {
    var _item = things.filter(function(a) {return a.name == item.name})[0]
    console.log(item)
    console.log(item.purchased)
    item.purchased = isLoved || false;
    console.log(item.purchased)

    triggerListeners()

    helper.patch("api/things/", item._id, item);
  }

  function triggerListeners() {
    listeners.forEach(function(listener) {
      listener(things)
    })
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
        case "buy":
          setThingTruth(event.payload, true);
          break;
        case "unbuy":
          setThingTruth(event.payload, false);
          break;
      }
    }
  })

  return {
    getthings: getthings,
    onChange: onChange
  }
}

module.exports = new ThingStore();