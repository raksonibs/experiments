import { EventEmitter } from 'events';

let _tweets =[]

class TweetEventEmitter extends EventEmitter {


  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow()
      return tweet
    })
    return _tweets;
  }

  emitChange() {
    this.emit("CHANGE")
  }

  addChangeListener(callback) {
    this.on("CHANGE", callback)
  }

  removeChangeListener() {
    this.removeListener("CHANGE", callback)
  }

}

let TweetStore = new TweetEventEmitter()

AppDispatcher.register( action => {
  switch(action.ActionType) {
    case ActionTypes.RECEIVED_TWEETS:
      _tweets = action.rawTweets;
      TweetStore.emitChange()
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      _tweets.unshift(action.rawTweet)
      TweetStore.emitChange()
    default:
      break;
  }
})

export default TweetStore;