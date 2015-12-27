import React from 'react';

import * as mui from 'material-ui';
import {RouterHandler} from 'react-router'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';


var Colors = mui.Styles.Colors
var AppBar = mui.AppBar;

class App extends React.Component {
  constructor() {
    super();
  }

      // only one root
  render() {

   
    return (
      <div>
        <AppBar title="Awesome Chat App" />
          <RouterHandler />
        </div>
      </div>
    )
  }
}

export default App;