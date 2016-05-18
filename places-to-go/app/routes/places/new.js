import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('place');
  },

  actions: {
    savePlace() {
      const name = this.get('name');

      const newPlace = this.store.createRecord('place', {
        name: name
      });

      newPlace.save().then((response) => {
        this.set('flashMessage', `Thank you! We saved your place with the following id: ${response.get('id')}`);
        this.set('placeName', '');
      });
    }, 

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});