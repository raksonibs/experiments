import React from 'react';
import ThingsList from './ThingsList';
import ThingForm from './ThingForm';
import APIHelper from '../helpers/APIHelper';
import toastr from 'toastr';
import ThingStore from '../stores/ThingStore.jsx';
import ThingActionCreator from '../actions/ThingActionCreator'

let initialThings = ThingStore.getThings();

ThingStore.onChange(function(things) {
  initialThings = things;
})

var ThingLogic = React.createClass({
  getInitialState: function() {
    return {things: initialThings, user: null}
 },
  addThing: function(thing) {
   ThingActionCreator.add(thing)   
   toastr.success('Author Created!')
  },

  updateThing: function(thing) {
   ThingActionCreator.updateThing(thing);
   toastr.success('Author Updated!')
 },

 deleteThing: function(thing) {    
    ThingActionCreator.delete(thing);
    toastr.success('Author Deleted!')
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
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