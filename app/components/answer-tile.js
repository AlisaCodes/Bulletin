import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer() {
      var params = {
        question: this.get('question'),
        answerer: this.get('answerer'),
        response: this.get('response'),
      };
      this.sendAction('addAnswer', params)
    }
  }
});
