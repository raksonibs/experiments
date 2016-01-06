import React from 'react';
import App from './components/App.jsx';
import Thing from './components/Thing.jsx';
import { IndexRoute, Router, Route, Link, DefaultRoute, browserHistory } from 'react-router'
import Index from './components/ThingContainer.jsx'
import NotFound from './components/NotFound.jsx'

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="things" component={Index}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);


React.render(<Router>{routes}</Router>, document.getElementById('app'));