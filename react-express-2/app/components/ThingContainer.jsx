import React from 'react';
import ThingsList from './ThingsList';
import ThingForm from './ThingForm';
import APIHelper from '../helpers/APIHelper';
import toastr from 'toastr';
import Login from './Login';
import Signup from './Signup';
import ThingLogic from './ThingLogic';

var loggedInUser = null;

var ThingContainer = React.createClass({
  getInitialState: function() {
    return {user: loggedInUser}
 },

  loginUser: function(user) {
    toastr.success('Login Successful!')
    loggedInUser = user;
    this.setState({user: loggedInUser})
  },
    render() {
      let view;
      if (this.state.user) {
            view = <ThingLogic />
          } else {
            view = <Login loginUser={this.loginUser}/>
          }

      return (
        <div>
          {view}
        </div>
    );
  }
})

export default ThingContainer;