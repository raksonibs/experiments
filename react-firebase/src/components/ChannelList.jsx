import React from 'react';
import Channel from './Channel.jsx'
import mui from 'material-ui'
import connectToStores from 'alt/utils/connectToStores'
import ChatStore from '../stores/ChatStore'

var {Card, List, CircularProgress} = mui

@connectToStores
class ChannelList extends React.Component {
  constructor(props) {
    // always first constructor with props can call super class
    super(props);
    ChatStore.getChannels()
  }

  static getStores() {
    return [ChatStore]
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

    render() {

      if (!this.props.channels) {
        return (
          <Card> <CircularProgress mode="indeterminate"/></Card>
        )
      }

      var channelNodes = _(this.props.channels)
          .keys()
          .map((k) => {
          let channel = this.props.channels[k]   
          return (
            <Channel channel={channel} />
          )
        })
        .value()

        return (
          <Card style={{
            flexGrow: 1
          }}>
            <List>
              {channelNodes}
            </List>
          </Card>
        )
    }
  }

export default ChannelList;