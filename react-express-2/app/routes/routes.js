import React from 'react';
import App from '../components/App.jsx';
import { IndexRoute, Router, Route, Link, DefaultRoute, browserHistory } from 'react-router'
import Index from '../components/ThingContainer.jsx'
import NotFound from '../components/NotFound.jsx'

let history = {};

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);

module.exports = routes;