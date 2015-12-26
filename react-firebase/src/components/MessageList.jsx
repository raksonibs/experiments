import React from 'react';
import Message from './Message.jsx'
import mui from 'material-ui'
import FireBase from 'firebase'
import _ from 'lodash'

var {Card, List} = mui

class MessageList extends React.Component {
  constructor(props) {
    // always first constructor with props can call super class
    super(props);
    this.state = {
      messages: []
    }

    this.firebaseRef = new Firebase('https://react-stack12.firebaseio.com/messages')
    this.firebaseRef.once('value', (dataSnapShot) => {
      var messages = dataSnapShot.val();
      this.setState({
        messages: messages
      })
    })
  }

    render() {
      var messageNodes = this.state.messages.map((message) => {
          return (
            <Message message={message.message} />
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