import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveContact(newContact) {
      newLibrary.save().then(() => this.transitionTo('contacts'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  },
  validations: {
    email: {
      presence: true,
      emai;: true
    },
    message: {
      presence: true,
      length: {
        minimum: 5
      }
    },
  }
});