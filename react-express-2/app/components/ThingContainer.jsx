import React from 'react';
import ThingsList from './ThingsList';
import ThingForm from './ThingForm';
import APIHelper from '../helpers/APIHelper';
import toastr from 'toastr';
import Login from './Login';
import Signup from './Signup';
import ThingLogic from './ThingLogic';

var ThingContainer = React.createClass({
  getInitialState: function() {
    return {user: null}
 },

  loginUser: function() {
    this.setState({user: true})
  },
    render() {
      let view;
      if (this.state.user) {
            view = <ThingLogic />
          } else {
            view = <Login />
          }

      return (
        <div>
          {view}
        </div>
    );
  }
})

export default ThingContainer;