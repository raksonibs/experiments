import React from 'react';
import ThingsList from './ThingsList';
import ThingForm from './ThingForm';
import APIHelper from '../helpers/APIHelper';
import toastr from 'toastr';
import Login from './Login';
import Signup from './Signup';
import ThingLogic from './ThingLogic';
import { Link, Router } from 'react-router'
import ThingStore from '../stores/ThingStore'

let initialThings = []

initialThings = ThingStore.getThings();

ThingStore.onChange(function(things) {
  initialThings = things;
})

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
            view = <ThingLogic things={initialThings}/>
          } else {
            view = <Login loginUser={this.loginUser} things={initialThings}/>
          }
      view = <ThingLogic things={initialThings}/>
      return (
        <div>
          {view}
        </div>
    );
  }
})

export default ThingContainer;