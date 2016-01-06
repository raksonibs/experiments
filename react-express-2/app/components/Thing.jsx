import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardHeader from 'material-ui/lib/card/card-header';
import CardActions from 'material-ui/lib/card/card-actions';

module.exports = React.createClass({
  makeLoved: function(e) {
    e.preventDefault()
    this.props.update(this.props.thing)
  },
  delete: function(e) {
    e.preventDefault()
    this.props.delete(this.props.thing)
  },
  render: function() {
        return (
          <Card className="list-item">
            <CardHeader
              title={this.props.thing.name}
              subtitle={this.props.thing._id} />
            <CardText>
               Could be loved. Right now it is {this.props.thing.loved}
            </CardText>
            <CardActions>
              <RaisedButton onClick={this.makeLoved} label="Make Un/Loved" />
              <RaisedButton primary={true} onClick={this.delete} label="Delete" />
            </CardActions>
          </Card>
        );
    }
})