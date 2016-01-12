import React from 'react';
// import App from './components/App.jsx';
import Thing from './components/Thing.jsx';
import { IndexRoute, Router, Route, Link, DefaultRoute, browserHistory } from 'react-router'
import Index from './components/ThingContainer.jsx'
import NotFound from './components/NotFound.jsx'
import mui from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBarConst from './common/AppBarIconMenu';
import APIHelper from './helpers/APIHelper';
import ThingsList from './components/ThingsList';
import ThingForm from './components/ThingForm';
import Cats from './components/Cats';
import Login from './components/Login';
import Signup from './components/Signup';

var AppBar = mui.AppBar;

var initialThings = []

var users = {email: 'oskar@fake.com'}

var App = React.createClass({
  getInitialState: function() {
    return {things: initialThings, muiTheme: ThemeManager.getMuiTheme(LightRawTheme), user: null}
 },
 addThing: function(thing) {
   initialThings.push(thing)

   APIHelper.post('api/things', thing)
     .then(function(data) {
     console.log(data)      
   })

   this.setState({things: initialThings})

   toastr.success('Author Created!')
  },
  updateThing: function(thing) {
    var index
    initialThings.filter(function(_thing, _index){
      if (_thing.name == thing.name) {
        index = _index
      }
    })

    let thingList = initialThings[index]
    if (thingList.loved === 'false') {
      thingList.loved = 'true'
    } else {      
      thingList.loved = 'false'
    }

   this.setState({things: initialThings})
   let thingId = thing._id
   let url = 'api/things/' + thingId
   APIHelper.update(url)
     .then(function(data) {
       console.log('update!')
     })
   toastr.success('Author Updated!')
 },
 deleteThing: function(thing) {    
   var index
   initialThings.filter(function(_thing, _index){
     if (_thing.name == thing.name) {
       index = _index
     }
   })

    initialThings.splice(index, 1)

    this.setState({things: initialThings})
    let thingId = thing._id
    let url = 'api/things/' + thingId
    APIHelper.delete(url)
      .then(function(data) {
        console.log('deleted!')
      })
    toastr.success('Author Deleted!')
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  componentWillMount: function() {
    let component = this
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    APIHelper.get("api/things")
      .then(function(data) {
        component.setState({
          things: data
        })
        initialThings = data
    })
  },

  loginUser: function() {
    this.setState({user: true})
  },

  render() {
    let view;
    if (this.state.user) {
          view = <div></div>
        } else {
          view = <Login />
        }

    return (
      <div>
        <AppBarConst />
        {view}
        {this.props.children}
      </div>

    )
  }
})



let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="things" component={Index}/>
            <Route path="cats" component={Cats}/>
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);


React.render(<Router>{routes}</Router>, document.getElementById('app'));