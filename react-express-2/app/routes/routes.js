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

 // <Router history={browserHistory}>
 //    <Route path="/" component={App}>
 //      <Route path="about" component={About}/>
 //      <Route path="users" component={Users}>
 //        <Route path="/user/:userId" component={User}/>
 //      </Route>
 //      <Route path="*" component={NoMatch}/>
 //    </Route>
 //  </Router>

// let routes = (
//   <Route path="/" handler={App}>
//     <DefaultRoute handler={ThingContainer} />
//   </Route>
// );

module.exports = routes;