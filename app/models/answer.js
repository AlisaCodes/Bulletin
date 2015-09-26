import DS from 'ember-data';

export default DS.Model.extend({
  answerer: DS.attr(),
  response: DS.attr()

});
