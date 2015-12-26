import alt from '../alt'
import Actions from '../actions'
import {decorate, bind, datasource} from 'alt/utils/decorators'

@decorate(alt)
class ChatStore {
  constructor() {
    this.state = { user: null }
  }
  // alt makes sure bind to action
  @bind(Actions.login)
  login(user) {
    this.setState({ user: user})
  }
}

export default alt.createStore(ChatStore)