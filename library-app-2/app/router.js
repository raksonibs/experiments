import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact', function() {
    this.route('new');
    this.route('edit', { path: '/:contact_id/edit' });
  });

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
    this.route('seeder');
  });

  this.route('libraries', function() {
    this.route('new');
    this.route('edit', { path: '/:library_id/edit' });
  });

  this.route('stores', function() {
    this.route('new');
    this.route('edit', { path: '/:store_id/edit' });
  });
});

export default Router;
