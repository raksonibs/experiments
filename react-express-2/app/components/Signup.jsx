import React from 'react';
import mui from 'material-ui';
import TextField from 'material-ui/lib/text-field';
import { Link } from 'react-router'

var {
    Card,
    CardText,
    RaisedButton
} = mui;

var loggedInUser = null;

var Signup = React.createClass({
    getInitialState: function() {
      return {email: '', password: '', user: loggedInUser}
    },
    SignUpUser: function(e) {
      e.preventDefault();
      let user = { email: this.state.email, password: this.state.password }
      if (this.props.loginUser === undefined) {
        }
        // need to redirect
        Router.transitionTo('things')
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