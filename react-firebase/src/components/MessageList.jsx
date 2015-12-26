import React from 'react';
import Message from './Message.jsx'

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
          <div> {messageNodes}</div>
        )
    }
  }

export default MessageList;