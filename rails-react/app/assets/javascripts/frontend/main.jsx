class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tweetsList: [] }
  }

  formattedTweets(tweetsList) {
    let formattedList = tweetsList.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow()
      return tweet
    })
    console.log(formattedList)
    return formattedList
  }

  addTweet(tweetToAdd) {
    $.post("/tweets", { body: tweetToAdd })
    .success( savedTweet => {
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet)
      this.setState({tweetsList: this.formattedTweets(newTweetsList)})
    })
    .error(error => console.log(error))
  }

  componentDidMount() {
    $.get("/tweets")
    .success(data => {
      console.log(this.state)
      console
     this.setState({tweetsList: this.formattedTweets(data)})
     console.log(this.state)
   })
    .error(error => console.log(error))
  }

  render() {
    return ( 
      <div className="container"><TweetBox sendTweet={this.addTweet.bind(this)}/>
      <TweetList tweets={this.state.tweetsList}/>
      </div>
    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
    )
}

$(documentReady)
