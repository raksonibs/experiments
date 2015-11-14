

{
  receivedTweets(rawTweets) {
    Flux.Dispatcher().dispatch({
      rawTeets: rawTweets
      actionType: 'RECEIVED_TWEETS'
    })
  }

  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  }
}