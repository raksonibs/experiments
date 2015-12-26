import Actions from '../actions';
import Firebase from 'firebase'

let firebaseRef = new Firebase('https://react-stack12.firebaseio.com/channels')

let ChannelSource = {
  getChannels: {
    remote(state) {
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapShot) => {
          var channels = dataSnapShot.val()
          resolve(channels)
        })
      })
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource