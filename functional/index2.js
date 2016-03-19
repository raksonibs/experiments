// react's this causes lots of confusion ex:
this.setState({ loading: true });

fetch('/').then(function loaded() {
  this.setState({ loading: false });
});

// can alias this:
var component = this;
component.setState({ loading: true });

fetch('/').then(function loaded() {
  component.setState({ loading: false });
});

// can bind this:
this.setState({ loading: true });

fetch('/').then(function loaded() {
  this.setState({ loading: false });
}.bind(this));
// context here cannot be overriden.

// react way:
React.createClass({
  componentWillMount: function() {
    this.setState({ loading: true})

    fetch('/').then(this.loaded)
  },
  loaded: function loaded() {
    this.setState({ loading: false})
  }
})

//es2015 arrowws: always have implicit returns and use valaue of this from enclosing $rootScope
this.setState({ loading: true });

fetch('/').then(() => {
  this.setState({ loading: false });
});
// but with babel compiled to:
const loaded = () => {
  this.setState({ loading: false });
};

// will be compiled to

var _this = this;
var loaded = function loaded() {
  _this.setState({ loading: false });
};

// :: operator
[1, 2, 3]::map(x => x * 2)
//ie:
this.setState({ loading: true });

fetch('/').then(this::() => {
  this.setState({ loading: false });
});

// function specific:
items.map(function(x) {
  return <a onClick={this.clicked}>x</a>;
}, this);
// but not consistent, aliasing this or sending react way or passing a bind probably best
