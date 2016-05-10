import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('store')
  },

  setupController: function(controller, model) {
    this._super(controller, model)

    controller.set('title', 'Create a new store')
    controller.set('buttonLabel', 'Create');
    controller.set('buttonAction', 'saveStore');
    controller.set('contactPage', true);
  },

  renderTemplate() {
    this.render('stores/form')
  }, 

  actions: {
    saveStore(newStore) {
      newStore.save().then(() => this.transitionTo('stores'))
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes()
    }
  }
})