import React from 'react';
import mui from 'material-ui';
import TextField from 'material-ui/lib/text-field';
import { Link } from 'react-router'

var {
    Card,
    CardText,
    RaisedButton
} = mui;


class Login extends React.Component {
    onClick() {
      // need to set user up!
      
    }
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

              <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this)}
              label="Log in" primary={true} />
              <RaisedButton style={{
                display: 'block',
                background: 'lightblue'
              }}><Link to={'/signup}'}>or Signup</Link></RaisedButton>
            </Card>

        );
    }
}


export default Login;