import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships'
import Ember from 'ember';

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  phone: attr('string'),
  books: hasMany('books'),
  isValid: Ember.computed.notEmpty('name')
});
