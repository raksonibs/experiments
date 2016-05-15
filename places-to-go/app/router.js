import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('places', function() {
    this.route('new');
    this.route('edit', { path: '/:place_id/edit' });
  });
});

export default Router;
