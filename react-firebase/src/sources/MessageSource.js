import Actions from '../actions';
import Firebase from 'firebase'

let firebaseRef = null

let MessageSource = {
  getMessages: {
    remote(state) {
      if (firebaseRef) {
        firebaseRef.off()
      }
      firebaseRef = new Firebase('https://react-stack12.firebaseio.com/messages/' + state.selectedChannel.key)
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapShot) => {
          var Messages = dataSnapShot.val()
          resolve(Messages)
        })
      })
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
}

export default MessageSource