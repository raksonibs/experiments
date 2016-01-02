import React from 'react';
import ThingsList from './components/ThingsList';

var App = React.createClass({ 
    render() {
        let things = [{name: 'test', loved: false, id: '1'}]
        return (
          <div>
            <h1>Things I like!</h1>
            <ThingsList things={things} />
          </div>
        )
    }
})

React.render(
    <App />,
    document.getElementById('app')
);