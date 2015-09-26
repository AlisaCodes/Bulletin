import DS from 'ember-data';

export default DS.Model.extend({
  answers: DS.hasMany('answer', {async: true}),
  questioner: DS.attr(),
  query: DS.attr(),
  note: DS.attr()
});
