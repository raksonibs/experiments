import alt from '../alt'
import Actions from '../actions'
import {decorate, bind, datasource} from 'alt/utils/decorators'
import ChannelSource from "../sources/ChannelSource"
import _ from 'lodash'

@datasource(ChannelSoure)
@decorate(alt)
class ChatStore {
  constructor() {
    this.state = { user: null }
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel
    _(channels)
      .keys()
      .each((key, index) => {
        channels[key],key = key 
        if(index ==0) {
          channels[key].selected = true
          selectedChannel = channels[key]
        }
      })
      .value()
      // if don't set variable in es6, goes channels: channels in es6 literals
      this.setState({
        channels,
        selectedChannel
      })
  }
  // alt makes sure bind to action
  @bind(Actions.login)
  login(user) {
    this.setState({ user: user})
  }
}

export default alt.createStore(ChatStore)