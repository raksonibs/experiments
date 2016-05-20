import Ember from 'ember';

export default Ember.Controller.extend({
  placeName: '',
  searchName: '',
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

    searchEvent() {
      const searchPlace = this.get('searchName');
      let emberCont = this

      this.store.query('place', { name: searchPlace }).then(function(places) {
        console.log(searchPlace)
        console.log(places)
        emberCont.set('model', places)
      })

      
    },

    editPlace(place) {
      place.set('isEditing', true)
    },

    destroyPlace(place) {
      place.destroyRecord()

    },
  }
});
