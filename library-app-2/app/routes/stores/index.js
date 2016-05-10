import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('store');
  },

  actions:  {
    deleteStore(store) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        store.destroyRecord();
      }
    }
  }

});