var TweetActions = require("../actions/TweetActions")
var Index = require("../components/Index")
var React = require('react')
var ReactDOM = require('react-dom')
var Follow = require("../components/Follow")

var { Router, Route, Link } = require( 'react-router')
var { history } = require( 'react-router/lib/HashHistory')

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
// react routing takes over!
let documentReady = () => {
  ReactDOM.render(
    <Router history={history} >
      <Route compontent={App} >
        <Route path="/" component={Index} />
        <Route path="follow" component={Follow} />
      </Route>
    </Router>,
    document.getElementById('react')
    )
}

$(documentReady)
