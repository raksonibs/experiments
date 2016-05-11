import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // allows you to wrap multiple promises and return a strucutred hash
    return Ember.RSVP.hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    })
  }, 

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
  }

  // ember route hook

  // init() {
  // },

  // beforeModel(transition) {
  // },

  // model(params, transition) {
  // },

  // afterModel(model, transition) {
  // },

  // activate() {
  // },

  // setupController(controller, model) {
  // },

  // renderTemplate(controller, model) {
  // }
});
