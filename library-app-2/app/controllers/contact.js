import Ember from 'ember';

export default Ember.Controller.extend({
  textMessage: '',
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  longEnough: Ember.computed('textMessage', function() {
    return this.get('textMessage').length >= 5;
  }),
  isNotDisabled: !(Ember.computed.and('isValid', 'LongEnough')),
  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),
  emailAddressChanged: Ember.observer('emailAddress', function() { 
    console.log('observer is called', this.get('emailAddress')); 
    console.log('observer is called', this.get('textMessage')); 
    console.log('observer is called', this.get('isValid')); 
    console.log('observer is called', this.get('longEnough')); 
  }),
  actions: {
    sendMessage: function() {
      const email = this.get('emailAddress');
      const message = this.get('textMessage');
      const newContact = this.store.createRecord('contact', {
        message: message,
        email: email
      })

      newContact.save().then(() => {        
        alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
        this.set('textMessage', '');
      })
    }
  }
});
