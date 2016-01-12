import React from 'react';
import ThingsList from './ThingsList';
import ThingForm from './ThingForm';

var initialThings = []

var ThingLogic = React.createClass({
  getInitialState: function() {
    return {things: initialThings, user: null}
 },
  addThing: function(thing) {
   initialThings.push(thing)

   APIHelper.post('api/things', thing)
     .then(function(data) {
     console.log(data)      
   })

   this.setState({things: initialThings})

   toastr.success('Author Created!')
  },

  updateThing: function(thing) {
    var index
    initialThings.filter(function(_thing, _index){
      if (_thing.name == thing.name) {
        index = _index
      }
    })

    let thingList = initialThings[index]
    if (thingList.loved === 'false') {
      thingList.loved = 'true'
    } else {      
      thingList.loved = 'false'
    }

   this.setState({things: initialThings})
   let thingId = thing._id
   let url = 'api/things/' + thingId
   APIHelper.update(url)
     .then(function(data) {
       console.log('update!')
     })
   toastr.success('Author Updated!')
 },

 deleteThing: function(thing) {    
   var index
   initialThings.filter(function(_thing, _index){
     if (_thing.name == thing.name) {
       index = _index
     }
   })

    initialThings.splice(index, 1)

    this.setState({things: initialThings})
    let thingId = thing._id
    let url = 'api/things/' + thingId
    APIHelper.delete(url)
      .then(function(data) {
        console.log('deleted!')
      })
    toastr.success('Author Deleted!')
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  componentWillMount: function() {
    let component = this

    APIHelper.get("api/things")
      .then(function(data) {
        component.setState({
          things: data
        })
        initialThings = data
    })
  },
   render() {
    return (
      <div>
        <h1>Things I like!</h1>
        <ThingsList update={this.updateThing} delete={this.deleteThing} things={this.state.things} />
        <ThingForm addThing={this.addThing} />
      </div>
      )
   }

})





export default ThingLogic;