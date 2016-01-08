import React from 'react';
import mui from 'material-ui';

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
                Need to login first to view and create!
              </CardText>

              <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this)}
              label="Log in" primary={true} />
            </Card>

        );
    }
}


export default Login;