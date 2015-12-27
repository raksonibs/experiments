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
      <ListItem onClick={this.onClick.bind(this)}> {this.props.channel}</ListItem>
    )
  }
}

export default Channel;