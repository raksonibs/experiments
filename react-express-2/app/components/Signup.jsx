import React from 'react';
import mui from 'material-ui';
import TextField from 'material-ui/lib/text-field';
import { Link, Router } from 'react-router'
import { History } from 'history'
import APIHelper from '../helpers/APIHelper';
import toastr from 'toastr';

var {
    Card,
    CardText,
    RaisedButton
} = mui;

var loggedInUser = null;

var Signup = React.createClass({
    mixins : [History],

    getInitialState: function() {
      return {email: '', password: '', user: loggedInUser}
    },
    SignUpUser: function(e) {
      e.preventDefault();
      let component = this
      let user = { email: this.state.email, password: this.state.password }
      APIHelper.login('/signup', user)
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
                  hintText="Email" />
                <TextField
                  hintText="Password" />
              </CardText>

              <Link to={'/login'}><RaisedButton style={{
                display: 'block',
              }} onClick={this.SignUpUser}
              label="Sign up" primary={true} />
              <RaisedButton style={{
                display: 'block',
                background: 'lightblue'
              }}>or Login</RaisedButton></Link>
            </Card>

        );
    }
})

export default Signup;