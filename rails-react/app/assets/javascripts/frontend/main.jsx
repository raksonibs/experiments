import TweetActions from "../actions";
import Index from "../components/Index";
import React from 'react'
import ReactDOM from 'react-dom'
import Follow from "../components/Follow"

import { Router, Route, Link } from 'react-router'
import { history } from 'react-router/lib/HashHistory'

class App extends React.Component {
  render() {
    return {
      <div>
        {this.props.children}
      </div>
    }
  }
}
// react routing takes over!
let documentReady = () => {
  ReactDOM.render(
    <Router history={history}?
      <Route compontent={App}/>
        <Route path="/" component={Index} />
        <Route path="follow" component={Follow} />
      </Route>
    </Router>,
    document.getElementById('react')
    )
}

$(documentReady)
