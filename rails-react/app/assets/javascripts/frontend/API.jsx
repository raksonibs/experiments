{
  getAllTweets() {
    $.get('/tweets')
    .success( rawTweets => ServerActions.receivedTweets(rawTweets))
    .error(error => console.log('error'))
  }

  createTweet(body) {
    $.post('/tweets', { body })
    .success( rawTweet => ServerActions.recievedOneTweet(rawTweet))
    .error(error => console.log('error'))
  }
}