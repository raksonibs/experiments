import React from 'react';
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import * as mui from 'material-ui';
import MessageBox from './MessageBox.jsx'
import Login from './Login.jsx'
import connectToStores from 'alt/utils/connectToStores'
import ChatStore from "../stores/ChatStore";
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';


var Colors = mui.Styles.Colors
var AppBar = mui.AppBar;
@connectToStores
class App extends React.Component {
  constructor() {
    super();
  }

  static getStores() {
    return [ChatStore]
  }

  static getPropsFromStores() {
    return ChatStore.getState()
  }

      // only one root
  render() {

    var view = <Login />

    if (this.props.user) {
      view = (
          <div style={{ 
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: '1200',
          width: '100%'
        }}>
          <ChannelList />
          <MessageList />
          <MessageBox />
        )
    }

    return (
      <div>
        <AppBar title="Awesome Chat App" />
          {{view}}
        </div>
      </div>
    )
  }
}

export default App;