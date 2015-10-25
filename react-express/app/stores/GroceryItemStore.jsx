var dispatcher = require('./../dispatcher.js');

function GroceryItemStore() {
  var items = [{
  name: 'Iceream'
},
{
  name: 'Apple',
  purchased: true
},
{
  name: 'Snarks'
}];
  var listeners = [];

  function getItems() {
    return items;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function addGroceryItem(item) {
    items.push(item)
    triggerListeners()
  }

  function triggerListeners() {
    listeners.forEach(function(listener) {
      listener(items)
    })
  }

  dispatcher.register(function(event) {
    var split = event.type.split(':');
    if (split[0] == 'grocery-item') {
      switch(split[1]) {
        case "add":
          addGroceryItem(event.payload);
          break;
      }
    }
  })

  return {
    getItems: getItems,
    onChange: onChange
  }
}

module.exports = new GroceryItemStore();