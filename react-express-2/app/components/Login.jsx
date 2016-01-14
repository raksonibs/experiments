import React from 'react';
import mui from 'material-ui';
import TextField from 'material-ui/lib/text-field';
import { Link, Router } from 'react-router'
import { History } from 'history'
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
    mixins : [History],

    getInitialState: function() {
      return {email: '', password: '', user: this.props.user || loggedInUser}
    },
    handleInputEmail: function(e) {
      this.setState({email: e.target.value})
    },
    handleInputPassword: function(e) {
      this.setState({password: e.target.value})
    },
    loginUser: function(e) {
      e.preventDefault();
      let component = this
      let user = { email: this.state.email, password: this.state.password }
      if (this.props.loginUser === undefined) {
        APIHelper.login('/login', user)
          .then(function(data) {                       
          })
          .catch(function(data) {
            if (data.status === 200) {
              toastr.success('Login Successful!')              
              loggedInUser = user;              
              component.setState({user: loggedInUser})              
            } else {              
              toastr.error('Login Unsuccessful!')
            }
          })
      } else {        
        this.props.loginUser(user)
      }

      this.history.pushState(null, '/things');
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
                  hintText={this.state.email || "Email"} onChange={this.handleInputEmail} />
                <TextField
                  hintText={this.state.password || "Password"} onChange={this.handleInputPassword} />
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