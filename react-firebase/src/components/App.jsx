import React from 'react';
import MessageList from './MessageList.jsx'
import * as mui from 'material-ui';

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
        <MessageList />
      </div>
    )
  }
}

export default App;