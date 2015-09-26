import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
     var params = {
       questioner: this.get('questioner'),
       query: this.get('query'),
       note: this.get('note'),
     };
     this.set('addNewQuestion', false),
     this.sendAction('save2', params);
    }
  }
});
