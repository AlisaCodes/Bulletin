import DS from 'ember-data';

export default DS.Model.extend({
  questioner: DS.attr(),
  query: DS.attr(),
  note: DS.attr()
});
