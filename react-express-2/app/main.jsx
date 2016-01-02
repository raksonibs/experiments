import React from 'react';
import ThingsList from './components/ThingsList';
import APIHelper from './helpers/APIHelper'

var initialThings = []


var App = React.createClass({
  getInitialState: function() {
    this.setState({
      things: initialThings
    })
    return {things: initialThings}
  },
  componentWillMount: function() {
    let component = this
    APIHelper.get("api/things")
      .then(function(data) {
        component.setState({
          things: data
        })
    })
  },
    render() {
        return (
          <div>
            <h1>Things I like!</h1>
            <ThingsList things={this.state.things} />
          </div>
        )
    }
})

React.render(
    <App />,
    document.getElementById('app')
);