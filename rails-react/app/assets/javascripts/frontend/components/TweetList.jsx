class TweetList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => key={Math.random() *6)} <Tweet {... tweet }/>)
    return (
      <div>
        <ul>
        {tweets}
        </ul>
      </div>
    )
  }
}