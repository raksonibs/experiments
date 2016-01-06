import React from 'react';
import mui from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBarConst from '../common/AppBarIconMenu';
import {RouteHandler} from 'react-router';

var App = React.createClass({
  getInitialState: function() {
    return {muiTheme: ThemeManager.getMuiTheme(LightRawTheme)}
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  componentWillMount: function() {
    let component = this
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

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
        <AppBarConst />
        {this.props.children}
      </div>
    )
  }
})