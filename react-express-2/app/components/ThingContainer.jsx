import React from 'react';
import ThingsList from './ThingsList';
import ThingForm from './ThingForm';
import APIHelper from '../helpers/APIHelper';
import toastr from 'toastr';
import Login from './Login';
import Signup from './Signup';
import ThingLogic from './ThingLogic';
import { Link, Router } from 'react-router'

let loggedInUser = null;

var ThingContainer = React.createClass({
  mixins : [Router.Navigation],

  getInitialState: function() {
    return {user: loggedInUser}
 },

  loginUser: function(user) {
    APIHelper.login('/login', user)
      .catch(function(data) {
        if (data.status === 200) {
          toastr.success('Login Successful!')
          loggedInUser = user;
          this.setState({user: loggedInUser})
          this.transitionTo('things')
        } else {              
          toastr.error('Login Unsuccessful!')
        }
      })
  },
    render() {
      let view;
      if (this.state.user) {
            view = <ThingLogic />
          } else {
            view = <Login loginUser={this.loginUser}/>
          }

      view = <ThingLogic />

      return (
        <div>
          {view}
        </div>
    );
  }
})

export default ThingContainer;