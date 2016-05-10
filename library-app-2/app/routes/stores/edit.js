import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('store', params.store_id)
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
      let model = this.controller.get('model')

      if (confirmation) {
        model.rollbackAttributes()
      } else {
        transition.abort()
      }
    }
  }
})