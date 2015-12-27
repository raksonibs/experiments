import React from 'react';
import mui from 'material-ui'
import Actions from '../actions'


var {ListItem} = mui;

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick() {
    Actions.channelOpened(this.props.channel)
  }

  render() {
    return (
      <ListItem href={'/#/chat'+this.props.channel.key}> {this.props.channel}</ListItem>
    )
  }
}

export default Channel;