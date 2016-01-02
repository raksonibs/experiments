import React from 'react';
import ThingsList from './components/ThingsList';
import APIHelper from './helpers/APIHelper'
import ThingForm from './components/ThingForm';

var initialThings = []

var App = React.createClass({
  getInitialState: function() {
    this.setState({
      things: initialThings
    })
    return {things: initialThings}
  },
  addThing: function(thing) {
    initialThings.push(thing)
    triggerListeners()

    this.setState({things: initialThings})
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
            <ThingsList things={this.state.things} />
            <ThingForm onSubmit={this.addThing} />
          </div>
        )
    }
})

React.render(
    <App />,
    document.getElementById('app')
);