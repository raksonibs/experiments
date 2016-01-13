import React from 'react';
import mui from 'material-ui';
import TextField from 'material-ui/lib/text-field';
import { Link, Router } from 'react-router'
import toastr from 'toastr';
import APIHelper from '../helpers/APIHelper';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var {
    Card,
    CardText,
    RaisedButton
} = mui;

var loggedInUser = null;

var Login = React.createClass({
    getInitialState: function() {
      return {email: '', password: '', user: this.props.user || loggedInUser}
    },
    loginUser: function(e) {
      e.preventDefault();
      let user = { email: this.state.email, password: this.state.password }
      if (this.props.loginUser === undefined) {
        APIHelper.login(user)
          .then({
            if (error) {
              toastr.error('Login Unsuccessful!')
            } else {
              toastr.success('Login Successful!')
              loggedInUser = user;
              this.setState({user: loggedInUser})              
            }

          })
        // need to redirect
        Router.transitionTo('things')
      } else {        
        this.props.loginUser(user)
      }
    },
    render(){
        return (
            <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                
                <TextField
                  hintText={this.state.email || "Email"} />
                <TextField
                  hintText={this.state.password || "Password"} />
              </CardText>

              <RaisedButton style={{
                display: 'block',
              }} onClick={this.loginUser}
              label="Log in" primary={true} />
              <Link to={'/signup'}><RaisedButton style={{
                display: 'block',
                background: 'lightblue'
              }}>or Signup</RaisedButton></Link>
            </Card>

        );
    }
})

export default Login;