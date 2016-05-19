import Ember from 'ember';

export default Ember.Controller.extend({
  placeName: '',
  flashMessage: '',
  isValid: Ember.computed.not.empty,
  model: Ember.computed('model', function() {
    let places = this.store.findAll('place');
    return places;
  }),

  actions: {
    savePlace(place) {
      if (place) {
        place.set('isEditing', false);
        place.save().then((response) => {
          this.set('flashMessage', `Thank you! We saved your place with the following id: ${response.get('id')}`)
          this.set('placeName', '');
        })
      } else {
        const name = this.get('placeName');

        const newPlace = this.store.createRecord('place', {
          name: name
        })

        newPlace.save().then((response) => {
          this.set('flashMessage', `Thank you! We saved your place with the following id: ${response.get('id')}`)
          this.set('placeName', '');
        })
      }
    },

    editPlace(place) {
      place.set('isEditing', true)
    },
  }
});
