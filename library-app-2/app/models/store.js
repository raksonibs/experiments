import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  location: attr('string'),
  name: attr('string'),
  isValid: Ember.computed.notEmpty('name')
});
