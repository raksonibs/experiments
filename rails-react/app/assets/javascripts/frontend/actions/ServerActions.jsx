

{
  receivedTweets(rawTweets) {
    Flux.Dispatcher().dispatch({
      rawTeets: rawTweets
      actionType: 'RECEIVED_TWEETS'
    })
  }
}