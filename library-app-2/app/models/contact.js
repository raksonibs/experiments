import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  message: attr('string'),
  email: attr('string')
});
