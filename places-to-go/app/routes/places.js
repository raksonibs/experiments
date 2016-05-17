import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('place')
  },

  actions: {
    savePlace(place) {
      // if (!place.get('isValid')) {
      //   return;
      // }
       
       // place.save();

      const name = this.get('name');
      debugger
      const newPlace = this.store.createRecord('place', {
        name: name
      })

      newPlace.save().then((response) => {
        this.set('flashMessage', `Thank you! We saved your place with the following id: ${response.get('id')}`)
        this.set('placeName', '');
      })
    } 
  }
});
