class TweetBox extends React.Component {
sendTweet(event) {
  event.preventDefault();
  this.props.sendTweet(this.refs.tweetTextArea.value)
  this.refs.tweetTextArea.value = ''
}
  render() {
    return (
      <div className="input-field">
        <form onSubmit={this.sendTweet.bind(this)}>
          <textarea ref="tweetTextArea" className="materialize-textarea"/>
          <button className="btn right">Tweet</button>
        </form>
      </div>
    )
  }
}