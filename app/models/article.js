import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  title: DS.attr(),
  image: DS.attr(),
  content: DS.attr()
});
