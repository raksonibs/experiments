import { Link } from 'react-router'

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() }
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = getAppState()
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState(getAppState())
  }

  render() {
    return ( 
      <div className="container">
      <Link to="/follow">Follow</Link>
      <TweetBox/>
      <TweetList tweets={this.state.tweetsList}/>
      </div>
    )
  }
}