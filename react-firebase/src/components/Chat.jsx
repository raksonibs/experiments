import React from 'react'
import MessageList from './MessageList'
import ChannelList from './ChannelList'
import MessageBox from './MessageBox'

class Chat etends React.Component {
  render() {
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
    </div>
  }
}

export default Chat;