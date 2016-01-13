import React from 'react';
import { IndexRoute, Router, Route, Link, DefaultRoute, browserHistory } from 'react-router'
import Index from './components/ThingContainer.jsx'
import NotFound from './components/NotFound.jsx'
import mui from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import AppBarConst from './common/AppBarIconMenu';
import APIHelper from './helpers/APIHelper';
import Cats from './components/Cats';
import Login from './components/Login';
import Signup from './components/Signup';
import App from './components/App';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var AppBar = mui.AppBar;

var initialThings = []

var users = {email: 'oskar@fake.com'}

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="things" component={Index}/>
            <Route path="cats" component={Cats}/>
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);


React.render(<Router>{routes}</Router>, document.getElementById('app'));