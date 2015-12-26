import React from 'react';
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import * as mui from 'material-ui';
import MessageBox from './MessageBox.jsx'

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
        <div style={{ 
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: '1200',
          width: '100%'
        }}>
          <ChannelList />
          <MessageList />
          <MessageBox />
        </div>
      </div>
    )
  }
}

export default App;