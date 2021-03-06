

let _tweets =[]

class TweetEventEmitter extends AppEventEmitter {


  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow()
      return tweet
    })
    return _tweets;
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