import React from 'react';
import App from '../components/App.jsx';
import ThingContainer from '../components/ThingContainer.jsx';
import { IndexRoute, Router, Route, Link, DefaultRoute } from 'react-router'
import Index from '../components/ThingContainer'
import NotFound from '../components/notfound'

let history = {};

var routes = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);

// let routes = (
//   <Route path="/" handler={App}>
//     <DefaultRoute handler={ThingContainer} />
//   </Route>
// );