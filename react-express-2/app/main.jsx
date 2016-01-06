import React from 'react';
import App from './components/App.jsx';
import Thing from './components/Thing.jsx';
import Router from 'react-router';
import routes from './routes/routes'

React.render(<Router>{routes}</Router>, document.getElementById('app'));