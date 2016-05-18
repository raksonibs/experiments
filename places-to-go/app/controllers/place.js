import Ember from 'ember';

export default Ember.Controller.extend({
  placeName: '',
  flashMessage: '',
  isValid: Ember.computed.not.empty,

  actions: {
    savePlace(newPlace) {
      const name = this.get('placeName');

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
