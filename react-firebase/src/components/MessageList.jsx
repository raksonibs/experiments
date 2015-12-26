import React from 'react';
import Message from './Message.jsx'
import mui from 'material-ui'

var {Card, List} = mui

class MessageList extends React.Component {
  constructor(props) {
    // always first constructor with props can call super class
    super(props);
    this.state = {
      messages: [
        'hi',
        'yo00'
      ]
    }
  }

    render() {
      var messageNodes = this.state.messages.map((message) => {
          return (
            <Message message={message} />
          )
        })

        return (
          <Card style={{
            flexGrow: 2
          }}>
            <List>
              {messageNodes}
            </List>
          </Card>
        )
    }
  }

export default MessageList;