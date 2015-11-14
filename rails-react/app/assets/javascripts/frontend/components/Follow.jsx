import React from 'react'
import UserStore from "../stores/UserStore"

let getAppState = () => {
  return {Users: UserStore.getAll()}
}

export default class Follow extends React.Component {
  constructor(props) {
   super(props)
   this.state = getAppState() 
  }

   componentDidMount() {
    UserActions.getAllUsers()
    UserStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState(getAppState())
  }

  followUser(userId) {
    UserActions.followUser(userId)
  }

  followClasses(following) {
    return 'btn btn-floating ' + (following ? "green" : 'grey')
  }
  render() {
    let users = this.state.users.map ( user => {
      return (
        <li> {user.name } </li>
        <a className={this.followClasses(user.following)} onClick={this.followUser.bind(this, user.id)}
      )
    })
    return (
      <div>
        <ul className="collection">
          {users}
        </ul>
        <Link to="/">Back</Link>
      </div>
    )
  }
}