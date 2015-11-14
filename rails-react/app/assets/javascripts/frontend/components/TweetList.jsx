class TweetList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet {... tweet }/>)
    return (
      <div>
        <ul>
        {tweets}
        </ul>
      </div>
    )
  }
}