import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardHeader from 'material-ui/lib/card/card-header';
import CardActions from 'material-ui/lib/card/card-actions';
import {RouteHandler} from 'react-router';


const apiKey = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
export class Container extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.scriptCache = createCache(options);
      this.scriptCache.google.onLoad(this.onLoad.bind(this))

      this.state = {
          loaded: false,
          map: null,
          google: null
      }
  }

  onLoad(err, tag) {
      this._gapi = window.google;

      this.setState({loaded: true, google: this._gapi})
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>Map</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: __GAPI_KEY__
})(Container)