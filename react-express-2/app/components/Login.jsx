import React from 'react';
import mui from 'material-ui';
import TextField from 'material-ui/lib/text-field';
import { Link } from 'react-router'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var {
    Card,
    CardText,
    RaisedButton
} = mui;

var Login = React.createClass({
    getInitialState: function() {
      return {email: '', password: ''}
    },
    loginUser: function(e) {
      e.preventDefault();
      let user = { email: this.state.email, password: this.state.password }
      this.props.loginUser(user)
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