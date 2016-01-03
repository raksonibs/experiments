import React from 'react';
import ThingsList from './components/ThingsList';
import APIHelper from './helpers/APIHelper'
import ThingForm from './components/ThingForm';

var initialThings = []

var App = React.createClass({
  getInitialState: function() {
    return {things: initialThings}
  },
  addThing: function(thing) {
    initialThings.push(thing)

    APIHelper.post('api/things', thing)
      .then(function(data) {
      console.log(data)      
    })

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
            <ThingForm addThing={this.addThing} />
          </div>
        )
    }
})

React.render(
    <App />,
    document.getElementById('app')
);