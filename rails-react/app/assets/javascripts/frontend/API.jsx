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

  getAllUsers() {
    $.get('/followers/random')
    .success( rawUsers => ServerActions.receivedUsers(rawUsers))
    .error(error => console.log('error'))
  },
  followUser(userId) {
    $.post('/followers', { user_id: UserId})
    .success(rawFollower => ServerActions.receivedOneFollower(rawFollower))
    .error(error => console.log('error'))
  }
}