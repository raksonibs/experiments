{
  getAllTweets() {
    $.get('/tweets')
    .success( rawTweets => ServerActions.receivedTweets(rawTweets))
    .error(error => console.log('error'))
  }
}