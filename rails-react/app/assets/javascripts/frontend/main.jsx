// import Greet from './greet';

let mockTweets = [
  { name: "Blah", body: 'cat'},
  { name: "Cat", body: 'dog'}
]

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tweetsList: mockTweets }
  }
  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({body: tweetToAdd, name: 'Guest'})
    this.setState({ tweetsList: newTweetsList})
  }

  render() {
    return ( 
      <div className="container"><TweetBox sendTweet={this.addTweet.bind(this)}/>
      <TweetList tweets={mockTweets}/>
      </div>
    )
  }
}

// let documentReady = () => {
//   ReactDOM.render(
//     <Main />,
//     document.getElementById('react')
//     )
// }

// $(documentReady)
