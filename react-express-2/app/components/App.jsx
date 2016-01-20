import React from 'react';
import mui from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBarConst from '../common/AppBarIconMenu';
import {RouteHandler} from 'react-router';
import Index from '../components/ThingContainer.jsx'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

module.exports = React.createClass({
  getInitialState: function() {
    return {muiTheme: ThemeManager.getMuiTheme(LightRawTheme)}
  },

  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})