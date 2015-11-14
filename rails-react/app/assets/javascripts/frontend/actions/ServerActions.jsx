

{
  receivedTweets(rawTweets) {
    Flux.Dispatcher().dispatch({
      rawTeets: rawTweets
      actionType: 'RECEIVED_TWEETS'
    })
  },
  receivedUsers(rawUsers) {
    Flux.Dispatcher().dispatch({
      rawTeets: rawUsers
      actionType: 'RECEIVED_Users'
    })
  },
  receivedOneFollower(rawFollower) {
    Flux.Dispatcher().dispatch({
      rawFollower: rawFollower,
      actionType: 'RECEIVED_FOLLOWER'
    })
  }

  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  }
}