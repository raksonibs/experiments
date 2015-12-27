import Actions from '../actions';
import Firebase from 'firebase'

let firebaseRef = null

let MessageSource = {
  sendMessage: {
    remote(state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return resolve()
        }

        firebaseRef.push({
          "message": state.message,
          "date": new Date().toUTCString(),
          "author": state.user.google.displayName
        })
        resolve()
      })
    }, 
    success: Actions.messageSendSuccess,
    error: Actions.messageSendError
  },
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

          firebaseRef.on("child_added", (msg) => {
            let msgVal = msg.val()
            msgVal.key = msg.key()
            Actions.messagesReceived(msgVal)
          })
        })
      })
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
}

export default MessageSource